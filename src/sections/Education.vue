<script setup></script>
<template>
  <section
    v-scroll-reveal
    id="educations"
    class="bg-background px-6 pt-17 pb-10 md:pt-25"
  >
    <h1 class="text-text items-center text-center font-bold text-3xl">
      Education
    </h1>
    <p class="text-text text-base text-center font-normal my-6">
      Pendidikan menjadi langkah awal yang membentuk cara saya memahami dan
      memecahkan berbagai permasalahan teknologi. Melalui proses pembelajaran,
      proyek akademik, dan kegiatan pendukung lainnya, saya terus mengembangkan
      pengetahuan serta keterampilan yang relevan dengan dunia teknologi.
    </p>
    <!-- Timeline -->
    <div class="relative max-w-5xl mx-auto mt-16">
      <!-- Vertical Line -->
      <div
        class="absolute left-4 md:left-1/2 top-2 h-full w-1 bg-text md:-translate-x-1/2"
      ></div>

      <!-- ITEM 1 -->
      <div class="relative mb-16 flex md:justify-end">
        <!-- Dot -->
        <div
          class="absolute left-4 md:left-1/2 top-0 w-5 h-5 bg-primary rounded-full -translate-x-1/2 z-10"
        ></div>

        <!-- Content -->
        <div
          class="ml-12 md:ml-0 w-full md:w-[45%] md:pl-10 text-left -mt-1 md:-mt-2"
        >
          <h2 class="text-3xl font-bold text-primary">Universitas Sriwijaya</h2>

          <h3 class="text-2xl text-primary mt-2">S1 Sistem Komputer</h3>

          <h3 class="text-2xl text-primary mt-2">2023 - 2025</h3>

          <p class="text-text text-base leading-relaxed mt-4">
            Memperdalam pengetahuan di bidang Sistem Komputer dengan fokus pada
            Internet of Things (IoT) dan Artificial Intelligence (AI), khususnya
            Machine Learning dan Deep Learning. Melalui kegiatan akademik dan
            penelitian, saya memperoleh pengalaman dalam pengolahan data,
            pengembangan model AI, serta penerapan teknologi cerdas untuk
            mendukung penyelesaian masalah di dunia nyata.
          </p>
        </div>
      </div>

      <!-- ITEM 2 -->
      <div class="relative mb-16 flex md:justify-start">
        <!-- Dot -->
        <div
          class="absolute left-4 md:left-1/2 top-0 w-5 h-5 bg-primary rounded-full -translate-x-1/2 z-10"
        ></div>

        <!-- Content -->
        <div
          class="ml-12 md:ml-0 w-full md:w-[45%] md:pr-10 md:text-right -mt-1 md:-mt-2"
        >
          <h2 class="text-3xl font-bold text-primary">Universitas Sriwijaya</h2>

          <h3 class="text-2xl text-primary mt-2">D3 Teknik Komputer</h3>

          <h3 class="text-2xl text-primary mt-2">2018 - 2022</h3>

          <p class="text-white text-base leading-relaxed mt-4">
            Menempuh pendidikan di bidang Teknik Komputer dengan fokus pada
            pemrograman, sistem elektronika, jaringan komputer, dan Internet of
            Things (IoT). Program ini memberikan fondasi yang kuat dalam
            perancangan sistem berbasis perangkat keras dan perangkat lunak
            untuk menyelesaikan berbagai permasalahan teknologi.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
