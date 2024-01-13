<script>
	import { fade } from 'svelte/transition';
    import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<div class="flex-1">
    <div in:fade={{ delay: 0, duration: 800 }}>
  <h1 class="hero text-7xl p-16 text-black font-bold">Welcome to Whirl</h1>
  <p class="hero pb-16 text-black font-medium">
    Whirl is a new programming language that is designed to be easy to learn and
    use.
  </p>
</div>
  <div class="bg-[#1b2538] h-">
    <div in:fly={{ delay: 500, duration: 1000, x: 0, y: 200, opacity: 0, easing: quintOut }}>
    <h2 class="text-5xl pt-16 pb-8 pl-8 font-semibold">Why Whirl?</h2>
    <div class="flex gap-16 justify-center flex-wrap">
      <div class="flex-1 min-w-96">
        <p class="p-8">
          Empower your programming journey with Whirl, the language of
          innovation and efficiency. Whether you're a seasoned developer or just
          starting your coding adventure, our platform is designed to cater to
          all skill levels. Dive into the world of Whirl and unlock the
          potential to create robust, scalable, and cutting-edge applications.
        </p>
      </div>
      <div class="flex-1 min-w-96">
        <p class="p-8">
          Whirl is a new programming language that is designed to be easy to
          learn and use. It's also designed to be fast, secure, and scalable.
          Whirl is a statically typed language with a strong type system. It's
          also a functional language with a powerful type inference system.
          Whirl is a general-purpose programming language that is designed to be
          used for a wide variety of applications. It's also a general-purpose
          programming language that is designed to be used for a wide variety of
          applications. Whirl is a general-purpose programming language that is
          designed to be used for a wide variety of applications. It's also a
          general-purpose programming language that is designed to be used for a
          wide variety of applications. Whirl is a general-purpose programming
          language that is designed to be used for a wide variety of
          applications. It's also a general-purpose programming language that is
          designed to be used for a wide variety of applications.
        </p>
      </div>
      <div class="flex-1 min-w-96">
        <p class="p-8">
          Whirl is a general-purpose programming language that is designed to be
          used for a wide variety of applications. It's also a general-purpose
          programming language that is designed to be used for a wide variety of
          applications. Whirl is a general-purpose programming language that is
          designed to be used for a wide variety of applications. It's also a
          general-purpose programming language that is designed to be used for a
          wide variety of applications. Whirl is a general-purpose programming
          language that is designed to be used for a wide variety of
          applications. It's also a general-purpose programming language that is
          designed to be used for a wide variety of applications.
        </p>
        </div>
      </div>
    </div>
  </div>
</div>
