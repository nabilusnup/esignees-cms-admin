<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import TableRowUser from "../components/TableRowUser.vue"

export default {
    components : {TableRowUser},
    methods: {
        ...mapActions(useCounterStore, ['handleFetchUser'])
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
  <div class="container vh-100">
    <center>
      <div
        style="
          /* border-bottom: solid 1px #0a1c62; */
          max-width: 300px;
          padding-top: 80px;
        "
      >
        <h2 style="color: #0a1c62">Table User</h2>
      </div>
    </center>
    <center>
        <div class="input-group mb-3 mt-4 w-50">
          <input
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
            placeholder="search user name here..."
            v-model="query.search"
          />
          <button class="btn" type="button" id="button-addon2" style="background-color: #0a1c62; color: white; width: 90px;" @click.prevent="handleFetchUser">
            Search
          </button>
        </div>
      </center>
    <div class="pt-4 d-flex justify-content-center">
      <table class="table table-hover table-sm" style="color: #0a1c62; width: 900px;">
        <thead class="">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Company</th>
            <th scope="col" width="180">Action</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
            <TableRowUser v-for="item, index in users" :key="item.id" :item="item" :index="index" />
        </tbody>
      </table>
    </div>
  </div>
</template>
