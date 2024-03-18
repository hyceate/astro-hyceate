<script lang="ts">
  import { categoryStore } from "@lib/stores/fetchData.ts";
  interface Category {
    _id: string;
    title: string;
    description: string;
    slug: string;
  }
  let categories: Category[] = [];
  $: {
    categories = $categoryStore;
  }
</script>

<hgroup class="flex justify-center flex-col items-center mt-10 mb-10">
  <h1 class="text-6xl mb-3.5">Projects</h1>
  <h2>A collection of personal and commercial works.</h2>
</hgroup>

<div class="flex flex-col w-full">
  {#each categories as category}
    <a
      class="border-2 border-rose-300 rounded-lg p-5 hover:bg-rose-100 focus:bg-rose-100 active:bg-rose-200 transition-all mr-5 last:mr-0 w-full mb-5 last:mb-0"
      href="/projects/{category.slug}"
    >
      <button tabindex="-1" class="p-5 w-full m-15">
        <h2 class="text-5xl font-medium uppercase">{category.title}</h2>
      </button>
    </a>
  {/each}
</div>
