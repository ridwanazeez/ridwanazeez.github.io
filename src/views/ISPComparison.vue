<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="flex items-center justify-center py-10">
    <div class="dark:text-white">
      <div class="mb-5 flex w-full flex-row justify-between sm:mb-5">
        <h2 class="text-2xl leading-tight">
          Guyana's ISPs Compared
          <p class="mt-1 text-sm">Last Updated: 11/10/2023</p>
        </h2>
      </div>
      <div class="tab mt-4">
        <button
          id="defaultOpen"
          :class="{
            'bg-gray-200 dark:bg-gray-800': activeTab === 'Residential',
            'bg-gray-100 dark:bg-gray-700': activeTab !== 'Residential',
          }"
          class="tablinks rounded-t-lg p-4 transition-opacity"
          @click="openTab('Residential')"
        >
          Residential
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
            { hidden: activeTab !== 'Residential' },
          ]"
        >
          <table class="table dark:text-white">
            <thead>
              <tr>
                <th
                  colspan="9"
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Residential Pricing
                </th>
              </tr>
              <tr>
                <th
                  class="whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Company
                </th>
                <th
                  class="whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Plan
                </th>
                <th
                  colspan="2"
                  class="whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Advertised Speed (Mbps)
                </th>
                <th
                  class="whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Monthly Cost
                </th>
                <th
                  class="whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Price per Mbps
                </th>
                <th
                  class="whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Install Fee
                </th>
                <th
                  class="whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Total Upfront Cost
                </th>
                <th
                  class="whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Notes
                </th>
              </tr>
              <tr>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                >
                  Download
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                >
                  Upload
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(data, index) of residentialTableData.GTT"
                :key="index"
                class="text-gray-700"
              >
                <!-- COMPANY COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 font-bold dark:text-white">
                  GTT<sup>1*</sup>
                </td>
                <!-- PLAN COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.plan }}
                </td>
                <!-- DOWNLOAD COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.download }}
                </td>
                <!-- UPLOAD COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.upload }}
                </td>
                <!-- MONTHLY COST COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + Math.round(data.cost).toLocaleString() }}
                </td>
                <div hidden>
                  {{ (pricePerMbps = data.cost / data.download) }}
                </div>
                <!-- PRICE PER MBPS COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + pricePerMbps.toFixed(2).toLocaleString() }}
                </td>
                <!-- INSTALL FEE COLUMN -->
                <td
                  v-if="typeof data.fee == 'string'"
                  class="border-b-2 border-white px-4 py-1 text-center dark:text-white"
                >
                  {{ data.fee }}
                </td>
                <td v-else class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + Math.round(data.fee).toLocaleString() }}
                </td>
                <div hidden>
                  {{ (totalCost = data.fee + data.cost) }}
                </div>
                <!-- TOTAL COST COLUMN -->
                <td
                  v-if="typeof data.fee == 'string'"
                  class="border-b-2 border-white px-4 py-1 text-center dark:text-white"
                >
                  {{ data.fee }}
                </td>
                <td v-else class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + totalCost.toLocaleString() }}
                </td>
                <!-- NOTES COLUMN -->
                <td
                  class="border-b-2 border-white px-4 py-1 text-center dark:text-white"
                  v-html="data.notes"
                ></td>
              </tr>
              <tr
                v-for="(data, index) of residentialTableData.ENet"
                :key="index"
                class="text-gray-700"
              >
                <!-- COMPANY COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 font-bold dark:text-white">
                  ENet<sup>2*</sup>
                </td>
                <!-- PLAN COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.plan }}
                </td>
                <!-- DOWNLOAD COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.download }}
                </td>
                <!-- UPLOAD COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.upload }}
                </td>
                <!-- MONTHLY COST COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + Math.round(data.cost).toLocaleString() }}
                </td>
                <div hidden>
                  {{ (pricePerMbps = data.cost / data.download) }}
                </div>
                <!-- PRICE PER MBPS COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + pricePerMbps.toFixed(2).toLocaleString() }}
                </td>
                <!-- INSTALL FEE COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + Math.round(data.fee).toLocaleString() }}
                </td>
                <div hidden>
                  {{ (totalCost = data.fee + data.cost) }}
                </div>
                <!-- TOTAL COST COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + totalCost.toLocaleString() }}
                </td>
                <!-- NOTES COLUMN -->
                <td
                  class="border-b-2 border-white px-4 py-1 text-center dark:text-white"
                  v-html="data.notes"
                ></td>
              </tr>
              <tr
                v-for="(data, index) of residentialTableData.NexLink"
                :key="index"
                class="text-gray-700"
              >
                <!-- COMPANY COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 font-bold dark:text-white">
                  NexLink<sup>3*</sup>
                </td>
                <!-- PLAN COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.plan }}
                </td>
                <!-- DOWNLOAD SPEED COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.download }}
                </td>
                <!-- UPLOAD SPEED COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.upload }}
                </td>
                <!-- MONTHLY COST COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + Math.round(data.cost).toLocaleString() }}
                </td>
                <div hidden>
                  {{ (pricePerMbps = data.cost / data.download) }}
                </div>
                <!-- PRICE PER MBPS COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + pricePerMbps.toFixed(2).toLocaleString() }}
                </td>
                <!-- INSTALL FEE COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.fee }}
                </td>
                <div hidden>
                  {{ (totalCost = data.fee + data.cost) }}
                </div>
                <!-- TOTAL COST COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.fee }}
                </td>
                <!-- NOTES COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.notes }}
                </td>
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
          <table class="table dark:text-white">
            <thead>
              <tr>
                <th
                  colspan="9"
                  class="whitespace-nowrap border-b-2 border-white p-4 font-bold text-gray-900 dark:text-white"
                >
                  Business Pricing
                </th>
              </tr>
              <tr>
                <th
                  class="whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Company
                </th>
                <th
                  class="whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Plan
                </th>
                <th
                  colspan="2"
                  class="whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Advertised Speed (Mbps)
                </th>
                <th
                  class="whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Monthly Cost
                </th>
                <th
                  class="whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Price per Mbps
                </th>
                <th
                  class="whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Install Fee
                </th>
                <th
                  class="whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Total Upfront Cost
                </th>
                <th
                  class="whitespace-nowrap border-white px-4 pt-4 font-bold text-gray-900 dark:text-white"
                >
                  Notes
                </th>
              </tr>
              <tr>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                >
                  Download
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                >
                  Upload
                </th>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
                <th
                  class="whitespace-nowrap border-b-2 border-white px-4 pb-4 font-bold text-gray-900 dark:text-white"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) of businessTableData.GTT" :key="index" class="text-gray-700">
                <!-- COMPANY COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 font-bold dark:text-white">
                  GTT<sup>1*</sup>
                </td>
                <!-- PLAN COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.plan }}
                </td>
                <!-- DOWNLOAD COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.download }}
                </td>
                <!-- UPLOAD COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.upload }}
                </td>
                <!-- MONTHLY COST COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + Math.round(data.cost).toLocaleString() }}
                </td>
                <div hidden>
                  {{ (pricePerMbps = data.cost / data.download) }}
                </div>
                <!-- PRICE PER MBPS COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + pricePerMbps.toFixed(2).toLocaleString() }}
                </td>
                <!-- INSTALL FEE COLUMN -->
                <td
                  v-if="typeof data.fee == 'string'"
                  class="border-b-2 border-white px-4 py-1 text-center dark:text-white"
                >
                  {{ data.fee }}
                </td>
                <td v-else class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + Math.round(data.fee).toLocaleString() }}
                </td>
                <div hidden>
                  {{ (totalCost = data.fee + data.cost) }}
                </div>
                <!-- TOTAL COST COLUMN -->
                <td
                  v-if="typeof data.fee == 'string'"
                  class="border-b-2 border-white px-4 py-1 text-center dark:text-white"
                >
                  {{ data.fee }}
                </td>
                <td v-else class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + totalCost.toLocaleString() }}
                </td>
                <!-- NOTES COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.notes }}
                </td>
              </tr>
              <tr
                v-for="(data, index) of businessTableData.ENet"
                :key="index"
                class="text-gray-700"
              >
                <!-- COMPANY COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 font-bold dark:text-white">
                  ENet<sup>2*</sup>
                </td>
                <!-- PLAN COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.plan }}
                </td>
                <!-- DOWNLOAD COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.download }}
                </td>
                <!-- UPLOAD COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">?</td>
                <!-- MONTHLY COST COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">?</td>
                <!-- PRICE PER MBPS COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">?</td>
                <!-- INSTALL FEE COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">?</td>
                <!-- TOTAL COST COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">?</td>
                <!-- NOTES COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.notes }}
                </td>
              </tr>
              <tr
                v-for="(data, index) of businessTableData.Digicel"
                :key="index"
                class="text-gray-700"
              >
                <!-- COMPANY COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 font-bold dark:text-white">
                  Digicel<sup>3*</sup>
                </td>
                <!-- PLAN COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.plan }}
                </td>
                <!-- DOWNLOAD SPEED COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.download }}
                </td>
                <!-- UPLOAD SPEED COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.upload }}
                </td>
                <!-- MONTHLY COST COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + Math.round(data.cost).toLocaleString() }}
                </td>
                <div hidden>
                  {{ (pricePerMbps = data.cost / data.download) }}
                </div>
                <!-- PRICE PER MBPS COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + pricePerMbps.toFixed(2).toLocaleString() }}
                </td>
                <!-- INSTALL FEE COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + Math.round(data.fee).toLocaleString() }}
                </td>
                <div hidden>
                  {{ (totalCost = data.fee + data.cost) }}
                </div>
                <!-- TOTAL COST COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ "$ " + Math.round(totalCost).toLocaleString() }}
                </td>
                <!-- NOTES COLUMN -->
                <td class="border-b-2 border-white px-4 py-1 text-center dark:text-white">
                  {{ data.notes }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </transition>
      <div class="p-2">
        <p v-if="activeTab == 'Residential'" class="text-sm">
          <sup>1*</sup> Information Sourced from:
          <a
            class="text-blue-500"
            href="https://web.archive.org/web/20230604195536/https://www.gtt.co.gy/internet"
            target="_blank"
            >1</a
          >,
          <a
            class="text-blue-500"
            href="https://web.archive.org/web/20230604195553/https://www.gtt.co.gy/fibre-voice"
            target="_blank"
            >2</a
          >,
          <a
            class="text-blue-500"
            href="https://web.archive.org/web/20230604200310/https://www.gtt.co.gy/internet/dsl-plans"
            target="_blank"
            >3</a
          >
        </p>
        <p v-if="activeTab == 'Business'" class="text-sm">
          <sup>1*</sup> Information Sourced from:
          <a
            class="text-blue-500"
            href="https://web.archive.org/web/20231011151719/https://www.gtt.co.gy/connex"
            target="_blank"
            >GTT Connex</a
          >
        </p>
        <p class="text-sm">
          <sup>2*</sup> Information Sourced from:
          <a
            class="text-blue-500"
            href="https://web.archive.org/web/20230610133114/https://www.enetworks.gy/internet/"
            target="_blank"
            >ENet Website</a
          >
        </p>
        <p v-if="activeTab == 'Residential'" class="text-sm">
          <sup>3*</sup> Information Sourced from:
          <a
            class="text-blue-500"
            href="https://web.archive.org/web/20231011123425/https://nexlinkonline.com/packages/"
            target="_blank"
            >NexLink Website</a
          >
        </p>
        <p v-if="activeTab == 'Business'" class="text-sm">
          <sup>3*</sup> Information Sourced from:
          <a
            class="text-blue-500"
            href="https://web.archive.org/web/20230602194902/https://support-gy-business.digicelgroup.com/hc/en-us/articles/9110098629389-FiberX-FAQs"
            target="_blank"
            >Digicel Business Website</a
          >
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
      activeTab: "Residential",
      residentialTableData: {
        GTT: [
          {
            plan: "DSL Silver",
            download: 5,
            upload: "unsure",
            cost: 5699,
            fee: "unsure",
            notes: "Optional cost of $ 9,120 for a wireless modem",
          },
          {
            plan: "DSL Gold",
            download: 10,
            upload: "unsure",
            cost: 7999,
            fee: "unsure",
            notes: "Optional cost of $ 9,120 for a wireless modem",
          },
          {
            plan: "Fibre + Voice 100",
            download: 100,
            upload: 20,
            cost: 10999,
            fee: 20000,
            notes:
              "Bundles internet + landline<br/> Comes with 3000 free monthly minutes to GTT landlines",
          },
          {
            plan: "Fibre + Voice 200",
            download: 200,
            upload: 20,
            cost: 12999,
            fee: 20000,
            notes:
              "Bundles internet + landline<br/> Comes with 5000 free monthly minutes to GTT landlines",
          },
          {
            plan: "Fibre + Voice 300",
            download: 300,
            upload: 20,
            cost: 14999,
            fee: 20000,
            notes:
              "Bundles internet + landline<br/> Comes with 10000 free monthly minutes to GTT landlines",
          },
        ],
        ENet: [
          {
            plan: "4G",
            download: 20,
            upload: 2,
            cost: 7900,
            fee: 29000,
            notes: "Wireless internet | 1TB monthly data cap | Bundled with TV",
          },
          {
            plan: "OnFiber",
            download: 350,
            upload: 100,
            cost: 13100,
            fee: 29000,
            notes:
              "TV & internet bundle<br/> <b>90 BUSINESS DAYS (~4 months) waiting period for install</b>",
          },
          {
            plan: "OnFiber The Gig",
            download: 1000,
            upload: 500,
            cost: 26300,
            fee: 29000,
            notes:
              "TV & internet bundle<br/> <b>90 BUSINESS DAYS (~4 months) waiting period for install</b>",
          },
        ],
        NexLink: [
          {
            plan: "Starter",
            download: 8,
            upload: "unsure",
            cost: 5300,
            fee: "unsure",
            notes: "Wireless internet",
          },
          {
            plan: "Starter+",
            download: 15,
            upload: "unsure",
            cost: 7000,
            fee: "unsure",
            notes: "Wireless internet",
          },
          {
            plan: "Extreme",
            download: 25,
            upload: "unsure",
            cost: 10500,
            fee: "unsure",
            notes: "Wireless internet",
          },
        ],
      },
      businessTableData: {
        GTT: [
          {
            plan: "Connex 200",
            download: 200,
            upload: 75,
            cost: 18999,
            fee: 22800,
            notes: "3500 Minutes On Net+ Calls to USA & Canada",
          },
          {
            plan: "Connex 400",
            download: 400,
            upload: 100,
            cost: 25999,
            fee: 22800,
            notes: "4000 Minutes On Net+ Calls to USA & Canada",
          },
          {
            plan: "Connex 600",
            download: 600,
            upload: 250,
            cost: 37999,
            fee: 22800,
            notes: "6000 Minutes On Net+ Calls to USA & Canada",
          },
        ],
        ENet: [
          {
            plan: "OnFiber PLC Essential",
            download: 25,
            upload: "?",
            cost: "?",
            fee: "?",
            notes: "",
          },
          {
            plan: "OnFiber PLC Preferred",
            download: 50,
            upload: "?",
            cost: "?",
            fee: "?",
            notes: "",
          },
          {
            plan: "OnFiber PLC Ultimate",
            download: 100,
            upload: "?",
            cost: "?",
            fee: "?",
            notes: "",
          },
          {
            plan: "OnFiber PLC Elite",
            download: 250,
            upload: "?",
            cost: "?",
            fee: "?",
            notes: "",
          },
        ],
        Digicel: [
          {
            plan: "FiberX Lite",
            download: 200,
            upload: 20,
            cost: 8999,
            fee: 20000,
            notes: "",
          },
          {
            plan: "FiberX 200",
            download: 200,
            upload: 75,
            cost: 15500,
            fee: 20000,
            notes: "",
          },
          {
            plan: "FiberX 300",
            download: 300,
            upload: 100,
            cost: 29900,
            fee: 20000,
            notes: "",
          },
          {
            plan: "FiberX 600",
            download: 600,
            upload: 300,
            cost: 35000,
            fee: 20000,
            notes: "",
          },
          {
            plan: "FiberX 1000",
            download: 1000,
            upload: 600,
            cost: 150000,
            fee: 20000,
            notes: "",
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
