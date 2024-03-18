<script lang="ts">
  export let post: any;
  export let category: string;
  // console.log(`Post Data for art Cards`, post);
</script>

<li>
  <a href="/projects/{category}/{post.slug}">
    <section
      id="art-card"
      class="flex flex-[1_1_0%] w-full justify-center items-center border-2 border-rose-200 rounded-lg shadow-[2px_2px_6px_#e0dad2,-2px_-4px_9px_#fffffe] transition-all"
    >
      {#if post.mainImage}
        <figure class="max-w-[40rem]">
          <slot name="image" />
        </figure>
        <!-- <img
        class="flex-1 max-w-full rounded-md object-cover object-center"
        src={urlFor(post.mainImage).width(500).height(300).url()}
        alt={post.mainImage.alt}
      /> -->
      {/if}
    </section>
  </a>
</li>
