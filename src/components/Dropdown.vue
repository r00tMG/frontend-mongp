<script>
import {ref} from "vue";
import router from "@/router/index.js";

export default{
  name: "Dropdown",
  setup(){
    const data = ref({});
    const storedData = localStorage.getItem('data');
    if (storedData) {
      data.value = JSON.parse(storedData);
      console.log(data.value)
      console.log(data.value.user.role)
    } else {
      data.value = null;
    }
    const handleLogout = async () => {
      try {
        //console.log(token)
        localStorage.removeItem('token')
        localStorage.removeItem('data')
        //console.log(token)
        await router.push('/login');
      } catch (error) {
        console.log('Salut')
        console.error('Logout failed:', error);
      }
    }
    return {
      data,
      handleLogout
    }

  }
}
</script>

<template>
  <div class="dropdown ms-2">
    <button class="btn btn-transparent dropdown-toggle" v-if="data && data.user" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      <img class="rounded-circle" :src="data.storage+'/'+data.user.photo_profile" width="30px" height="30px" alt="Photo Profile" >
      {{data.user.name}}
    </button>
    <button class="btn btn-transparent dropdown-toggle" v-else type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
      </svg>
    </button>
    <ul class="dropdown-menu" v-if="data && data.token">
      <li  class="text-center">
        <p class="dropdown-item">
          <img class="rounded-circle text-center" :src="data.storage+'/'+data.user.photo_profile" width="50px" height="50px" alt="">
        </p>
      </li>
      <li class="text-center">
        <a class="dropdown-item" >{{data.user.name}}</a>
      </li>
      <li class="text-center">
        <a class="dropdown-item" >{{data.user.email}}</a>
      </li>
      <li class="text-center" >
        <router-link to="/profile/index"  v-if="data.user.role[0].name === 'GP' || data.user.role[0].name === 'Client'" class="dropdown-item">
          <i class="me-2 icon-md" data-feather="user"></i>
          <span class="text-dark">Profile</span>
        </router-link>
        <router-link to="/users/index" v-else-if="data.user.role[0].name === 'admin'" class="dropdown-item">
          <i class="me-2 icon-md" data-feather="user"></i>
          <span class="text-dark">Admin</span>
        </router-link>
      </li>

      <li class="dropdown-item text-center">
        <button @click="handleLogout" type="submit" class="text-body ms-0 bg-transparent border-0 p-0">
          <i class="me-2 icon-md" data-feather="log-out"></i>
          <span class="text-dark text-center">Déconnexion</span>
        </button>
      </li>
    </ul>
    <ul class="dropdown-menu" v-else>
      <li class="text-center">
        <router-link to="/login">Se Connecter</router-link>
      </li>
    </ul>
  </div>
<!--  <label class="dropdown">
    <div class="dd-button bg-transparent" v-if="data && data.user">
      <img class="rounded-circle" :src="data.storage+'/'+data.user.photo_profile" width="30px" height="30px" alt="Photo Profile" >
      {{data.user.name}}
    </div>
    <div class="dd-button gap-1" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
      </svg>
    </div>
    <input type="checkbox" class="dd-input" id="test">
    <ul class="dd-menu" v-if="data && data.token">
      <div class="d-flex flex-column align-items-center border-bottom px-5 py-3">
        <div class="mb-3">
          <img class="rounded-circle" :src="data.storage+'/'+data.user.photo_profile" width="50px" height="50px" alt="">
        </div>
        <div class="text-center">
          <p class="tx-16 fw-bolder">{{data.user.name}}</p>
          <p class="tx-12 text-dark">{{data.user.email}}</p>
        </div>
        <li class="dropdown-item py-2 " v-if="data.user.role === 'GP' || data.user.role === 'Client'">
          <router-link to="/profile/index" href="#" class="text-body ms-0">
            <i class="me-2 icon-md" data-feather="user"></i>
            <span class="text-dark">Profile</span>
          </router-link>
        </li>
        <li class="dropdown-item py-2">
          <button @click="handleLogout" type="submit" class="text-body ms-0 bg-transparent border-0 p-0">
            <i class="me-2 icon-md" data-feather="log-out"></i>
            <span class="text-dark">Déconnexion</span>
          </button>
        </li>
      </div>
    </ul>
    <ul class="dd-menu" v-else>
      <li>
        <router-link to="/login">Se connecter</router-link>
      </li>
    </ul>
  </label>-->
<!--  <div class="dropdown-menu p-0" aria-labelledby="profileDropdown">

    <ul class="list-unstyled p-1">

      <li class="dropdown-item py-2">
        <a href="javascript:;" class="text-body ms-0">
          <i class="me-2 icon-md" data-feather="edit"></i>
          <span>Edit Profile</span>
        </a>
      </li>
      <li class="dropdown-item py-2">
        <a href="javascript:;" class="text-body ms-0">
          <i class="me-2 icon-md" data-feather="repeat"></i>
          <span>Switch User</span>
        </a>
      </li>

    </ul>
  </div>-->

</template>

<style scoped>
body {
  color: #000000;
  font-family: Sans-Serif;
  padding: 30px;
  background-color: #FFFFFF;
}

a {
  text-decoration: none;
  color: #000000;
}

a:hover {
  color: #222222
}

/* Dropdown */

.dropdown {
  display: inline-block;
  position: relative;
}

.dd-button {
  display: inline-block;

  border-radius: 4px;
  padding: 10px 30px 10px 20px;
  background-color: #ffffff;
  cursor: pointer;
  white-space: nowrap;
}

.dd-button:after {
  content: '';
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
}

.dd-button:hover {
  background-color: #eeeeee;
}


.dd-input {
  display: none;
}

.dd-menu {
  position: absolute;
  top: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0;
  margin: 2px 0 0 0;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.1);
  background-color: #ffffff;
  list-style-type: none;
}

.dd-input + .dd-menu {
  display: none;
}

.dd-input:checked + .dd-menu {
  display: block;
}

.dd-menu li {
  padding: 10px 20px;
  cursor: pointer;
  white-space: nowrap;
}

.dd-menu li:hover {
  background-color: #f6f6f6;
}

.dd-menu li a {
  display: block;
  margin: -10px -20px;
  padding: 10px 20px;
}

.dd-menu li.divider{
  padding: 0;
  border-bottom: 1px solid #cccccc;
}
</style>