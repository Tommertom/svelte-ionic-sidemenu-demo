<script lang="ts">
  import { scale } from "svelte/transition";
  import { elasticInOut } from "svelte/easing";

  import { goto } from "@roxi/routify";

  import { onMount } from "svelte";

  onMount(() => {
    let splitpane;
    splitpane = document.querySelector("ion-split-pane");
    splitpane.disabled = true;

    setTimeout(() => {
      splitpane.disabled = false;
      navigate("/components/Slides");
    }, 4000);
  });

  function navigate(url) {
    console.log("Navigate url", url);
    $goto(url);
  }
</script>

<!-- routify:meta draft=true -->
<ion-content>
  <br />
  <br />
  <br />
  <br />

  <div class="ion-text-center">
    <img
      src="/assets/img/great-success.png"
      alt="Great success"
      in:scale={{ duration: 1900, easing: elasticInOut }}
    />

    <div in:scale={{ delay: 400, duration: 1900, easing: elasticInOut }}>Great success!</div>
  </div>
</ion-content>

<style>
  img {
    width: 60%;
  }
</style>
