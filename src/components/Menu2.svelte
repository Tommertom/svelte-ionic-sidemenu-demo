<script lang="ts">
  // import { fromFetch } from "rxjs/fetch";
  import { goto, node, url } from "@roxi/routify";
  import { getIonicMenu, height, menuController, width } from "$ionic/svelte";

  import * as allIonicIcons from "ionicons/icons";
  import { pwaBeforeInstallPrompt } from "$lib/pwa";

  let hideMenu = true; // a hack because the menu shows before the splash (in Chrome on Windows)

  export let side = "start";

  const getRandomColor = () => {
    const items = [
      "secondary",
      "primary",
      "danger",
      "warning",
      "dark",
      "medium",
      "success",
      "tertiary",
    ];
    return items[Math.floor(Math.random() * items.length)];
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let menuItems: Array<{ url: string; label: string; icon: any }> = $node
    .traverse("/components")
    .children.map((route) => {
      let url = route.path;

      //  console.log("Route", url, capitalizeFirstLetter(route.name));

      const label = capitalizeFirstLetter(route.name);
      if (label === "Tabs") url = "/components/tabs/[...tabs]";
      // console.log("Route", url, capitalizeFirstLetter(route.name));

      return {
        url,
        label,
        icon: allIonicIcons["home"],
      };
    });

  // Randomize the icons
  const icons = Object.keys(allIonicIcons);
  menuItems.map((menuItem) => {
    const iconForMenu = icons[Math.floor(Math.random() * icons.length)];
    menuItem.icon = allIonicIcons[iconForMenu];
  });
  menuItems = [...menuItems];

  const closeAndNavigate = (url) => {
    // url = "/components/tabs/blabla";
    console.log("Navigate url", url);

    // path.set(url);
    console.log("Test", url);
    $goto(url);

    getIonicMenu("mainmenu")
      .close(true)
      .then(() => {});
  };

  // hack because of visibility of menu in Chrome/Windows
  setTimeout(() => {
    hideMenu = false;
  }, 100);
</script>

<ion-menu {side} content-id="main" menu-id="mainmenu" class:menuhide={hideMenu}>
  {#if menuItems.length > 0}
    <ion-header>
      <ion-toolbar translucent="true">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        {#each menuItems as menuItem, i}
          <ion-item
            on:click={() => {
              closeAndNavigate(menuItem.url);
            }}
          >
            <ion-icon icon={menuItem.icon} slot="start" color={getRandomColor()} />
            <ion-label>{menuItem.label}</ion-label>
          </ion-item>
        {/each}

        <ion-item />

        {#if $pwaBeforeInstallPrompt}
          <ion-item
            on:click={() => {
              const prompt = $pwaBeforeInstallPrompt;
              prompt.prompt();
            }}
          >
            <ion-icon icon={allIonicIcons["download"]} slot="start" />
            <ion-label>Install this app as PWA</ion-label>
          </ion-item>
          <ion-item />
        {/if}

        <ion-item
          on:click={() => {
            window.open("https://github.com/Tommertom/svelte-ionic-app", "_blank");
          }}
        >
          <ion-icon icon={allIonicIcons["star"]} slot="start" />
          <ion-label>Go to GitHub for this app</ion-label>
        </ion-item>
        <ion-item
          on:click={() => {
            window.open(
              "https://forum.ionicframework.com/t/ionicsvelte-all-of-ionics-ui-in-one-svelte-app",
              "_blank"
            );
          }}
        >
          <ion-icon icon={allIonicIcons["star"]} slot="start" />
          <ion-label>Go to Ionic Forum</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  {/if}
</ion-menu>

<style>
  ion-item {
    cursor: pointer;
  }

  .menuhide {
    display: none;
  }
</style>
