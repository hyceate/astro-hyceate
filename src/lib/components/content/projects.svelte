<script lang="ts">
  export let data: any;
  const category = data;
</script>

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
