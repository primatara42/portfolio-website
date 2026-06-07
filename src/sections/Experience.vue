<script setup>
import { ref } from "vue";
import ExperienceCard from "../components/ExperienceCard.vue";
import sertificate_assistant_lecturer from "../assets/Sertificate_LecturerAssistant.png";
import sertificate_gdsc from "../assets/Sertificate_GdscGraduate.png";
import sertificate_isysrg from "../assets/Sertificate_IsysRG.png";
import isysrg_icon from "../assets/isysrg.png";
import gdsc_icon from "../assets/gdsc.png";
import assistant_lecturer_icon from "../assets/universitas_mdp.png";
import ExperienceModal from "../components/ExperienceModal.vue";

const experiences = [
  {
    title: "Research Assistant",
    icon: isysrg_icon,
    certificate: sertificate_isysrg,
    organization: "IsysRG (Intelligence Research System Group)",
    type: "Internship",
    date: "Jul 24 - Jul 25",
    description:
      "Participated in research activities at the Intelligent Systems Research Group (IsysRG) with a focus on the application of artificial intelligence in healthcare signal processing. The research focused on developing deep learning models to support automated electrocardiogram (ECG) signal analysis.",
    todos: [
      "Conducting a literature study related to electrocardiogram (ECG) signal processing and the application of deep learning to health data.",
      "Designing and developing a Long Short-Term Memory (LSTM) model to predict the position of R-Peak annotations on ECG signal beats.",
      "Performing the model training and validation process using the ECG signal dataset.",
      "Evaluating the performance of regression models based on the accuracy of R-Peak annotation position prediction.",
      "Analyze the prediction results to ensure the suitability of the model in supporting automatic ECG signal morphology analysis.",
      "Documenting research results and findings obtained during the model development process.",
    ],
  },
  {
    title: "Member of the Front-End Web Development Division at GDSC UNSRI",
    icon: gdsc_icon,
    certificate: sertificate_gdsc,
    organization: "GDSC (Google Development Student Club) UNSRI",
    type: "Community",

    date: "Nov 23 - Aug 24",
    description:
      "Participated in the technology talent development program at Google Developer Student Clubs (GDSC) at Sriwijaya University as a member of the Front End Development division. This experience helped me strengthen my technical skills in web development, enhance team collaboration, and gain experience supporting technology community activities.",
    todos: [
      "Learn Front End Web Development concepts and practices through learning activities and community projects.",
      "Develop skills using HTML, CSS, JavaScript, Tailwind CSS, and React JS.",
      "Collaborate with members from various divisions in community activities and self-development.",
      "Participate as a committee in organizing technology seminars and workshops.",
      "Assist in the coordination and implementation of community activities to support members' learning processes.",
      "Expand professional networks through interactions with technology students and practitioners.",
    ],
  },
  {
    title: "Assistant Lecturer",
    icon: assistant_lecturer_icon,
    certificate: sertificate_assistant_lecturer,
    organization: "Universitas Multi Data Palembang",
    type: "Internship",
    date: "Feb 23 - Jun 23",
    description:
      "I support learning activities in Web Programming courses by helping students understand the concepts and implementation of web development using HTML, CSS, JavaScript, and Vue JS. I also participate in the evaluation process to monitor students' progress throughout the course.",
    todos: [
      "Assisting lecturers in lecture and practical activities for Web Programming courses.",
      "Provide assistance to students in understanding the basic concepts of web development.",
      "Guiding students in implementing HTML, CSS, JavaScript, and Vue JS in assignments and practicals.",
      "Help answer questions and resolve technical problems faced by students during the learning process.",
      "Conduct evaluations of student assignments and practicum results according to the directions of the supervising lecturer.",
      "Support the assessment process to monitor the development of students' understanding of the material being taught.",
    ],
  },
];

const isModalOpen = ref(false);
const selectedExperience = ref(null);

const openModal = (experience) => {
  selectedExperience.value = experience;
  isModalOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedExperience.value = null;

  document.body.style.overflow = "auto";
};
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
        Each experience provides me with an opportunity to continuously learn
        and grow. Through community involvement, research, and teaching, I've
        gained a broader understanding of technology, team collaboration, and
        the application of solutions to various problems.
      </p>
      <div class="flex flex-col items-center gap-y-5 md:gap-10">
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
          @show-details="openModal(experience)"
        />
      </div>
      <Teleport to="body">
        <ExperienceModal
          :show="isModalOpen"
          :experience="selectedExperience"
          @close="closeModal"
        />
      </Teleport>
    </div>
  </section>
</template>
