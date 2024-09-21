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

</template>

<style scoped>

</style>