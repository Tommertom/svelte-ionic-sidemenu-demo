<script lang="ts">
  // import { fromFetch } from "rxjs/fetch";
  import { goto } from "@roxi/routify";
  import { menuController, registerMenu } from "$ionic/svelte";
  import {
    bookmarkOutline,
    paperPlane,
    heart,
    mail,
    archive,
    trash,
    warning,
  } from "ionicons/icons";
  import { onMount } from "svelte";

  const appPages = [
    { title: "Inbox", url: "Inbox", icon: mail },
    { title: "Outbox", url: "Outbox", icon: paperPlane },
    { title: "Favorites", url: "Favorites", icon: heart },
    { title: "Archived", url: "Archived", icon: archive },
    { title: "Trash", url: "Trash", icon: trash },
    { title: "Spam", url: "Spam", icon: warning },
  ];
  const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

  const goMenuItem = (page) => {
    $goto("/folder/[folder]", { folder: page.url });
    menuController.close("mainmenu");
  };

  onMount(() => {
    registerMenu("mainmenu");
  });
</script>

<ion-menu content-id="main" menu-id="mainmenu">
  <ion-content class="ion-padding">
    <ion-list id="inbox-list">
      <ion-list-header>Inbox</ion-list-header>
      <ion-note>hi@ionicframework.com</ion-note>
      {#each appPages as p, i}
        <ion-menu-toggle auto-hide="false">
          <ion-item
            routerDirection="root"
            on:click={() => {
              goMenuItem(p);
            }}
            lines="none"
            detail="false"
          >
            <ion-icon slot="start" icon={p.icon} />
            <ion-label>{p.title}</ion-label>
          </ion-item>
        </ion-menu-toggle>
      {/each}
    </ion-list>

    <ion-list id="labels-list">
      <ion-list-header>Labels</ion-list-header>
      {#each labels as label}
        <ion-item lines="none">
          <ion-icon slot="start" icon={bookmarkOutline} />
          <ion-label>{label}</ion-label>
        </ion-item>
      {/each}
    </ion-list>
  </ion-content>
</ion-menu>

<style>
  ion-menu ion-content {
    --background: var(--ion-item-background, var(--ion-background-color, #fff));
  }

  ion-menu.md ion-content {
    --padding-start: 8px;
    --padding-end: 8px;
    --padding-top: 20px;
    --padding-bottom: 20px;
  }

  ion-menu.md ion-list {
    padding: 20px 0;
  }

  ion-menu.md ion-note {
    margin-bottom: 30px;
  }

  ion-menu.md ion-list-header,
  ion-menu.md ion-note {
    padding-left: 10px;
  }

  ion-menu.md ion-list#inbox-list {
    border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
  }

  ion-menu.md ion-list#inbox-list ion-list-header {
    font-size: 22px;
    font-weight: 600;

    min-height: 20px;
  }

  ion-menu.md ion-list#labels-list ion-list-header {
    font-size: 16px;

    margin-bottom: 18px;

    color: #757575;

    min-height: 26px;
  }

  ion-menu.md ion-item {
    --padding-start: 10px;
    --padding-end: 10px;
    border-radius: 4px;
  }

  ion-menu.md ion-item.selected {
    --background: rgba(var(--ion-color-primary-rgb), 0.14);
  }

  ion-menu.md ion-item.selected ion-icon {
    color: var(--ion-color-primary);
  }

  ion-menu.md ion-item ion-icon {
    color: #616e7e;
  }

  ion-menu.md ion-item ion-label {
    font-weight: 500;
  }

  ion-menu.ios ion-content {
    --padding-bottom: 20px;
  }

  ion-menu.ios ion-list {
    padding: 20px 0 0 0;
  }

  ion-menu.ios ion-note {
    line-height: 24px;
    margin-bottom: 20px;
  }

  ion-menu.ios ion-item {
    --padding-start: 16px;
    --padding-end: 16px;
    --min-height: 50px;
  }

  ion-menu.ios ion-item.selected ion-icon {
    color: var(--ion-color-primary);
  }

  ion-menu.ios ion-item ion-icon {
    font-size: 24px;
    color: #73849a;
  }

  ion-menu.ios ion-list#labels-list ion-list-header {
    margin-bottom: 8px;
  }

  ion-menu.ios ion-list-header,
  ion-menu.ios ion-note {
    padding-left: 16px;
    padding-right: 16px;
  }

  ion-menu.ios ion-note {
    margin-bottom: 8px;
  }

  ion-note {
    display: inline-block;
    font-size: 16px;

    color: var(--ion-color-medium-shade);
  }

  ion-item.selected {
    --color: var(--ion-color-primary);
  }
</style>
