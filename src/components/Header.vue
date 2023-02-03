<template>
  <div
    class="flex justify-between items-center text-white fixed top-0 left-0 right-0 px-4 py-4 md:px-14 lg:px-20 md:py-4 z-30"
    :class="[shrink ? 'shrink' : '']"
  >
    <div
      class="md:hidden"
      :class="[isActive ? 'invisible' : '']"
      @click="handleMenu"
    >
      <i class="fa-solid fa-bars"></i>
    </div>
    <div class="font-bold text-2xl hidden md:block">LOGO</div>
    <div class="md:flex md:gap-x-8 md:items-centen">
      <div
        class="hidden md:flex md:items-center md:gap-x-4 lg:gap-x-10 text-lg mr-4"
      >
        <a href="/">Home</a>
        <a href="#blog">Blog</a>
        <a href="#project">Project</a>
      </div>
      <div class="hidden md:flex md:items-center md:gap-x-3">
        <a
          href="https://www.linkedin.com/in/pham-van-nhan-a289a8234/"
          class="p-[10px] border border-slate-100 rounded-full text-center"
        >
          <img src="../assets/icon1.svg" alt="" />
        </a>
        <a
          href="https://www.facebook.com/nhanpv03/"
          class="p-[10px] border border-slate-100 rounded-full text-center"
        >
          <img src="../assets/icon2.svg" alt="" />
        </a>
        <a
          href="https://www.instagram.com/pvnhan03/"
          class="p-[10px] border border-slate-100 rounded-full text-center"
        >
          <img src="../assets/icon3.svg" alt="" />
        </a>
      </div>
      <div
        class="px-4 py-2 md:px-8 md:py-4 border border-white capitalize text-base font-medium"
      >
        <a href="#contact">let's connect</a>
      </div>
    </div>

    <div
      :class="[isActive ? 'translate-x-0' : 'hidden']"
      class="absolute top-0 left-0 translate-x-[-100%] p-10 flex flex-col gap-y-8 bg-[#121212E6] w-4/6 h-screen transition ease-in-out md:hidden"
    >
      <div class="flex items-center justify-between md:hidden">
        <span class="text-xl font-medium">LOGO</span
        ><i
          class="fa-solid fa-xmark cursor-pointer p-2 hover:bg-red-500 rounded-lg"
          @click="handleMenu"
        ></i>
      </div>
      <div class="flex flex-col text-l gap-y-4">
        <a href="/" class="px-8 py-2 rounded-lg hover:bg-slate-700">Home</a>
        <a href="#blog" class="px-8 py-2 rounded-lg hover:bg-slate-700">Blog</a>
        <a href="#project" class="px-8 py-2 rounded-lg hover:bg-slate-700"
          >Project</a
        >
      </div>
      <div class="flex items-center gap-x-3">
        <a
          href="https://www.linkedin.com/in/pham-van-nhan-a289a8234/"
          class="p-[10px] border border-slate-100 rounded-full text-center hover:bg-slate-700"
        >
          <img src="../assets/icon1.svg" alt="" />
        </a>
        <a
          href="https://www.facebook.com/nhanpv03/"
          class="p-[10px] border border-slate-100 rounded-full text-center hover:bg-slate-700"
        >
          <img src="../assets/icon2.svg" alt="" />
        </a>
        <a
          href="https://www.instagram.com/pvnhan03/"
          class="p-[10px] border border-slate-100 rounded-full text-center hover:bg-slate-700"
        >
          <img src="../assets/icon3.svg" alt="" />
        </a>
      </div>
      <a
        href="#contact"
        class="px-10 py-2 border border-white capitalize text-base font-medium inline"
        >let's connect</a
      >
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isActive = ref(false);
    const shrink = ref(false);
    const handleMenu = () => {
      isActive.value = !isActive.value;
    };

    const handleFocusOut = () => {
      isActive.value = false;
    };

    return {
      shrink,
      isActive,
      handleMenu,
      handleFocusOut,
    };
  },

  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60 || document.documentElement.scroll > 60) {
        this.shrink = true;
      } else {
        this.shrink = false;
      }
    });
  },
};
</script>

<style>
.shrink {
  background-color: rgba(18, 18, 18, 0.9);
  transition: all 0.2s linear;
}
</style>
