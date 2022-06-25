<script lang="ts">
  import IonPage from "$ionic/svelte/components/IonPage.svelte";
  import SourceButton from "$components/SourceButton.svelte";

  import {
    onIonViewWillEnter as onIonViewWillEnterFn,
    onIonViewDidEnter as onIonViewDidEnterFn,
    onIonViewWillLeave as onIonViewWillLeaveFn,
    onIonViewDidLeave as onIonViewDidLeaveFn,
  } from "$ionic/svelte";

  const onIonViewWillEnter = () => {
    console.log("Page:onIonViewWillEnter");
  };

  const onIonViewDidEnter = () => {
    console.log("Page:onIonViewDidEnter");
  };

  const onIonViewWillLeave = () => {
    console.log("Page:onIonViewWillLeave");
  };

  const onIonViewDidLeave = () => {
    console.log("Page:onIonViewDidLeave");
  };

  const codeSnippet = `import {
    onIonViewWillEnter,
    onIonViewDidEnter,
    onIonViewWillLeave,
    onIonViewDidLeave,
  } from "$ionic/svelte";

  onIonViewWillEnter("/components/Page", () => {
    console.log("Page:the on-function as onIonViewWillEnter hook");
  });

  onIonViewDidEnter("/components/Page", () => {
    console.log("Page:the on-function as onIonViewDidEnter hook");
  });

  onIonViewWillLeave("/components/Page", () => {
    console.log("Page:the on-function as onIonViewWillLeave hook");
  });

  onIonViewDidLeave("/components/Page", () => {
    console.log("Page:the on-function as onIonViewDidLeave hook");
  });
  `;

  const ionPageSyntax = `...
  const ionViewWillEnter=
        ionViewDidEnter=
        ionViewWillLeave=
        ionViewDidLeave=console.log('We got an event!') 
  

  <IonPage route="/components/Page"
    {ionViewWillEnter}
    {ionViewDidEnter}
    {ionViewWillLeave}
    {ionViewDidLeave}>`;

  onIonViewWillEnterFn("/components/Page", () => {
    console.log("Page:the on-function as onIonViewWillEnter hook");
  });

  onIonViewDidEnterFn("/components/Page", () => {
    console.log("Page:the on-function as onIonViewDidEnter hook");
  });

  onIonViewWillLeaveFn("/components/Page", () => {
    console.log("Page:the on-function as onIonViewWillLeave hook");
  });

  onIonViewDidLeaveFn("/components/Page", () => {
    console.log("Page:the on-function as onIonViewDidLeave hook");
  });
</script>

<svelte:head>
  <title>Ionic Companion - Page</title>
</svelte:head>

<IonPage
  route="/components/Page"
  ionViewWillEnter={onIonViewWillEnter}
  ionViewDidEnter={onIonViewDidEnter}
  ionViewWillLeave={onIonViewWillLeave}
  ionViewDidLeave={onIonViewDidLeave}
>
  <ion-header translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button />
      </ion-buttons>
      <ion-buttons slot="end">
        <SourceButton name="Page" />
      </ion-buttons>
      <ion-title>Page</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content fullscreen>
    <ion-card>
      This intends to show the working of the IonPage component. This holds the lifecycle hooks:
      <br />
      <pre>
  ionViewWillEnter
  ionViewDidEnter
  ionViewWillLeave
  ionViewDidLeave
</pre>

      Syntax:
      <pre>
  {ionPageSyntax}
</pre>

      Unfortunately (for now) this IonPage implementation requires that your tell it its
      corresponding route, this to make sure the ionWillEnter event will fire. All other IonPage
      lifecycle events work using router hooks and/or svelte mount/destroy hooks.
      <br /><br />

      You can attach hooks using properties, or using similar syntax as onMount or onDestroy.

      <ion-card>
        <pre>
  {codeSnippet}
</pre>

        The first argument is the route, the second the hook to be called. Only one hook can be
        attached to one specific route.
      </ion-card>
    </ion-card>
  </ion-content>
</IonPage>
