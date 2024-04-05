<script lang="ts">
  // @ts-ignore
  import { Image } from "@unpic/svelte";
  import { urlFor } from "@lib/utils/image";
  import { fetchList } from "@lib/stores/fetchData";
  import { onMount, onDestroy } from "svelte";
  const category = "art";

  // console.log(`Post Data for art Cards`, post);
  let modalImageUrl: string = "";
  let modalAltText: string = "";
  let modalOpen = false;

  function openModal(imageUrl: string, altText: string, slug: string) {
    modalImageUrl = imageUrl;
    modalAltText = altText;
    modalOpen = true;

    const modalParams = new URLSearchParams();
    modalParams.set("imageUrl", imageUrl);
    modalParams.set("altText", altText);
    modalParams.set("slug", slug);
    history.pushState(
      { showModal: true, modalParams: modalParams.toString() },
      "",
      `/projects/${category}/#${slug}`,
    );
  }

  function closeModal() {
    modalOpen = false;
    modalImageUrl = null;
    modalAltText = null;
    history.pushState({ showModal: false }, "", `/projects/${category}`);
  }
  function handleKeyDown(event: KeyboardEvent) {
    if (modalOpen === true && event.key === "Escape") {
      closeModal();
      modalOpen = false;
    }
  }
  let posts: any = [];
  onMount(async () => {
    const data = await fetchList(category);
    posts = data.posts;
    const slug = window.location.hash.substring(1); // Get the slug from the URL hashtag
    if (slug) {
      const post = posts.find((p: any) => p.slug === slug); // Find the post with matching slug
      if (post) {
        openModal(
          urlFor(post.mainImage).width(800).url(),
          post.mainImage.alt,
          post.slug,
        );
      }
    }
    window.addEventListener("keydown", handleKeyDown);
  });
  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("keydown", handleKeyDown);
    }
  });
</script>

{#each posts as post}
  <li
    class="art-card flex-[1_1_20%] self-start w-full rounded-lg transition-all hover:scale-[102%] transition-transform ease motion-reduce:transition-none motion-reduce:hover:transform-none"
  >
    <!-- <a href="/projects/{category}/{post.slug}"> -->
    <a
      href="#{post.slug}"
      data-no-swup
      on:click|preventDefault={() =>
        openModal(
          urlFor(post.mainImage).width(800).url(),
          post.mainImage.alt,
          post.slug,
        )}
    >
      <figure
        class="min-w-[15rem] max-h-[25rem] h-full w-full border-2 border-darkBorder rounded-md overflow-hidden"
      >
        <Image
          class="h-full w-full object-fill object-center "
          src={urlFor(post.mainImage).width(800).height(720).url()}
          aspectRatio={16 / 9}
          width={1280}
          priority={true}
          decoding="async"
          background="auto"
          alt={post.mainImage.alt}
        />
      </figure>
    </a>
  </li>
{/each}
<!-- MODAL -->
<div
  class="modal {modalOpen ? 'isLoaded' : ''}"
  on:click={closeModal}
  aria-hidden="true"
>
  <button
    class="close major-button absolute h-10 w-10 shadow z-[4000] top-0 right-50"
    title="Close"
    on:click={closeModal}
    aria-label="Close">&times;</button
  >
  <div id="modal-image" class="max-h-full mx-auto">
    <img
      class="p-3 {modalOpen ? 'isLoaded' : ''} max-h-full"
      src={modalImageUrl}
      alt={modalAltText}
    />
  </div>
</div>

<style>
  .modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    user-select: none;
    touch-action: pan-x pinch-zoom;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.9);
    transition:
      opacity 0.2s ease,
      visibility 0.5s,
      z-index 0.5s;
  }
  .isLoaded {
    pointer-events: auto;
    opacity: 1;
    visibility: visible;
    z-index: 4000;
  }
  #modal-image img {
    transform: scale(0.97);
    transition: transform 0.5s ease;
  }
  #modal-image img.isLoaded {
    transform: scale(1);
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
