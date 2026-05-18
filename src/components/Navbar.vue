<script setup>
import logo from "../assets/icons/logo.svg";
</script>
<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md px-6 py-5 md:px-8 md:py-7"
  >
    <div class="flex justify-between items-center">
      <img :src="logo" alt="" class="w-44" />

      <ul class="hidden text-text md:flex gap-5">
        <li>
          <RouterLink to="about">About</RouterLink>
        </li>
        <li>
          <RouterLink>Experience</RouterLink>
        </li>
        <li>
          <RouterLink>Educations</RouterLink>
        </li>
        <li>
          <RouterLink>Skills</RouterLink>
        </li>
      </ul>
      <a
        href="#contact"
        class="hidden md:block text-text bg-primary px-7 py-3 rounded-full"
      >
        Contact
      </a>

      <button @click="toggleMenu" class="md:hidden text-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>
