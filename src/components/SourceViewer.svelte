<script lang="ts">
  import { modalController, toastController } from "$ionic/svelte";
  import { close } from "ionicons/icons";

  export let name = "/";
  let REPLlink;

  let APIlink;
  let codeLanguage = "svelte";
  let sources = {};
  let languages = ["svelte"];
  languages.forEach((lang) => {
    sources[lang] = "Loading " + lang + "....";
  });
  let sourceCode = sources[codeLanguage];

  // generate the name to source file
  name = name.charAt(0).toUpperCase() + name.slice(1);
  if (name.length == 0) {
    name = "Splash";
  }
  if (name.toLowerCase().includes("tabs")) {
    name = "tabs";
  }

  let apiName = name.toLowerCase();

  // do a mapping for some exceptions
  apiName = apiName.replace("/", "");
  fetch("/assets/json/api-mappings.json")
    .then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          let url = "https://ionicframework.com/docs/api/";
          if (json[apiName]) {
            url += json[apiName];
            // if we found an exception - we replace
            if (json[apiName].toLowerCase().substring(0, 4) == "http") {
              url = json[apiName];
            }
          } else {
            url += apiName;
          }
          APIlink = url;
        });
      }
    })

    .catch((error) => {
      console.error("Error HTTP", error);
    });

  // we use a separate way to load the svelte source
  // hack the name for tabs
  if (name == "tabs") {
    name = "tabs/[tab]";
  }
  fetch(`/assets/src/components/${name}.svelte`).then((response) => {
    response
      .text()
      .then((txt) => {
        if (txt.search("<!DOCTYPE html>") > -1) {
          sources["svelte"] = `No svelte file found for ${name}.`;
        } else {
          sources["svelte"] = txt;
          sourceCode = sources[codeLanguage];
        }
      })
      .catch((err) => {
        console.log(`Could not resolve source for ${name} due to error`, err);
      });
  });

  fetch("/assets/json/repls.json").then((response) => {
    response.json().then((json) => {
      const url = json[name.toLowerCase()];
      if (url) {
        REPLlink = url;
      } else {
        REPLlink = undefined;
      }
    });
  });

  const closeOverlay = () => {
    modalController.dismiss();
  };

  // somehow does not fly on iOS?
  const copySource = async () => {
    if (navigator && navigator.clipboard)
      navigator.clipboard
        .writeText(sourceCode)
        .then(async () => {
          const toast = await toastController.create({
            color: "dark",
            duration: 2000,
            message: "Copied...",
          });
          await toast.present();
        })
        .catch(async (message) => {
          const toast = await toastController.create({
            color: "danger",
            duration: 2000,
            message,
          });
          await toast.present();
        });

    setTimeout(closeOverlay, 1000);
  };
</script>

<svelte:head>
  <title>Sourceviewer {name}</title>
</svelte:head>
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="end">
      {#if REPLlink}
        <ion-button
          on:click={() => {
            if (REPLlink.length > 1) {
              window.open(REPLlink, "_blank");
            }
          }}
        >
          REPL
        </ion-button>
      {/if}
      <ion-button
        on:click={() => {
          window.open(APIlink, "_blank");
        }}
      >
        API
      </ion-button>

      {#if sourceCode.length > 5}
        <ion-button on:click={copySource}>COPY</ion-button>
      {/if}
      <ion-button on:click={closeOverlay}>
        <ion-icon icon={close} />
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content scroll-x="true" style="--padding-start: 15px;--padding-end: 15px;" fullscreen>
  <pre
    style="-webkit-user-select: text; /* Chrome 49+ */
  -moz-user-select: text; /* Firefox 43+ */
  -ms-user-select: text; /* No support yet */
  user-select: text; /* Likely future */">{sourceCode}</pre>
</ion-content>

<style>
  pre {
    -webkit-user-select: all; /* Chrome 49+ */
    -moz-user-select: all; /* Firefox 43+ */
    -ms-user-select: all; /* No support yet */
    user-select: all; /* Likely future */
  }
</style>
