<script setup>
import linkedin_icon from "../assets/icons/linkedin-icon.svg";
import instagram_icon from "../assets/icons/instagram-icon.svg";
import whatsapp_icon from "../assets/icons/whatsapp-icon.svg";
</script>
<template>
  <footer class="bg-background px-6 py-5 text-text">
    <div class="flex flex-col gap-6 md:flex-row md:justify-between">
      <div class="flex justify-center gap-x-6">
        <div
          class="w-12 h-12 bg-gray-800 px-2 py-2 rounded-full hover:bg-text hover:scale-110 transition duration-100 hover:cursor-pointer"
        >
          <div class="w-full">
            <a
              href="https://www.linkedin.com/in/prima-putra-agusantara-014140176"
              target="_blank"
              ><img :src="linkedin_icon" alt=""
            /></a>
          </div>
        </div>
        <div
          class="w-12 h-12 bg-gray-800 px-2 py-2 rounded-full hover:bg-text hover:scale-110 transition duration-100 hover:cursor-pointer"
        >
          <div class="w-full">
            <a
              href="https://www.instagram.com/prima_putraagusantara/"
              target="_blank"
              ><img :src="instagram_icon" alt=""
            /></a>
          </div>
        </div>
        <div
          class="w-12 h-12 bg-gray-800 px-2 py-2 rounded-full hover:bg-text hover:scale-110 transition duration-100 hover:cursor-pointer"
        >
          <div class="w-full">
            <a
              href="https://api.whatsapp.com/send/?phone=6281958305632&text&type=phone_number&app_absent=0"
              target="_blank"
              ><img :src="whatsapp_icon" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="text-center font-semibold">
          <h3>@2026 Prima Putra Agusantara</h3>
          <h3>All rights reserved</h3>
        </div>
      </div>
    </div>
  </footer>
</template>
