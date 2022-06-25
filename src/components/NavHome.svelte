<script lang="ts">
  import * as allIonicIcons from "ionicons/icons";
  import NavDetail from "./NavDetail.svelte";
  import SourceButton from "$components/SourceButton.svelte";
  import { Tech, techs } from "$services/techs";
  import type { SvelteComponent } from "svelte";

  export let ionNav: HTMLIonNavElement;

  const createHTMLCompFromSvelte = (
    component: new (...args: any) => SvelteComponent,
    componentProps: {}
  ) => {
    const divWrapper = document.createElement("div");
    const contentID = "id" + Date.now();
    divWrapper.id = contentID;

    let navContent = document.createElement("div");

    divWrapper.appendChild(navContent);
    document.body.appendChild(divWrapper);

    const props = {
      ...componentProps,
      ionNav,
    };

    const svelteComponent = new component({
      target: navContent,
      props,
    });

    return divWrapper;
  };

  const showDetail = (tech: Tech) => {
    ionNav.push(createHTMLCompFromSvelte(NavDetail, { tech }));
  };
</script>

<svelte:head>
  <title>Ionic Companion - Nav</title>
</svelte:head>

<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-buttons slot="end">
      <SourceButton name="Nav" />
    </ion-buttons>
    <ion-title>Nav element</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">
  <ion-list>
    {#each techs as tech}
      <ion-item
        button
        on:click={() => {
          showDetail(tech);
        }}
      >
        <ion-icon icon={allIonicIcons[tech.icon]} style="color: {tech.color};" />
        <ion-label>
          <h3>{tech.title}</h3>
        </ion-label>
      </ion-item>
    {/each}
  </ion-list>
</ion-content>
