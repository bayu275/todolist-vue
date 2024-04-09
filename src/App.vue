<script setup>
</script>

<template>
  <header>
    <div class="container flex items-center justify-between py-4">
      <a href="#" class="logo text-xl font-semibold">Bayu <span class="text-primary_alt">x Tasks</span></a>
      <div class="rounded-full bg-gradient-to-br from-white to-[#350084] p-px">
        <button
          class="flex items-center justify-center rounded-full bg-gradient-to-br from-[#ab83e7] to-[#350084] px-[12px] py-[4px] text-base shadow-button">
          <p>Powered by</p>
          <i class='bx bx-chevron-down'></i>
        </button>
      </div>
    </div>
  </header>

  <main>
    <section class="py-16">
      <div class="container lg:max-w-2xl relative">
        <div class="mb-10 flex columns-1 justify-between">
          <h1 class="text-2xl font-semibold text-primary_alt">All</h1>
          <button class="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-base hover:shadow-button_hover">
            <i class="bx bx-trash text-xl"></i>
            <p>Delete All</p>
          </button>
        </div>

        <div class="cursor-pointer text-center opacity-[0.4]">
          <span class="inline-block"><i class="bx bx-plus text-5xl"></i></span>
          <p>Create your first task</p>
        </div>

        <div class="menu-buttons">
          <div class="flex items-center gap-x-2 p-2 justify-evenly bg-primary_alt_dark rounded-t-xl sm:rounded-xl">
            <button class="icon-menu"><i class="bx bx-list-ul text-3xl md:text-5xl"></i></button>
            <button class="icon-menu"><i class="bx bx-checkbox text-3xl md:text-5xl"></i></button>
            <button class="icon-menu"><i class="bx bx-checkbox-checked text-3xl md:text-5xl"></i></button>
            <div class="separator"></div>
            <button class="icon-menu"><i class="bx bx-plus text-3xl md:text-5xl"></i></button>
            <button class="icon-menu"><i class="bx bx-search text-2xl md:text-4xl"></i></button>
            <div class="separator"></div>
            <button class="icon-menu"><i class="bx bx-globe text-2xl md:text-4xl"></i></button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
