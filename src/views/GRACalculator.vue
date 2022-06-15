<template>
  <!-- Special thanks to Shashri for helping me rewrite the tagline. Also thank you to everyone who suggested improvements! -->
  <div class="h-full">
    <div class="h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="shadow-xl rounded-xl">
        <div class="bg-cover bg-center mx-auto w-auto [height:200px] rounded-t-xl" style="background-image: url(/empty-wallet.jpg)" role="img" aria-label="Image of an empty wallet"></div>
        <div class="px-10 py-10">
          <form @submit.prevent="checkForm" class="max-w-md w-full space-y-8">
            <div>
              <!-- <img class="mx-auto w-auto [height:200px] pb-4" src="/empty-wallet.jpg" alt="Image of an empty wallet" /> -->
              <h2 class="text-center text-3xl font-extrabold text-gray-900">Motor Vehicle Import Duty Calculator</h2>
              <p class="text-sm text-center">v1.1.0 | Last updated: 14/06/2022</p>
              <p class="mt-4 font-medium text-gray-500 text-center">Disclaimer: This website is in no way affiliated with the Guyana Revenue Authority (GRA). It is an independent calculator which uses the <a href="https://www.gra.gov.gy/imports/motor-vehicle/" class="underline">formulas set out by the GRA.</a> <br /></p>
              <div v-if="errors.length">
                <p class="mt-4 font-medium text-red-500 text-center text-2xl">Error! Please fill in all the fields!</p>
                <p class="font-bold" v-for="error in errors">{{ error }}</p>
              </div>
            </div>
            <div class="mt-4 space-y-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="cif" class="block text-sm font-medium text-gray-700">CIF (USD)</label>
                  <input v-model="cif" type="number" name="cif" id="cif" placeholder="12000" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="exchange-rate" class="block text-sm font-medium text-gray-700">Exchange Rate (GYD to USD)</label>
                  <input v-model="exchange_rate" step=".1" type="number" name="exchange-rate" id="exchange-rate" placeholder="208.5" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="vehicle-age" class="block text-sm font-medium text-gray-700">Age of Vehicle</label>
                  <select v-model="age" id="vehicle-age" name="vehicle-age" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option value="" disabled selected>Choose Vehicle Age</option>
                    <option value="under4">Under 4 Years</option>
                    <option value="over4">4 Years & Older</option>
                  </select>
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="fuel" class="block text-sm font-medium text-gray-700">Propulsion</label>
                  <select v-model="fuel" id="fuel" name="fuel" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option value="" disabled selected>Choose Propulsion Type</option>
                    <option value="Gasoline">Gasoline</option>
                    <option value="Electric">Electric</option>
                    <option value="Diesel">Diesel</option>
                  </select>
                </div>
              </div>
              <div v-if="this.fuel != 'Electric'">
                <div v-if="this.fuel == 'Gasoline'">
                  <label for="cc" class="block text-sm font-medium text-gray-700">Engine CC</label>
                  <select v-model="cc" id="cc" name="cc" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option value="" disabled selected>Choose Engine CC</option>
                    <option value="1000">0cc - 1000cc</option>
                    <option value="1500">1001cc - 1500cc</option>
                    <option value="1800">1501cc - 1800cc</option>
                    <option value="2000">1801cc - 2000cc</option>
                    <option value="3000">2001cc - 3000cc</option>
                    <option value="4000">Over 3000cc</option>
                  </select>
                </div>
                <div v-if="this.fuel == 'Diesel'">
                  <label for="cc" class="block text-sm font-medium text-gray-700">Engine CC</label>
                  <select v-model="cc" id="cc" name="cc" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option value="" disabled selected>Choose Engine CC</option>
                    <option value="under1500">Under 1500cc</option>
                    <option value="2000">1501cc - 2000cc</option>
                    <option value="2500">2001cc - 2500cc</option>
                    <option value="3000">2501cc - 3000cc</option>
                    <option value="4000">Over 3000cc</option>
                  </select>
                </div>
              </div>
              <div v-if="this.fuel == 'Diesel'">
                <label for="pickup" class="block text-sm font-medium text-gray-700">Is this vehicle a Pickup?</label>
                <select v-model="pickup" id="pickup" name="pickup" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                  <option value="" disabled selected>Choose option</option>
                  <option value="no">No</option>
                  <option value="single cab">Yes, Single Cab</option>
                  <option value="double cab">Yes, Double Cab</option>
                </select>
              </div>
              <!-- got to research how the duty free works before i implement -->
              <!-- <div class="flex items-center">
                <input v-model="duty_free" id="duty-free" name="duty-free" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label for="duty-free" class="ml-2 block text-sm text-gray-700">Duty Free?</label>
              </div> -->
              <div>
                <button
                  type="submit"
                  @click="
                    checkForm;
                    calculateCost();
                    calculateTax();
                  "
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Calculate Duty
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Results Modal -->
  <TransitionRoot as="template" :show="(show = show)">
    <Dialog as="div" class="relative z-10" :open="show" @close="show = !show">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" class="text-xl font-bold text-gray-900">Results</DialogTitle>
                    <h4 class="pt-3 text-medium">Car Cost: {{ "$" + cost.toLocaleString() + " " }}GYD</h4>
                    <h4 class="pt-3 text-medium">Excise Tax: {{ "$" + (excise_due * exchange_rate).toLocaleString() + " " }}GYD</h4>
                    <h4 class="pt-3 text-medium">Duty: {{ "$" + (duty_due * exchange_rate).toLocaleString() + " " }}GYD</h4>
                    <h4 class="pt-3 text-medium">VAT: {{ "$" + (vat_due * exchange_rate).toLocaleString() + " " }}GYD</h4>
                    <h4 class="pt-3 text-medium">Total Taxes: {{ "$" + total_tax.toLocaleString() + " " }}GYD</h4>
                    <h4 class="pt-3 text-lg text-bold">Total Car Cost: {{ "$" + total_cost.toLocaleString() + " " }}GYD</h4>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" @click="show = !show">Close</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
