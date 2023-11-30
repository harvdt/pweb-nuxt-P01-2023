<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-8">Blog Posts</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="post in blogData" :key="post.id" class="bg-white p-4 rounded-lg shadow-md">
        <img :src="post.imageLink" alt="Blog Image" class="w-full h-32 object-cover mb-4 rounded-md">
        <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
        <p class="text-gray-600 mb-2">By {{ post.author }}</p>
        <p class="text-gray-800">{{ formatDate(post.releaseDate) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blogData: [],
    };
  },
  mounted() {
    this.fetchBlogData();
  },
  methods: {
    fetchBlogData() {
      // Assume you retrieve blog data with image URLs from an API
      axios
        .get("http://localhost:5000/api/blog")
        .then((response) => {
          const fetchedPosts = response.data.docs;
          this.blogData = fetchedPosts.map((blog) => ({
            id: blog.id,
            title: blog.title,
            author: blog.author,
            releaseDate: blog.releaseDate,
            imageLink: blog.imageLink,
            content: blog.content,
          }));
          console.log(blog.imageLink);
        })
        .catch((error) => {
          console.error("Error fetching blog data:", error);
        });
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      // Tambah angka 0 di depan jika hari atau bulan kurang dari 10
      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;

      return `${formattedDay}/${formattedMonth}/${year}`;
    },
  },
};
</script>

<style scoped>
/* Add your Tailwind CSS styles here */
.container {
  max-width: 1200px;
}

.grid {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
