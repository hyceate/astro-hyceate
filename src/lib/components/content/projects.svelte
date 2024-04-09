<script lang="ts">
  export let category: any;
  import { categoryStore } from "@lib/stores/fetchData.ts";
  import { urlFor } from "@lib/utils/image";
  import { Image } from "@unpic/svelte";
  interface Category {
    _id: string;
    title: string;
    description: string;
    slug: string;
    mainImage: any;
  }
  let categories: Category[] = [];
  $: {
    categories = $categoryStore;
  }
</script>

<li class="project-cards flex flex-col justify-center w-full">
  <!-- {#each categories as category} -->
  <a
    class="flex mb-2 last:mb-0 min-h-[15rem] hover:text-rose-900 border-2 border-darkBorder rounded-lg w-full m-15 overflow-hidden relative transition-all"
    href="/projects/{category.slug}"
  >
    <figure class="h-full w-full absolute left-0 rounded-lg">
      <!-- <slot name="image" /> -->
      <Image
        class="w-full h-full rounded-lg object-fill object-center"
        loading="lazy"
        decoding="async"
        layout="fullWidth"
        aspectRatio={16 / 9}
        background="auto"
        src={urlFor(category.mainImage).width(1280).height(720).url()}
        alt={category?.mainImage.alt}
      />
    </figure>
    <div
      class="w-full h-full absolute left-0 top-0 bg-rose-100/80 hover:bg-rose-200/80 transition-all"
    ></div>
    <h1
      class="text-7xl text-center font-medium lowercase tracking-wide absolute top-[50%] -translate-x-1/2 -translate-y-1/2 left-[50%] p-[2rem]"
    >
      {category.title}
    </h1>
  </a>
  <!-- {/each} -->
</li>
