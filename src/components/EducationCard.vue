<template>
  <div class="flex items-center justify-center">
    <div
      class="max-w-lg transform rounded-lg bg-white p-6 shadow-lg duration-300 hover:scale-105 dark:bg-gray-800 dark:text-white"
    >
      <h2 class="font-bold text-blue-600">{{ qualification }}</h2>
      <div class="inline-flex space-x-4">
        <p class="font-normal">{{ institution }}</p>
        <p class="font-normal">{{ time }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    qualification: { type: String, default: "" },
    institution: { type: String, default: "" },
    time: { type: String, default: "" },
  },
  data() {
    return {};
  },
};
</script>
