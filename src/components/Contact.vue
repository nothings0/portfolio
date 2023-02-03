<template>
  <div class="mt-16" id="contact">
    <h3 class="text-center font-medium text-4xl text-white mb-6">
      Get in touch
    </h3>
    <div class="flex gap-12 flex-col-reverse md:flex-row">
      <form
        @submit="handleSend"
        class="flex flex-col w-full md:w-1/2 text-white"
      >
        <label for="name">Your name</label>
        <input
          type="text"
          id="name"
          placeholder="john anthony"
          v-model="name"
          class="w-full bg-transparent px-4 py-2 rounded-md border border-white mt-2 mb-3"
        />
        <label for="email">Your email</label>
        <input
          type="text"
          id="email"
          placeholder="johnanthony@gmail.com"
          v-model="email"
          class="w-full bg-transparent px-4 py-2 rounded-md border border-white mt-2 mb-3"
        />
        <label for="subject">Subject</label>
        <input
          type="text"
          id="subject"
          placeholder="i want to talk with you ..."
          v-model="subject"
          class="w-full bg-transparent px-4 py-2 rounded-md border border-white mt-2 mb-3"
        />

        <div class="flex justify-center mt-8">
          <button
            type="submit"
            class="px-10 py-2 border border-slate-700 text-white bg-transparent"
          >
            Send
          </button>
        </div>
      </form>
      <div class="w-full md:w-1/2 text-white">
        <h4 class="text-xl mb-3">Other places</h4>
        <a
          href="https://github.com/nothings0"
          class="flex gap-4 items-center mb-5"
        >
          <img
            src="../assets/github.png"
            alt=""
            class="w-[30px] h-[30px] rounded-full"
          />
          <span>Github</span>
        </a>
        <a
          href="https://www.facebook.com/nhanpv03/"
          class="flex gap-4 items-center mb-5"
        >
          <img
            src="../assets/facebook.png"
            alt=""
            class="w-[30px] h-[30px] rounded-full"
          />
          <span>Facebook</span>
        </a>
        <a
          href="https://discord.gg/X43t4Kaz"
          class="flex gap-4 items-center mb-5"
        >
          <img
            src="../assets/discord.png"
            alt=""
            class="w-[30px] h-[30px] rounded-full"
          />
          <span>Discord</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const email = ref("");
    const name = ref("");
    const subject = ref("");

    const handleSend = async (e) => {
      e.preventDefault();
      const newContact = {
        email: email.value,
        name: name.value,
        subject: subject.value,
      };
      await axios.post("http://localhost:3000/contact", newContact);
      email.value = "";
      name.value = "";
      subject.value = "";
    };
    return {
      email,
      name,
      subject,
      handleSend,
    };
  },
};
</script>
