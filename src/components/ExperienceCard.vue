<script setup>
import profile_picture from "../assets/profile-picture.png";
</script>
<template>
  <div class="flex">
    <div class="w-full h-56 overflow-hidden rounded-xl">
      <img :src="profile_picture" alt="" class="w-full h-full object-cover" />
    </div>
    <div>
      <h1>Tes</h1>
    </div>
  </div>
</template>
