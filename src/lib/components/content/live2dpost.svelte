<!-- Single Live2d Post -->
<script lang="ts">
  import { PortableText } from "@portabletext/svelte";
  import returnButton from "@assets/svg/return.svg";
  import link from "@assets/svg/link.svg";
  import video from "@assets/svg/video.svg";
  import Player from "@components/player/Player.svelte";
  import { onMount } from "svelte";
  export let data: any;
  let post: any = data.data[0];
  // console.log("Single live2d: ", post);
  let isMounted = false;
  onMount(async () => {
    isMounted = true;
  });
</script>

<div id="back-button" class="justify-start self-start min-w-full mb-10">
  <a
    href="/projects/live2d"
    class="text-rose-900 hover:text-rose-500 transition-all"
    ><button
      class="major-button inline-flex border-2 border-[#886a6a] p-2 rounded-lg bg-primary hover:bg-rose-100 focus:bg-rose-200 active:bg-rose-300 transitions-all"
    >
      <img src={returnButton.src} class="h-5 w-5" alt="return icon" />
      <span class="ml-3 text-md font-medium lowercase">Live2d Projects</span
      ></button
    ></a
  >
</div>
<article
  class="flex flex-wrap justify-center items-center w-full sm:max-w-[40rem] lg:max-w-[70rem]"
>
  <section
    id="side"
    class="flex flex-auto mb-5 static lg:sticky top-10 p-0 rounded-lg overflow-hidden bg-primary border-2 border-darkBorder transition-all
		{post.youtubeEmbed.aspectRatio == '9/16'
      ? 'aspect-[9/16] max-lg:max-w-[25rem] lg:max-w-[23rem] xl:w-[90rem]'
      : post.youtubeEmbed.aspectRatio == '1/1'
        ? 'aspect-square md:min-w-[30rem] sm:max-w-[32rem] lg:min-w-[500px] max-lg:max-w-[32rem] xl:max-w-[36rem] '
        : // next line 16:9
          'aspect-video max-w-[50rem]'}"
  >
    {#if isMounted}
      <Player data={post} />
    {/if}
  </section>
  <section
    id="side-info"
    class="self-start flex-[0_1_31%] w-full ml-0 lg:ml-10 text-pretty
	  {post.youtubeEmbed.aspectRatio == '9/16'
      ? 'max-lg:basis-full'
      : post.youtubeEmbed.aspectRatio == '1/1'
        ? 'lg:w-[60rem] max-lg:basis-full '
        : // next line 16:9
          'max-lg:basis-full'}"
  >
    <h1 id="post-title" class="text-3xl tracking-tight font-bold uppercase">
      {post.title}
    </h1>
    <ul id="info" class="mb-5">
      {#if post.vSocial}
        <li class="mt-2 !mb-5">
          <a href={post.vSocial} class="after:content-[''] after:mx-1"
            ><button class="major-button px-3 py-1" tabindex="-1"
              ><img class="w-8 h-5" alt="link button" src={link.src} /></button
            ></a
          >
          {#if post.vstream}
            <a href={post.vstream}
              ><button class="major-button px-3 py-1" tabindex="-1"
                ><img
                  src={video.src}
                  alt="video icon"
                  class="w-8 h-5"
                /></button
              ></a
            >
          {/if}
        </li>
      {/if}

      {#if post.vart}
        <li class="">
          <div class="uppercase font-bold">Artist | {post.vart}</div>
          {#if post.vartLink}
            <a href={post.vartLink} class="after:content-[''] after:mx-1"
              ><button class="major-button px-3 py-1" tabindex="-1"
                ><img
                  class="w-5 h-5"
                  alt="link button"
                  src={link.src}
                /></button
              ></a
            >
          {/if}
        </li>
      {/if}

      {#if post.vrig}
        <li class="">
          <div class="uppercase font-bold">Rig | {post.vrig}</div>
          {#if post.vrigLink}
            <li>
              <a href={post.vrigLink} class="after:content-[''] after:mx-1"
                ><button class="major-button px-3 py-1" tabindex="-1"
                  ><img class="w-5 h-5" alt="link button" src={link.src} />
                </button></a
              >
            </li>
          {/if}
        </li>
      {/if}
    </ul>
    <p class="text-md prose prose-base lg:prose-xl">
      <PortableText value={post.body} components={{}} />
    </p>
  </section>
</article>

<style>
  #info li {
    margin-bottom: 0.3rem;
  }
</style>
