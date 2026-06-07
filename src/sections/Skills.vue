<script setup>
import SkillCategoryCard from "../components/SkillCategoryCard.vue";
import front_end_icon from "../assets/icons/front-end.svg";
import html_icon from "../assets/icons/html5.svg";
import css_icon from "../assets/icons/css.svg";
import tailwind_icon from "../assets/icons/tailwind.svg";
import js_icon from "../assets/icons/js.svg";
import react_icon from "../assets/icons/react.svg";
import vue_icon from "../assets/icons/vue.svg";
import figma_icon from "../assets/icons/figma.svg";
import back_end_icon from "../assets/icons/back-end.svg";
import php_icon from "../assets/icons/php.svg";
import laravel_icon from "../assets/icons/laravel.svg";
import firebase_icon from "../assets/icons/firebase.svg";
import mysql_icon from "../assets/icons/mysql.svg";
import nodejs_icon from "../assets/icons/nodejs.svg";
import sql_server_icon from "../assets/icons/sql-server.svg";
import iot_icon from "../assets/icons/iot.svg";
import arduino_icon from "../assets/icons/arduino.svg";
import sensor_integrated_icon from "../assets/icons/sensor.svg";
import wifi_communication_icon from "../assets/icons/wifi.svg";
import iot_dashboard_icon from "../assets/icons/iot-dashboard.svg";

const skills = [
  {
    title: "Front End Development",
    logo_title: front_end_icon,

    items: [
      {
        name: "HTML 5",
        icon: html_icon,
      },
      {
        name: "CSS",
        icon: css_icon,
      },
      {
        name: "JavaScript",
        icon: js_icon,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind_icon,
      },
      {
        name: "Vue JS",
        icon: vue_icon,
      },
      {
        name: "React JS",
        icon: react_icon,
      },
      {
        name: "Figma",
        icon: figma_icon,
      },
    ],
  },

  {
    title: "Backend Development",
    logo_title: back_end_icon,

    items: [
      {
        name: "PHP",
        icon: php_icon,
      },
      { name: "Laravel", icon: laravel_icon },
      {
        name: "NodeJS",
        icon: nodejs_icon,
      },
      {
        name: "MySQL",
        icon: mysql_icon,
      },
      {
        name: "Firebase",
        icon: firebase_icon,
      },
      {
        name: "SQL Server",
        icon: sql_server_icon,
      },
    ],
  },

  {
    title: "Internet of Things",
    logo_title: iot_icon,

    items: [
      {
        name: "Microcontroller",
        icon: arduino_icon,
      },
      {
        name: "Sensor Integrated",
        icon: sensor_integrated_icon,
      },
      {
        name: "WiFi Communication",
        icon: wifi_communication_icon,
      },
      {
        name: "IoT Dashboard",
        icon: iot_dashboard_icon,
      },
    ],
  },
];
</script>
<template>
  <section
    v-scroll-reveal
    id="skills"
    class="bg-background px-6 pt-17 pb-10 md:pt-25"
  >
    <h1 class="text-text items-center text-center font-bold text-3xl">
      Skills
    </h1>

    <p class="text-text text-base text-center font-normal my-6">
      During my learning and self-development process, I have learned various
      technologies that support the development of digital applications and
      solutions. Below are some of the skills and technologies I use in web
      development and the Internet of Things (IoT).
    </p>

    <div
      class="flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:items-baseline md:justify-center"
    >
      <SkillCategoryCard
        v-for="skill in skills"
        :key="skill.title"
        :title="skill.title"
        :items="skill.items"
        :logo_title="skill.logo_title"
      />
    </div>
  </section>
</template>
