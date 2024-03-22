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

<!-- A11y: visible, non-interactive elements with an on:click event must be accompanied by a keyboard event handler. -->
<div
  class="modal flex justify-center items-center"
  style="display: {showModal ? 'flex' : 'none'}"
  on:click={closeModal}
>
  <button class="close" on:click={closeModal}>&times;</button>
  <div
    class="modal-content fixed h-full p-5"
    on:click={(e) => e.stopPropagation()}
  >
    <figure class="w-full h-full">
      <img class="w-auto h-full" src={imageUrl} alt={altText} />
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
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>
