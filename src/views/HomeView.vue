<template>
  <div class="bg-[url('../assets/banner-bg.png')] min-h-screen w-full">
    <HeaderC />
    <HomeC />
  </div>
  <div class="bg-[#121212] pt-[74px] px-4 md:pt-[90px] md:px-20 pb-8">
    <SkillC />
    <ProjectC />
    <ContactC />
  </div>
</template>

<script setup>
import HeaderC from "../components/Header.vue";
import HomeC from "../components/Home.vue";
import ProjectC from "../components/Project.vue";
import SkillC from "../components/Skill.vue";
import ContactC from "../components/Contact.vue";
</script>
