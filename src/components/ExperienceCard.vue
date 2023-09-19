<template>
  <div class="flex-startmd:flex dark:text-white">
    <div class="-ml-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-3 w-3 text-white"
      >
        <path
          fill-rule="evenodd"
          d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clip-rule="evenodd"
        />
        <path
          d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"
        />
      </svg>
    </div>
    <div
      class="mb-6 ml-6 block max-w-lg transform rounded-lg bg-white p-6 shadow-lg duration-300 hover:scale-105 dark:bg-gray-800"
    >
      <h2 class="font-bold text-blue-600">
        {{ company }}
      </h2>
      <div class="mb-4 flex justify-between">
        <p class="font-medium">{{ jobPosition }}</p>
        <p class="font-medium">{{ time }}</p>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="" v-html="description"></p>
      <div v-if="enableButtons == true" class="mt-4 space-x-4">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    company: { type: String, default: "" },
    jobPosition: { type: String, default: "" },
    time: { type: String, default: "" },
    description: { type: String, default: "" },
    enableButtons: { type: Boolean, default: false },
  },
  data() {
    return {};
  },
};
</script>
