<script setup>
import profile_picture from "../assets/profile-picture.png";
</script>
<template>
  <main class="bg-background px-6 py-10 md:px-14 md:py-12">
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
          Lulusan Sistem Komputer Universitas Sriwijaya dengan pemahaman yang
          baik dalam pengelolaan dan pengembangan aplikasi berbasis web dan
          mobile. Memiliki pengalaman dalam implementasi, pemeliharaan, dan
          pengujian aplikasi menggunakan teknologi seperti Laravel, Vue JS,
          React JS, Tailwind CSS dan React Native. Memahami konsep RESTful API,
          dasar UI/UX, serta mampu melakukan troubleshooting dan dukungan teknis
          terhadap pengguna.
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
          Lulusan Sistem Komputer Universitas Sriwijaya dengan pemahaman yang
          baik dalam pengelolaan dan pengembangan aplikasi berbasis web dan
          mobile. Memiliki pengalaman dalam implementasi, pemeliharaan, dan
          pengujian aplikasi menggunakan teknologi seperti Laravel, Vue JS,
          React JS, Tailwind CSS dan React Native. Memahami konsep RESTful API,
          dasar UI/UX, serta mampu melakukan troubleshooting dan dukungan teknis
          terhadap pengguna.
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
