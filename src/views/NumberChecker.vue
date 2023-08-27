<!-- eslint-disable vue/no-reserved-component-names -->
<template>
  <div class="h-full">
    <div class="flex h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div class="rounded-xl shadow-xl dark:shadow-lg dark:shadow-blue-700">
        <a href="https://storyset.com/people" title="People illustrations by Storyset">
          <div
            class="mx-auto w-auto rounded-t-xl bg-cover bg-center [height:250px]"
            style="background-image: url(/images/people.svg)"
            role="img"
            aria-label="Illustration of people using their cellphones"
          ></div>
        </a>
        <div class="px-10 py-10">
          <form class="w-full max-w-md space-y-8" @submit.prevent="checkForm">
            <div>
              <h2 class="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                Cell Number Checker
              </h2>
              <p class="text-center text-sm dark:text-white">v1.1.1 | Last updated: 11/06/2023</p>
              <p class="text-gray-500text-center mt-4 font-medium dark:text-white">
                Disclaimer: I don't work for any of the telecommunications providers mentioned in
                this app
              </p>
              <div v-if="errors.length">
                <p class="mt-4 text-center text-2xl font-medium text-red-500">Error!</p>
                <p v-for="(error, index) in errors" :key="index" class="font-bold dark:text-white">
                  {{ error }}
                </p>
              </div>
            </div>
            <div class="mt-4 space-y-6">
              <div class="grid gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="number"
                    class="block text-sm font-medium text-gray-700 dark:text-white"
                    >Cell Number</label
                  >
                  <input
                    id="number"
                    v-model="number"
                    type="number"
                    name="number"
                    placeholder="Enter cell phone number"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  class="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-700"
                  @click="checkNumber"
                >
                  Check Number
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
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" class="pb-3 text-xl font-bold text-gray-900"
                      >Results
                    </DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">{{ number }} is a {{ carrier }} SIM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="
                    show = !show;
                    reset();
                  "
                >
                  Close
                </button>
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
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  data() {
    return {
      number: "",
      carrier: "",
      show: false,
      errors: [],
    };
  },
  methods: {
    checkNumber: function (e) {
      this.errors = [];

      //convert number to string for manipulation
      this.number = this.number.toString();

      //if number starts with 592 (592-XXX-XXXX)
      if (this.number.length == 10) {
        //remove first 3 numbers of the phone number to strip the area code
        this.number = this.number.slice(3, 10);
        if (this.validateNumber(this.number)) {
          this.checkCarrier(this.number);
        }
      } else {
        if (this.validateNumber(this.number)) {
          this.checkCarrier(this.number);
        }
      }

      e.preventDefault();
    },
    validateNumber(number) {
      if (number >= 6000000 && number <= 8889999) {
        this.show = !this.show;
        return true;
      }
      this.errors.push("Please enter valid cell number.");
      return false;
    },
    reset() {
      this.number = "";
    },
    logFormData() {
      let formValues = [];
      formValues.push({
        Number: this.number,
        Carrier: this.carrier,
      });
      console.log("Form Data:", formValues);
    },
    //Valid number ranges:
    // 6000000 to 6089999 | Digicel
    // 6090000 to 6299999 | GTT
    // 6300000 to 6349999 | Digicel
    // 6350000 to 6359999 | ENet
    // 6360000 to 6379999 | Digicel
    // 6380000 to 6589999 | GTT
    // 6590000 to 6999999 | Digicel
    // 7010000 to 7019999 | Digicel
    // 7060000 to 7079999 | GTT
    // 7100000 to 7139999 | ENet
    // 8880000 to 8889999 | GTT
    checkCarrier(number) {
      if (number >= "6000000" && number <= "6089999") {
        this.carrier = "Digicel";
      } else if (number >= "6090000" && number <= "6299999") {
        this.carrier = "GTT";
      } else if (number >= "6300000" && number <= "6349999") {
        this.carrier = "Digicel";
      } else if (number >= "6350000" && number <= "6359999") {
        this.carrier = "ENet";
      } else if (number >= "6360000" && number <= "6379999") {
        this.carrier = "Digicel";
      } else if (number >= "6380000" && number <= "6589999") {
        this.carrier = "GTT";
      } else if (number >= "6590000" && number <= "6999999") {
        this.carrier = "Digicel";
      } else if (number >= "7010000" && number <= "7019999") {
        this.carrier = "Digicel";
      } else if (number >= "7060000" && number <= "7079999") {
        this.carrier = "GTT";
      } else if (number >= "7100000" && number <= "7139999") {
        this.carrier = "ENet";
      } else if (number >= "8880000" && number <= "8889999") {
        this.carrier = "GTT";
      } else {
        this.carrier = "GTT";
      }
    },
  },
};
</script>
