<script setup>
import close_icon from "../assets/icons/close.svg";
import close_icon_white from "../assets/icons/close_white.svg";
import open_in_full_icon from "../assets/icons/open_in_full.svg";
import type_work_icon from "../assets/icons/type_work_icon.svg";
import organization_icon from "../assets/icons/organization_icon_primary.svg";
import duration_icon from "../assets/icons/duration.svg";
import check_icon from "../assets/icons/check.svg";

const emit = defineEmits(["close"]);

defineProps({
  experience: Object,
});
</script>
<template>
  <div
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
  >
    <div
      class="bg-background w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border-primary border-2 shadow-2xl"
    >
      <!-- Header -->
      <div class="flex justify-end p-3">
        <button @click="emit('close')">
          <img :src="close_icon" alt="" class="w-8 h-8" />
        </button>
      </div>

      <!-- Content -->
      <div class="p-4 flex flex-col gap-y-4">
        <!-- Certificate -->
        <div class="flex flex-col items-center gap-y-3 w-fit mx-auto">
          <img
            :src="experience.certificate"
            alt=""
            class="rounded-xl max-h-[40vh] object-contain"
          />

          <button
            class="flex justify-center items-center gap-x-2 bg-primary text-text py-2 rounded-full w-full font-medium px-4"
          >
            <img :src="open_in_full_icon" alt="" class="w-5 h-5" />
            <span>View in Fullscreen</span>
          </button>
        </div>

        <!-- Text -->
        <div class="flex flex-col gap-y-3">
          <h1 class="font-semibold text-xl leading-relaxed">
            {{ experience.title }}
          </h1>

          <div class="flex items-center text-primary text-sm gap-x-2">
            <img :src="organization_icon" alt="" class="w-4 h-4" />
            <h2>{{ experience.organization }}</h2>
          </div>

          <div class="flex items-center text-text text-xs gap-x-4">
            <div class="flex items-center gap-x-1">
              <img :src="duration_icon" alt="" class="w-4 h-4" />
              <h2>{{ experience.date }}</h2>
            </div>

            <div class="w-px h-4 bg-text/30"></div>

            <div class="flex items-center gap-x-1">
              <img :src="type_work_icon" alt="" class="w-4 h-4" />
              <h2>{{ experience.type }}</h2>
            </div>
          </div>

          <div class="w-full h-px bg-text/10"></div>
        </div>
        <!-- Description -->
        <div class="flex flex-col gap-y-2">
          <h1 class="text-base font-semibold">About Experience</h1>
          <p class="text-sm font-light">{{ experience.description }}</p>
        </div>
        <!-- What I Did -->
        <div class="flex flex-col gap-y-2">
          <h1 class="text-base font-semibold">About Experience</h1>
          <ul class="flex flex-col gap-y-2 text-sm font-light">
            <li
              class="flex gap-x-1"
              v-for="(todo, index) in experience.todos"
              :key="index"
            >
              <span class=""
                ><img :src="check_icon" alt="" class="w-5 h-5"
              /></span>
              <span>{{ todo }}</span>
            </li>
          </ul>
        </div>

        <button
          @click="emit('close')"
          class="mx-auto flex items-center gap-x-2 bg-primary text-text py-1 rounded-full w-30 font-medium px-4"
        >
          <img :src="close_icon_white" alt="" class="w-5 h-5" />
          <span>Close</span>
        </button>
      </div>
    </div>
  </div>
</template>
