<template>
  <div class="container">
    <div v-if="selectedUser">
      <h2>Chatting with {{ selectedUser.name }}</h2>

      <!-- Display messages between the two users -->
      <div v-for="message in messages" :key="message.id" class="mb-2">
        <p>
          <!-- Correctly display 'You' for the logged-in user's messages -->
          <strong>
            {{ message.emetteur_id === parseInt(userId) ? 'You' : selectedUser.name }}:
          </strong>
          {{ message.contenu }}
        </p>
      </div>

      <!-- Input form to send a message -->
      <form @submit.prevent="submit" class="mt-4">
        <input
            v-model="newMessage"
            type="text"
            placeholder="Write a message..."
            class="border p-2 w-full"
        />
        <button type="submit" class="bg-black-500 text-black px-4 py-2 mt-2">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from '@/axios.js';

export default {
  setup() {
    const messages = ref([]);         // Chat messages
    const newMessage = ref('');       // The message being typed
    const userId = ref('');   // The authenticated user's ID
    const selectedUser = ref({});
    //const recepteur_id = ref('')// The selected user for chat (receiver)

    // Function to fetch messages between the logged-in user and selected user
    const fetchMessages = async (recepteur_id) => {
      try {
        const response = await axios.get(`/messages/${recepteur_id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        messages.value = response.data;
        console.log(messages.value)
      } catch (error) {
        console.log('Error fetching messages:', error);
      }
    };

    // Function to submit a new message
    const submit = async () => {
      if (!newMessage.value || !selectedUser.value.id) {
        console.log("Message or receiver ID is missing.");
        return;
      }

      const payload = {
        recepteur_id: selectedUser.value.id, // Pass the receiver's ID correctly
        contenu: newMessage.value           // The message being sent
      };

      try {
        await axios.post('/messages', payload, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        newMessage.value = ''; // Clear the input after sending the message
        await fetchMessages(selectedUser.value.id); // Fetch updated messages
      } catch (error) {
        console.log("Error sending message:", error.response?.data || error);
      }
    };

    onMounted(() => {
      // Get the logged-in user ID from localStorage
      userId.value = JSON.parse(localStorage.getItem('data')).user.id;

      const receiverId = this.$route.params.receiverId;
      const receiverName = this.$route.params.receiverName;

      // Set the selected user (receiver)
      selectedUser.value = { id: receiverId, name: receiverName };

      // Fetch messages between the logged-in user and the selected user
      fetchMessages(receiverId);
    });

    return {
      messages,
      newMessage,
      userId,
      selectedUser,
      submit,
    };
  }
};
</script>
