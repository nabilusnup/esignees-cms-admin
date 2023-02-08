<template>
  <section class="flex items-center justify-center">
    <div class="bg-white p-6 rounded-xl w-1/4 flex flex-col text-center">
      <div class="mb-6">
        <p class="text-center text-3xl font-semibold tracking-wide">Register New Admin</p>
      </div>

      <div class="flex items-center gap-1 border-2 rounded-xl px-2 py-1 border-slate-400">
        <span class="material-symbols-outlined text-2xl">person</span>
        <input
          id="username"
          type="text"
          name="username"
          class="outline-none rounded-xl px-3 py-1"
          placeholder="Username"
        />
      </div>
      <div class="flex items-center gap-1 mt-6 border-2 rounded-xl px-2 py-1 border-slate-400">
        <span class="material-symbols-outlined text-2xl">email</span>
        <input
          id="email"
          type="text"
          name="email"
          class="outline-none rounded-xl px-3 py-1 w-full"
          placeholder="Email"
        />
      </div>
      <div class="flex items-center gap-1 mt-6 border-2 rounded-xl px-2 py-1 border-slate-400">
        <span class="material-symbols-outlined text-2xl">lock</span>
        <input
          id="password"
          type="password"
          name="password"
          class="outline-none rounded-xl px-3 py-1 w-full"
          placeholder="Password"
        />
      </div>
      <div class="flex items-center gap-1 mt-6 border-2 rounded-xl px-2 py-1 border-slate-400">
        <span class="material-symbols-outlined text-2xl">phone</span>
        <input
          id="phoneNumber"
          type="text"
          name="phoneNumber"
          class="outline-none rounded-xl px-3 py-1 w-full"
          placeholder="Phone Number"
        />
      </div>
      
      <button
        class="bg-theme-3 hover:bg-sky-400 text-white py-2 rounded-full mt-8 w-[60%] tracking-wide mx-auto"
      >
        Register
      </button>
    </div>
  </section>
</template>
