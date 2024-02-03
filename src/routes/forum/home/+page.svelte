<script lang="ts">
  import Post from "$lib/components/Post.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;

  let visible = false;
  function toggle() {
    visible = !visible;
  }
</script>

<div class="flex p-2 min-h-screen flex-col items-center gap-5">
  <div class="p-6 rounded-md lg:w-1/2 w-full h-fit bg-[#1b2538] flex">
    <button on:click={toggle} class="w-32 hover:text-white">
      Create Post
    </button>
    <div class="w-full"></div>
    <form method="post" action="?/logout">
      <button type="submit" class="hover:text-white"> Logout </button>
    </form>
  </div>
  {#if visible}
    <div class="p-6 rounded-md lg:w-1/2 w-full h-fit bg-[#1b2538] flex">
      <form method="post" action="?/create" class="w-full">
        <label class="form-control w-full">
          <input
            type="text"
            placeholder="Title"
            class="input input-bordered w-full"
            name="title"
          />
          <div class="label"></div>
        </label>
        <label class="form-control w-full">
          <textarea
            placeholder="Body"
            class="input input-bordered w-full h-36"
            name="body"
          />
          <div class="label"></div>
        </label>
        <div class="float-right">
          <button type="submit"> Post </button>
        </div>
      </form>
    </div>
  {/if}
  <div data-testid="posts" class="flex w-full flex-col items-center gap-2">
    {#await data.posts}
      Loading...
    {:then posts}
      {#each posts as post}
        <Post data={post}></Post>
      {/each}
    {:catch error}
      {error.message}
    {/await}
  </div>
</div>
