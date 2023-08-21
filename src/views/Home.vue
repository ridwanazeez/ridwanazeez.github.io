<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="hero" class="flex dark:bg-gray-900 sm:h-screen">
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
              @click="scrollToSection('projects')"
            >
              Check out my projects <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="about-me" class="flex sm:h-screen">
    <div class="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
      <div class="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
        <img
          class="rounded-full object-cover object-center duration-300 hover:scale-105"
          alt="image of me"
          src="/images/me.jpg"
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
  <section id="skills" class="flex dark:bg-gray-900 sm:h-screen">
    <div class="container m-auto px-5 py-24">
      <div class="mb-10 flex w-full flex-col text-center">
        <h1 class="mb-4 text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl">Skills</h1>
      </div>
      <h2 class="mb-8 text-center text-2xl font-medium tracking-tight dark:text-white">
        Programming
      </h2>
      <div
        class="grid justify-items-center gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      >
        <SkillCard skill="HTML/CSS/JS" description=""></SkillCard>
        <SkillCard skill="test" description=""></SkillCard>
        <SkillCard skill="test" description=""></SkillCard>
        <SkillCard skill="Angular" description=""></SkillCard>
        <SkillCard skill="Vue JS" description=""></SkillCard>
        <SkillCard skill="PHP" description=""></SkillCard>
      </div>
    </div>
  </section>
  <section id="experience" class="flex dark:bg-gray-900 sm:h-screen">
    <div class="container m-auto px-5 py-24">
      <div class="mb-10 flex w-full flex-col text-center">
        <h1 class="mb-4 text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl">Experience</h1>
      </div>
      <div>
        <ol class="flex justify-center">
          <li class="border-l-2 border-blue-600">
            <ExperienceCard
              company="National Data Management Authority (NDMA)"
              job-position="Assistant ICT Engineer"
              time="February 2023 - Present"
              description="Built Web Applications for government agencies using the low-code development platform Frappe"
            ></ExperienceCard>
            <ExperienceCard
              company="Techlify Inc."
              job-position="Software Engineer"
              time="September 2022 - January 2023"
              description="Switched to the development team to pursue my interests in programming"
            ></ExperienceCard>
            <ExperienceCard
              company="Techlify Inc."
              job-position="Graphic Designer/Web Developer"
              time="April 2020 - August 2022"
              description="Designing promotional graphics and producing/editing videos for marketing campaigns on social media platforms alongside WordPress website development and maintenance"
            ></ExperienceCard>
          </li>
        </ol>
      </div>
    </div>
  </section>
  <section id="education" class="flex dark:bg-gray-900 sm:h-screen">
    <div class="container m-auto px-5 py-24">
      <div class="mb-10 flex w-full flex-col text-center">
        <h1 class="mb-4 text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl">Education</h1>
      </div>
      <div class="space-y-6">
        <EducationCard
          qualification="BSc. Computer Science"
          institution="The University of Guyana"
          time="2018 - 2020"
        ></EducationCard>
        <EducationCard
          qualification="ASc. Computer Science"
          institution="The University of Guyana"
          time="2016 - 2018"
        ></EducationCard>
      </div>
    </div>
  </section>
  <section id="projects" class="flex dark:bg-gray-900 sm:h-screen">
    <div class="container m-auto px-5 py-24">
      <div class="mb-10 flex w-full flex-col text-center">
        <h1 class="mb-4 text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl">Projects</h1>
        <p class="mx-auto text-base leading-relaxed dark:text-white lg:w-2/3">
          Here are some things I've worked on
        </p>
      </div>
      <div class="grid justify-items-center gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <a
          href="https://amcham.gy/"
          class="mx-auto transform overflow-hidden rounded-lg bg-white shadow-2xl duration-300 hover:scale-105 hover:shadow-lg dark:bg-slate-800 dark:shadow-md"
        >
          <img
            class="aspect-square object-cover object-center"
            src="/images/amcham.jpg"
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
            src="/images/empty-wallet.jpg"
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
import EducationCard from "../components/EducationCard.vue";
import ExperienceCard from "../components/ExperienceCard.vue";
import SkillCard from "../components/SkillCard.vue";
export default {
  components: {
    ExperienceCard,
    EducationCard,
    SkillCard,
  },
  data() {
    return {};
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
