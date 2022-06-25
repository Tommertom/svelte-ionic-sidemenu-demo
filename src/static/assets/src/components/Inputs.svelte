<script lang="ts">
  import SourceButton from "$components/SourceButton.svelte";

  let controller;
  let firstName, lastName;

  function processForm(event) {
    console.log("Processing form", event);
    // event.preventDefault();
    controller
      .create({
        header: "Account Created",
        message: `Created account for: <b>${firstName} ${lastName}</b>`,
        buttons: [
          {
            text: "OK",
          },
        ],
      })
      .then((alert) => alert.present());
  }
  function handleFirstNameValue(event) {
    firstName = event.target.value;
  }
  function handleLastNameValue(event) {
    lastName = event.target.value;
  }

  const changeValue = (event) => {
    console.log("Change of value", event.detail);
  };
</script>

<svelte:head>
  <title>Ionic Companion - Inputs</title>
</svelte:head>

<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-buttons slot="end">
      <SourceButton name="Inputs" />
    </ion-buttons>
    <ion-title>Create Account</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen>
  <form>
    <ion-list lines="full" class="ion-no-margin ion-no-padding">
      <ion-item>
        <ion-label position="stacked">
          First Name
          <ion-text color="danger">*</ion-text>
        </ion-label>
        <ion-input on:ionChange={handleFirstNameValue} required type="text" />
      </ion-item>

      <ion-item>
        <ion-label position="stacked">
          Last Name
          <ion-text color="danger">*</ion-text>
        </ion-label>
        <ion-input on:ionChange={handleLastNameValue} required type="text" />
      </ion-item>

      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input on:ionChange={changeValue} />
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Address</ion-label>
        <ion-input placeholder="Address Line 1" on:ionChange={changeValue} />
        <ion-input placeholder="Address Line 2" on:ionChange={changeValue} />
        <ion-input placeholder="City" on:ionChange={changeValue} />
        <ion-input placeholder="State" on:ionChange={changeValue} />
        <ion-input placeholder="Zip Code" on:ionChange={changeValue} />
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Notes</ion-label>
        <ion-textarea on:ionChange={changeValue} />
      </ion-item>
    </ion-list>

    <div class="ion-padding">
      <ion-button expand="block" on:click={processForm} class="ion-no-margin">
        Create account
      </ion-button>
    </div>
  </form>
</ion-content>
<ion-alert-controller bind:this={controller} />
