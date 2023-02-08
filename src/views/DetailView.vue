<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  computed: {
    ...mapState(useCounterStore, ["user"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["handleFetchDetail", "handleEditStatus"]),

  },
  created() {
    this.handleFetchDetail(this.$route.params.id);
  },
};
</script>

<template>
  <section class="flex justify-center gap-8">
    <div class="px-8 py-6 rounded-xl border-2">
      <div>
        <p>NIK</p>
        <p class="text-2xl font-semibold">{{ user.ktpId }}</p>
        <p>Full Name</p>
        <p class="text-2xl font-semibold">{{ user.name }}</p>
        <p>Email</p>
        <p class="text-2xl font-semibold">{{ user.email }}</p>
        <p>Job Title</p>
        <p class="text-2xl font-semibold">{{ user.jobTitle }}</p>
        <p>Role</p>
        <p class="text-2xl font-semibold">{{ user.role }}</p>
        <p>Company</p>
        <p class="text-2xl font-semibold">{{ user.Company?.nameCompany }}</p>
      </div>
    </div>
    <div class="border-2 p-4 rounded-xl">
      <div
        class="flex items-center justify-center overflow-hidden w-[20rem] rounded-xl"
      >
        <img
          :src="user.ktpImage"
          alt="ktp"
          class="object-cover"
        />
      </div>
      <div class="flex flex-col gap-2 mt-2">
        <p class="text-md font-bold text-center">STATUS - {{ user.status }}</p>
        <button v-if="user.status !== 'Verified'"
        @click.prevent="handleEditStatus(user.id)"
          class="text-xl font-semibold text-white bg-green-500 rounded-xl py-2 hover:bg-green-400"
        >
          VERIFY
        </button>
        <button
          class="text-xl font-semibold text-white bg-theme-3 rounded-xl py-2"
          @click.prevent="this.$router.push('/')"
        >
          CANCEL
        </button>
      </div>
    </div>
  </section>
</template>
