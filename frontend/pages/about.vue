<template>
  <div class="max-w-screen-md mx-auto py-8 px-4 text-center">
    <h1 class="text-3xl font-semibold mb-4">
      Praktikum Modul 4 Pemrograman Web Kelompok P01
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      <div v-for="(person, index) in people" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <img :src="person.image" alt="Person Image" class="w-full h-48 object-cover object-center" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ person.name }}</h2>
          <p>{{ person.NRP }}</p>
        </div>
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
            image: 'https://i.ibb.co/0qwdfDn/dito.jpg',
            NRP: '5027221039'
          },
          {
            name: 'Ilhan Ahmad Syafa',
            image: 'https://i.ibb.co/xL45jLp/Foto-3.jpg',
            NRP: '5027221040'
          },
          {
            name: 'Gavriel Pramuda Kurniaadi',
            image: 'https://i.ibb.co/4pNt1nL/adi.jpg',
            NRP: '5027221031'
          }
        ]
      };
    }
  };
  </script>