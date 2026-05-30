<script setup>
import mail_icon from "../assets/icons/mail-icon.svg";
import phone_icon from "../assets/icons/phone-icon.svg";
import contact_image_background from "../assets/contact_image_background.png";
</script>
<template>
  <section
    v-scroll-reveal
    id="contact"
    class="bg-background px-6 pt-17 pb-10 md:pt-25 md:mb-5"
  >
    <h1 class="text-text items-center text-center font-bold text-3xl mb-6">
      Let’s get in touch!
    </h1>

    <div
      class="flex px-2 py-2 gap-x-2 items-center w-60 mx-auto bg-gray-800 rounded-lg mb-3 md:px-5 md:py-5 md:w-80"
    >
      <div class="w-5 md:w-10">
        <img :src="mail_icon" alt="" class="w-full" />
      </div>
      <h3 class="text-primary font-bold">primatara42@gmail.com</h3>
    </div>
    <div
      class="flex px-2 py-2 gap-x-2 items-center w-60 mx-auto bg-gray-800 rounded-lg mb-6 md:px-5 md:py-5 md:w-80"
    >
      <div class="w-5 md:w-10">
        <img :src="phone_icon" alt="" class="w-full" />
      </div>
      <h3 class="text-primary font-bold">+62 819 5830 5632</h3>
    </div>

    <div class="md:flex md:items-center md:justify-center md:gap-x-6">
      <div class="hidden md:flex md:w-100">
        <img :src="contact_image_background" alt="" />
      </div>
      <form class="flex flex-col gap-y-3">
        <div class="flex justify-center w-60 items-center mx-auto md:w-100">
          <input
            type="text"
            placeholder="Your Name"
            class="bg-gray-800 text-text px-2 py-2 rounded-lg w-full md:px-5 md:py-5"
          />
        </div>
        <div class="flex justify-center w-60 items-center mx-auto md:w-100">
          <input
            type="email"
            placeholder="Your Email"
            class="bg-gray-800 text-text px-2 py-2 rounded-lg w-full md:px-5 md:py-5"
          />
        </div>
        <div class="flex justify-center w-60 items-center mx-auto md:w-100">
          <textarea
            type="message"
            placeholder="Your Message"
            class="bg-gray-800 text-text px-2 py-2 rounded-lg w-full md:px-5 md:py-5"
          />
        </div>
        <button
          class="text-text font-bold w-60 bg-primary px-7 py-3 rounded-full mx-auto hover:cursor-pointer hover:opacity-90 transition duration-300"
        >
          Send Message!
        </button>
      </form>
    </div>
  </section>
</template>
