import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"

const BASE_URL = "http://localhost:3000"
export const useCounterStore = defineStore('counter', {
  state: () => ({
    isLogin: false,
    users : [],
    user : {},
    query: {
      search: "",
    },
  }),
  actions : {
    handleLogin(input){
      axios({
        method: "post",
        url: `${BASE_URL}/adm/login`,
        data: input
      })
        .then((res) => {
          console.log(res);
          // Toastify({
          //   text: `Hola ${res.data.email}, Long time no see! `,
          //   style: {
          //     background: "linear-gradient(to right, #362207, #222831)",
          //   },
          // }).showToast();
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("email", res.data.email);
          this.router.push("/");
          this.isLogin = true;
        })
        .catch((err) => {
          // Toastify({
          //   text: `${err.response.data.message}`,
          //   style: {
          //     background: "linear-gradient(to right, #362207, #222831)",
          //   },
          // }).showToast();
          console.log(err);
        });
    },

    handleFetchUser(){
      let sendQuery = this.query;
      if (sendQuery.search) {
        this.router.replace({ name: "user", query: sendQuery });
      }
        axios({
          method : "get",
          url : `${BASE_URL}/adm/users`,
          params: sendQuery,
          headers : {
            access_token : localStorage.access_token
          }
        })
        .then((res)=>{
          this.users = res.data
        })
        .catch((err)=>{
          console.log(err);
        })
    },

    handleFetchDetail(id){
      axios({
        method : "get",
        url : `${BASE_URL}/adm/users/${id}`,
        headers : {
          access_token : localStorage.access_token
        }
      })
      .then((res)=>{
        this.user = res.data
      })
      .catch((err)=>{
        console.log(err);
      })
    },

    handleDeleteUser(id){
      axios({
        method : "delete",
        url : `${BASE_URL}/adm/users/${id}`,
        headers : {
          access_token : localStorage.access_token
        }
      })
      .then((res)=>{
        this.handleFetchUser()
      })
      .catch((err)=>{
        console.log(err);
      })
    },

    handleEditStatus(id){
      axios({
        method : "patch",
        url : `${BASE_URL}/adm/users/${id}`,
        headers : {
          access_token : localStorage.access_token
        }
      })
      .then((res)=>{
        this.handleFetchUser()
        this.router.push("/")
      })
      .catch((err)=>{
        console.log(err);
      })
    },

    handleCreateAdmin(input){
      axios({
        method: "post",
        url: `${BASE_URL}/adm/register`,
        data: input
      })
      .then((res)=>{
        this.router.push("/")
      })
      .catch((err)=>{
        console.log(err);
      })
    },

    handleLogout(){
      localStorage.clear()
      this.router.push("/login")
      this.isLogin = false
    }
  }
})
