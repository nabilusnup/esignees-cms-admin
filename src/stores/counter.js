import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "http://localhost:3000";
export const useCounterStore = defineStore("counter", {
  state: () => ({
    isLogin: false,
    users: [],
    user: {},
    query: {
      search: "",
    },
  }),
  actions: {
    handleLogin(input) {
      axios({
        method: "post",
        url: `${BASE_URL}/adm/login`,
        data: input,
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
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.response.data.message}`,
          });
        });
    },

    handleFetchUser() {
      let sendQuery = this.query;
      if (sendQuery.search) {
        this.router.replace({ name: "homePage", query: sendQuery });
      }
      axios({
        method: "get",
        url: `${BASE_URL}/adm/users`,
        params: sendQuery,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((res) => {
          this.users = res.data;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.response.data.message}`,
          });
        });
    },

    handleFetchDetail(id) {
      axios({
        method: "get",
        url: `${BASE_URL}/adm/users/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((res) => {
          this.user = res.data;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.response.data.message}`,
          });
        });
    },

    handleDeleteUser(id) {
      axios({
        method: "delete",
        url: `${BASE_URL}/adm/users/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((res) => {
          this.handleFetchUser();
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.response.data.message}`,
          });
        });
    },

    handleEditStatus(id) {
      axios({
        method: "patch",
        url: `${BASE_URL}/adm/users/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((res) => {
          this.handleFetchUser();
          this.router.push("/");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.response.data.message}`,
          });
        });
    },

    handleCreateAdmin(input) {
      axios({
        method: "post",
        url: `${BASE_URL}/adm/register`,
        data: input,
      })
        .then((res) => {
          this.router.push("/");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.response.data.message}`,
          });
        });
    },

    handleLogout() {
      localStorage.clear();
      this.router.push("/login");
      this.isLogin = false;
    },
  },
});
