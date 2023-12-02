<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">IT BLOG</h1>
        <ul class="flex space-x-6">
          <li><NuxtLink to="/" class="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">About</NuxtLink></li>
          <li><NuxtLink to="/news" class="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">News</NuxtLink></li>
        </ul>
      </div>
    </nav>
  </template>