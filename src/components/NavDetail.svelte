<script lang="ts">
  import type { Tech } from "$services/techs";
  import * as allIonicIcons from "ionicons/icons";
  export let tech: Tech;
  export let ionNav: HTMLIonNavElement;
  import { chevronBackOutline } from "ionicons/icons";

  const popNav = () => {
    ionNav.pop();
  };

  console.log("TEC", tech);
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start" on:click={popNav}>
      <ion-icon icon={chevronBackOutline} /> Back
    </ion-buttons>
    <ion-buttons slot="end">
      <ion-back-button text="Volver" defaultHref="/" color="danger" />
    </ion-buttons>
    <ion-title>{tech.title}</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content fullscreen class="ion-padding">
  <ion-icon icon={allIonicIcons[tech.icon]} style="color: {tech.color};" size="large" />
  <p>{tech.description}</p>
</ion-content>
