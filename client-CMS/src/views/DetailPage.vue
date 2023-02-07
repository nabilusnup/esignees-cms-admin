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
      <div class="container vh-100" style="padding-top: 100px">
    <div class="d-flex justify-content-between gap-5">
      <div style="width: 1000px" class="pt-4">
        <h2 class="title">{{ user.name }}</h2>
        <p class="text mt-3">
          Email : {{ user.email }}
        </p>
        <p class="text mt-3">
          Phone : {{ user.phone }}
        </p>
        <p class="text mt-3">
          Job Title : {{ user.jobTitle }}
        </p>
        <p class="text mt-3">
          Role : {{ user.role }}
        </p>
        <h5 class="mt-3">KTP ID : {{ user.ktpId }}</h5>
        <div class="d-flex gap-3">
            <button class="btn btn-primary mt-3" v-if="user.status !== 'Verified'" @click.prevent="handleEditStatus(user.id)">Verified</button>
            <button
              type="button"
              class="btn btn-primary mt-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Company
            </button>
        </div>
        <!-- modal section -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  {{ user.Company?.nameCompany }}
                </h1>
                <button
                  type="button"
                  class="btn-close btn-light"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                    <ul>
                        <li>Legal Name : {{ user.Company?.legalName }}</li>
                        <li>Address : {{ user.Company?.address }}</li>
                        <li>Phone : {{ user.Company?.phoneCompany }}</li>
                        <li>Email : {{ user.Company?.emailCompany }}</li>
                        <li>Industry : {{ user.Company?.industry }}</li>
                        <li>Company Size : {{ user.Company?.companySize }}</li>
                        <li>Balance : {{ user.Company?.balance }}</li>
                    </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-4">
        <img
          :src="user.ktpImage"
          class="img-fluid rounded"
          alt="..."
          width="1000"
        />
      </div>
    </div>
  </div>
</template>