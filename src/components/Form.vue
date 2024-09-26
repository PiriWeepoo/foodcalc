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
  raw: '',
  ready: '',
  ingredients: []
})

const isEmpty = (val) => val === null || !(Object.keys(val) || val).length

const addFood = async () => {
  try {
    if (
      foods.title === '' ||
      foods.calories === '' ||
      foods.prots === '' ||
      foods.fats === '' ||
      foods.carbs === '' ||
      foods.ready === '' ||
      foods.raw === ''
    ) {
      alert('Не все поля заполнены.')
    } else {
      const { data } = await axios.post('https://4b0723948a636cf0.mokky.dev/items', {
        title: foods.title,
        calories: foods.calories,
        prots: foods.prots,
        fats: foods.fats,
        carbs: foods.carbs,
        rate: parseFloat((foods.ready / foods.raw).toFixed(2)),
        ingredients: []
      })
      console.log(data.value)
      closeDrawer()
    }
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
          <label for="title" class="text-sm font-semibold">Название</label>
          <input
            v-model="foods.title"
            name="title"
            type="text"
            placeholder="Введите название"
            class="w-full border-0 border-b-2 border-current bg-transparent py-px pl-0 outline-none placeholder:text-xs placeholder:opacity-90 focus:outline-none focus:ring-inset"
          />
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div class="flex flex-col">
            <label for="calories" class="text-sm font-semibold">Калории (в 100г.)</label>
            <input
              v-model.number="foods.calories"
              @focus.native="$event.target.select()"
              type="text"
              inputmode="decimal"
              placeholder="ккал"
              class="box-border rounded-none border-0 border-b-2 border-current bg-transparent py-px pl-0 outline-none placeholder:text-xs placeholder:opacity-90 focus:border-[#4a7766] focus:outline-none focus:ring-0"
            />
          </div>
          <div class="flex flex-col">
            <label for="rate" class="text-sm font-semibold">Сырое</label>
            <input
              v-model.number="foods.raw"
              @focusin="$event.target.select()"
              type="text"
              inputmode="decimal"
              placeholder="г."
              class="box-border rounded-none border-0 border-b-2 border-current bg-transparent py-px pl-0 outline-none placeholder:text-xs placeholder:opacity-90 focus:border-[#4a7766] focus:outline-none focus:ring-0"
            />
          </div>
          <div class="flex flex-col">
            <label for="rate" class="text-sm font-semibold">Готовое</label>
            <input
              v-model.number="foods.ready"
              @focusin="$event.target.select()"
              type="text"
              inputmode="decimal"
              placeholder="г."
              class="box-border rounded-none border-0 border-b-2 border-current bg-transparent py-px pl-0 outline-none placeholder:text-xs placeholder:opacity-90 focus:border-[#4a7766] focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div class="flex w-full flex-col items-start">
            <label for="prots" class="text-sm font-semibold">Белки</label>
            <input
              v-model.number="foods.prots"
              @focusin="$event.target.select()"
              type="text"
              inputmode="decimal"
              placeholder="в 100г."
              class="w-full border-0 border-b-2 border-current bg-transparent py-px pl-0 outline-none placeholder:text-xs placeholder:opacity-90 focus:outline-none focus:ring-0"
            />
          </div>
          <div class="flex w-full flex-col items-start">
            <label for="fats" class="text-sm font-semibold">Жиры</label>
            <input
              v-model.number="foods.fats"
              @focus.native="$event.target.select()"
              type="text"
              inputmode="decimal"
              placeholder="в 100г."
              class="w-full border-0 border-b-2 border-current bg-transparent py-px pl-0 outline-none placeholder:text-xs placeholder:opacity-90 focus:outline-none focus:ring-0"
            />
          </div>
          <div class="flex w-full flex-col items-start">
            <label for="carbs" class="text-sm font-semibold">Углеводы</label>
            <input
              v-model.number="foods.carbs"
              @focus.native="$event.target.select()"
              type="text"
              inputmode="decimal"
              placeholder="в 100г."
              class="form-input w-full border-0 border-b-2 border-current bg-transparent py-px pl-0 outline-none placeholder:text-xs placeholder:opacity-90 focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <div class="inline-flex items-center gap-5">
          <button
            type="submit"
            class="hover:transiton color-bg-accent mt-6 w-full rounded-xl py-3 text-sm font-semibold text-[var(--color-light)] shadow-lg shadow-stone-900/40 transition-all hover:scale-105 focus:scale-100 focus:outline-none"
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
