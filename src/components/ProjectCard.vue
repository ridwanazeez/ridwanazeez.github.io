<template>
  <div
    v-if="hover == true"
    class="mx-auto transform overflow-hidden rounded-lg bg-white shadow-2xl duration-300 hover:scale-105 hover:shadow-lg dark:bg-slate-800 dark:shadow-md"
  >
    <img class="aspect-square object-cover object-center" :src="imageURL" :alt="alt" />
    <div class="p-4">
      <h2 class="text-lg font-medium text-gray-900 dark:text-white">{{ projectTitle }}</h2>
      <h3 class="mb-2 text-gray-500">{{ tools }}</h3>
      <div class="flex items-center">
        <p class="mr-2 text-sm text-gray-500 dark:text-white">{{ date }}</p>
        <p v-if="comingSoon" class="ml-auto text-base font-medium text-gray-500">
          Visit (coming soon) <span aria-hidden="true">→</span>
        </p>
        <p v-else class="ml-auto text-base font-medium text-blue-500">
          Visit <span aria-hidden="true">→</span>
        </p>
      </div>
    </div>
  </div>
  <div
    v-else
    class="mx-auto transform overflow-hidden rounded-lg bg-white shadow-2xl duration-300 dark:bg-slate-800 dark:shadow-md"
  >
    <img class="aspect-square object-cover object-center" :src="imageURL" :alt="alt" />
    <div class="p-4">
      <h2 class="text-lg font-medium text-gray-900 dark:text-white">{{ projectTitle }}</h2>
      <h3 class="mb-2 text-gray-500">{{ tools }}</h3>
      <div class="flex items-center">
        <p class="mr-2 text-sm text-gray-500 dark:text-white">{{ date }}</p>
        <p v-if="comingSoon" class="ml-auto text-base font-medium text-gray-500">
          Visit (coming soon) <span aria-hidden="true">→</span>
        </p>
        <p v-else class="ml-auto text-base font-medium text-blue-500">
          Visit <span aria-hidden="true">→</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageURL: { type: String, default: "" },
    projectTitle: { type: String, default: "" },
    tools: { type: String, default: "" },
    date: { type: String, default: "" },
    alt: { type: String, default: "" },
    comingSoon: { type: Boolean, default: false },
    hover: { type: Boolean, default: true },
  },
  data() {
    return {};
  },
};
</script>
