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
  let modalImgLoading = true;
  let imgReady = false;
  function setImgReady() {
    imgReady = true;
  }
  function setModalImageLoad() {
    modalImgLoading = false;
  }
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
    setTimeout(() => {
      modalImgLoading = true;
    }, 100);
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
    if (!imgReady) {
      document.getElementById("artloader").style.display = "none";
    } else {
      document.getElementById("artloader").style.display = "block";
    }
    window.addEventListener("keydown", handleKeyDown);
  });
  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("keydown", handleKeyDown);
    }
  });
</script>

<div id="artloader" class="artloader"></div>
<ul id="artlist" class="flex flex-wrap max-w-6xl gap-2 justify-normal">
  {#each posts as post}
    <li
      class="art-card flex-[1_1_25%] self-start w-full rounded-lg transition-all hover:scale-[102%] transition-transform ease motion-reduce:transition-none motion-reduce:hover:transform-none"
    >
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
          class="flex items-center min-w-[15rem] max-h-[25rem] h-full w-full border-2 border-darkBorder rounded-md overflow-hidden min-h-[10rem]"
        >
          <Image
            class="h-full w-full object-fill object-center min-h-[10rem]"
            src={urlFor(post.mainImage).width(800).height(720).url()}
            aspectRatio={16 / 9}
            width={1280}
            priority={true}
            background="auto"
            alt={post.mainImage.alt}
            on:load={setImgReady}
          />
        </figure>
      </a>
    </li>
  {/each}
</ul>
<!-- MODAL -->
<div
  class="modal {modalOpen ? 'isLoaded' : ''}"
  on:click={closeModal}
  aria-hidden="true"
>
  <div
    id="modal-image"
    class="inline-flex justify-center relative max-h-full mx-auto center"
  >
    <img
      class="p-3 {modalOpen ? 'isLoaded' : ''} max-w-full max-h-full"
      src={modalImageUrl}
      alt={modalAltText}
      on:load={setModalImageLoad}
    />
    <div
      class="imgLoader {!modalImgLoading && modalOpen ? 'hidden' : 'isLoaded'}"
    ></div>
    <div class="relative">
      <button
        class="close major-button h-9 w-9 shadow z-[4000] {modalOpen &&
        !modalImgLoading
          ? 'isLoaded'
          : ''}"
        title="Close"
        on:click={closeModal}
        aria-label="Close">&times;</button
      >
    </div>
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

  #modal-image {
    contain: layout;
  }
  #modal-image img {
    will-change: transform;
    transform: scale(0.97);
    transition: transform 0.5s ease;
  }
  #modal-image img.isLoaded {
    transform: scale(1);
  }
  .close {
    position: absolute;
    top: 0;
    right: 0;
    color: #d83c3c;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    line-height: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease;
  }
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  .imgLoader {
    opacity: 0;
    visibility: hidden;
    width: 70px;
    height: 35px;
    margin-inline: auto;
    position: absolute;
    overflow: hidden;
    transition: opacity 0.5s ease;
  }
  .imgLoader.isLoaded {
    transition: opacity 0.5s ease 0.9s;
  }
  .imgLoader:before {
    content: "";
    width: 70px;
    height: 70px;
    position: absolute;
    left: 0;
    top: 0;
    border: 5px solid #0000;
    border-color: #db7471 #db7471 #0000 #0000;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotate 3s ease-in-out infinite;
    transform: rotate(-200deg);
  }
  .isLoaded {
    pointer-events: auto;
    opacity: 1;
    visibility: visible;
    z-index: 4000;
  }
  @keyframes rotate {
    0% {
      border-width: 10px;
    }

    25% {
      border-width: 3px;
    }

    50% {
      transform: rotate(115deg);
      border-width: 10px;
    }

    75% {
      border-width: 3px;
    }

    100% {
      border-width: 10px;
    }
  }
  .artloader {
    width: 100%;
    max-width: 300px;
    aspect-ratio: 1/1;
    position: relative;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
  }

  .artloader:before {
    content: "";
    position: absolute;
    left: 10%;
    bottom: 0;
    width: 100%;
    height: 100%;
    transform: rotate(45deg) translate(30%, 40%);
    background: #db7471;
    box-shadow: 32px -66px 0 5px #e74e49;
    animation: slide 2s infinite ease-in-out alternate;
  }

  .artloader:after {
    content: "";
    position: absolute;
    left: 10px;
    top: 10px;
    width: 100%;
    max-width: 20%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: #e74e49;
    transform: rotate(0deg);
    transform-origin: 35px 2045px;
    animation: rotate 2s infinite ease-in-out;
  }

  @keyframes slide {
    0%,
    100% {
      bottom: -455px;
    }

    25%,
    75% {
      bottom: -12px;
    }

    20%,
    80% {
      bottom: 12px;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(-15deg);
    }

    25%,
    75% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(25deg);
    }
  }
</style>
