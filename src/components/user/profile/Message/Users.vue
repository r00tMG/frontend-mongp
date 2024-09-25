<template>
  <div>
    <h1>Users</h1>
    <!-- Loop through all users and display their name and role -->
    <div v-for="user in users" :key="user.id">
      <!-- Ensure the logged-in user is not displayed in the list -->
      <div v-if="parseInt(userId) !== user.id">
        <!-- Link to open the chat with the selected user -->
        <p class="text-blue-500 hover:underline cursor-pointer mb-2">
          <strong>
            <router-link
                :to="{ name: 'chat', params: { receiverId: user.id, receiverName: user.name, senderId: parseInt(userId) } }"
                class="navbar-link">
              {{ user.name }}
            </router-link>
          </strong>
        </p>
        <!-- Display the user's role -->
<!--        <p class="text-gray-700 mb-2">
          <strong>Role: </strong>
          <span :class="{'text-green-500': user.role === 'employer', 'text-blue-500': user.role === 'user'}">
            {{ user.role === 'employer' ? 'Employer' : 'User' }}
          </span>
        </p>-->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from '@/axios.js';

export default {
  setup() {
    const users = ref([]); // All users list
    const userId = ref(''); // Logged-in user's ID

    // Function to fetch all users
    const fetchData = async () => {
      try {
        const response = await axios.get('/users', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        users.value = response.data.users;
        console.log(users.value)
      } catch (error) {
        console.log(error);
      }
    };

    // Function to get the logged-in user's ID
    const getUserId = () => {
      userId.value = localStorage.getItem('user_id');
      console.log('The logged-in user ID is: ' + userId.value);
    };

    onMounted(() => {
      fetchData();
      getUserId();
    });

    return {
      users,
      userId,
    };
  },
};
</script>
