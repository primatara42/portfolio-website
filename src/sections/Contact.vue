<script setup>
import mail_icon from "../assets/icons/mail-icon.svg";
import phone_icon from "../assets/icons/phone-icon.svg";
</script>
<template>
  <section class="bg-background px-6 py-10">
    <h1 class="text-text items-center text-center font-bold text-3xl mb-6">
      Let’s get in touch!
    </h1>

    <div
      class="flex px-2 py-2 gap-x-2 items-center w-60 mx-auto bg-gray-800 rounded-lg mb-3"
    >
      <div class="w-5"><img :src="mail_icon" alt="" class="w-full" /></div>
      <h3 class="text-primary font-bold">primatara42@gmail.com</h3>
    </div>
    <div
      class="flex px-2 py-2 gap-x-2 items-center w-60 mx-auto bg-gray-800 rounded-lg mb-6"
    >
      <div class="w-5"><img :src="phone_icon" alt="" class="w-full" /></div>
      <h3 class="text-primary font-bold">+62 819 5830 5632</h3>
    </div>
    <form class="flex flex-col gap-y-3">
      <div class="flex justify-center w-60 items-center mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          class="bg-gray-800 text-text px-2 py-2 rounded-lg w-full"
        />
      </div>
      <div class="flex justify-center w-60 items-center mx-auto">
        <input
          type="email"
          placeholder="Your Email"
          class="bg-gray-800 text-text px-2 py-2 rounded-lg w-full"
        />
      </div>
      <div class="flex justify-center w-60 items-center mx-auto">
        <textarea
          type="message"
          placeholder="Your Message"
          class="bg-gray-800 text-text px-2 py-2 rounded-lg w-full"
        />
      </div>
      <button
        class="text-text font-bold w-60 bg-primary px-7 py-3 rounded-full mx-auto"
      >
        Send Message!
      </button>
    </form>
  </section>
</template>
