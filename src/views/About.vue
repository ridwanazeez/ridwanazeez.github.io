<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="hero" class="flex bg-blue-50 dark:bg-gray-900 sm:h-screen">
    <div class="m-auto px-6 lg:px-8">
      <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1
            class="inline-block bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text pb-5 text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
          >
            Hello, my name is Ridwan
          </h1>
          <p class="text-lg leading-8 text-gray-600 dark:text-white">
            Software Engineer | Graphic Designer
          </p>
          <div class="mt-5 flex items-center justify-center gap-x-6">
            <a
              class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >Contact Me (pls don't)</a
            >
            <button
              class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              @click="scrollTo('projects')"
            >
              Check out my projects <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
