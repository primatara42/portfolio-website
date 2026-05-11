<script setup>
defineProps({
  name: String,
  icon: String,
});
</script>
<template>
  <div class="px-2 py-2">
    <div
      class="flex px-2 py-2 gap-3 items-center rounded-lg shadow-md shadow-background/10 md:w-36 md:h-12"
    >
      <div class="w-7">
        <img :src="icon" alt="" />
      </div>
      <h3 class="text-sm text-primary font-semibold">{{ name }}</h3>
    </div>
  </div>
</template>
