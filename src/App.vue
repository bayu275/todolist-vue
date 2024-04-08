<script setup></script>

<template>
  <header>
    <div class="container flex items-center justify-between py-4">
      <a href="#" class="logo text-xl font-semibold"
        >Bayu <span class="text-primary_alt">x Tasks</span></a
      >
      <div class="rounded-full bg-gradient-to-br from-white to-[#350084] p-px">
        <button
          class="flex items-center justify-center rounded-full bg-gradient-to-br from-[#ab83e7] to-[#350084] px-[12px] py-[4px] text-base shadow-button"
        >
          Powered by
          <i class="bx bxl-vuejs translate-y-[2px]"></i>
        </button>
      </div>
    </div>
  </header>

  <section class="py-16">
    <div class="container">
      <div class="mb-10 flex columns-1 justify-between">
        <h1 class="text-xl font-bold text-primary_alt">All</h1>
        <button
          class="hover:shadow-button_hover flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-base"
        >
          <i class="bx bx-trash translate-y-[2px]"></i>
          <p>Delete All</p>
        </button>
      </div>

      <div class="cursor-pointer text-center opacity-[0.4]">
        <span class="inline-block">
          <i class="bx bx-plus text-5xl"></i>
        </span>
        <p>Create your first task</p>
      </div>
    </div>

    <div class="container fixed bottom-6">
      <div class="flex items-center justify-between rounded-xl bg-secondary p-2">
        <div class="flex gap-2">
          <button class="icon-menu">
            <i class="bx bx-list-ul text-3xl"></i>
          </button>
          <button class="icon-menu">
            <i class="bx bx-checkbox text-3xl"></i>
          </button>
          <button class="icon-menu">
            <i class="bx bx-checkbox-checked text-3xl"></i>
          </button>
        </div>
        <div class="separator h-6 w-[2px] bg-[#ffffff33]"></div>
        <button class="icon-menu"><i class="bx bx-plus text-3xl"></i></button>
        <button class="icon-menu"><i class="bx bx-search text-2xl"></i></button>
        <div class="separator h-6 w-[2px] bg-[#ffffff33]"></div>
        <button class="icon-menu"><i class="bx bx-globe text-2xl"></i></button>
      </div>
    </div>
  </section>
</template>
