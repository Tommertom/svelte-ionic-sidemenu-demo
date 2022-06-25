<svelte:head>
  <title>Ionic Companion - Tabs Explain</title>
</svelte:head>

<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Explanation</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">
  <h1>Explanation of TABS</h1>
  <p>So, ionic tabs are working fairly ok.</p>
  <p>
    There are now two issues: you have to use IonTabs component to render tab interface. This seems
    doable, but not according to Ionic docs.
  </p>
  <p>
    Second issue is that the selected-tab property does not yield results, nor the method to call
    the specific default button
  </p>
</ion-content>
