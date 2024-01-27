<script lang="ts">
  import type { Post, User } from "@prisma/client";

  export let data: Post & { author: User | null};
</script>

<div
  class="bg-slate-500 p-6 rounded-md lg:w-1/2 w-full grid grid-cols-2 grid-rows-2 h-fit"
>
  <h1 class="text-white">{data.title}</h1>
  <h2 class="text-white text-right">{data.author?.username}</h2>
  <p class="text-white text-xl col-span-2">{data.body}</p>
</div>
