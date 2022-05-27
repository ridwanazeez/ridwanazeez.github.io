<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex items-center justify-center w-100 h-screen bg-gradient-to-b from-emerald-600 to-emerald-400">
    <div class="px-40 py-20 bg-white rounded-md shadow-xl">
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-emerald-500 text-9xl">404</h1>
        <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">Oops! Page not found</h6>
        <p class="mb-2 text-center text-gray-500 md:text-lg">The page you’re looking for doesn’t exist.</p>
        <p class="mb-8 text-center text-gray-500 md:text-lg">Unless you were looking for this page, then, congratulations! You found it!</p>
        <a class="px-6 py-2 text-sm font-semibold text-emerald-800 bg-emerald-100"><router-link to="/">Go home</router-link></a>
      </div>
    </div>
  </div>
</template>

<script></script>
