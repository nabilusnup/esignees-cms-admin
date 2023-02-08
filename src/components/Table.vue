<template>
  <div class="border-2 rounded-xl mt-4 w-full overflow-hidden ">
    <div class="font-light overflow-y-auto h-[70vh] scrollbar">
      <table class="w-full text-center">
        <thead class="">
          <tr class="border-b-2 border-b-theme-1 bg-white">
            <th class="py-2 w-24">ID</th>
            <th class="py-2">Name</th>
            <th class="py-2">Staus</th>
            <th class="py-2">Created</th>
            <th class="py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          <!-- IF EMPTY -->
          <!-- <tr>
            <td colSpan="6">
              <div class="flex flex-col justify-center items-center mt-12">
                <img
                  src="../assets/img/dog_walk.png"
                  alt="image"
                  class="h-[300px] object-contain"
                />
                <p>The Inbox is Empty</p>
              </div>
            </td>
          </tr> -->
          <!-- IF ANY -->
          
          <tr
          v-for="el in 30"
            class="border-b-2 hover:bg-sky-50 tracking-wide font-normal cursor-pointer"
          >
            <td class="py-2">12321</td>
            <td class="py-2">John Claymore</td>
            <td class="py-2">Admin</td>
            <td class="py-2">22/23/2022</td>
            <td class="w-20">
              <div class="flex gap-4 w-fit mx-auto hover:text-red-400">
                <span class="material-symbols-outlined"> delete </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
