<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import logo from "../assets/icons/logo.svg";
import hamburger_icon from "../assets/icons/hamburger-menu.svg";
import close_icon from "../assets/icons/close.svg";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav
    class="sticky top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md px-6 py-5 md:px-8 md:py-7"
  >
    <!-- Navbar Content -->
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <img :src="logo" alt="Logo" class="w-44" />

      <!-- Desktop Menu -->
      <ul class="hidden text-text md:flex gap-5 items-center">
        <li>
          <a href="#about" class="hover:text-primary transition duration-300">
            About
          </a>
        </li>

        <li>
          <a
            href="#experience"
            class="hover:text-primary transition duration-300"
          >
            Experience
          </a>
        </li>

        <li>
          <a
            href="#educations"
            class="hover:text-primary transition duration-300"
          >
            Educations
          </a>
        </li>

        <li>
          <a href="#skills" class="hover:text-primary transition duration-300">
            Skills
          </a>
        </li>
      </ul>

      <!-- Desktop Contact Button -->
      <a
        href="#contact"
        class="hidden md:block text-text bg-primary px-7 py-3 rounded-full hover:opacity-90 transition duration-300"
      >
        Contact
      </a>

      <!-- Hamburger Button -->
      <button @click="toggleMenu" class="md:hidden text-text">
        <!-- Hamburger Icon -->
        <img
          v-if="!isMenuOpen"
          :src="hamburger_icon"
          alt="Hamburger Menu"
          class="w-7 h-7"
        />

        <!-- Close Icon -->
        <img v-else :src="close_icon" alt="Close Icon" class="w-7 h-7" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="absolute top-full left-0 w-full flex flex-col gap-5 bg-background/80 backdrop-blur-md border-t border-white/10 px-6 py-6 text-text shadow-xl md:hidden"
    >
      <a
        href="#about"
        class="hover:text-primary transition duration-300"
        @click="isMenuOpen = false"
      >
        About
      </a>

      <a
        href="#experience"
        class="hover:text-primary transition duration-300"
        @click="isMenuOpen = false"
      >
        Experience
      </a>

      <a
        href="#educations"
        class="hover:text-primary transition duration-300"
        @click="isMenuOpen = false"
      >
        Educations
      </a>

      <a
        href="#skills"
        class="hover:text-primary transition duration-300"
        @click="isMenuOpen = false"
      >
        Skills
      </a>

      <a
        href="#contact"
        class="bg-primary text-center py-3 rounded-full hover:opacity-90 transition duration-300"
        @click="isMenuOpen = false"
      >
        Contact
      </a>
    </div>
  </nav>
</template>
