<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/"><img class="block h-8 w-auto" src="../assets/my-logo.svg" alt="RA Logo" /></router-link>
          </div>
          <div class="hidden sm:block sm:ml-6 absolute right-0">
            <div class="flex space-x-4">
              <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><router-link to="/">Home</router-link></a>
              <button @click="toggleDark()" class="text-gray-300 hover:bg-gray-700 hover:text-white px-2 rounded-md">
                <MoonIcon v-if="isDark" class="h-5"></MoonIcon>
                <SunIcon v-else class="h-5"></SunIcon>
              </button>
              <Menu as="div">
                <div>
                  <MenuButton class="inline-flex justify-center w-full rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    Tools
                    <ChevronDownIcon class="mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1">
                      <MenuItem v-slot="{ active }">
                        <a class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" href="https://ridwanazeez.github.io/vehicle-import-calculator/">
                          Vehicle Import Calculator
                          <!-- <router-link to="/gra-calculator">Vehicle Import Calculator</router-link> -->
                        </a>
                      </MenuItem>
                    </div>
                    <div class="py-1">
                      <MenuItem v-slot="{ active }">
                        <a class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200">
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
    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium block w-full">
          <router-link to="/">Home</router-link>
        </DisclosureButton>
        <Menu as="div">
          <div>
            <MenuButton class="inline-flex justify-center w-full rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Tools
              <ChevronDownIcon class="mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </MenuButton>
          </div>
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="absolute mt-2 w-100 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" href="https://ridwanazeez.github.io/vehicle-import-calculator/">
                    Vehicle Import Calculator
                    <!-- <router-link to="/gra-calculator">Vehicle Import Calculator</router-link> -->
                  </a>
                </MenuItem>
              </div>
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200">
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

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { MoonIcon, SunIcon } from "@heroicons/vue/outline/";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
