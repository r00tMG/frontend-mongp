<script setup>
import {onMounted, ref} from "vue";
import axios from "@/axios.js";
import Loader from "@/components/Loader.vue";
import {EventBus} from "@/eventBus.js";

const annonces = ref([])
const isLoading = ref(true)

onMounted(async () => {
      EventBus.emit('show-loader');
  const r = await axios.get('/annonces',{
    headers: {
      'Accept':'application/json',
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    }
  })
  annonces.value = r.data.annonces
        EventBus.emit('hide-loader');
  //console.log(annonces.value)
})
</script>

<template>
  <Loader />
  <div class="mt-5">
      <div class="d-flex justify-content-between my-2">
        <h4 class="text-success">Mes annonces</h4>
        <router-link to="/annonces/create" class="btn btn-sm btn-success ">Create</router-link>
      </div>
    <div class=" table-responsive">
      <table class="table table-bordered table-striped">
        <thead class="table-success">
          <tr>
            <th class="text-center px-2">GP</th>
            <th class="text-center px-2">Disponibles(Kg)</th>
            <th class="text-center px-2">Départ</th>
            <th class="text-center px-2">Arrivée</th>
            <th class="text-center px-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="annonces.length !==0" v-for="annonce in annonces">
            <td class="text-center" v-text="annonce.user.name"></td>
            <td class="text-center" v-text="annonce.kilos_disponibles"></td>
            <td class="text-center" v-text="annonce.date_depart"></td>
            <td class="text-center" v-text="annonce.date_arrivee"></td>
            <td class="text-center" v-text="annonce.description"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
/* Import Font Dancing Script */
@import url(https://fonts.googleapis.com/css?family=Dancing+Script);

* {
  margin: 0;
}

body {
  background-color: #e8f5ff;
  font-family: Arial;
  overflow: hidden;
}

/* NavbarTop */
.navbar-top {
  background-color: #fff;
  color: #333;
  box-shadow: 0px 4px 8px 0px grey;
  height: 70px;
}

.title {
  font-family: 'Dancing Script', cursive;
  padding-top: 15px;
  position: absolute;
  left: 45%;
}

.navbar-top ul {
  float: right;
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 18px 50px 0 40px;
}

.navbar-top ul li {
  float: left;
}

.navbar-top ul li a {
  color: #333;
  padding: 14px 16px;
  text-align: center;
  text-decoration: none;
}

.icon-count {
  background-color: #ff0000;
  color: #fff;
  float: right;
  font-size: 11px;
  left: -25px;
  padding: 2px;
  position: relative;
}

/* End */

/* Sidenav */
.sidenav {
  background-color: #fff;
  color: #333;
  border-bottom-right-radius: 25px;
  height: 86%;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  position: absolute;
  top: 70px;
  width: 250px;
}

.profile {
  margin-bottom: 20px;
  margin-top: -12px;
  text-align: center;
}

.profile img {
  border-radius: 50%;
  box-shadow: 0px 0px 5px 1px grey;
}

.name {
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
}

.job {
  font-size: 16px;
  font-weight: bold;
  padding-top: 10px;
}

.url, hr {
  text-align: center;
}

.url hr {
  margin-left: 20%;
  width: 60%;
}

.url a {
  color: #818181;
  display: block;
  font-size: 20px;
  margin: 10px 0;
  padding: 6px 8px;
  text-decoration: none;
}

.url a:hover, .url .active {
  background-color: #e8f5ff;
  border-radius: 28px;
  color: #000;
  margin-left: 14%;
  width: 65%;
}

/* End */

/* Main */
.main {
  margin-top: 2%;
  margin-left: 19%;
  font-size: 28px;
  padding: 0 10px;
  width: 80%;
}

.main h2 {
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
}

.main .card {
  background-color: #fff;
  border-radius: 18px;
  box-shadow: 1px 1px 8px 0 grey;
  height: auto;
  margin-bottom: 20px;
  padding: 20px 0 20px 50px;
}

.main .card table {
  border: none;
  font-size: 16px;
  height: 270px;
  width: 80%;
}

.edit {
  position: absolute;
  color: #e7e7e8;
  right: 14%;
}

.social-media {
  text-align: center;
  width: 90%;
}

.social-media span {
  margin: 0 10px;
}

.fa-facebook:hover {
  color: #4267b3 !important;
}

.fa-twitter:hover {
  color: #1da1f2 !important;
}

.fa-instagram:hover {
  color: #ce2b94 !important;
}

.fa-invision:hover {
  color: #f83263 !important;
}

.fa-github:hover {
  color: #161414 !important;
}

.fa-whatsapp:hover {
  color: #25d366 !important;
}

.fa-snapchat:hover {
  color: #fffb01 !important;
}

/* End */
</style>