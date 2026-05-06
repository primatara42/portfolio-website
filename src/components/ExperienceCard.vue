<script setup>
import profile_picture from "../assets/profile-picture.png";
import sertificate_pdam from "../assets/Sertificate_PdamInternship.png";
import sertificate_assistant_lecturer from "../assets/Sertificate_LecturerAssistant.png";
import sertificate_gdsc from "../assets/Sertificate_GdscGraduate.png";
import sertificate_isysrg from "../assets/Sertificate_IsysRG.png";
</script>
<template>
  <div
    class="flex flex-col gap-y-5 md:flex-row md:gap-10 md:flex-wrap md:justify-between"
  >
    <div
      class="flex justify-between bg-text rounded-md px-3 py-3 gap-2 md:flex-col md:items-center md:w-72"
    >
      <div class="w-28 h-28 overflow-hidden rounded-xl md:w-full md:h-auto">
        <img
          :src="sertificate_isysrg"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="w-[50%] text-background text-[0.6rem] flex flex-col justify-between items-center md:w-auto md:text-base md:gap-y-5"
      >
        <h1 class="text-center font-bold">
          Member of GDSC (Google Development Student Club) Front End Web
          Development Divison
        </h1>
        <p class="font-semibold">Community | Aug - Nov 24</p>

        <button
          class="w-full text-text bg-primary px-5 py-1 rounded-full md:w-32 md:py-2"
        >
          Detail
        </button>
      </div>
    </div>
    <div
      class="flex justify-between bg-text rounded-md px-3 py-3 gap-2 md:flex-col md:items-center md:w-72"
    >
      <div class="w-28 h-28 overflow-hidden rounded-xl md:w-full md:h-auto">
        <img
          :src="sertificate_gdsc"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="w-[50%] text-background text-[0.6rem] flex flex-col justify-between items-center md:w-auto md:text-base md:gap-y-5"
      >
        <h1 class="text-center font-bold">
          Member of GDSC (Google Development Student Club) Front End Web
          Development Divison
        </h1>
        <p class="font-semibold">Community | Aug - Nov 24</p>

        <button
          class="w-full text-text bg-primary px-5 py-1 rounded-full md:w-32 md:py-2"
        >
          Detail
        </button>
      </div>
    </div>
    <div
      class="flex justify-between bg-text rounded-md px-3 py-3 gap-2 md:flex-col md:items-center md:w-72"
    >
      <div class="w-28 h-28 overflow-hidden rounded-xl md:w-full md:h-auto">
        <img
          :src="sertificate_assistant_lecturer"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="w-[50%] text-background text-[0.6rem] flex flex-col justify-between items-center md:w-auto md:text-base md:gap-y-5"
      >
        <h1 class="text-center font-bold">
          Member of GDSC (Google Development Student Club) Front End Web
          Development Divison
        </h1>
        <p class="font-semibold">Community | Aug - Nov 24</p>

        <button
          class="w-full text-text bg-primary px-5 py-1 rounded-full md:w-32 md:py-2"
        >
          Detail
        </button>
      </div>
    </div>
  </div>
</template>
