<script lang="ts">
  import { Image } from "@unpic/svelte";
  import { fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import { showModal } from "@lib/stores/stores";
  export let imageUrl: string;
  export let altText: string;

  const dispatch = createEventDispatcher();

  function closeModal() {
    showModal.set(false);
    dispatch("close");
  }
</script>

<div
  class="modal {$showModal ? 'isLoaded' : ''}"
  on:click={closeModal}
  aria-hidden="true"
>
  <button
    class="close major-button absolute h-10 w-10 shadow z-20 top-0 right-50"
    title="Close"
    on:click={closeModal}
    aria-label="Close">&times;</button
  >
  {#if $showModal}
    <div class="h-full" transition:fly={{ y: 20 }}>
      <Image
        class="p-5 h-full !object-contain"
        layout="constrained"
        src={imageUrl}
        alt={altText}
      />
    </div>
  {/if}
</div>

<style>
  /* Style for the modal */
  .modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.9);
    transition:
      opacity 0.5s ease,
      visibility 0.5s,
      z-index 0.5s;
  }
  .isLoaded {
    opacity: 1;
    visibility: visible;
    z-index: 9999;
  }
  /* Style for the close button */
  .close {
    color: #d83c3c;
    float: right;
    font-size: 3rem;
    font-weight: bold;
    cursor: pointer;
    line-height: 0;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>
