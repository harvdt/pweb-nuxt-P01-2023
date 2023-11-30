<template>
    <div class="max-w-screen-md mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(person, index) in people" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
        <img :src="person.image" alt="Person Image" class="w-full h-48 object-cover object-center" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ person.name }}</h2>
          <p>{{ person.motto }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        people: [
          {
            name: 'Muhammad Harvian Dito Syahputra',
            image: 'https://via.placeholder.com/300',
            motto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            name: 'Ilhan Ahmad Syafa',
            image: 'https://via.placeholder.com/300',
            motto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            name: 'Gavriel Kurniaadi',
            image: 'https://via.placeholder.com/300',
            motto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }
        ]
      };
    }
  };
  </script>