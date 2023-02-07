<script>
import { mapActions } from 'pinia';
import { useCounterStore } from "../stores/counter";


export default {
    props : ['index', 'item'],
    methods : {
        ...mapActions(useCounterStore, ['handleDeleteUser', 'handleFetchUser'])
    },
    created(){
        this.handleFetchUser()
    }
}
</script>

<template>
      <tr>
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.createdAt.slice(0,10) }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.Company?.nameCompany }}</td>
            <td>
              <div class="d-flex gap-2">
                <button class="btn" style="background-color: #4A8BDF; color: white;" @click.prevent="this.$router.push(`/users/${item.id}`)">Detail</button>
                <button class="btn btn-danger" @click.prevent="handleDeleteUser(item.id)">Delete</button>
              </div>
            </td>
          </tr>
</template>