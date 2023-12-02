<template>
  <nav class="bg-gray-800 border-b border-gray-600">
    <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <h1 class="text-3xl font-bold text-white">IT Blogs</h1>
      <ul class="flex space-x-6">
        <li>
          <NuxtLink
            to="/"
            class="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/blogs"
            class="text-white hover:text-gray-300 transition duration-300"
          >
            Blogs
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="text-white hover:text-gray-300 transition duration-300"
          >
            About
          </NuxtLink>
        </li>
        
      </ul>
    </div>
  </nav>