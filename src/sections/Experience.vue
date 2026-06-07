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
      "Berpartisipasi dalam kegiatan penelitian di Intelligent System Research Group (IsysRG) dengan fokus pada penerapan kecerdasan buatan dalam pengolahan sinyal kesehatan. Penelitian yang dilakukan berfokus pada pengembangan model deep learning untuk mendukung analisis sinyal elektrokardiogram (EKG) secara otomatis.",
    todos: [
      "Melakukan studi literatur terkait pemrosesan sinyal elektrokardiogram (EKG) dan penerapan deep learning pada data kesehatan.",
      "Merancang dan mengembangkan model Long Short-Term Memory (LSTM) untuk memprediksi posisi anotasi R-Peak pada beat sinyal EKG.",
      "Melakukan proses pelatihan dan validasi model menggunakan dataset sinyal EKG.",
      "Mengevaluasi performa model regresi berdasarkan akurasi prediksi posisi anotasi R-Peak.",
      "Menganalisis hasil prediksi untuk memastikan kesesuaian model dalam mendukung analisis morfologi sinyal EKG secara otomatis.",
      "Mendokumentasikan hasil penelitian dan temuan yang diperoleh selama proses pengembangan model.",
    ],
  },
  {
    title: "Member of the Front-End Web Development Division at GDSC UNSRI",
    icon: gdsc_icon,
    certificate: sertificate_gdsc,
    organization: "GDSC (Google Development Student Club) UNSRI",
    type: "Community",

    date: "Jul 24 - Jul 25",
    description:
      "Berpartisipasi dalam program pengembangan talenta teknologi di Google Developer Student Clubs (GDSC) Universitas Sriwijaya sebagai anggota divisi Front End Development. Pengalaman ini membantu saya memperkuat kemampuan teknis di bidang pengembangan web, meningkatkan kemampuan kolaborasi tim, serta memperoleh pengalaman dalam mendukung pelaksanaan kegiatan komunitas teknologi.",
    todos: [
      "Mempelajari konsep dan praktik Front End Web Development melalui kegiatan pembelajaran dan proyek komunitas.",
      "Mengembangkan keterampilan menggunakan HTML, CSS, JavaScript, Tailwind CSS, dan React JS.",
      "Berkolaborasi dengan anggota dari berbagai divisi dalam kegiatan komunitas dan pengembangan diri.",
      "Berpartisipasi sebagai panitia dalam penyelenggaraan seminar dan workshop teknologi.",
      "Membantu koordinasi dan pelaksanaan kegiatan komunitas untuk mendukung proses belajar anggota.",
      "Memperluas jaringan profesional melalui interaksi dengan mahasiswa dan praktisi teknologi.",
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
      "Mendukung kegiatan pembelajaran pada mata kuliah Pemrograman Web dengan membantu mahasiswa memahami konsep dan implementasi pengembangan web menggunakan HTML, CSS, JavaScript, dan Vue JS. Selain itu, saya juga terlibat dalam proses evaluasi untuk memantau perkembangan pemahaman mahasiswa selama perkuliahan.",
    todos: [
      "Membantu dosen dalam kegiatan perkuliahan dan praktikum mata kuliah Pemrograman Web.",
      "Memberikan pendampingan kepada mahasiswa dalam memahami konsep dasar pengembangan web.",
      "Membimbing mahasiswa dalam implementasi HTML, CSS, JavaScript, dan Vue JS pada tugas dan praktikum.",
      "Membantu menjawab pertanyaan serta menyelesaikan kendala teknis yang dihadapi mahasiswa selama proses pembelajaran.",
      "Melakukan evaluasi terhadap tugas dan hasil praktikum mahasiswa sesuai arahan dosen pengampu.",
      "Mendukung proses penilaian untuk memantau perkembangan pemahaman mahasiswa terhadap materi yang diajarkan.",
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui architecto
        assumenda officiis ipsam cumque eveniet fuga! Itaque earum, quisquam non
        laboriosam dolorum, sed quas soluta aspernatur veniam aperiam maiores
        officiis.
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
