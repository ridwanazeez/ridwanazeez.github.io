<template>
  <div class="w-48 rounded-2xl bg-white p-4 py-6 shadow-lg transition duration-300 hover:scale-105">
    <div class="flex flex-col items-center justify-center">
      <div class="relative h-24 w-24 rounded-full bg-blue-200">
        <svg
          v-if="icon == 'code'"
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
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform text-blue-700"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
          />
        </svg>
      </div>
      <p class="mb-4 mt-4 text-center text-xl font-medium text-gray-800">{{ skill }}</p>
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
    icon: { type: String, default: "" },
  },
  data() {
    return {};
  },
};
</script>
