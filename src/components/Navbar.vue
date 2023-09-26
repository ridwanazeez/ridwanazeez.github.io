<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative z-10 flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 right-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <router-link to="/"
              ><img class="block h-8 w-auto" src="../assets/my-logo.svg" alt="RA Logo"
            /></router-link>
          </div>
          <div class="absolute right-0 hidden sm:ml-6 md:block">
            <div class="flex space-x-4">
              <!-- <a
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                ><router-link to="/">Home</router-link></a
              > -->
              <button
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                @click="scrollToSection('about-me')"
              >
                About
              </button>
              <button
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                @click="scrollToSection('skills')"
              >
                Skills
              </button>
              <button
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                @click="scrollToSection('experience')"
              >
                Experience
              </button>
              <button
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                @click="scrollToSection('education')"
              >
                Education
              </button>
              <button
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                @click="scrollToSection('projects')"
              >
                Projects
              </button>
              <Menu as="div">
                <div>
                  <MenuButton
                    class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Links
                    <ChevronDownIcon class="ml-2 mr-1 h-5 w-5" aria-hidden="true" />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-1/4 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800"
                  >
                    <div class="py-1">
                      <MenuItem v-slot="{ active }">
                        <a
                          class="light:hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:dark:bg-gray-700 hover:dark:text-white"
                        >
                          <router-link to="/cloud-storage-comparison"
                            >Cloud Storage Comparison</router-link
                          >
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
              <button
                class="rounded-md px-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                @click="toggleDark()"
              >
                <MoonIcon v-if="isDark" class="h-5"></MoonIcon>
                <SunIcon v-else class="h-5"></SunIcon>
              </button>
              <Menu as="div">
                <div>
                  <MenuButton
                    class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    My Tools
                    <ChevronDownIcon class="ml-2 mr-1 h-5 w-5" aria-hidden="true" />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800"
                  >
                    <div class="py-1">
                      <MenuItem v-slot="{ active }">
                        <a
                          class="light:hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:dark:bg-gray-700 hover:dark:text-white"
                        >
                          <router-link to="/gra-calculator">Vehicle Import Calculator</router-link>
                        </a>
                      </MenuItem>
                    </div>
                    <div class="py-1">
                      <MenuItem v-slot="{ active }">
                        <a
                          class="light:hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:dark:bg-gray-700 hover:dark:text-white"
                        >
                          <router-link to="/number-checker">Number Checker</router-link>
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <DisclosurePanel class="md:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- <DisclosureButton
          class="block w-full rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          <router-link to="/">Home</router-link>
        </DisclosureButton> -->
        <DisclosureButton
          class="block w-full rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          @click="scrollToSection('about-me')"
        >
          About
        </DisclosureButton>
        <DisclosureButton
          class="block w-full rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          @click="scrollToSection('skills')"
        >
          Skills
        </DisclosureButton>
        <DisclosureButton
          class="block w-full rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          @click="scrollToSection('experience')"
        >
          Experience
        </DisclosureButton>
        <DisclosureButton
          class="block w-full rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          @click="scrollToSection('education')"
        >
          Education
        </DisclosureButton>
        <DisclosureButton
          class="block w-full rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          @click="scrollToSection('projects')"
        >
          Projects
        </DisclosureButton>
        <Menu as="div">
          <div>
            <MenuButton
              class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Links
              <ChevronDownIcon class="ml-2 mr-1 h-5 w-5" aria-hidden="true" />
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="w-100 absolute mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800"
            >
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:dark:bg-gray-700 hover:dark:text-white"
                  >
                    <router-link to="/cloud-storage-comparison"
                      >Cloud Storage Comparison</router-link
                    >
                  </a>
                </MenuItem>
              </div>
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:dark:bg-gray-700 hover:dark:text-white"
                  >
                    <router-link to="/guyana-isps-comparison">Guyana ISPs Comparison</router-link>
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <Menu as="div">
          <div>
            <MenuButton
              class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              My Tools
              <ChevronDownIcon class="ml-2 mr-1 h-5 w-5" aria-hidden="true" />
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="w-100 absolute mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800"
            >
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:dark:bg-gray-700 hover:dark:text-white"
                  >
                    <router-link to="/gra-calculator">Vehicle Import Calculator</router-link>
                  </a>
                </MenuItem>
              </div>
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:dark:bg-gray-700 hover:dark:text-white"
                  >
                    <router-link to="/number-checker">Number Checker</router-link>
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { MoonIcon, SunIcon } from "@heroicons/vue/outline/";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    // eslint-disable-next-line vue/no-reserved-component-names
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuIcon,
    XIcon,
    MoonIcon,
    SunIcon,
    ChevronDownIcon,
  },
  data() {
    return {
      isDark,
    };
  },
  computed: {
    toggleDark() {
      return useToggle(this.isDark);
    },
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