export default {
  data() {
    return {
      cif: "",
      exchange_rate: "208.5",
      age: "",
      cc: "",
      fuel: "",
      cost: "",
      duty: "",
      vat: "",
      excise_tax: "",
      duty_free: "",
      pickup: "",
      duty_due: "",
      excise_due: "",
      vat_due: "",
      total_tax: "",
      total_cost: "",
      show: false,
      errors: [],
    };
  },
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];
      if (this.fuel != "Electric" && this.fuel) {
        if (this.cif && this.exchange_rate && this.age && this.cc && this.fuel) {
          this.show = !this.show;
          return true;
        }
        if (!this.cif) {
          this.errors.push("CIF required.");
        }
        if (!this.exchange_rate) {
          this.errors.push("Exchange Rate required.");
        }
        if (!this.age) {
          this.errors.push("Vehicle Age required.");
        }
        if (!this.cc) {
          this.errors.push("Vehicle CC required.");
        }
        if (!this.fuel) {
          this.errors.push("Vehicle propulsion type required.");
        }
      } else {
        if (this.cif && this.exchange_rate && this.age && this.fuel) {
          this.show = !this.show;
          return true;
        }
        if (!this.cif) {
          this.errors.push("CIF required.");
        }
        if (!this.exchange_rate) {
          this.errors.push("Exchange Rate required.");
        }
        if (!this.age) {
          this.errors.push("Vehicle Age required.");
        }
        if (!this.fuel) {
          this.errors.push("Vehicle propulsion type required.");
        }
      }
      e.preventDefault();
    },
    calculateCost() {
      this.cost = this.cif * this.exchange_rate;
    },
    calculateTax() {
      switch (this.fuel) {
        case "Gasoline":
          if (this.age == "under4") {
            switch (this.cc) {
              case "1000":
                this.duty = 0.45; //45% duty
                this.vat = 0.14; //14% VAT
                this.duty_due = this.duty * this.cif;
                this.vat_due = (this.cif + this.duty_due) * this.vat;
                this.vat_due = Math.round(this.vat_due);
                this.total_tax = (this.duty_due + this.vat_due) * this.exchange_rate;
                this.total_tax = Math.round(this.total_tax);
                this.total_cost = this.cost + this.total_tax;
                break;
              case "1500":
                this.duty = 0.45; //45% duty
                this.vat = 0.14; //14% VAT
                this.duty_due = this.duty * this.cif;
                this.vat_due = (this.cif + this.duty_due) * this.vat;
                this.vat_due = Math.round(this.vat_due);
                this.total_tax = (this.duty_due + this.vat_due) * this.exchange_rate;
                this.total_tax = Math.round(this.total_tax);
                this.total_cost = this.cost + this.total_tax;
                break;
              case "1800":
                if (this.pickup == "no") {
                  this.duty = 0.45; //45% duty
                  this.excise_tax = 0.1; //10% excise tax
                  this.vat = 0.14; //14% VAT
                  this.duty_due = this.duty * this.cif;
                  this.excise_due = this.excise_tax * this.duty_due + this.cif;
                  this.vat_due = (this.cif + this.duty_due + this.excise_due) * this.vat;
                  this.vat_due = Math.round(this.vat_due);
                  this.total_tax = (this.duty_due + this.vat_due + this.excise_due) * this.exchange_rate;
                  this.total_tax = Math.round(this.total_tax);
                  this.total_cost = this.cost + this.total_tax;
                } else {
                  this.duty = 0.45; //45% duty
                  this.vat = 0.14; //14% VAT
                  this.duty_due = this.duty * this.cif;
                  this.excise_due = 0;
                  this.vat_due = (this.cif + this.duty_due) * this.vat;
                  this.vat_due = Math.round(this.vat_due);
                  this.total_tax = (this.duty_due + this.vat_due) * this.exchange_rate;
                  this.total_tax = Math.round(this.total_tax);
                  this.total_cost = this.cost + this.total_tax;
                }
                break;
              case "2000":
                if (this.pickup == "no") {
                  this.duty = 0.45; //45% duty
                  this.excise_tax = 0.1; //10% excise tax
                  this.vat = 0.14; //14% VAT
                  this.duty_due = this.duty * this.cif;
                  this.excise_due = this.excise_tax * this.duty_due + this.cif;
                  this.vat_due = (this.cif + this.duty_due + this.excise_due) * this.vat;
                  this.vat_due = Math.round(this.vat_due);
                  this.total_tax = (this.duty_due + this.vat_due + this.excise_due) * this.exchange_rate;
                  this.total_tax = Math.round(this.total_tax);
                  this.total_cost = this.cost + this.total_tax;
                } else {
                  this.duty = 0.45; //45% duty
                  this.vat = 0.14; //14% VAT
                  this.duty_due = this.duty * this.cif;
                  this.excise_due = 0;
                  this.vat_due = (this.cif + this.duty_due) * this.vat;
                  this.vat_due = Math.round(this.vat_due);
                  this.total_tax = (this.duty_due + this.vat_due) * this.exchange_rate;
                  this.total_tax = Math.round(this.total_tax);
                  this.total_cost = this.cost + this.total_tax;
                }
                break;
              case "3000":
                if (this.pickup == "double cab") {
                  this.duty = 0.45; //45% duty
                  this.excise_tax = 0.75; //75% excise tax
                  this.vat = 0.14; //14% VAT
                  this.duty_due = this.duty * this.cif;
                  this.excise_due = this.excise_tax * this.duty_due + this.cif;
                  this.vat_due = (this.cif + this.duty_due + this.excise_due) * this.vat;
                  this.vat_due = Math.round(this.vat_due);
                  this.total_tax = (this.duty_due + this.vat_due + this.excise_due) * this.exchange_rate;
                  this.total_tax = Math.round(this.total_tax);
                  this.total_cost = this.cost + this.total_tax;
                } else {
                  this.duty = 0.45; //45% duty
                  this.excise_tax = 1.1; //110% excise tax
                  this.vat = 0.14; //14% VAT
                  this.duty_due = this.duty * this.cif;
                  this.excise_due = this.excise_tax * this.duty_due + this.cif;
                  this.vat_due = (this.cif + this.duty_due + this.excise_due) * this.vat;
                  this.vat_due = Math.round(this.vat_due);
                  this.total_tax = (this.duty_due + this.vat_due + this.excise_due) * this.exchange_rate;
                  this.total_tax = Math.round(this.total_tax);
                  this.total_cost = this.cost + this.total_tax;
                }
                break;
              case "4000":
                this.duty = 0.45; //45% duty
                this.excise_tax = 1.1; //110% excise tax
                this.vat = 0.14; //14% VAT
                this.duty_due = this.duty * this.cif;
                this.excise_due = this.excise_tax * this.duty_due + this.cif;
                this.vat_due = (this.cif + this.duty_due + this.excise_due) * this.vat;
                this.vat_due = Math.round(this.vat_due);
                this.total_tax = (this.duty_due + this.vat_due + this.excise_due) * this.exchange_rate;
                this.total_tax = Math.round(this.total_tax);
                this.total_cost = this.cost + this.total_tax;
                break;
              default:
                console.log("Error in Gasoline under 4 years CC block");
            }
          } else {
            switch (this.cc) {
              case "1000":
                this.excise_due = (this.cif + 4200) * 0.1 + 4200;
                this.total_tax = this.excise_due * this.exchange_rate;
                this.total_tax = Math.round(this.total_tax);
                this.total_cost = this.cost + this.total_tax;
                break;
              case "1500":
                this.excise_due = (this.cif + 4300) * 0.1 + 4300;
                this.total_tax = this.excise_due * this.exchange_rate;
                this.total_tax = Math.round(this.total_tax);
                this.total_cost = this.cost + this.total_tax;
                break;
              case "1800":
                this.excise_due = (this.cif + 6000) * 0.3 + 6000;
                this.total_tax = this.excise_due * this.exchange_rate;
                this.total_tax = Math.round(this.total_tax);
                this.total_cost = this.cost + this.total_tax;
                break;
              case "2000":
                this.excise_due = (this.cif + 6500) * 0.3 + 6500;
                this.total_tax = this.excise_due * this.exchange_rate;
                this.total_tax = Math.round(this.total_tax);
                this.total_cost = this.cost + this.total_tax;
                break;
              case "3000":
                this.excise_due = (this.cif + 13500) * 0.7 + 13500;
                this.total_tax = this.excise_due * this.exchange_rate;
                this.total_tax = Math.round(this.total_tax);
                this.total_cost = this.cost + this.total_tax;
                break;
              case "4000":
                this.excise_due = (this.cif + 14500) * 1 + 14500;
                this.total_tax = this.excise_due * this.exchange_rate;
                this.total_tax = Math.round(this.total_tax);
                this.total_cost = this.cost + this.total_tax;
                break;
              default:
                console.log("Error in Gasoline over 4 years CC block");
            }
          }
          break;
        case "Diesel":
          if (this.age == "under4") {
            switch (this.cc) {
              case "under1500":
                this.duty = 0.45; //45% duty
                this.vat = 0.14; //14% VAT
                this.duty_due = this.duty * this.cif;
                this.vat_due = (this.cif + this.duty_due) * this.vat;
                this.vat_due = Math.round(this.vat_due);
                this.total_tax = (this.duty_due + this.vat_due) * this.exchange_rate;
                this.total_tax = Math.round(this.total_tax);
                this.total_cost = this.cost + this.total_tax;
                break;
              case "2000":
                if (this.pickup != "no") {
                  this.duty = 0.45; //45% duty
                  this.vat = 0.14; //14% VAT
                  this.excise_due = 0;
                  this.duty_due = this.duty * this.cif;
                  this.vat_due = (this.cif + this.duty_due) * this.vat;
                  this.vat_due = Math.round(this.vat_due);
                  this.total_tax = (this.duty_due + this.vat_due) * this.exchange_rate;
                  this.total_tax = Math.round(this.total_tax);
                  this.total_cost = this.cost + this.total_tax;
                } else {
                  this.duty = 0.45; //45% duty
                  this.excise_tax = 0.1; //10% excise tax
                  this.vat = 0.14; //14% VAT
                  this.duty_due = this.duty * this.cif;
                  this.excise_due = this.excise_tax * this.duty_due + this.cif;
                  this.vat_due = (this.cif + this.duty_due + this.excise_due) * this.vat;
                  this.vat_due = Math.round(this.vat_due);
                  this.total_tax = (this.duty_due + this.vat_due + this.excise_due) * this.exchange_rate;
                  this.total_tax = Math.round(this.total_tax);
                  this.total_cost = this.cost + this.total_tax;
                }
                break;
              case "2500":
                if (this.pickup == "double cab") {
                  this.duty = 0.45; //45% duty
                  this.excise_tax = 0.75; //75% excise tax
                  this.vat = 0.14; //14% VAT
                  this.duty_due = this.duty * this.cif;
                  this.excise_due = this.excise_tax * this.duty_due + this.cif;
                  this.vat_due = (this.cif + this.duty_due + this.excise_due) * this.vat;
                  this.total_tax = (this.duty_due + this.vat_due + this.excise_due) * this.exchange_rate;
                  this.total_tax = Math.round(this.total_tax);
                  this.total_cost = this.cost + this.total_tax;
                } else if (this.pickup == "single cab") {
                  this.duty = 0.45; //45% duty
                  this.vat = 0.14; //14% VAT
                  this.duty_due = this.duty * this.cif;
                  this.excise_due = 0;
                  this.vat_due = (this.cif + this.duty_due) * this.vat;
                  this.total_tax = (this.duty_due + this.vat_due) * this.exchange_rate;
                  this.total_tax = Math.round(this.total_tax);
                  this.total_cost = this.cost + this.total_tax;
                } else {
                  this.duty = 0.45; //45% duty
                  this.excise_tax = 1.1; //110% excise tax
                  this.vat = 0.14; //14% VAT
                  this.duty_due = this.duty * this.cif;
                  this.excise_due = this.excise_tax * this.duty_due + this.cif;
                  this.vat_due = (this.cif + this.duty_due + this.excise_due) * this.vat;
                  this.total_tax = (this.duty_due + this.vat_due + this.excise_due) * this.exchange_rate;
                  this.total_tax = Math.round(this.total_tax);
                  this.total_cost = this.cost + this.total_tax;
                }
                break;
              case "3000":
                if (this.pickup == "double cab") {
                  this.duty = 0.45; //45% duty
                  this.excise_tax = 0.75; //75% excise tax
                  this.vat = 0.14; //14% VAT
                  this.duty_due = this.duty * this.cif;
                  this.excise_due = this.excise_tax * this.duty_due + this.cif;
                  this.vat_due = (this.cif + this.duty_due + this.excise_due) * this.vat;
                  this.vat_due = Math.round(this.vat_due);
                  this.total_tax = (this.duty_due + this.vat_due + this.excise_due) * this.exchange_rate;
                  this.total_tax = Math.round(this.total_tax);
                  this.total_cost = this.cost + this.total_tax;
                } else if (this.pickup == "single cab") {
                  this.duty = 0.45; //45% duty
                  this.vat = 0.14; //14% VAT
                  this.duty_due = this.duty * this.cif;
                  this.excise_due = 0;
                  this.vat_due = (this.cif + this.duty_due) * this.vat;
                  this.vat_due = Math.round(this.vat_due);
                  this.total_tax = (this.duty_due + this.vat_due) * this.exchange_rate;
                  this.total_tax = Math.round(this.total_tax);
                  this.total_cost = this.cost + this.total_tax;
                } else {
                  this.duty = 0.45; //45% duty
                  this.excise_tax = 1.1; //110% excise tax
                  this.vat = 0.14; //14% VAT
                  this.duty_due = this.duty * this.cif;
                  this.excise_due = this.excise_tax * this.duty_due + this.cif;
                  this.vat_due = (this.cif + this.duty_due + this.excise_due) * this.vat;
                  this.vat_due = Math.round(this.vat_due);
                  this.total_tax = (this.duty_due + this.vat_due + this.excise_due) * this.exchange_rate;
                  this.total_tax = Math.round(this.total_tax);
                  this.total_cost = this.cost + this.total_tax;
                }
                break;
              case "4000":
                this.duty = 0.45; //45% duty
                this.excise_tax = 1.1; //110% excise tax
                this.vat = 0.14; //14% VAT
                this.duty_due = this.duty * this.cif;
                this.excise_due = this.excise_tax * this.duty_due + this.cif;
                this.vat_due = (this.cif + this.duty_due + this.excise_due) * this.vat;
                this.vat_due = Math.round(this.vat_due);
                this.total_tax = (this.duty_due + this.vat_due + this.excise_due) * this.exchange_rate;
                this.total_tax = Math.round(this.total_tax);
                this.total_cost = this.cost + this.total_tax;
                break;
              default:
                console.log("Error in Diesel under 4 years CC block");
            }
          } else {
            switch (this.cc) {
              case "under1500":
                this.excise_due = (this.cif + 6200) * 0.1 + 6200;
                this.total_tax = this.excise_due * this.exchange_rate;
                this.total_tax = Math.round(this.total_tax);
                this.total_cost = this.cost + this.total_tax;
                break;
              case "2000":
                this.excise_due = (this.cif + 8200) * 0.3 + 8200;
                this.total_tax = this.excise_due * this.exchange_rate;
                this.total_tax = Math.round(this.total_tax);
                this.total_cost = this.cost + this.total_tax;
                break;
              case "2500":
                this.excise_due = (this.cif + 15400) * 0.7 + 15400;
                this.total_tax = this.excise_due * this.exchange_rate;
                this.total_tax = Math.round(this.total_tax);
                this.total_cost = this.cost + this.total_tax;
                break;
              case "3000":
                this.excise_due = (this.cif + 15500) * 0.7 + 15500;
                this.total_tax = this.excise_due * this.exchange_rate;
                this.total_tax = Math.round(this.total_tax);
                this.total_cost = this.cost + this.total_tax;
                break;
              case "4000":
                this.excise_due = (this.cif + 17200) * 1 + 17200;
                this.total_tax = this.excise_due * this.exchange_rate;
                this.total_tax = Math.round(this.total_tax);
                this.total_cost = this.cost + this.total_tax;
                break;
              default:
                console.log("Error in Diesel over 4 years CC block");
            }
          }
          break;
        case "Electric":
          this.excise_due = 0;
          this.total_tax = 0;
          if (this.age == "under4") {
            this.vat = 0.14; //14% VAT
            this.vat_due = this.cif * this.vat;
            this.vat_due = Math.round(this.vat_due);
            this.total_tax = this.vat_due * this.exchange_rate;
            this.total_tax = Math.round(this.total_tax);
            this.total_cost = this.cost + this.total_tax;
          } else {
            this.total_cost = this.cost;
          }
        default:
          console.log("Error in fuel block");
      }
    },
  },
};
</script>
