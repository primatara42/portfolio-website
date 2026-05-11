<script setup>
import SkillItemCard from "./SkillItemCard.vue";

defineProps({
  title: String,
  items: Array,
  logo_title: String,
});
</script>
<template>
  <div class="bg-text w-64 rounded-xl overflow-hidden md:w-84">
    <!-- Header -->
    <div class="flex border-b-2 border-background">
      <!-- Accent -->
      <div class="w-5 bg-primary"></div>

      <!-- Content -->
      <div class="flex items-center gap-2 px-4 py-3 flex-1">
        <img :src="logo_title" alt="" class="w-8" />

        <h3 class="text-primary font-bold text-sm">
          {{ title }}
        </h3>
      </div>
    </div>
    <div class="flex flex-col md:flex-row md:flex-wrap md:justify-center">
      <SkillItemCard
        v-for="item in items"
        :key="item.name"
        :name="item.name"
        :icon="item.icon"
      />
    </div>
  </div>
</template>
