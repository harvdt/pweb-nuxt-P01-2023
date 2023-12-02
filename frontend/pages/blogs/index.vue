<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-8">Posts On This Day</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-if="blogData === null && !dataFetched" class="text-center text-gray-600">Fetching data...</div>
      <NuxtLink
        v-for="post in blogData"
        @click="navigateToBlogPost(post.id)"
        :class="{
          'bg-white p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer':
            true
        }"
        :key="post.id"
      >
        <img
          :src="post.imageLink"
          alt="Blog Image"
          class="w-full h-32 object-cover mb-4 rounded-md"
        />
        <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
        <p class="text-gray-800 line-clamp-4">{{ post.content }}</p>
        <p class="text-gray-600 mb-2">By {{ post.author }}</p>
        <p class="text-gray-800 mb-4">{{ formatDate(post.releaseDate) }}</p>
      </NuxtLink>
      <div v-if="errorMessage" class="text-red-500 font-bold">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const blogData = ref(null);
const dataFetched = ref(false);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/blog");
    const fetchedPosts = response.data.docs;

    console.log("Fetched Posts:", fetchedPosts);

    if (Array.isArray(fetchedPosts)) {
      blogData.value = fetchedPosts;
    } else {
      console.error("Unexpected API response format - 'docs' property not found:", response.data);
    }

    dataFetched.value = true;
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}/${formattedMonth}/${year}`;
};

// Function to programmatically navigate to specific blog post URL
const navigateToBlogPost = (postId) => {
  router.push(`/blogs/${postId}`);
};
</script>


<style scoped>
.container {
  max-width: 1200px;
}

.grid {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.text-gray-800 {
  margin-bottom: 1rem;
}
</style>
