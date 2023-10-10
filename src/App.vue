<script setup>
import Navbar from "@/components/Navbar.vue";
if (process.env.NODE_ENV === "development") {
  console.log("DEVELOPMENT");
} else if (process.env.NODE_ENV === "production") {
  console.log("PRODUCTION");
} else {
  console.log("UNKNOWN");
}
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style></style>
