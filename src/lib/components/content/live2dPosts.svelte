<script lang="ts">
  import { Image } from "@unpic/svelte";
  // import { urlFor } from "@lib/utils/image";
  export let posts: any;
  export let category: string;
  category = category.toLowerCase();
  let imgLoading = true;
  function setImageLoad() {
    imgLoading = false;
  }
</script>

{#each posts as post}
  <li
    class="live2d-card flex flex-[1_1_25%] items-center justify-center w-full bg-primary border-2 border-darkBorder rounded-lg hover:scale-[102%] transition-transform ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none"
  >
    <a href="/projects/{category}/{post.slug}">
      <figure
        class="flex justify-center items-center h-full w-full max-h-[18rem] min-w-[16rem] min-h-[11rem] overflow-hidden"
      >
        <Image
          class="flex-[1_1_auto] h-full w-full min-h-[11rem] min-w-[16rem] rounded object-cover object-center"
          src={`https://i.ytimg.com/vi_webp/${post.youtubeEmbed.video.id}/maxresdefault.webp`}
          layout="fullWidth"
          background="auto"
          alt={post.coverImage.alt}
          on:load={setImageLoad}
        />
        {#if imgLoading}
          <div class="imgLoader"></div>
        {/if}
      </figure>
    </a>
  </li>
{/each}

<style>
  .imgLoader {
    width: 70px;
    height: 35px;
    top: 50%;
    margin: auto;
    position: relative;
    overflow: hidden;
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
</style>
