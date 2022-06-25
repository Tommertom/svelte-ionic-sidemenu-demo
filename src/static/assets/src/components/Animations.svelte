<script lang="ts">
  import SourceButton from "$components/SourceButton.svelte";

  import { createAnimation } from "@ionic/core";
  import { onMount } from "svelte";

  let squareA, squareB, squareC;
  let animation;

  onMount(() => {
    const squareAanimation = createAnimation()
      .addElement(squareA)
      .keyframes([
        { offset: 0, transform: "scale(1) rotate(0)" },
        { offset: 0.5, transform: "scale(1.2) rotate(45deg)" },
        { offset: 1, transform: "scale(1) rotate(0) " },
      ]);

    const squareBanimation = createAnimation()
      .addElement(squareB)
      .keyframes([
        { offset: 0, transform: "scale(1)", opacity: "1" },
        { offset: 0.5, transform: "scale(1.2)", opacity: "0.3" },
        { offset: 1, transform: "scale(1)", opacity: "1" },
      ]);

    const squareCanimation = createAnimation()
      .addElement(squareC)
      .duration(5000)
      .keyframes([
        { offset: 0, transform: "scale(1)", opacity: "0.5" },
        { offset: 0.5, transform: "scale(0.8)", opacity: "1" },
        { offset: 1, transform: "scale(1)", opacity: "0.5" },
      ]);

    animation = createAnimation()
      .duration(2000)
      .iterations(Infinity)
      .addAnimation([squareAanimation, squareBanimation, squareCanimation]);
  });

  const play = () => {
    animation.play();
  };

  const pause = () => {
    animation.pause();
  };

  const stop = () => {
    animation.stop();
  };
</script>

<svelte:head>
  <title>Ionic Companion - Animations</title>
</svelte:head>
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-buttons slot="end">
      <SourceButton name="Animations" />
    </ion-buttons>
    <ion-title>Animations</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">
  <div class="square" bind:this={squareA} />
  <div class="square" bind:this={squareB} />
  <div class="square" bind:this={squareC} />

  <ion-button on:click={play}>Play</ion-button>
  <ion-button on:click={pause}>Pause</ion-button>
  <ion-button on:click={stop}>Stop</ion-button>
</ion-content>

<style>
  .square {
    width: 100px;
    height: 100px;
    background: rgba(0, 0, 255, 0.5);
    margin: 10px;
  }
</style>
