<script lang="ts">
  export let category: any;
  // import { categoryStore } from "@lib/stores/fetchData.ts";
  // import { urlFor } from "@lib/utils/image";
  // import { Image } from "astro:assets";
  // interface Category {
  //   _id: string;
  //   title: string;
  //   description: string;
  //   slug: string;
  //   mainImage: any;
  // }
  // let categories: Category[] = [];
  // $: {
  //   categories = $categoryStore;
  //   // console.log(categories);
  // }
</script>

<!-- 
<hgroup class="flex justify-center flex-col items-center mt-10 mb-20">
  <h1 class="text-6xl mb-9 font-medium">Projects</h1>
  <h2>Projects consist of personal and commercial purposes.</h2>
</hgroup> -->

<div class="flex flex-col justify-center w-full">
  <!-- {#each categories as category} -->
  <a
    class="flex mb-2 last:mb-0 min-h-[15rem] hover:text-rose-900 transition-all"
    href="/projects/{category.slug}"
  >
    <button
      tabindex="-1"
      class="border-2 border-darkBorder rounded-lg w-full m-15 overflow-hidden relative transition-all"
    >
      <figure class="absolute left-0 -top-36 rounded-lg">
        <slot name="image" />
      </figure>
      <div
        class="w-full h-full absolute left-0 top-0 bg-rose-100/80 hover:bg-rose-200/80 transition-all"
      ></div>
      <h1
        class="text-7xl text-center font-medium lowercase tracking-wide absolute top-[50%] -translate-x-1/2 -translate-y-1/2 left-[50%] p-[2rem]"
      >
        {category.title}
      </h1>
    </button>
  </a>
  <!-- {/each} -->
</div>
