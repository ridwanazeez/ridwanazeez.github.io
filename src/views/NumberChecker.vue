<template>
    <div class="h-full">
        <div class="h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="shadow-xl rounded-xl">
                <div class="px-10 py-10">
                    <form @submit.prevent="checkForm" class="max-w-md w-full space-y-8">
                        <div>
                            <h2 class="text-center text-3xl font-extrabold text-gray-900">Cell Number Checker</h2>
                            <p class="text-sm text-center">v1.0.0 | Last updated: 07/03/2023</p>
                            <p class="mt-4 font-medium text-gray-500 text-center">Disclaimer: I don't work for any of these
                                telecommunications providers. The numbers are sourced from <a
                                    href="https://www.gtt.co.gy/turn-on-4g-lte" class="underline">here.</a> While poking
                                around on the website I noticed the numbers were stored in a JavaScript Array and the form
                                was merely using a simple IF to check the number entered against those stored in the
                                list.<br />
                            </p>
                            <div v-if="errors.length">
                                <p class="mt-4 font-medium text-red-500 text-center text-2xl">Error!</p>
                                <p class="font-bold" v-for="error in errors">{{ error }}</p>
                            </div>
                        </div>
                        <div class="mt-4 space-y-6">
                            <div class="grid gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="number" class="block text-sm font-medium text-gray-700">Cell Number</label>
                                    <input v-model="number" type="number" name="number" id="number"
                                        placeholder="Enter phone number"
                                        class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>

                            </div>
                            <div>
                                <button type="submit" @click="checkNumber"
                                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
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
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed z-10 inset-0 overflow-y-auto">
                <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <DialogTitle as="h3" class="text-xl font-bold text-gray-900 pb-3">Results
                                        </DialogTitle>
                                        <div class="mt-2">
                                            <p class="text-sm text-gray-500">
                                                {{ number }} is a {{ carrier }} SIM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button type="button"
                                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    @click="show = !show; reset()">Close</button>
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
import json from "../assets/numbers.json";

export default {
    data() {
        return {
            number: "",
            newNumber: "",
            carrier: "",
            show: false,
            errors: [],
            numbers: json,
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
        checkNumber: function (e) {

            var i = 0;
            this.errors = [];

            this.number = this.number.toString();

            //Checks if first 3 numbers are equal to 592
            const areaCode = this.number.slice(0, 3);

            //if number starts with 592 (592-XXX-XXXX)
            if (areaCode == "592") {
                var num = this.number.slice(3, 10);
                console.log("if:", this.validateNumber(num));
                if (this.validateNumber(num)) {
                    while (i !== this.numbers.length) {
                        if (this.number === this.numbers[i].toString()) {
                            this.carrier = "GTT";
                        } else {
                            this.carrier = "Digicel";
                        }
                        i++;
                    }
                }
            } else {
                //add 592 to the front of the number if it doesn't already have it
                this.newNumber = "592" + this.number;
                console.log("else:", this.validateNumber(this.number));
                if (this.validateNumber(this.number)) {
                    while (i !== this.numbers.length) {
                        if (this.newNumber === this.numbers[i].toString()) {
                            this.carrier = "GTT";
                        } else {
                            this.carrier = "Digicel";
                        }
                        i++;
                    }
                }
            }

            console.log("carrier: ", this.carrier);

        },
        validateNumber(number) {
            console.log("validate num function:", number);
            if (number >= 6000000 && number <= 6999999) {
                return true;
            }
            this.errors.push("Please enter valid cell number.");
            return false;
        },
        // Resets all form values 
        reset() {
            this.number = "";
        },
        logFormData() {
            let formValues = [];
            formValues.push({
                "Number": this.number,
            });
            console.log("Form Data:", formValues);
        },
    },
};
</script>
