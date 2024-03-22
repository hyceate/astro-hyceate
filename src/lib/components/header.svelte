<script lang="ts">
  import { beforeUpdate } from "svelte";
  import { fade, fly, crossfade } from "svelte/transition";
  import { cubicOut, cubicInOut } from "svelte/easing";
  import { clickOutside } from "@lib/actions/clickOutside";
  import menuIcon from "@assets/svg/menu.svg";
  import close from "@assets/svg/close.svg";
  import logo from "@assets/svg/hy_roundBG.svg";
  import SocialLinks from "@components/social-links.svelte";
  import { isMenuOpen, isLoading } from "@lib/stores/stores";

  import { onDestroy } from "svelte";
  export let url: string = "";
  const [send, receive] = crossfade({
    duration: 400,
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
    console.log("Open Menu", $isMenuOpen);
  }
  function handleClickOutside(event: MouseEvent | TouchEvent) {
    console.log("Clicked Outside: ", $isMenuOpen);
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
    <a href="/"
      ><img
        src={logo.src}
        class="rounded-full border-2 border-darkBorder w-[50px] h-[50px] hover:scale-110 transition-all"
        alt="a round submark of Hy in lowercase from Hyceate"
      />
    </a>
  </div>
  <!-- hamburger icon -->
  <div
    class="flex flex-1 w-10 h-10 max-md:justify-end max-lg:justify-end lg:hidden z-[9999]"
  >
    {#if $isMenuOpen}
      <button
        id="menu-button"
        class="absolute max-lg:block"
        in:send={{ key: "icon" }}
        out:receive={{ key: "icon" }}
      >
        <img class="w-9 h-9" src={close.src} alt="close menu icon" />
      </button>
    {:else}
      <button
        id="menu-button"
        on:click={openMenu}
        class="absolute max-lg:block"
        in:send={{ key: "icon" }}
        out:receive={{ key: "icon" }}
      >
        <img class="w-9 h-9" src={menuIcon.src} alt="open menu icon" />
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
        in:fly|global={{ y: -500, duration: 400 }}
        out:fly|global={{ duration: 200 }}
        class="flex flex-col items-center px-10 lg:hidden fixed w-full h-dvh max-h-[82vh] top-20 pb-[2rem] overflow-x-clip overflow-y-scroll bg-primary border-b-2 border-rose-200 shadow shadow-rose-200"
        use:clickOutside
        on:click_outside={handleClickOutside}
      >
        <ul
          class="font-[Lexend] navbar flex flex-1 justify-center items-center lg:hidden max-lg:flex-col py-5 max-lg:w-52 text-7xl divide-y-4 divide-rose-300 divide-dotted text-center"
          in:fly={{ y: -20, delay: 200, duration: 550, easing: cubicInOut }}
          out:fade={{
            delay: 0,
            duration: 200,
            easing: cubicOut,
          }}
        >
          <li class="w-full"><a href="/" aria-label="home">Home</a></li>
          <!-- dropdown -->
          <li class="w-full">
            <a href="/projects" aria-label="projects">Projects</a>
          </li>
          <li class="w-full">
            <a href="/projects/art" aria-label="art">art</a>
          </li>
          <li class="w-full">
            <a href="/projects/live2d" aria-label="live2d">live2d</a>
          </li>
          <!-- end dropdown -->
        </ul>
        <aside
          class="bottom-0 max-md:visible md:hidden lg:hidden"
          in:fly={{ y: -20, delay: 500, duration: 550, easing: cubicInOut }}
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
  <!-- {#if $isMenuOpen}
    <div
      id="menuOverlay"
      in:fade={{ duration: 300 }}
      out:fade={{ duration: 400 }}
      class="fixed rounded-lg w-full h-dvh top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:hidden bg_menu_overlay z-[15] backdrop-blur-lg"
    ></div>
  {/if} -->
  <!-- Desktop Navbar -->
  <div
    id="menu"
    class="flex flex-1 justify-end items-center lowercase font-medium max-lg:hidden"
  >
    <ul
      class="navbar font-[Lexend] flex max-lg:hidden max-lg:flex-col align-center items-center py-5 z-[20] max-lg:w-52 text-2xl"
    >
      <li><a href="/" aria-label="home">Home</a></li>
      <!-- dropdown -->
      <li><a href="/projects" aria-label="projects">Projects</a></li>
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
</style>
