<script setup>
import {onMounted, ref} from "vue";
import axios from "@/axios.js";
import Loader from "@/components/Loader.vue";
import {EventBus} from "@/eventBus.js";
import Swal from "sweetalert2";
const roles = ref([])
const isLoading = ref(false)

  onMounted(async () => {
      EventBus.emit('show-loader');
    const r = await axios.get('/roles',{
      headers:{
        'Accept':'application/json',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      }
    })
     roles.value = await r.data
    //console.log(roles.value.roles.length)
        EventBus.emit('hide-loader');
  })
const onDelete = async (id) =>{
  //console.log(id)
  if (confirm('Êtes-vous sûr de vouloir supprimer ce role ?')) {
      EventBus.emit('show-loader');
    const r = await axios.delete(`http://backend.test/api/roles/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    const data = r.data
        EventBus.emit('hide-loader');
    //alert(data.message)
    await Swal.fire({
      title:'success',
      text:data.message,
      icon:'success',
      confirmButton:'Ok'
    })
  }
}

</script>

<template>
  <Loader  :isLoading="isLoading"/>

  <div class="mt-5">
    <div class="d-flex justify-content-between my-2">
      <h4 class="text-success">Liste des roles</h4>
      <router-link to="/roles" class="btn btn-sm btn-success ">Create</router-link>
    </div>
    <div class="table-responsive">
      <table class="table table-bordered  table-striped">
        <thead class="table-success">
        <tr class="negrita">
          <th colspan="2">Name</th>
          <th colspan="6">Permissions</th>
          <th colspan="2">Actions</th>
        </tr>
        </thead>
        <tbody >
        <tr v-if="roles" v-for="role in roles.roles" :key="role.id">
          <td colspan="2"  v-text="role.name"></td>
          <td colspan="3" v-if="role.permission.length>0">
            <span class="badge bg-primary p-1"  v-for="permission in role.permission">{{permission.name}}</span>
          </td>
          <td colspan="3"  v-else>
            <span class="badge bg-primary p-1">Aucune Permission</span>
          </td>
          <td colspan="4" >
            <button class="btn btn-sm btn-danger me-1" @click="onDelete(role.id)">Delete</button>
            <router-link :to="`/roles/${role.id}/edit`" class="btn btn-sm btn-success">Edit</router-link>
          </td>
        </tr>
        <tr v-else>
          <p class="text-light text-center bg-danger p-5 rounded-5 ">Aucune résarvation n'a été trouvé</p>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

