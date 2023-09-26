<template>
  <div class="flex items-center justify-center py-10">
    <div class="dark:text-white">
      <div class="mb-5 flex w-full flex-row justify-between sm:mb-5">
        <h2 class="text-2xl leading-tight">
          Guyana's ISPs Compared
          <p class="mt-1 text-sm">Last Updated: 25/09/2023</p>
        </h2>
      </div>
      <div class="tab mt-4">
        <button
          id="defaultOpen"
          :class="{
            'bg-gray-800': activeTab === 'Residential',
            'bg-gray-700': activeTab !== 'Residential',
          }"
          class="tablinks rounded-t-lg p-4 transition-opacity"
          @click="openTab('Residential')"
        >
          Residential
        </button>
        <button
          :class="{
            'bg-gray-800': activeTab === 'Business',
            'bg-gray-700': activeTab !== 'Business',
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
          :class="['tabcontent bg-gray-800', { hidden: activeTab !== 'Residential' }]"
        >
          <table class="table dark:text-white">
            <thead>
              <tr>
                <th
                  colspan="9"
                  class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
                >
                  Residential Pricing
                </th>
              </tr>
              <tr>
                <th
                  class="dark:border-dark-5 whitespace-nowrap px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Company
                </th>
                <th
                  class="dark:border-dark-5 whitespace-nowrap px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Plan
                </th>
                <th
                  colspan="2"
                  class="dark:border-dark-5 whitespace-nowrap px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Advertised Speed (Mbps)
                </th>
                <th
                  class="dark:border-dark-5 whitespace-nowrap px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Monthly Cost
                </th>
                <th
                  class="dark:border-dark-5 whitespace-nowrap px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Price per Mbps
                </th>
                <th
                  class="dark:border-dark-5 whitespace-nowrap px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Install Fee
                </th>
                <th
                  class="dark:border-dark-5 whitespace-nowrap px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Total Upfront Cost
                </th>
                <th
                  class="dark:border-dark-5 whitespace-nowrap px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Notes
                </th>
              </tr>
              <tr>
                <th
                  class="dark:border-dark-5 whitespace-nowrap border-b-2 px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="dark:border-dark-5 whitespace-nowrap border-b-2 px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="dark:border-dark-5 whitespace-nowrap border-b-2 px-4 pb-4 font-bold text-gray-900 dark:text-white"
                >
                  Download
                </th>
                <th
                  class="dark:border-dark-5 whitespace-nowrap border-b-2 px-4 pb-4 font-bold text-gray-900 dark:text-white"
                >
                  Upload
                </th>
                <th
                  class="dark:border-dark-5 whitespace-nowrap border-b-2 px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="dark:border-dark-5 whitespace-nowrap border-b-2 px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="dark:border-dark-5 whitespace-nowrap border-b-2 px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="dark:border-dark-5 whitespace-nowrap border-b-2 px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="dark:border-dark-5 whitespace-nowrap border-b-2 px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) of tableData" :key="index" class="text-gray-700">
                <td class="dark:border-dark-5 border-b-2 px-4 py-1 font-bold dark:text-white">
                  {{ data }}<sup>1*</sup>
                </td>
                <td class="dark:border-dark-5 border-b-2 px-4 py-1 text-center dark:text-white">
                  Fibre 50
                </td>
                <td class="dark:border-dark-5 border-b-2 px-4 py-1 text-center dark:text-white">
                  100
                </td>
                <td class="dark:border-dark-5 border-b-2 px-4 py-1 text-center dark:text-white">
                  20
                </td>
                <td class="dark:border-dark-5 border-b-2 px-4 py-1 text-center dark:text-white">
                  $8,999
                </td>
                <td class="dark:border-dark-5 border-b-2 px-4 py-1 text-center dark:text-white">
                  $89.99
                </td>
                <td class="dark:border-dark-5 border-b-2 px-4 py-1 text-center dark:text-white">
                  $20,000
                </td>
                <td class="dark:border-dark-5 border-b-2 px-4 py-1 text-center dark:text-white">
                  $28,999
                </td>
                <td
                  class="dark:border-dark-5 border-b-2 px-4 py-1 text-center dark:text-white"
                ></td>
              </tr>
            </tbody>
          </table>
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div
          :key="activeTab"
          :class="['tabcontent bg-gray-800', { hidden: activeTab !== 'Business' }]"
        >
          <table class="table dark:text-white">
            <thead>
              <tr>
                <th
                  colspan="8"
                  class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
                >
                  Business Pricing (per user), Annually
                </th>
              </tr>
              <tr>
                <th
                  class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-bold text-gray-900 dark:text-white"
                >
                  Google Workspace
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
              </tr>
            </thead>
            <tbody>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">30GB</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$72</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">1TB</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$60</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">2TB</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$144</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">5TB</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$216</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$150</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">15TB</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$136</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">100TB</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$160</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
              </tr>
              <tr class="text-gray-700">
                <td class="dark:border-dark-5 border-b-2 p-4 font-bold dark:text-white">
                  Infinite*
                </td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">*</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">-</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">$240</td>
                <td class="dark:border-dark-5 border-b-2 p-4 text-center dark:text-white">*</td>
              </tr>
            </tbody>
          </table>
        </div>
      </transition>
      <div class="p-2">
        <p class="text-sm">
          <sup>1*</sup> Information Sourced from:
          <a class="text-blue-500" href="" target="_blank">1, </a>
          <a class="text-blue-500" href="" target="_blank">2 </a>
        </p>
        <p class="text-sm">
          <sup>2*</sup> Information Sourced from:
          <a class="text-blue-500" href="" target="_blank">1, </a>
          <a class="text-blue-500" href="" target="_blank">2 </a>
        </p>
      </div>
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
      activeTab: "Residential",
      tableData: {
        GTT: [
          {
            Plan: "Fibre 50",
            Download: 100,
            Upload: 20,
            "Monthly Cost": 8999,
            "Install Fee": 20000,
            Notes: "",
          },
          {
            Plan: "Fibre 100",
            Download: 200,
            Upload: 20,
            "Monthly Cost": 10999,
            "Install Fee": 20000,
            Notes: "",
          },
          {
            Plan: "Fibre 150",
            Download: 300,
            Upload: 20,
            "Monthly Cost": 12999,
            "Install Fee": 20000,
            Notes: "",
          },
          {
            Plan: "Fibre + Voice 100",
            Download: 100,
            Upload: 20,
            "Monthly Cost": 10999,
            "Install Fee": 20000,
            Notes: "",
          },
          {
            Plan: "Fibre + Voice 200",
            Download: 200,
            Upload: 20,
            "Monthly Cost": 12999,
            "Install Fee": 20000,
            Notes: "",
          },
          {
            Plan: "Fibre + Voice 300",
            Download: 300,
            Upload: 20,
            "Monthly Cost": 14999,
            "Install Fee": 20000,
            Notes: "",
          },
        ],
        ENet: [
          {
            Plan: "Fibre 50",
            Download: 100,
            Upload: 20,
            "Monthly Cost": 8999,
            "Install Fee": 20000,
            Notes: "",
          },
          {
            Plan: "Fibre 100",
            Download: 200,
            Upload: 20,
            "Monthly Cost": 10999,
            "Install Fee": 20000,
            Notes: "",
          },
          {
            Plan: "Fibre 150",
            Download: 300,
            Upload: 20,
            "Monthly Cost": 12999,
            "Install Fee": 20000,
            Notes: "",
          },
          {
            Plan: "Fibre + Voice 100",
            Download: 100,
            Upload: 20,
            "Monthly Cost": 10999,
            "Install Fee": 20000,
            Notes: "",
          },
          {
            Plan: "Fibre + Voice 200",
            Download: 200,
            Upload: 20,
            "Monthly Cost": 12999,
            "Install Fee": 20000,
            Notes: "",
          },
          {
            Plan: "Fibre + Voice 300",
            Download: 300,
            Upload: 20,
            "Monthly Cost": 14999,
            "Install Fee": 20000,
            Notes: "",
          },
        ],
      },
    };
  },
  mounted() {
    document.getElementById("defaultOpen").click();
  },
  methods: {
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
