<script setup>
import axios from 'axios'
import { reactive, ref } from 'vue'

import { inject } from 'vue'

const { closeDrawer } = inject('cartActions')

const foods = reactive({
  title: '',
  calories: '',
  prots: '',
  fats: '',
  carbs: '',
  rate: '',
  ingredients: []
})

const addFood = async () => {
  try {
    const { data } = await axios.post('https://4b0723948a636cf0.mokky.dev/items', {
      title: foods.title,
      calories: foods.calories,
      prots: foods.prots,
      fats: foods.fats,
      carbs: foods.carbs,
      rate: foods.rate,
      ingredients: []
    })
    console.log(data.value)
    closeDrawer()
  } catch (error) {
    console.log(error)
  }
}
const test = () => {
  console.log(foods.calories)
}
</script>

<template>
  <div
    class="form r gap-3transition-all relative z-10 flex w-full shrink-0 cursor-pointer snap-start flex-col items-center justify-center duration-300"
  >
    <div class="w-full">
      <form @submit.prevent="addFood" class="flex flex-col gap-3">
        <div class="flex flex-col items-start">
          <label for="title" class="text-sm font-semibold text-slate-500">Название</label>
          <input
            v-model="foods.title"
            name="title"
            type="text"
            placeholder="Введите название"
            class="w-full border-0 border-b-2 border-indigo-400 bg-transparent py-px pl-0 text-slate-600 outline-none placeholder:text-xs placeholder:text-slate-300 focus:outline-none focus:ring-inset"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col">
            <label for="calories" class="text-sm font-semibold text-slate-500"
              >Калории (в 100г.)</label
            >
            <input
              v-model.number="foods.calories"
              @focus.native="$event.target.select()"
              type="text"
              inputmode="numeric"
              placeholder="ккал"
              class="box-border border-0 border-b-2 border-indigo-400 bg-transparent py-px pl-0 text-slate-600 outline-none placeholder:text-xs placeholder:text-slate-300 focus:outline-none focus:ring-0"
            />
          </div>
          <div class="flex flex-col">
            <label for="rate" class="text-sm font-semibold text-slate-500">Коэффициент</label>
            <input
              v-model.number="foods.rate"
              @focusin="$event.target.select()"
              type="text"
              inputmode="numeric"
              placeholder="коэффициент"
              class="box-border border-0 border-b-2 border-indigo-400 bg-transparent py-px pl-0 text-slate-600 outline-none placeholder:text-xs placeholder:text-slate-300 focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div class="flex w-full flex-col items-start">
            <label for="prots" class="text-sm font-semibold text-slate-500">Белки</label>
            <input
              v-model.number="foods.prots"
              @focusin="$event.target.select()"
              type="text"
              inputmode="numeric"
              placeholder="в 100г."
              class="w-full border-0 border-b-2 border-indigo-400 bg-transparent py-px pl-0 text-slate-600 outline-none placeholder:text-xs placeholder:text-slate-300 focus:outline-none focus:ring-0"
            />
          </div>
          <div class="flex w-full flex-col items-start">
            <label for="fats" class="text-sm font-semibold text-slate-500">Жиры</label>
            <input
              v-model.number="foods.fats"
              @focus.native="$event.target.select()"
              type="text"
              inputmode="numeric"
              placeholder="в 100г."
              class="w-full border-0 border-b-2 border-indigo-400 bg-transparent py-px pl-0 text-slate-600 outline-none placeholder:text-xs placeholder:text-slate-300 focus:outline-none focus:ring-0"
            />
          </div>
          <div class="flex w-full flex-col items-start">
            <label for="carbs" class="text-sm font-semibold text-slate-500">Углеводы</label>
            <input
              v-model.number="foods.carbs"
              @focus.native="$event.target.select()"
              type="text"
              inputmode="numeric"
              placeholder="в 100г."
              class="w-full border-0 border-b-2 border-indigo-400 bg-transparent py-px pl-0 text-slate-600 outline-none placeholder:text-xs placeholder:text-slate-300 focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <div class="inline-flex items-center gap-5">
          <button
            type="submit"
            class="hover:transiton mt-6 w-full rounded-xl bg-indigo-400 py-3 text-sm font-semibold text-slate-100 shadow-lg shadow-slate-300 transition-all hover:scale-110 focus:scale-110 focus:outline-none"
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
