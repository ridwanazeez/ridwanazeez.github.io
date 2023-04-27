<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <section id="hero" class="flex h-screen bg-gray-200">
    <div class="px-6 lg:px-8 m-auto">
      <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-sky-500 to-indigo-500 inline-block text-transparent bg-clip-text pb-5">Hello, my name is Ridwan</h1>
          <p class="text-lg leading-8 text-gray-600 dark:text-white">Software Engineer | Graphic Designer</p>
          <div class="mt-5 flex items-center justify-center gap-x-6">
            <a href="/contact" class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Contact Me (pls don't)</a>
            <a href="/projects" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Check out my projects <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="about-me" class="flex h-screen">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="image of me" src="../../public/empty-wallet.jpg" />
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl mb-4 text-gray-900">About Me</h1>
        <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aliquam.</p>
      </div>
    </div>
  </section>
  <section id="projects" class="flex h-screen bg-gray-200">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-10">
        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl mb-4 text-gray-900">Projects</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Here's some stuff I've worked on</p>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-3 justify-items-center gap-10 m-4">
        <a class="p-4 shadow-2xl bg-white rounded-3xl w-[90%]" href="/gra-calculator">
          <div class="h-full items-center text-center">
            <img alt="team" class="flex-shrink-0 rounded-2xl w-full aspect-square object-cover object-center mb-4" src="../../public/empty-wallet.jpg" />
            <div class="w-full">
              <h2 class="font-medium text-lg text-gray-900">Motor Vehicle Import Duty Calculator</h2>
              <h3 class="text-gray-500 mb-3">VueJS, Tailwind CSS</h3>
              <p class="mb-4">I rebuilt my own personal calculator and made it publicly available, for free!</p>
              <p class="text-sm font-semibold leading-6 text-blue-600 dark:text-white">Visit <span aria-hidden="true">→</span></p>
            </div>
          </div>
        </a>
        <a class="p-4 shadow-2xl bg-white rounded-3xl w-[90%]" href="/gra-calculator">
          <div class="h-full items-center text-center">
            <img alt="team" class="flex-shrink-0 rounded-2xl w-full aspect-square object-cover object-center mb-4" src="../../public/empty-wallet.jpg" />
            <div class="w-full">
              <h2 class="font-medium text-lg text-gray-900">Motor Vehicle Import Duty Calculator</h2>
              <h3 class="text-gray-500 mb-3">VueJS, Tailwind CSS</h3>
              <p class="mb-4">I rebuilt my own personal calculator and made it publicly available, for free!</p>
              <p class="text-sm font-semibold leading-6 text-blue-600 dark:text-white">Visit <span aria-hidden="true">→</span></p>
            </div>
          </div>
        </a>
        <a class="p-4 shadow-2xl bg-white rounded-3xl w-[90%]" href="/gra-calculator">
          <div class="h-full items-center text-center">
            <img alt="team" class="flex-shrink-0 rounded-2xl w-full aspect-square object-cover object-center mb-4" src="../../public/empty-wallet.jpg" />
            <div class="w-full">
              <h2 class="font-medium text-lg text-gray-900">Motor Vehicle Import Duty Calculator</h2>
              <h3 class="text-gray-500 mb-3">VueJS, Tailwind CSS</h3>
              <p class="mb-4">I rebuilt my own personal calculator and made it publicly available, for free!</p>
              <p class="text-sm font-semibold leading-6 text-blue-600 dark:text-white">Visit <span aria-hidden="true">→</span></p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
