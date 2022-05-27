<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="shadow-xl rounded-xl">
      <div class="px-10 py-10">
        <form @submit.prevent="checkForm" class="max-w-md w-full space-y-8">
          <div>
            <img class="mx-auto h-16 w-auto" src="/gra-logo.jpg" alt="GRA Logo" />
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">GRA Motor Vehicle Import Duty Calculator</h2>
            <p class="mt-4 font-medium text-gray-500 text-center">
              Disclaimer: Trust the numbers here at your own risk. <br />
              I don't work with GRA
            </p>
            <div v-if="errors.length">
              <p class="mt-4 font-medium text-red-500 text-center text-2xl">Error! Please fill in all the fields!</p>
              <p v-for="error in errors">{{ error }}</p>
            </div>
          </div>
          <div class="mt-8 space-y-6">
            <div>
              <label for="cif" class="block text-sm font-medium text-gray-700">CIF (USD)</label>
              <input v-model="cif" type="number" name="cif" id="cif" placeholder="12000" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div>
              <label for="exchange-rate" class="block text-sm font-medium text-gray-700">Exchange Rate (GYD to USD)</label>
              <input v-model="rate" type="number" name="exchange-rate" id="exchange-rate" placeholder="220" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div>
              <label for="vehicle-age" class="block text-sm font-medium text-gray-700">Age of Vehicle</label>
              <select v-model="age" id="vehicle-age" name="vehicle-age" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="" disabled selected>Choose Vehicle Age</option>
                <option value="under4">Under 4 Years</option>
                <option value="over4">4 Years & Older</option>
              </select>
            </div>
            <div>
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
            <div class="flex items-center">
              <input v-model="ev" id="ev" name="ev" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label for="ev" class="ml-2 block text-gray-900">Electric?</label>
            </div>
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
                    <DialogTitle as="h3" class="text-xl font-bold text-gray-900">Total</DialogTitle>
                    <h4 class="pt-3 text-medium">Car Cost: {{ "$ " + cost + " " }}GYD</h4>
                    <h4 class="pt-3 text-medium">Total Taxes: {{ "$ " + total_tax + " " }}GYD</h4>
                    <h4 class="pt-5 text-lg text-bold">Total Car Cost: {{ "$ " + total_cost + " " }}GYD</h4>
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
      rate: "",
      age: "",
      cc: "",
      ev: false,
      cost: "",
      duty: "",
      vat: "0.14",
      excise_tax: "",
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
      if (this.cif && this.rate && this.age && this.cc) {
        this.show = !this.show;
        return true;
      }
      if (!this.cif) {
        this.errors.push("CIF required.");
      }
      if (!this.rate) {
        this.errors.push("Exchange Rate required.");
      }
      if (!this.age) {
        this.errors.push("Vehicle Age required.");
      }
      if (!this.cc) {
        this.errors.push("Vehicle CC required.");
      }
      e.preventDefault();
    },
    calculateCost() {
      this.cost = this.cif * this.rate;
    },
    calculateTax() {
      switch (this.cc) {
        case "1000":
          if (this.age == "under4") {
            this.duty = 0.45; //45% duty
            this.excise_tax = 0; //0% excise tax
            this.duty_due = this.cost * this.duty;
            this.excise_due = (this.cost + this.duty_due) * this.excise_due;
            this.vat_due = (this.cost + this.duty_due + this.excise_due) * this.vat;
            this.total_tax = this.excise_due + this.duty_due + this.vat_due;
            this.total_cost = this.cost + this.total_tax;
          } else {
            this.duty = 0.1; //10% duty
            this.excise_tax = 4200 * this.rate; //$4200 USD excise tax
            this.duty_due = this.cost * this.duty;
            this.excise_due = (this.cost + this.duty_due) * this.excise_due;
            this.vat_due = (this.cost + this.duty_due + this.excise_due) * this.vat;
            this.total_tax = this.excise_due + this.duty_due + this.vat_due;
            this.total_cost = this.cost + this.total_tax;
          }
          break;
        case "1500":
          if (this.age == "under4") {
            this.duty = 0.45; //45% duty
            this.excise_tax = 0; //0% excise tax
            this.duty_due = this.cost * this.duty;
            this.excise_due = (this.cost + this.duty_due) * this.excise_due;
            this.vat_due = (this.cost + this.duty_due + this.excise_due) * this.vat;
            this.total_tax = this.excise_due + this.duty_due + this.vat_due;
            this.total_cost = this.cost + this.total_tax;
          } else {
            this.duty = 0.1; //10% duty
            this.excise_tax = 4300 * this.rate; //$4300 USD excise tax
            this.duty_due = this.cost * this.duty;
            this.excise_due = (this.cost + this.duty_due) * this.excise_due;
            this.vat_due = (this.cost + this.duty_due + this.excise_due) * this.vat;
            this.total_tax = this.excise_due + this.duty_due + this.vat_due;
            this.total_cost = this.cost + this.total_tax;
          }
          break;
        case "1800":
          if (this.age == "under4") {
            this.duty = 0.45; //45% duty
            this.excise_tax = 0.1; //10% excise tax
            this.duty_due = this.cost * this.duty;
            this.excise_due = (this.cost + this.duty_due) * this.excise_due;
            this.vat_due = (this.cost + this.duty_due + this.excise_due) * this.vat;
            this.total_tax = this.excise_due + this.duty_due + this.vat_due;
            this.total_cost = this.cost + this.total_tax;
          } else {
            this.duty = 0.3; //30% duty
            this.excise_tax = 6000 * this.rate; //$6000 USD excise tax
            this.duty_due = this.cost * this.duty;
            this.excise_due = (this.cost + this.duty_due) * this.excise_due;
            this.vat_due = (this.cost + this.duty_due + this.excise_due) * this.vat;
            this.total_tax = this.excise_due + this.duty_due + this.vat_due;
            this.total_cost = this.cost + this.total_tax;
          }
          break;
        case "2000":
          if (this.age == "under4") {
            this.duty = 0.45; //45% duty
            this.excise_tax = 0.1; //10% excise tax
            this.duty_due = this.cost * this.duty;
            this.excise_due = (this.cost + this.duty_due) * this.excise_due;
            this.vat_due = (this.cost + this.duty_due + this.excise_due) * this.vat;
            this.total_tax = this.excise_due + this.duty_due + this.vat_due;
            this.total_cost = this.cost + this.total_tax;
          } else {
            this.duty = 0.3; //30% duty
            this.excise_tax = 6500 * this.rate; //$6500 USD excise tax
            this.duty_due = this.cost * this.duty;
            this.excise_due = (this.cost + this.duty_due) * this.excise_due;
            this.vat_due = (this.cost + this.duty_due + this.excise_due) * this.vat;
            this.total_tax = this.excise_due + this.duty_due + this.vat_due;
            this.total_cost = this.cost + this.total_tax;
          }
          break;
        case "3000":
          if (this.age == "under4") {
            this.duty = 0.45; //45% duty
            this.excise_tax = 1.1; //110% excise tax
            this.duty_due = this.cost * this.duty;
            this.excise_due = (this.cost + this.duty_due) * this.excise_due;
            this.vat_due = (this.cost + this.duty_due + this.excise_due) * this.vat;
            this.total_tax = this.excise_due + this.duty_due + this.vat_due;
            this.total_cost = this.cost + this.total_tax;
          } else {
            this.duty = 0.7; //30% duty
            this.excise_tax = 13500 * this.rate; //$13500 USD excise tax
            this.duty_due = this.cost * this.duty;
            this.excise_due = (this.cost + this.duty_due) * this.excise_due;
            this.vat_due = (this.cost + this.duty_due + this.excise_due) * this.vat;
            this.total_tax = this.excise_due + this.duty_due + this.vat_due;
            this.total_cost = this.cost + this.total_tax;
          }
          break;
        case "4000":
          if (this.age == "under4") {
            this.duty = 0.45; //45% duty
            this.excise_tax = 1.4; //140% excise tax
            this.duty_due = this.cost * this.duty;
            this.excise_due = (this.cost + this.duty_due) * this.excise_due;
            this.vat_due = (this.cost + this.duty_due + this.excise_due) * this.vat;
            this.total_tax = this.excise_due + this.duty_due + this.vat_due;
            this.total_cost = this.cost + this.total_tax;
          } else {
            this.duty = 1.0; //100% duty
            this.excise_tax = 14500 * this.rate; //$14500 USD excise tax
            this.duty_due = this.cost * this.duty;
            this.excise_due = (this.cost + this.duty_due) * this.excise_due;
            this.vat_due = (this.cost + this.duty_due + this.excise_due) * this.vat;
            this.total_tax = this.excise_due + this.duty_due + this.vat_due;
            this.total_cost = this.cost + this.total_tax;
          }
          break;
        default:
          console.log("Error!");
      }
    },
  },
};
</script>
