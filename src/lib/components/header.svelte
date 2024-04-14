<script lang="ts">
  import { beforeUpdate } from "svelte";
  import { fade, fly, crossfade } from "svelte/transition";
  import { cubicOut, cubicInOut } from "svelte/easing";
  import { clickOutside } from "@lib/actions/clickOutside";
  import SocialLinks from "@components/social-links.svelte";
  import { isMenuOpen, isLoading } from "@lib/stores/stores";

  import { onDestroy } from "svelte";
  export let url: string = "";
  const [send, receive] = crossfade({
    duration: 450,
    easing: cubicInOut,
  });

  beforeUpdate(() => {
    const htmlElement = document.documentElement;
    const shouldHideOverflow = $isMenuOpen || $isLoading;
    if (shouldHideOverflow) {
      htmlElement.classList.add("overflow-hidden");
    } else {
      htmlElement.classList.remove("overflow-hidden");
    }
  });
  function openMenu() {
    $isMenuOpen = !$isMenuOpen;
  }
  function handleClickOutside(event: MouseEvent | TouchEvent) {
    $isMenuOpen = false;
  }
  onDestroy(() => {
    $isMenuOpen = false;
  });

  $: url && isMenuOpen.set(false);
</script>

<header
  id="header"
  class="flex justify-between w-full z-10 top-0 left-0 items-center px-5 lg:px-20 h-20 bg-primary transition-all"
