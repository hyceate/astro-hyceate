<script lang="ts">
  export let post: any;
  export let category: string;
  // console.log(`Post Data for art Cards`, post);
</script>

<li>
  <a href="/projects/{category}/{post.slug}">
    <section
      id="art-card"
      class="flex flex-[1_1_0%] w-full justify-center items-center border-2 border-darkBorder rounded-lg transition-all hover:scale-105 transition-transform ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none"
    >
      {#if post.mainImage}
        <figure class="max-w-[40rem] rounded-lg">
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
