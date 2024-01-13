<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.pcss";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="bg-[#FFFFFF]">
  <Navbar ></Navbar>
  <slot />
  <Footer></Footer>
</div>
