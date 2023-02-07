<script>
import { mapActions } from 'pinia';
import {useCounterStore} from "../stores/counter"
export default {
    data(){
        return {
            value : {
                name : "",
                email : "",
                password : "",
                phone : ""
            }
        }
    },
    methods : {
        ...mapActions(useCounterStore, ['handleCreateAdmin'])
    }
}
</script>

<template>
    <section class="">
        <div class="container-fluid vh-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style="color: #0a1c62; font-size: medium;">
          <form @submit.prevent="handleCreateAdmin(this.value)">
            <div class="form-outline mb-4 pt-5">
              <label class="form-label" for="form3Example3"
                >Name :</label
              >
              <input
                type="text"
                id="form3Example3"
                class="form-control form-control-lg"
                placeholder="Enter name"
                v-model="value.name"
              />
            </div>
            <!-- Email input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example3"
                >Email address :</label
              >
              <input
                type="email"
                id="form3Example3"
                class="form-control form-control-lg"
                placeholder="Enter a valid email address"
                v-model="value.email"
              />
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
              <label class="form-label" for="form3Example4">Password :</label>
              <input
                type="password"
                id="form3Example4"
                class="form-control form-control-lg"
                placeholder="Enter password"
                v-model="value.password"
              />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example3"
                >Phone Number :</label
              >
              <input
                type="text"
                id="form3Example3"
                class="form-control form-control-lg"
                placeholder="Enter a phone number"
                v-model="value.phone"
              />
            </div>

            <div class="text-center text-lg-start mt-3 pt-2">
              <button
                type="submit"
                class="btn"
                style="padding-left: 2.5rem; padding-right: 2.5rem; background-color: #4A8BDF; color: white;"
              >
                Create New Admin
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-9 col-lg-6 col-xl-5" style="padding-left: 100px;">
          <img
            src="https://img.freepik.com/free-vector/signing-contract-concept-illustration_114360-4879.jpg?size=338&ext=jpg&ga=GA1.1.1305451400.1675607967&semt=sph"
            class="img-fluid"
            alt="Sample image"
          />
        </div>
    </div>
    </div>
</section>
</template>

<style>
</style>