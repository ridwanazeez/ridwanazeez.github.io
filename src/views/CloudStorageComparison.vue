<template>
  <div class="flex items-center justify-center py-10">
    <div class="dark:text-white">
      <div class="mb-5 flex w-full flex-row justify-between sm:mb-5">
        <h2 class="text-2xl leading-tight">
          Cloud Storage Providers Comparison
          <p class="mt-1 text-sm">Last Updated: 25/09/2023</p>
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
      <div class="tab mt-4">
        <button
          id="defaultOpen"
          :class="{
            'bg-gray-200 dark:bg-gray-800': activeTab === 'Individual',
            ' bg-gray-100 dark:bg-gray-700': activeTab !== 'Individual',
          }"
          class="tablinks rounded-t-lg p-4 transition-opacity"
          @click="openTab('Individual')"
        >
          Individual
        </button>
        <button
          :class="{
            'bg-gray-200 dark:bg-gray-800': activeTab === 'Business',
            'bg-gray-100 dark:bg-gray-700': activeTab !== 'Business',
          }"
          class="tablinks rounded-t-lg p-4 transition-opacity"
          @click="openTab('Business')"
        >
          Business
        </button>
      </div>
      <transition name="fade" mode="out-in">
        <div
          :key="activeTab"
          :class="[
            'tabcontent bg-gray-200 dark:bg-gray-800',
            { hidden: activeTab !== 'Individual' },
          ]"
        >
          <table v-show="currency == 'GYD'" class="table dark:text-white">
            <thead>
              <tr>
                <th
                  colspan="8"
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Individual Pricing, Annually
                </th>
              </tr>
              <tr>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Google Drive
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Google One
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Mega
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Mediafire
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Dropbox
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  OneDrive
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  iCloud
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">2GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">FREE</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">5GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">FREE</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">FREE</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">10GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">FREE</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">15GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">FREE</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">FREE</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">FREE</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">50GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">FREE</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$2,640</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">100GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$4,200</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$4,400</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$5,280</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">200GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$6,600</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$7,920</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">400GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$13,000</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">1TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$21,000</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$9,900</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$13,200</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">2TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$50,400</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$22,000</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$25,000</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$26,400</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$26,400</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">3TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$43,800</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">8TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$50,000</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">10TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$252,000</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">16TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$75,000</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">20TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$501,600</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">30TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$752,400</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
            </tbody>
          </table>
          <table v-show="currency == 'USD'" class="table dark:text-white">
            <thead>
              <tr>
                <th
                  colspan="8"
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Individual Pricing, Annually
                </th>
              </tr>
              <tr>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Google Drive
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Google One
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Mega
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Mediafire
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Dropbox
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  OneDrive
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  iCloud
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">2GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">FREE</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">5GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">FREE</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">FREE</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">10GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">FREE</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">15GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">FREE</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">FREE</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">FREE</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">50GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">FREE</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$12</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">100GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$20</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$20</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$24</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">200GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$30</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$36</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">400GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$60</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">1TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$95</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$45</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$60</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">2TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$229</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$100</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$114</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$120</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$120</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">3TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$199</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">8TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$227</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">10TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$1,145</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">16TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$341</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">20TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$2,280</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">30TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$3,420</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div
          :key="activeTab"
          :class="['tabcontent bg-gray-200 dark:bg-gray-800', { hidden: activeTab !== 'Business' }]"
        >
          <table v-show="currency == 'GYD'" class="table dark:text-white">
            <thead>
              <tr>
                <th
                  colspan="8"
                  class="space-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Business Pricing (per user), Annually
                </th>
              </tr>
              <tr>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Google Workspace
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Mega
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Mediafire
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Dropbox
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  OneDrive
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">30GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$15,840</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">1TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$13,200</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">2TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$31,680</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">5TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$47,520</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$33,000</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">15TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$30,000</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">100TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$35,200</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">Infinite*</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">*</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$52,800</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">*</td>
              </tr>
            </tbody>
          </table>
          <table v-show="currency == 'USD'" class="table dark:text-white">
            <thead>
              <tr>
                <th
                  colspan="8"
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Business Pricing (per user), Annually
                </th>
              </tr>
              <tr>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Google Workspace
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Mega
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Mediafire
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Dropbox
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  OneDrive
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">30GB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$72</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">1TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$60</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">2TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$144</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">5TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$216</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$150</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">15TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$136</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">100TB</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$160</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="border-b-2 border-white p-4 font-bold dark:text-white">Infinite*</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">*</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">-</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">$240</td>
                <td class="border-b-2 border-white p-4 text-center dark:text-white">*</td>
              </tr>
            </tbody>
          </table>
          <div class="p-4">
            <p class="text-sm">* Google Workspace: Contact Sales for pricing</p>
            <p class="text-sm">* OneDrive: Only available for teams of 5+ members</p>
          </div>
        </div>
      </transition>
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
      activeTab: "Individual",
    };
  },
  head: {
    title: "Cloud Storage Comparison",
    meta: [
      {
        name: "description",
        content:
          "Explore the best cloud storage options with our comprehensive comparison guide. Find the perfect solution for your needs. Cloud Storage Comparison made easy",
      },
      {
        property: "og:title",
        content: "Cloud Storage Comparison",
      },
      {
        property: "og:description",
        content:
          "Explore the best cloud storage options with our comprehensive comparison guide. Find the perfect solution for your needs. Cloud Storage Comparison made easy",
      },
      {
        property: "twitter:title",
        content: "Cloud Storage Comparison",
      },
      {
        property: "twitter:description",
        content:
          "Explore the best cloud storage options with our comprehensive comparison guide. Find the perfect solution for your needs. Cloud Storage Comparison made easy",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: window.location.href,
      },
    ],
  },
  mounted() {
    document.getElementById("defaultOpen").click();
  },
  methods: {
    toggleCurrency() {
      if (this.checked) {
        this.currency = "GYD";
      } else {
        this.currency = "USD";
      }
    },
    openTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
