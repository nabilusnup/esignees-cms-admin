<script>
import { mapActions } from 'pinia';
import {useCounterStore} from "../stores/counter"
export default {
    data(){
        return {
            value : {
                email : "",
                password : ""
            }
        }
    },
    methods : {
        ...mapActions(useCounterStore, ['handleLogin'])
    }
}
</script>

<template>
  <form @click.prevent="handleLogin(this.value)">
  <section class="flex items-center justify-center">
    <div class="bg-white p-6 rounded-xl w-1/4 flex flex-col text-center">
      <div class="mb-6">
        <p class="text-center text-3xl font-semibold tracking-wide">
          Login
        </p>
      </div>
      <div class="flex items-center gap-1 border-b-2 border-theme-2 ">
        <span class="material-symbols-outlined text-2xl">person</span>
        <input
          id="email"
          type="text"
          name="email"
          class="outline-none rounded-xl px-3 py-1 "
          placeholder="Email"
          v-model="value.email"
        />
      </div>
      <div class="flex items-center gap-1 mt-6 border-b-2 border-theme-2 ">
        <span class="material-symbols-outlined text-2xl">lock</span>
        <input
          id="password"
          type="password"
          name="password"
          class="outline-none rounded-xl px-3 py-1  w-full"
          placeholder="Password"
          v-model="value.password"
        />
      </div>
      <div class="flex justify-between text-xs mt-2">
        <div class="flex gap-1 cursor-pointer hover:underline">
          <input type="checkbox" name="" id="" />
          <p>Remember Me</p>
        </div>
        <p class="cursor-pointer hover:underline">Forgot your password?</p>
      </div>
      <button
        class="bg-theme-3 hover:bg-sky-400 text-white py-2 rounded-full mt-12 w-[60%] tracking-wide mx-auto"
      >
        Sign In
      </button>
    </div>
  </section>
</form>
</template>
