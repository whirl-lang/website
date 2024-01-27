<script lang="ts">
  import Post from "$lib/components/Post.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
  import type { Actions, PageServerLoad } from "./$types";
</script>

<div class="flex p-2 min-h-screen flex-col items-center gap-5">
  <div class="p-6 rounded-md lg:w-1/2 w-full h-fit bg-[#1b2538] flex">
    <button class="w-32"> Create Post </button>
    <div class="w-full"></div>
    <form method="post" action="?/logout">
      <button type="submit"> Logout </button>
    </form>
  </div>
  {#await data.posts}
    <div>Loading...</div>
  {:then posts}
    {#each posts as post}
      <Post data={post}></Post>
    {/each}
  {:catch error}
    <div>{error.message}</div>
  {/await}
</div>
