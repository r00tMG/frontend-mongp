<script setup>
import {onMounted, ref} from "vue";
import axios from "@/axios.js";

const demandes = ref([])
onMounted(async ()=>{
  const r = axios.get('/demnades',{
    headers: {
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    }
  })
  demandes.value = await r.data
  console.log(demandes.value)
})
</script>

<template>
Salut
</template>

<style scoped>

</style>