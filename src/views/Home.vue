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
  <section ref="about-me" class="flex sm:h-screen">
    <div class="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
      <div class="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
        <img
          class="rounded-full object-cover object-center duration-300 hover:scale-105"
          alt="image of me"
          src="/me.jpg"
        />
      </div>
      <div
        class="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24"
      >
        <h1 class="mb-4 text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl">About Me</h1>
        <p class="mb-8 leading-relaxed dark:text-white">
          I'm a Software Developer with a development background primarily focused on Web
          Application Development using Web & JavaScript Frameworks & Libraries like
          <a class="text-blue-600 underline" href="https://angular.io/">Angular</a>,
          <a class="text-blue-600 underline" href="https://getbootstrap.com/">Bootstrap</a>,
          <a class="text-blue-600 underline" href="https://tailwindcss.com/">Tailwind CSS</a>,
          <a class="text-blue-600 underline" href="https://vuejs.org/">VueJS</a> and
          <a class="text-blue-600 underline" href="https://laravel.com/">Laravel</a>.
        </p>
        <p class="mb-8 leading-relaxed dark:text-white">
          I also have experience in Graphic Design, having worked as a freelance designer for a few
          years before joining a marketing agency that provided me the opportunity to work with
          numerous local companies to create content for their social media pages.
        </p>
        <a
          href="https://www.behance.net/ridwanazeez"
          class="mb-8 text-sm leading-relaxed text-gray-400"
          >...and I make art sometimes</a
        >
      </div>
    </div>
  </section>
  <section ref="experience" class="flex bg-blue-50 dark:bg-gray-900 sm:h-screen">
    <div class="container m-auto px-5 py-24">
      <div class="mb-10 flex w-full flex-col text-center">
        <h1 class="mb-4 text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl">Experience</h1>
      </div>
      <div>
        <ol class="flex justify-center">
          <li class="border-l-2 border-blue-600">
            <div class="flex-start md:flex">
              <div
                class="-ml-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  class="h-3 w-3 text-white"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
              </div>
              <div class="mb-10 ml-6 block max-w-md rounded-lg bg-gray-100 p-6 shadow-lg">
                <h2 class="font-bold text-blue-600 transition duration-300 ease-in-out">
                  National Data Management Authority (NDMA)
                </h2>
                <div class="mb-4 flex justify-between">
                  <p class="font-medium transition duration-300 ease-in-out">
                    Assistant ICT Engineer
                  </p>
                  <p class="font-medium transition duration-300 ease-in-out">
                    February 2023 - Present
                  </p>
                </div>
                <p class="">
                  Built Web Applications for government agencies using the low-code development
                  platform Frappe
                </p>
                <!-- <div class="space-x-4">
                  <button
                    type="button"
                    class="inline-block rounded bg-blue-600 px-4 py-1.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    class="inline-block rounded border-2 border-blue-600 px-3.5 py-1 text-xs font-medium uppercase leading-tight text-blue-600 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                  >
                    See demo
                  </button>
                </div> -->
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
  <section ref="projects" class="flex dark:bg-gray-900 sm:h-screen">
    <div class="container m-auto px-5 py-24">
      <div class="mb-10 flex w-full flex-col text-center">
        <h1 class="mb-4 text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl">Projects</h1>
        <p class="mx-auto text-base leading-relaxed dark:text-white lg:w-2/3">
          Here's some stuff I've worked on
        </p>
      </div>
      <div class="xs:grid-cols-2 grid justify-items-center gap-4 lg:grid-cols-5">
        <a
          href="https://amcham.gy/"
          class="mx-auto transform overflow-hidden rounded-lg bg-white shadow-2xl duration-300 hover:scale-105 hover:shadow-lg dark:bg-slate-800 dark:shadow-md"
        >
          <img
            class="aspect-square object-cover object-center"
            src="/amcham.jpg"
            alt="image of AmCham stage"
          />
          <div class="p-4">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">AmCham Guyana Website</h2>
            <h3 class="mb-2 text-gray-500">Wordpress</h3>
            <div class="flex items-center">
              <p class="mr-2 text-sm text-gray-500 dark:text-white">2020 • Company Client</p>
              <p class="ml-auto text-base font-medium text-blue-500">
                Visit <span aria-hidden="true">→</span>
              </p>
            </div>
          </div>
        </a>
        <router-link
          to="/gra-calculator"
          class="mx-auto transform overflow-hidden rounded-lg bg-white shadow-2xl duration-300 hover:scale-105 hover:shadow-lg dark:bg-slate-800 dark:shadow-md lg:col-start-2"
        >
          <img
            class="aspect-square object-cover object-center"
            src="/empty-wallet.jpg"
            alt="empty wallet"
          />
          <div class="p-4">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">
              Vehicle Import Taxes Calculator
            </h2>
            <h3 class="mb-2 text-gray-500">VueJS, Tailwind CSS</h3>
            <div class="flex items-center">
              <p class="mr-2 text-sm text-gray-500 dark:text-white">2022 • Personal</p>
              <p class="ml-auto text-base font-medium text-blue-500">
                Visit <span aria-hidden="true">→</span>
              </p>
            </div>
          </div>
        </router-link>
        <a
          href="#"
          class="mx-auto transform overflow-hidden rounded-lg bg-white shadow-2xl duration-300 hover:scale-105 hover:shadow-lg dark:bg-slate-800 dark:shadow-md"
        >
          <img
            class="aspect-square object-cover object-center"
            src="https://picsum.photos/500"
            alt=""
          />
          <div class="p-4">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">More Coming Soon</h2>
            <h3 class="mb-2 text-gray-500">...</h3>
            <div class="flex items-center">
              <p class="mr-2 text-sm text-gray-500 dark:text-white">2022 • Personal</p>
              <p class="ml-auto text-base font-medium text-blue-500">
                Visit <span aria-hidden="true">→</span>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    scrollTo(refName) {
      this.$refs[refName].scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