>
  <!-- social links -->
  <div class="flex flex-1 max-md:hidden max-lg:justify-center z-30">
    <SocialLinks />
  </div>
  <!-- logo -->
  <div class="flex flex-1 justify-center max-md:justify-start z-30">
    <a href="/" class="hover:scale-[1.05] transition-all">
      <svg
        role="img"
        class="rounded-full border-2 border-darkBorder w-[50px] h-[50px]"
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        width="32"
        height="32"
        viewBox="0 0 8.467 8.467"
        aria-labelledby="logo logo_desc"
      >
        <title id="logo">logo</title>
        <desc id="logo_desc">round logo made of letters 'h' and 'y'</desc>
        <path
          d="M-.016 0h8.492v8.476H-.016z"
          style="fill:#ffa694;stroke-width:.264583;fill-opacity:1"
        /><g data-name="Layer 3"
          ><path
            d="M39 67.88a46.27 46.27 0 0 0 25.73-32v-.22c.92-4.34 2.49-14.53-4.4-14.82a7.77 7.77 0 0 0-3.87 1c-6.68 3.55-10.05 11.9-12.57 18.56-5 13.13-8.36 28.36-6.91 42.47.3 3 1.7 9.65 5.94 9.31 4.24-.34 5.47-5.4 6.34-8.69 1.33-5 2.52-9.58 6.43-13.3a2.38 2.38 0 0 1 1.73-.86c.89.08 1.41 1 1.64 1.9 1.57 5.67-4.56 17 1.76 20.84 2.18 1.31 5.15.46 6.95-1.33 1.8-1.79 2.23-3.1 2.91-5.55"
            style="fill:none;stroke:#fff;stroke-width:5.2975px;stroke-linecap:round;stroke-linejoin:bevel"
            transform="matrix(.04489 0 0 .04489 1.041 .76)"
          /><path
            d="M75.27 68.78a29 29 0 0 0-3.89 9.84c-.66 3.29-1.12 7.12.15 10.32A4.73 4.73 0 0 0 77.08 92c4.24-.93 6.29-6 7.5-9.72.73-2.21 1.32-4.47 2.16-6.64a16 16 0 0 1 2.46-4.74c1.38-1.6 4.29-2.19 5.64-.21 1.17 1.71.9 4 .57 5.87-.42 2.42-1 4.82-1.63 7.2-1.3 5.11-3 10.07-4.71 15-1.53 4.52-3.15 9-5 13.41a63 63 0 0 1-6.56 12.65c-.35.48-.72 1-1.09 1.42-1.31 1.59-3.43 3.71-5.61 4a4.14 4.14 0 0 1-4.26-3.35 13.19 13.19 0 0 1 .54-6.62 28.3 28.3 0 0 1 3.35-6.91c6.49-10.11 16.95-16.87 28.08-20.9a48.86 48.86 0 0 1 8.18-2"
            style="fill:none;stroke:#fff;stroke-width:5.2975px;stroke-linecap:round;stroke-linejoin:bevel"
            transform="matrix(.04489 0 0 .04489 1.041 .76)"
          /><path
            d="M106.77 90.47c7.32-1 17.84-.58 22.57 5.82s3.91 15.16 1.07 22.08c-5.8 14.15-20.32 22.83-34.36 27.13-28.64 8.75-61.91-2.56-79.51-26.72-18.33-25.15-18.49-62-.65-87.43 16.86-24.07 50.1-35 77.83-25 27.39 9.93 49.16 40.55 40.84 70.12a44.44 44.44 0 0 1-5.43 12.14"
            style="fill:none;stroke:#fff;stroke-width:5.2975px;stroke-linecap:round;stroke-linejoin:bevel"
            transform="matrix(.04489 0 0 .04489 1.041 .76)"
          /></g
        >
      </svg>
    </a>
  </div>
  <!-- hamburger icon -->
  <div
    class="flex flex-1 w-10 h-10 max-md:justify-end max-lg:justify-end lg:hidden z-[999]"
  >
    {#if $isMenuOpen}
      <button
        id="menu-button"
        class="absolute max-lg:block"
        in:send={{ key: "icon" }}
        out:receive={{ key: "icon" }}
      >
        <svg
          class="w-9 h-9"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    {:else}
      <button
        id="menu-button"
        on:click={openMenu}
        class="absolute max-lg:block"
        in:send={{ key: "icon" }}
        out:receive={{ key: "icon" }}
      >
        <svg
          class="w-9 h-9"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    {/if}
  </div>

  <!-- mobile navbar -->
  {#if $isMenuOpen}
    <section
      id="menu"
      class="fixed z-[0] pr-[15px] lg:flex items-center lowercase font-medium max-lg:w-full max-lg:left-0 max-lg:top-0 max-lg:h-dvh max-lg:pr-0 max-lg:absolute max-lg:w-[20rem] max-lg:flex-col max-lg:justify-center
		{$isMenuOpen ? 'flex' : 'hidden'}"
    >
      <div
        id="menu-content"
        in:fly={{ y: -100, duration: 500, opacity: 0 }}
        out:fade={{ duration: 100 }}
        class="flex flex-col items-center px-5 lg:hidden fixed w-full h-dvh max-h-[60dvh] top-16 pb-[2rem] overflow-x-clip overflow-y-scroll bg-primary border-b-2 border-rose-200 shadow shadow-rose-200"
        use:clickOutside
        on:click_outside={handleClickOutside}
      >
        <ul
          class="font-[Lexend] navbar flex flex-1 justify-center items-center lg:hidden max-lg:flex-col py-5 max-lg:w-52 text-5xl"
        >
          <li class="w-full">
            <a href="/">Home</a>
          </li>
          <li class="w-full">
            <a href="/projects/art">art</a>
          </li>
          <li class="w-full">
            <a href="/projects/live2d">live2d</a>
          </li>
          <li class="w-full">
            <a href="/contact">contact</a>
          </li>
        </ul>
        <aside
          class="bottom-0 max-md:visible md:hidden lg:hidden"
          in:fly={{ y: 20, delay: 500, duration: 550, easing: cubicInOut }}
          out:fade={{
            delay: 0,
            duration: 200,
            easing: cubicOut,
          }}
        >
          <SocialLinks />
        </aside>
      </div>
    </section>
  {/if}
  <!-- Desktop Navbar -->
  <div
    id="menu"
    class="flex flex-1 justify-end items-center lowercase font-medium max-lg:hidden"
  >
    <ul
      class="navbar font-[Lexend] flex max-lg:hidden max-lg:flex-col align-center items-center py-5 z-[20] max-lg:w-52 text-2xl"
    >
      <li><a href="/">Home</a></li>
      <!-- dropdown -->
      <li><a href="/projects">Projects</a></li>
      <li><a href="/contact">Contact</a></li>
      <!-- end dropdown -->
    </ul>
  </div>
</header>

<style>
  .navbar li {
    display: inline-flex;
    align-items: center;
    padding: 5px;
    text-transform: lowercase;
    font-weight: 500;
    justify-content: center;
    overflow: hidden;
  }
  .navbar li a {
    transition: all 0.5s ease-in-out;
  }

  .navbar li a:hover,
  .navbar li a:focus {
    color: brown;
    transition: all 0.3s ease-in-out;
  }

  .navbar li:not(:last-child)::after {
    content: "\2B29";
    margin: 6px 0 3px 15px;
  }

  @media not all and (min-width: 1024px) {
    .navbar li:not(:last-child)::after {
      content: "";
      margin: 0;
    }
  }
  #menu-content .navbar li a {
    animation: 650ms cubic-bezier(0.49, 0.02, 0.33, 1.1) 250ms slide-up forwards;
    transform: translateY(100%);
  }
  @keyframes slide-up {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
