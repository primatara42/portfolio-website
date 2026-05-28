<script setup>
import ExperienceCard from "../components/ExperienceCard.vue";
import sertificate_assistant_lecturer from "../assets/Sertificate_LecturerAssistant.png";
import sertificate_gdsc from "../assets/Sertificate_GdscGraduate.png";
import sertificate_isysrg from "../assets/Sertificate_IsysRG.png";
import isysrg_icon from "../assets/isysrg.png";
import gdsc_icon from "../assets/gdsc.png";
import assistant_lecturer_icon from "../assets/universitas_mdp.png";

const experiences = [
  {
    title: "Research Assistant",
    icon: isysrg_icon,
    certificate: sertificate_isysrg,
    organization: "IsysRG",
    type: "Internship",
    date: "Jul 24 - Jul 25",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui architecto assumenda officiis ipsam cumque eveniet fuga! Itaque earum, quisquam non laboriosam dolorum, sed quas soluta aspernatur veniam aperiam maiores officiis.",
    todos: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    ],
  },
  {
    title: "Member of the Front-End Web Development Division at GDSC UNSRI",
    icon: gdsc_icon,
    certificate: sertificate_gdsc,
    organization: "Google Development Student Club",
    type: "Community",

    date: "Jul 24 - Jul 25",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui architecto assumenda officiis ipsam cumque eveniet fuga! Itaque earum, quisquam non laboriosam dolorum, sed quas soluta aspernatur veniam aperiam maiores officiis.",
    todos: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    ],
  },
  // {
  //   title: "Assistant Lecturer",
  //   icon: assistant_lecturer_icon,
  //   certificate: sertificate_assistant_lecturer,
  //   organization: "Universitas Multi Data Palembang",
  //   type: "Internship",
  //   date: "Feb 23 - Jun 23",
  //   description:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui architecto assumenda officiis ipsam cumque eveniet fuga! Itaque earum, quisquam non laboriosam dolorum, sed quas soluta aspernatur veniam aperiam maiores officiis.",
  //   todos: [
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  //   ],
  // },
];
</script>
<template>
  <section
    v-scroll-reveal
    id="experience"
    class="bg-background px-6 pt-17 pb-10 md:pt-25"
  >
    <div class="text-text flex flex-col gap-6">
      <h1 class="text-text items-center text-center font-bold text-3xl">
        Experience
      </h1>
      <p class="text-text text-base text-center font-normal">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui architecto
        assumenda officiis ipsam cumque eveniet fuga! Itaque earum, quisquam non
        laboriosam dolorum, sed quas soluta aspernatur veniam aperiam maiores
        officiis.
      </p>
      <div
        class="flex flex-col gap-y-5 md:flex-row md:gap-10 md:flex-wrap md:justify-evenly"
      >
        <ExperienceCard
          v-for="experience in experiences"
          :key="experience.title"
          :title="experience.title"
          :icon="experience.icon"
          :certificate="experience.certificate"
          :organization="experience.organization"
          :type="experience.type"
          :date="experience.date"
          :description="experience.description"
          :todos="experience.todos"
        />
      </div>
    </div>
  </section>
</template>
