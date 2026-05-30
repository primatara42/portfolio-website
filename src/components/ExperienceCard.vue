<script setup>
import organization_icon from "../assets/icons/organization_icon.svg";
import type_work_icon from "../assets/icons/type_work_icon.svg";
import duration_icon from "../assets/icons/duration.svg";
defineProps({
  title: String,
  icon: String,
  certificate: String,
  organization: String,
  type: String,
  date: String,
  description: String,
  todos: Array,
});

const emit = defineEmits(["show-details"]);
</script>
<template>
  <div
    class="bg-background border-2 rounded-xl border-gray-600 p-5 w-full md:w-[80%]"
  >
    <div class="w-15 py-5"><img :src="icon" alt="" /></div>
    <h1 class="font-bold text-text text-base my-2">{{ title }}</h1>
    <div class="flex flex-col gap-y-2 my-2">
      <div class="flex gap-x-2">
        <div><img :src="organization_icon" alt="" /></div>
        <h3 class="text-sm">{{ organization }}</h3>
      </div>
      <div class="flex gap-x-2">
        <div><img :src="type_work_icon" alt="" /></div>
        <h3 class="text-sm">{{ type }}</h3>
      </div>
      <div class="flex gap-x-2">
        <div><img :src="duration_icon" alt="" /></div>
        <h3 class="text-sm">{{ date }}</h3>
      </div>
    </div>

    <button
      @click="emit('show-details')"
      class="w-full text-text bg-primary px-5 py-2 rounded-full font-medium md:w-32 md:py-2 hover:cursor-pointer hover:opacity-90 transition duration-300"
    >
      Detail
    </button>
  </div>
</template>
