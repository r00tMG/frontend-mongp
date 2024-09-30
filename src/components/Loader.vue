<template>
  <div v-if="isLoading" class="loader-overlay">
    <div class="spinner"></div> </div> </template>
<script>
import { EventBus } from '@/eventBus';

export default {
  data() {
    return {
      isLoading: false
    };
  },
  created() {
    // Listen for the 'show-loader' event
    EventBus.on('show-loader', () => {
      this.isLoading = true;
    });

    // Listen for the 'hide-loader' event
    EventBus.on('hide-loader', () => {
      this.isLoading = false;
    });
  },
  beforeUnmount() {
    // Remove the event listeners when the component is destroyed
    EventBus.off('show-loader');
    EventBus.off('hide-loader');
  }
};
</script>
<style scoped> .loader-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center; z-index: 9999; } .spinner { width: 50px; height: 50px; border: 5px solid rgba(255, 255, 255, 0.3); border-radius: 50%; border-top-color: white; animation: spin 1s infinite linear; } @keyframes spin { to { transform: rotate(360deg); } } </style>