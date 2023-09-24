<template>
  <div class="flex items-center justify-center py-10">
    <div class="rounded-md bg-white p-10 shadow-xl dark:bg-gray-800 dark:text-white">
      <div class="mb-5 flex w-full flex-row justify-between sm:mb-5">
        <h2 class="text-2xl leading-tight">
          Cloud Storage Providers Comparison
          <p class="text-lg">Individual Pricing, Annually</p>
          <p class="mt-1 text-sm">Last Updated: 24/09/2023</p>
        </h2>
        <div class="text-end">
          <label class="relative inline-flex cursor-pointer items-center">
            <input
              v-model="checked"
              type="checkbox"
              class="peer sr-only"
              @click="toggleCurrency()"
            />
            <div
              class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
            ></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Currency: {{ currency }}</span
            >
          </label>
        </div>
      </div>
      <h3>Notes:</h3>
      <p class="text-sm text-red-500">GYD values are calculated using the rate $1 USD = $220 GYD</p>
      <p class="text-sm text-red-500">
        Blank cells denote that the provider does not have this storage plan available
      </p>
      <table
        v-show="currency == 'GYD'"
        class="table rounded-lg bg-white dark:bg-gray-800 dark:text-white"
      >
        <thead>
          <tr>
            <th
              class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
            ></th>
            <th
              class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
            >
              Google Drive
            </th>
            <th
              class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
            >
              Google One
            </th>
            <th
              class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
            >
              Mega
            </th>
            <th
              class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
            >
              Mediafire
            </th>
            <th
              class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
            >
              Dropbox
            </th>
            <th
              class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
            >
              OneDrive
            </th>
            <th
              class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
            >
              iCloud
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">2GB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">FREE</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">5GB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">FREE</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">FREE</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">10GB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">FREE</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">15GB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">FREE</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">FREE</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">FREE</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">50GB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">FREE</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$2,640</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">100GB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$4,200</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$4,400</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$5,280</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">200GB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$6,600</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$7,920</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">400GB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$13,000</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">1TB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$21,000</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$9,900</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$13,200</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">2TB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$50,400</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$22,000</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$25,000</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$26,400</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$26,400</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">3TB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$43,800</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">8TB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$50,000</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">10TB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$252,000</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">16TB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$75,000</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">20TB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$501,600</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">30TB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$752,400</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
        </tbody>
      </table>
      <table
        v-show="currency == 'USD'"
        class="table rounded-lg bg-white dark:bg-gray-800 dark:text-white"
      >
        <thead>
          <tr>
            <th
              class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
            ></th>
            <th
              class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
            >
              Google Drive
            </th>
            <th
              class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
            >
              Google One
            </th>
            <th
              class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
            >
              Mega
            </th>
            <th
              class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
            >
              Mediafire
            </th>
            <th
              class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
            >
              Dropbox
            </th>
            <th
              class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
            >
              OneDrive
            </th>
            <th
              class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
            >
              iCloud
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">2GB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">FREE</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">5GB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">FREE</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">FREE</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">10GB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">FREE</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">15GB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">FREE</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">FREE</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">FREE</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">50GB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">FREE</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$12</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">100GB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$20</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$20</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$24</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">200GB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$30</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$36</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">400GB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$60</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">1TB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$95</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$45</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$60</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">2TB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$229</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$100</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$114</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">3TB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$199</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">8TB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$227</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">10TB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$1,145</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">16TB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$341</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">20TB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$2,280</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
          <tr class="text-gray-700">
            <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">30TB</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$3,420</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
            <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      checked: false,
      currency: "GYD",
    };
  },
  methods: {
    toggleCurrency() {
      if (this.checked) {
        this.currency = "GYD";
      } else {
        this.currency = "USD";
      }
    },
  },
};
</script>
