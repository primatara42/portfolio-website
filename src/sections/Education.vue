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
      Education was the first step that shaped how I understand and solve
      various technological problems. Through the learning process, academic
      projects, and other supporting activities, I continue to develop knowledge
      and skills relevant to the world of technology.
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

          <h3 class="text-2xl text-primary mt-2">
            Bachelor's Degree in Computer Systems
          </h3>

          <h3 class="text-2xl text-primary mt-2">2023 - 2025</h3>

          <p class="text-text text-base leading-relaxed mt-4">
            Deepening my knowledge in Computer Systems with a focus on the
            Internet of Things (IoT) and Artificial Intelligence (AI),
            particularly Machine Learning and Deep Learning. Through academic
            and research activities, I gained experience in data processing, AI
            model development, and the application of intelligent technology to
            support real-world problem solving.
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

          <h3 class="text-2xl text-primary mt-2">
            Associate Degree in Computer Engineering
          </h3>

          <h3 class="text-2xl text-primary mt-2">2018 - 2022</h3>

          <p class="text-white text-base leading-relaxed mt-4">
            Study Computer Engineering with a focus on programming, electronic
            systems, computer networks, and the Internet of Things (IoT). This
            program provides a strong foundation in designing hardware and
            software-based systems to solve various technological problems.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
