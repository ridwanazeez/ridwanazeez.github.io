<template>
  <div class="bg-gray-100">
    <nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <router-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1914.72 1482.31" class="w-20 h-20">
            <g>
              <polygon class="logo-stroke" points="1904.72 1106.09 1904.72 376.75 1273.09 12.09 641.47 376.75 641.47 1106.09 1273.09 1470.76 1904.72 1106.09" />
              <polygon class="logo-stroke" points="1370.96 740.88 276.96 109.26 276.96 1372.51 1370.96 740.88" />
              <polygon class="logo-stroke" points="1273.25 1105.55 1273.25 376.22 641.63 11.55 10 376.22 10 1105.55 641.63 1470.22 1273.25 1105.55" />
              <path class="logo-text" d="M402.82,945.67,314.64,756.51H267.52V945H173.27V473.1H351c78.09,0,141.37,64,141.37,142a140.65,140.65,0,0,1-82.8,128.58l93.57,201.95ZM267.52,567.35v94.91H351a46.83,46.83,0,0,0,47.12-47.12c0-26.25-20.87-47.79-47.12-47.79Z" />
              <path class="logo-text" d="M1681,858.16H1485.81l-44.43,87.51H1335.69L1576,473.78h27.6l222.82,471.89H1722.09Zm-44.42-94.25-49.14-105-53.19,105Z" />
            </g>
          </svg>
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
        <li class="text-gray-800 hover:text-blue-400 font-bold"><router-link to="/">Home</router-link></li>
        <li class="text-gray-800 hover:text-blue-400 font-bold"><router-link to="/about">About</router-link></li>
        <li>
          <div>
            <!-- Dropdown toggle button -->
            <button @click="show = !show" class="flex items-center text-gray-800 bg-gray-100 rounded-md focus:outline-none">
              <span class="mr-4 font-bold">Tools</span>
              <svg class="w-5 h-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div v-show="show" class="py-2 mt-2 bg-gray-200 rounded-md shadow-xl lg:absolute">
              <router-link to="/gra-calculator" class="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-400 hover:text-gray-800">Motor Vehicle Import Tax Calculator</router-link>
            </div>
          </div>
        </li>
        <li class="text-gray-800 hover:text-blue-400 font-bold"><router-link to="/blog">Blog</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let showMenu = ref(false);
    let show = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, show, toggleNav };
  },
};
</script>

<style>
.logo-stroke {
  fill: none;
  stroke: rgb(0, 0, 0);
  stroke-miterlimit: 10;
  stroke-width: 20px;
}
.logo-text {
  fill: rgb(0, 0, 0);
}
</style>
