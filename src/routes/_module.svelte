<script lang="ts">
  import Menu from "$components/Menu.svelte";
  import Menu2 from "$components/Menu2.svelte";
  import Menu3 from "$components/Menu3.svelte";
</script>

<ion-app>
  <ion-split-pane content-id="main">
    <Menu3 />
    <div class="ion-page" id="main">
      <slot />
    </div>
  </ion-split-pane>
</ion-app>
