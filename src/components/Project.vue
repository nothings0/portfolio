<template>
  <div class="mt-16" id="project">
    <h3 class="text-center font-medium text-4xl text-white">Projects</h3>
    <div
      class="mt-20 flex flex-col md:flex-row justify-center gap-y-8 md:gap-x-10 md:justify-between md:even:flex-row-reverse"
      v-for="project in data"
      :key="project._id"
    >
      <div class="w-full md:w-1/2">
        <h4 class="text-xl font-medium text-white">{{ project.title }}</h4>
        <p class="text-lg text-white my-6">
          {{ project.description }}
        </p>
        <div class="flex gap-x-4">
          <a
            :href="project.demo"
            class="text-base text-white bg-[#1876d2] px-4 py-2 rounded-lg cursor-pointer"
          >
            Demo
          </a>
          <a
            :href="project.github"
            class="text-base text-white bg-[#1b222b] px-4 py-2 rounded-lg cursor-pointer"
          >
            Github
          </a>
        </div>
      </div>
      <div class="w-full md:w-1/2 border-8 border-zinc-900 rounded-xl">
        <img :src="project.img" alt="image project" class="rounded-xl" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const data = ref([]);
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/project");
      data.value = res.data.data;
    };
    getData();
    return {
      data,
    };
  },
};
</script>
