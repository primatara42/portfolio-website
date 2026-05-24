<script setup>
import profile_picture from "../assets/profile-picture.png";
</script>
<template>
  <main
    id="about"
    class="bg-background px-6 pt-5 pb-10 md:px-14 md:pt-30 md:pb-12"
  >
    <div class="flex flex-col gap-6 md:hidden">
      <h1 class="text-text items-center text-center font-bold text-3xl">
        Hello<span class="text-primary">!</span> My Name Is <br /><span
          class="text-primary"
          >Prima Putra Agusantara</span
        >
      </h1>
      <div class="mx-auto">
        <div
          class="w-60 h-60 rounded-full border-5 bg-text border-primary overflow-hidden"
        >
          <img
            :src="profile_picture"
            class="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      <div class="flex">
        <p class="text-text text-sm text-center font-normal">
          Lulusan Sistem Komputer Universitas Sriwijaya yang memiliki
          ketertarikan dan pengalaman di bidang Web Development, Internet of
          Things (IoT), dan UI/UX Design. Terbiasa mengembangkan aplikasi web
          modern menggunakan Tailwind CSS, React JS, Vue JS, PHP, Laravel, dan
          MySQL, serta memiliki pengalaman dalam merancang dan
          mengimplementasikan proyek IoT berbasis perangkat cerdas dan
          komunikasi data.
        </p>
      </div>
      <button class="text-text w-36 bg-primary px-7 py-3 rounded-full mx-auto">
        Get My CV
      </button>
    </div>

    <div class="hidden md:flex justify-between items-center">
      <div class="w-[50%] flex flex-col gap-5">
        <h1 class="text-text font-bold text-4xl">
          Hello<span class="text-primary">!</span> My Name Is<span
            class="text-primary mt-3 block"
            >Prima Putra Agusantara</span
          >
        </h1>
        <p class="text-text text-base font-normal">
          Lulusan Sistem Komputer Universitas Sriwijaya yang memiliki
          ketertarikan dan pengalaman di bidang Web Development, Internet of
          Things (IoT), dan UI/UX Design. Terbiasa mengembangkan aplikasi web
          modern menggunakan Tailwind CSS, React JS, Vue JS, PHP, Laravel, dan
          MySQL, serta memiliki pengalaman dalam merancang dan
          mengimplementasikan proyek IoT berbasis perangkat cerdas dan
          komunikasi data.
        </p>
      </div>
      <div>
        <div
          class="w-80 h-80 rounded-full border-5 bg-text border-primary overflow-hidden"
        >
          <img
            :src="profile_picture"
            class="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
    <div class="hidden md:flex mt-5">
      <button class="text-text w-36 bg-primary px-7 py-3 rounded-full">
        Get My CV
      </button>
    </div>
  </main>
</template>
