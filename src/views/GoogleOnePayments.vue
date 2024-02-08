<template>
  <div class="flex items-center justify-center px-8 py-10 sm:px-24 lg:px-48">
    <div class="dark:text-white">
      <div class="mb-5 flex w-full flex-row justify-between sm:mb-5">
        <h2 class="text-2xl leading-tight">
          How to Pay for Google One Storage in Guyana
          <p class="mt-1 text-sm">Last Updated: 14/11/2023</p>
        </h2>
      </div>
      <h3 class="font-bold">Prerequisites:</h3>
      <ul class="list-disc">
        <li>You must have a VISA Credit/Debit card that you currently use for online purchases.</li>
        <li>
          You also need a US address for this to work. If you also use an online shipping service
          such as Zoon, SAC, Freightlink, etc, they will provide you with a US Mailbox address which
          can be used as your US address.
        </li>
      </ul>
      <h3 class="mt-5 font-bold">Steps:</h3>
      <ul class="list-decimal">
        <li class="py-2">
          Navigate to
          <a class="text-blue-600 underline" href="https://myaccount.google.com/dashboard"
            >https://myaccount.google.com/dashboard</a
          >
          and scroll to the bottom of the page until you see the <b>"Payments"</b> section as shown
          below:
          <img
            class="w-3/5 border-2 border-blue-500"
            src="/images/google-one-payments-images/payments.png"
            alt="Screenshot of Payments section"
          />
        </li>
        <li class="py-2">
          If this has any details about payment profiles, we will need to delete them first
        </li>
        <li class="py-2">Click on settings, this may prompt you to reauthenticate your account</li>
        <li class="py-2">
          You should see a screen similar to below:
          <img
            class="w-3/5 border-2 border-blue-500"
            src="/images/google-one-payments-images/payment-profiles.png"
            alt="Screenshot of Payments Profiles"
          />
        </li>
        <li class="py-2">
          Click on a profile to select it, and then scroll to the bottom of the page and click on
          <b>"Close payments profile"</b>
          <img
            class="w-3/5 border-2 border-blue-500"
            src="/images/google-one-payments-images/close-payment-profile.png"
            alt="Screenshot of close payment profile link"
          />
        </li>
        <li class="py-2">Repeat step 5 for all profiles until they're all deleted</li>
        <li class="py-2">
          You can now get started with creating a Payment Profile to use with Google One
        </li>
        <li class="py-2">
          Click on the <b>"Payment methods"</b> tab and then click <b>"Add payment method"</b>
          <img
            class="w-3/5 border-2 border-blue-500"
            src="/images/google-one-payments-images/add-payment-method.png"
            alt="Screenshot of add payment method button"
          />
        </li>
        <li class="py-2">
          If prompted, choose <b>"Add credit or debit card"</b>
          <img
            class="w-3/5 border-2 border-blue-500"
            src="/images/google-one-payments-images/choose-payment-method.png"
            alt="Screenshot of payment method choices"
          />
        </li>
        <li class="py-2">
          Fill in all your card details as normal, with the exception of your address. Here is where
          you'll enter a US address (such as the mailbox address provided by a shipping company)
          <img
            class="w-3/5 border-2 border-blue-500"
            src="/images/google-one-payments-images/enter-card-details.png"
            alt="Screenshot of filling out card details"
          />
        </li>
        <li class="py-2">Scroll down and click <b>"Save"</b></li>
        <li class="py-2">
          To verify if this was successful, you can click on <b>"Settings"</b> again and check the
          details for the Payment profile. It should look similar to below:
          <img
            class="w-3/5 border-2 border-blue-500"
            src="/images/google-one-payments-images/payment-profile-details.png"
            alt="Screenshot of payment profile details"
          />
        </li>
        <li class="py-2">Country/Region should say <b>"United States (US)"</b></li>
        <li class="py-2">
          If any details require correction, you can click on the pencil icon next to
          <b>"Address"</b> and fix them
        </li>
        <li class="py-2">
          Finally you can test by navigating to
          <a class="text-blue-600 underline" href="https://one.google.com/plans"
            >https://one.google.com/plans</a
          >. If the domain doesn't redirect you to Google Drive, this is usually a good sign that
          the profile was added successfully
        </li>
        <li class="py-2">Try paying for a plan, if it works. Congratulations!</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  head: {
    title: "Google One Payment Guide (for Guyana)",
    meta: [
      {
        name: "description",
        content:
          "Discover the easy steps for Google One payments in Guyana. Our guide ensures a seamless payment process. Follow our instructions for hassle-free transactions.",
      },
      {
        property: "og:title",
        content: "Google One Payment Guide (for Guyana)",
      },
      {
        property: "og:description",
        content:
          "Discover the easy steps for Google One payments in Guyana. Our guide ensures a seamless payment process. Follow our instructions for hassle-free transactions.",
      },
      {
        property: "twitter:title",
        content: "Google One Payment Guide (for Guyana)",
      },
      {
        property: "twitter:description",
        content:
          "Discover the easy steps for Google One payments in Guyana. Our guide ensures a seamless payment process. Follow our instructions for hassle-free transactions.",
      },
      {
        name: "keywords",
        content: "Google One Guyana",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: window.location.href,
      },
    ],
  },
  mounted() {},
  methods: {},
};
</script>
