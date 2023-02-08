<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    methods: {
        ...mapActions(useCounterStore, ['handleFetchUser', 'handleDeleteUser'])
    },
    computed : {
        ...mapState(useCounterStore, ['users']),
        ...mapWritableState(useCounterStore, ['query'])
    },
    created(){
        this.handleFetchUser()
    }
  }
</script>

<template>
  <div class="border-2 rounded-xl mt-4 w-full overflow-hidden ">
    <div class="font-light overflow-y-auto h-[70vh] scrollbar">
      <table class="w-full text-center">
        <thead class="">
          <tr class="border-b-2 border-b-theme-1 bg-white">
            <th class="py-2 w-24">ID</th>
            <th class="py-2">Name</th>
            <th class="py-2">Status</th>
            <th class="py-2">Created</th>
            <th class="py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          <!-- IF EMPTY -->
          <tr v-if="users.length === 0">
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
          </tr>
          <!-- IF ANY -->

          <tr
          v-for="item, index in users"
            class="border-b-2 hover:bg-sky-50 tracking-wide font-normal cursor-pointer"
          >
          <!-- <RouterLink to='/login'> -->
            <td class="py-2" >{{ index  + 1 }}</td>
            <td class="py-2" @click.prevent="this.$router.push(`/users/${item.id}`)" >{{ item.name }}</td>
            <td class="py-2" >{{ item.status }}</td>
            <td class="py-2" >{{ item.createdAt.slice(0,10) }}</td>
            <td class="w-20">
              <div class="flex gap-4 w-fit mx-auto hover:text-red-400">
                <a @click.prevent="handleDeleteUser(item.id)" class="material-symbols-outlined"> delete </a>
              </div>
            </td>
          <!-- </RouterLink> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
