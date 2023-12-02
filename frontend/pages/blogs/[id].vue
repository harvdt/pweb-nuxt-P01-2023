<template>
  <div class="single-blog container mx-auto p-4 mt-8">
    <nuxt-link
      class="button bg-gray-800 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded mb-8 transition-all duration-300"
      to="/blogs"
    >
      Back
    </nuxt-link>
    <br>
    <br>

    <div v-if="blogDetails" class="blog-info flex flex-col items-center lg:items-start gap-8">
      <div class="blog-img w-full">
        <img
          :src="blogDetails.imageLink"
          :alt="blogDetails.title"
          class="max-h-96 w-full object-cover rounded-lg shadow-lg mb-4"
        />
      </div>

      <div class="w-full lg:w-full">
        <h1 class="text-3xl font-semibold mb-4">{{ blogDetails.title }}</h1>

        <div class="text-lg mb-4">
          <p class="mb-2">
            <span class="font-semibold">Author:</span> {{ blogDetails.author }}
          </p>
          <p class="mb-2">
            <span class="font-semibold">Release Date:</span> {{ formatDate(blogDetails.releaseDate) }}
          </p>
        </div>

        <div class="text-lg mb-4">
          <span class="font-semibold">Content:</span> {{ blogDetails.content }}
        </div>
      </div>
    </div>

    <div v-else class="text-red-500 font-bold">
      Error fetching blog details. Please try again later.
    </div>
  </div>
</template>


<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const { id } = useRoute().params;
const blogDetails = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:5000/api/blog/${id}`);
    blogDetails.value = response.data;
  } catch (error) {
    console.error(`Error fetching blog details for ID ${id}:`, error);
    // Display an error message to the user
  }
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};
</script>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
}

.button {
  transition: background-color 0.3s, transform 0.3s;
}

.button:hover {
  background-color: #4a90e2;
  transform: scale(1.05);
}

.blog-info {
  overflow: hidden;
}

.blog-content {
  max-height: 450px;
  overflow-y: auto;
}

.blog-content p {
  line-height: 1.6;
}
</style>
