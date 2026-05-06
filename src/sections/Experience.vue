<script setup>
import ExperienceCard from "../components/ExperienceCard.vue";
</script>
<template>
  <section class="bg-background px-6 py-10">
    <div class="text-text flex flex-col gap-6">
      <h1 class="text-text items-center text-center font-bold text-3xl">
        Experience
      </h1>
      <p class="text-text text-sm text-center font-normal">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui architecto
        assumenda officiis ipsam cumque eveniet fuga! Itaque earum, quisquam non
        laboriosam dolorum, sed quas soluta aspernatur veniam aperiam maiores
        officiis.
      </p>
      <div class="flex flex-col md:px-6 md:py-10">
        <ExperienceCard />
      </div>
    </div>
  </section>
</template>
