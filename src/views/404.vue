<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="w-100 flex h-screen items-center justify-center bg-gradient-to-b from-emerald-600 to-emerald-400"
  >
    <div class="rounded-md bg-white px-40 py-20 shadow-xl">
      <div class="flex flex-col items-center">
        <h1 class="text-9xl font-bold text-emerald-500">404</h1>
        <h6 class="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
          Oops! Page not found
        </h6>
        <p class="mb-2 text-center text-gray-500 md:text-lg">
          The page you’re looking for doesn’t exist.
        </p>
        <p class="mb-8 text-center text-gray-500 md:text-lg">
          Unless you were looking for this page, then, congratulations! You found it!
        </p>
        <a class="bg-emerald-100 px-6 py-2 text-sm font-semibold text-emerald-800"
          ><router-link to="/">Go home</router-link></a
        >
      </div>
    </div>
  </div>
</template>

<script></script>
