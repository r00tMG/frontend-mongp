<script setup>
import {onMounted} from "vue";
import axios from "@/axios.js";

onMounted(async ()=>{
  const r = await axios.get('index/orders',{
    headers:{
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    }
  })
  const orders = await r.data.orders
  console.log(orders)
})
</script>

<template>
  <div class="mt-5">
    <div class="d-flex justify-content-between my-2">
      <h4 class="text-success">Les Commandes</h4>
    </div>
    <div class=" table-responsive">
      <table class="table table-bordered table-striped">
        <thead class="table-success">
        <tr>
          <th class="text-center px-2">GP</th>
          <th class="text-center px-2">Client</th>
          <th class="text-center px-2">Annonce</th>
          <th class="text-center px-2">Réservation(Kg)</th>
          <th class="text-center px-2">Prix(MAD)</th>
          <th class="text-center px-2">Status Reservation</th>
          <th class="text-center px-2">Status Commande</th>
        </tr>
        </thead>
        <tbody >
        <tr v-if="orders" v-for="annonce in orders">
          <td class="text-center" v-text="annonce.demande.annonce.user.name"></td>
          <td class="text-center" v-text="annonce.demande.client.name"></td>
          <td class="text-center"><a>
            <span class="badge bg-primary mx-1">{{annonce.annonce.origin}}</span><span class="badge bg-primary">{{annonce.annonce.destination}}</span>
          </a></td>
          <td class="text-center" v-text="annonce.demande.kilos_demandes"></td>
          <td class="text-center" v-text="annonce.total"></td>
          <td class="text-center" v-if="annonce.demande.status === 'en_attente'"><span class="badge bg-danger ">{{ annonce.demande.status }}</span></td>
          <td class="text-center" v-else><span class="badge bg-success">{{ annonce.demande.status }}</span></td>
          <td class="text-center"><span class="badge bg-danger ">{{ annonce.status }}</span></td>

        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>