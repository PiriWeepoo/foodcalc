<script setup>
import { reactive, ref } from 'vue'
defineProps({
  id: Number,
  title: String,
  calories: Number,
  prots: Number,
  fats: Number,
  carbs: Number,
  rate: Number,
  imageUrl: String,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  // onChangeWeight: Function,
  onClickFavorite: Function
})

// const weights = reactive({
//   raw: '100',
//   ready: ''
// })

const weight = ref('100')

// const READY = ref(weights, 'ready')

// watch(RAW, (val) => {
//   // weights.ready = val * 2
//   READY.value = val * 2
//   console.log(weights.ready)
// })
// watch(READY, (val) => {
//   // weights.raw = val / 2
//   RAW.value = val / 2
//   console.log(weights.raw)
// })
</script>

<!-- p-4 cursor-default flex items-center justify-between w-full w-full rounded-lg bg-indigo-300 px-3 hover:-translate-y-1-->

<template>
  <div
    class="relative flex cursor-pointer items-center justify-between gap-1 rounded-xl border border-slate-100 bg-indigo-50 p-1 px-3 transition hover:shadow-xl"
  >
    <!-- <img
      @click="onClickFavorite"
      :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="like"
      class="absolute top-4 left-4 z-20"
    /> -->

    <!-- <img :src="imageUrl" alt="Sneaker" /> -->

    <div class="mt-2 flex flex-col gap-2">
      <div>
        <p class="text-l text-indigo-900">{{ title }}</p>
        <p class="text-2xl font-black text-indigo-300">{{ calories }}</p>
      </div>
      <div class="grid grid-cols-[50px_50px_50px]">
        <p>Б: {{ prots }}</p>
        <p>Ж: {{ fats }}</p>
        <p>У: {{ carbs }}</p>
        <p class="text-green-900">Кэф: {{ rate }}</p>
      </div>

      <!-- <img @click="onClickAdd" :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="plus" /> -->
    </div>
    <div>
      <div class="mt-1">
        <input
          @focus.native="$event.target.select()"
          v-model="weight"
          type="text"
          name="inpuraw"
          class="peer border-b border-gray-300 bg-inherit py-1 transition-colors focus:border-b-2 focus:border-blue-700 focus:outline-none"
        />
      </div>
      <p
        class="left-0 top-1 cursor-text transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-700"
      >
        готовое: {{ Math.round(weight * rate) }}
      </p>
      <p
        class="left-0 top-1 cursor-text transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-700"
      >
        сырое: {{ Math.round(weight / rate) }}
      </p>
    </div>
    <div></div>
  </div>
</template>
