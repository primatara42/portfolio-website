<script setup>
import mail_icon from "../assets/icons/mail-icon.svg";
import phone_icon from "../assets/icons/phone-icon.svg";
import contact_image_background from "../assets/contact_image_background.png";
import { ref, reactive } from "vue";
import emailjs from "@emailjs/browser";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const isLoading = ref(false);

const submitForm = async () => {
  isLoading.value = true;

  try {
    await emailjs.send(
      "service_uc8qq0h",
      "template_updddql",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "-Wn5GNbUD8osVnfHv",
    );

    alert("Message sent successfully!");

    form.name = "";
    form.email = "";
    form.message = "";
  } catch (error) {
    console.error(error);
    alert("Failed to send message.");
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <section v-scroll-reveal id="contact" class="bg-background px-6 py-10">
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
      <form @submit.prevent="submitForm" class="flex flex-col gap-y-3">
        <div class="flex justify-center w-60 items-center mx-auto md:w-100">
          <input
            required
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            class="bg-gray-800 text-text px-2 py-2 rounded-lg w-full md:px-5 md:py-5 border border-transparent focus:border-primary focus:outline-none transition-all duration-300"
          />
        </div>
        <div class="flex justify-center w-60 items-center mx-auto md:w-100">
          <input
            required
            v-model="form.email"
            type="email"
            placeholder="Your Email"
            class="bg-gray-800 text-text px-2 py-2 rounded-lg w-full md:px-5 md:py-5 border border-transparent focus:border-primary focus:outline-none transition-all duration-300"
          />
        </div>
        <div class="flex justify-center w-60 items-center mx-auto md:w-100">
          <textarea
            required
            v-model="form.message"
            type="message"
            placeholder="Your Message"
            class="bg-gray-800 text-text px-2 py-2 rounded-lg w-full md:px-5 md:py-5 border border-transparent focus:border-primary focus:outline-none transition-all duration-300"
          />
        </div>
        <button
          type="submit"
          :disabled="isLoading"
          class="flex items-center justify-center gap-2 text-text font-bold w-60 bg-primary px-7 py-3 rounded-full mx-auto disabled:opacity-50 hover:cursor-pointer hover:opacity-90 transition duration-300"
        >
          <template v-if="isLoading">
            <div
              class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
            ></div>

            Sending...
          </template>

          <template v-else> Send Message! </template>
        </button>
      </form>
    </div>
  </section>
</template>
