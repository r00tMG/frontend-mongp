<script setup>
import logo from '@/assets/images/logo.png'
</script>

<template>

  <footer class="container-fluid p-0 bg-success">
    <div class="d-flex justify-content-between align-items border-top  py-0 text-light">
      <router-link class="text-light text-decoration-none" to="/">
        <img :src="logo" alt="Logo" width="60" height="60">
        MonGP
      </router-link>
      <p class="pt-4 px-3">&copy; 2024 Company, Inc. All rights reserved. Prod By <span class="text-muted-light">@root</span></p>
    </div>
  </footer>
</template>
<style scoped>

</style>