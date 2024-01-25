<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";
  export let form: ActionData;
</script>

<div class="w-screen h-[calc(57rem-268px)] flex items-center justify-center">
  <div class="bg-slate-100 w-96 h-96 rounded-md border-2">
    <form
      method="POST"
      use:enhance
      class="h-20 w-fill flex items-center justify-top flex-col"
    >
      <div class="pt-8">
        <span class="text-3xl text-black"> Login </span>
      </div>
      <div class="w-full pt-6 pl-6">
        <div class="justify-items-start">Username</div>
      </div>
      <div class="w-full pl-6 pr-6">
        <input
          type="text"
          class:input-error={form?.message}
          name="username"
          class="input w-full bg-white"
        />
        {#if form?.message}
          <div class="text-error text-sm">{form.message}</div>
        {/if}
      </div>
      <div class="w-full pt-6 pl-6">
        <div class="justify-items-start">Password</div>
      </div>
      <div class="w-full pl-6 pr-6">
        <input
          type="password"
          class:input-error={form?.message}
          name="password"
          class="input w-full bg-white"
        />
        {#if form?.message}
          <div class="text-error text-sm">{form.message}</div>
        {/if}
      </div>
      <div
        class="pt-6 pl-6 pr-6 w-full items-center flex justify-items-center justify-center"
      >
        <button
          type="submit"
          name="register"
          class="btn btn-s w-full rounded-3xl">Login</button
        >
      </div>
    </form>
  </div>
</div>
