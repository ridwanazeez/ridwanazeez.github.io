<template>
  <div class="w-48 rounded-2xl bg-white p-4 py-6 shadow-lg transition duration-300 hover:scale-105">
    <div class="flex flex-col items-center justify-center">
      <div class="relative h-24 w-24 rounded-full bg-blue-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          stroke="currentColor"
          stroke-width="1.5"
          fill="none"
          viewBox="0 0 24 24"
          class="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform text-blue-700"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      </div>
      <p class="mb-4 mt-4 text-xl font-medium text-gray-800">{{ skill }}</p>
      <p class="px-2 text-center text-xs text-gray-400">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: { type: String, default: "" },
    description: { type: String, default: "" },
    color: { type: String, default: "" },
  },
  data() {
    return {};
  },
};
</script>
