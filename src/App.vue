<script setup>
import { onMounted, ref } from "vue";

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <header class="header">
    <nav class="nav container">
      <a href="#" class="nav-logo">
        Bay<span class="text-primary_alt">xTasks</span>
      </a>
      <a href="#" @click="toggleMenu" class="nav-btn">
        Powered by
        <i class="bx bx-chevron-down text-xl"></i>
      </a>
      <div :class="{ 'show-menu': showMenu }" class="nav-menu">
        <a href="#" class="nav-link">
          <i class="bx bxl-vuejs text-2xl"></i>
          <p>Vue Framework</p>
        </a>

        <a href="#" class="nav-link">
          <i class="bx bxl-tailwind-css text-2xl"></i>
          <p>Tailwind CSS</p>
        </a>
      </div>
    </nav>
  </header>

  <main class="main mt-14 py-16">
    <div class="">
      <div class="container relative">
        <div class="mb-10 columns-2">
          <h1 class="text-2xl font-semibold text-primary_alt">All</h1>
          <a
            href="#"
            class="flex items-center justify-center gap-x-1 rounded-xl bg-secondary px-3 py-1 transition duration-300 hover:shadow-button_hover hover:ring-1"
          >
            <i class="bx bx-trash text-2xl"></i>
            Delete All
          </a>
        </div>
        <div class="cursor-pointer columns-1 text-center opacity-[0.4]">
          <span class="inline-block"><i class="bx bx-plus text-5xl"></i></span>
          <p>Create your first task</p>
        </div>
        <div class="fixed bottom-0 left-0 right-0 flex h-14 items-center justify-evenly rounded-t-lg bg-primary_alt_dark p-2 shadow-md">
          <button class="icon-menu active">
            <i class="bx bx-list-ul text-3xl md:text-5xl"></i>
          </button>
          <button class="icon-menu">
            <i class="bx bx-checkbox text-3xl md:text-5xl"></i>
          </button>
          <button class="icon-menu">
            <i class="bx bx-checkbox-checked text-3xl md:text-5xl"></i>
          </button>
          <div class="separator"></div>
          <button class="icon-menu">
            <i class="bx bx-plus text-3xl md:text-5xl"></i>
          </button>
          <button class="icon-menu">
            <i class="bx bx-search text-2xl md:text-4xl"></i>
          </button>
          <div class="separator"></div>
          <button class="icon-menu">
            <i class="bx bx-globe text-2xl md:text-4xl"></i>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
