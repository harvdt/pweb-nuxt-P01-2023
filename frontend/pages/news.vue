<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-8">News On This Day</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-if="blogData === null && !dataFetched">Fetching data on client...</div>
      <div
        v-for="post in blogData"
        :key="post.id"
        class="bg-white p-4 rounded-lg shadow-md"
      >
        <img
          :src="post.imageLink"
          alt="Blog Image"
          class="w-full h-32 object-cover mb-4 rounded-md"
        />
        <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
        <p class="text-gray-800">{{ post.content }}</p>
        <p class="text-gray-600 mb-2">By {{ post.author }}</p>
        <p class="text-gray-800 mb-4">{{ formatDate(post.releaseDate) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, watch } from 'vue';

const blogData = ref(null);
const dataFetched = ref(false);

onMounted(async () => {
  const response = await axios.get("http://localhost:5000/api/blog");
  const fetchedPosts = response.data.docs;

  blogData.value = fetchedPosts.map((blog) => ({
    id: blog.id,
    title: blog.title,
    author: blog.author,
    releaseDate: blog.releaseDate,
    imageLink: blog.imageLink,
    content: blog.content,
  }));

  dataFetched.value = true;
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

// Watch for changes in blogData to handle cases where data is fetched quickly
watch(blogData, () => {
  if (blogData.value !== null) {
    dataFetched.value = true;
  }
});
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
