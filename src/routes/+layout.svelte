<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.pcss';
	import Footer from '$lib/components/Footer.svelte'
</script>

<Navbar></Navbar>
<slot />
<Footer></Footer>