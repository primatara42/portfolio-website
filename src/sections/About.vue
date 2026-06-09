<script setup>
import profile_picture from "../assets/profile-picture.png";
</script>
<template>
  <main
    v-scroll-reveal
    id="about"
    class="bg-background px-6 pt-5 pb-10 md:px-14 md:pt-15"
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
          A Computer Systems graduate from Sriwijaya University with an interest
          and experience in Web Development, Internet of Things (IoT), and UI/UX
          Design. Experienced in developing modern web applications using
          Tailwind CSS, React JS, Vue JS, PHP, Laravel, and MySQL, and has
          experience designing and implementing IoT projects based on smart
          devices and data communications.
        </p>
      </div>
      <a
        href="/cv-prima-putra-agusantara.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="text-center text-text w-36 bg-primary px-7 py-3 rounded-full mx-auto"
      >
        Get My CV
      </a>
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
          A Computer Systems graduate from Sriwijaya University with an interest
          and experience in Web Development, Internet of Things (IoT), and UI/UX
          Design. Experienced in developing modern web applications using
          Tailwind CSS, React JS, Vue JS, PHP, Laravel, and MySQL, and has
          experience designing and implementing IoT projects based on smart
          devices and data communications.
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
      <a
        href="/cv-prima-putra-agusantara.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="text-center text-text w-36 bg-primary px-7 py-3 rounded-full hover:cursor-pointer hover:opacity-90 transition duration-300"
      >
        Get My CV
      </a>
    </div>
  </main>
</template>
