<script lang="ts">
  import { Image } from "@unpic/svelte";
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
  class="modal flex justify-center items-center relative"
  style="display: {showModal ? 'flex' : 'none'}"
  on:click={closeModal}
  aria-hidden="true"
>
  <button
    class="close major-button absolute h-10 w-10 shadow z-20 top-2 right-2"
    title="Close"
    on:click={closeModal}
    aria-label="Close">&times;</button
  >
  <div
    class="modal-content fixed h-full"
    on:click={(e) => e.stopPropagation()}
    aria-hidden="true"
  >
    <figure class="w-full h-full p-5">
      <img class="w-full h-full object-contain" src={imageUrl} alt={altText} />
    </figure>
  </div>
</div>

<style>
  /* Style for the modal */
  .modal {
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.9);
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
