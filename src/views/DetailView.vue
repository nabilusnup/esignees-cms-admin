<template>
  <section class="flex justify-center gap-8">
    <div class="px-8 py-6 rounded-xl border-2">
      <div>
        <p>NIK</p>
        <p class="text-2xl font-semibold">123123123123</p>
        <p>Full Name</p>
        <p class="text-2xl font-semibold">John Claymore</p>
        <p>Email</p>
        <p class="text-2xl font-semibold">johnclaymore@mail.com</p>
        <p>Job Title</p>
        <p class="text-2xl font-semibold">Full Stack Developer</p>
        <p>Address</p>
        <p class="text-2xl font-semibold">Jl Selamat Datang No 99</p>
        <p>Company</p>
        <p class="text-2xl font-semibold">PT Jaya Selama Utama</p>
      </div>
    </div>
    <div class="border-2 p-4 rounded-xl">
      <div
        class="flex items-center justify-center overflow-hidden w-[20rem] rounded-xl"
      >
        <img
          src="https://images.bisnis.com/posts/2019/02/27/894082/e-ktp-guohui-chen.jpg"
          alt="ktp"
          class="object-cover"
        />
      </div>
      <div class="flex flex-col gap-2 mt-2">
        <p class="text-md font-bold text-center">STATUS - UNVERIFIED</p>
        <button
          class="text-xl font-semibold text-white bg-green-500 rounded-xl py-2 hover:bg-green-400"
        >
          VERIFY
        </button>
        <button
          class="text-xl font-semibold text-white bg-theme-3 rounded-xl py-2"
        >
          CANCEL
        </button>
      </div>
    </div>
  </section>
</template>
