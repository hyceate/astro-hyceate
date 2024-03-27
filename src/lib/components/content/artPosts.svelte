<script lang="ts">
  import { Image } from "@unpic/svelte";
  import { urlFor } from "@lib/utils/image";
  import { showModal } from "@lib/stores/stores";
  import { onMount } from "svelte";
  import ArtModal from "@components/content/art-modal.svelte";
  export let posts: any;
  export let category: string;
  // console.log(`Post Data for art Cards`, post);
  let modalImageUrl: string = "";
  let modalAltText: string = "";

  function openModal(imageUrl: string, altText: string, slug: string) {
    modalImageUrl = imageUrl;
    modalAltText = altText;
    showModal.set(true);
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
    history.pushState({ showModal: false }, "", `/projects/${category}`);
  }
  onMount(() => {
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
  });
</script>

{#each posts as post}
  <li
    class="art-card mb-2 mr-2 flex-[1_0_30%] w-full justify-center items-center rounded-lg transition-all hover:scale-[105%] transition-transform ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none"
  >
    <!-- <a class="modal-link" href="/projects/{category}/{post.slug}"> -->
    <!-- A11y: '' is not a valid href attribute -->
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
      {#if post.mainImage}
        <figure
          class="min-w-[15rem] max-h-[25rem] h-full w-full border-2 border-darkBorder rounded-md overflow-hidden"
        >
          <Image
            class="h-full w-full object-fill object-center "
            src={urlFor(post.mainImage).width(800).height(720).url()}
            aspectRatio={16 / 9}
            loading="lazy"
            decoding="async"
            background="auto"
            alt={post.mainImage.alt}
          />
        </figure>
        <!-- <slot name="image" /> -->
      {/if}
    </a>
  </li>
{/each}

<ArtModal
  imageUrl={modalImageUrl}
  altText={modalAltText}
  on:close={closeModal}
/>
