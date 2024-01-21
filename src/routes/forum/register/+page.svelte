<script lang="ts">
    import { enhance } from '$app/forms';
</script>

<div class="w-screen h-[calc(57rem-268px)] flex items-center justify-center">
    <div class="bg-slate-100 w-96 h-96 rounded-md border-2">
      <div class="h-20 w-fill flex items-center justify-top flex-col">
        <div class="pt-8">
          <span class="text-3xl text-black"> Register </span>
        </div>
        <div class="w-full pt-6 pl-6">
          <div class="justify-items-start">Username</div>
        </div>
        <div class="w-full pl-6 pr-6">
          <input type="text" class="w-full bg-white" />
        </div>
        <div class="w-full pt-6 pl-6">
          <div class="justify-items-start">Password</div>
        </div>
        <div class="w-full pl-6 pr-6">
          <input type="password" class="w-full bg-white" />
        </div>
        <div class="pt-6 pl-6 pr-6 w-full items-center flex justify-items-center justify-center">
          <button class="btn btn-s w-full rounded-3xl">Register</button>
        </div>
      </div>
    </div>
  </div>
  