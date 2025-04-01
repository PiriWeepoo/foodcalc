<script setup>
import axios from 'axios'
import { reactive } from 'vue'
import { inject } from 'vue'

const props = defineProps({
  id: Number,
  title: { type: String, default: '' },
  calories: { type: Number, default: 0 },
  prots: { type: Number, default: 0 },
  fats: { type: Number, default: 0 },
  carbs: { type: Number, default: 0 },
  rate: { type: Number, default: 0 },

  ready: { type: Number, default: 0 },

  raw: { type: Number, default: 0 },
  typeForm: String
})

const { closeDrawer } = inject('cartActions')
// const { closePopup } = inject('popupActions')

const foods = reactive({
  title: props.title,
  calories: props.calories,
  prots: props.prots,
  fats: props.fats,
  carbs: props.carbs,
  raw: props.raw,
  ready: props.ready,
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
      rate: parseFloat((foods.ready / foods.raw).toFixed(2)).toString(),
      raw: foods.raw,
      ready: foods.ready,
      isDeleted: false,
      dateUpdate: Date.now(),
      ingredients: []
    })
    console.log(data.value)
    closeDrawer()
  } catch (error) {
    console.log(error)
  }
}

const updateFood = async () => {
  try {
    const { data } = await axios.patch('https://4b0723948a636cf0.mokky.dev/items/' + props.id, {
      title: foods.title,
      calories: foods.calories,
      prots: foods.prots,
      fats: foods.fats,
      carbs: foods.carbs,
      rate: parseFloat((foods.ready / foods.raw).toFixed(2)),
      raw: foods.raw,
      ready: foods.ready,
      dateUpdate: Date.now(),
      ingredients: []
    })
    // console.log(data.value)
  } catch (error) {
    console.log(error)
  }
}

const submitForm = () => {
  props.typeForm === 'update' ? updateFood() : addFood()
}
</script>

<template>
  <div
    class="z-10 relative flex flex-col justify-center items-center gap-3transition-all w-full duration-300 snap-start cursor-pointer form r shrink-0"
  >
    <div class="w-full">
      <form @submit.prevent="submitForm" class="flex flex-col gap-3">
        <div class="flex flex-col items-start">
          <label for="title" class="font-semibold text-sm">Название</label>
          <input
            v-model="foods.title"
            name="title"
            type="text"
            placeholder="Введите название"
            class="bg-transparent placeholder:opacity-90 py-px pl-0 border-0 border-current focus:border-[var(--color-accent)] border-b-2 rounded-none outline-none focus:outline-none focus:ring-inset w-full placeholder:text-xs"
          />
        </div>

        <div class="gap-4 grid grid-cols-3">
          <div class="flex flex-col">
            <label for="calories" class="font-semibold text-sm">Калории</label>
            <input
              v-model.number="foods.calories"
              @focus.native="$event.target.select()"
              type="text"
              inputmode="decimal"
              placeholder="в 100г."
              class="box-border bg-transparent placeholder:opacity-90 py-px pl-0 border-0 border-current focus:border-[var(--color-accent)] border-b-2 rounded-none outline-none focus:outline-none focus:ring-0 placeholder:text-xs"
            />
          </div>
          <div class="flex flex-col">
            <label for="rate" class="font-semibold text-sm">Сырое</label>
            <input
              v-model.number="foods.raw"
              @focusin="$event.target.select()"
              type="text"
              inputmode="decimal"
              placeholder="г."
              class="box-border bg-transparent placeholder:opacity-90 py-px pl-0 border-0 border-current focus:border-[var(--color-accent)] border-b-2 rounded-none outline-none focus:outline-none focus:ring-0 placeholder:text-xs"
            />
          </div>
          <div class="flex flex-col">
            <label for="rate" class="font-semibold text-sm">Готовое</label>
            <input
              v-model.number="foods.ready"
              @focusin="$event.target.select()"
              type="text"
              inputmode="decimal"
              placeholder="г."
              class="box-border bg-transparent placeholder:opacity-90 py-px pl-0 border-0 border-current focus:border-[var(--color-accent)] border-b-2 rounded-none outline-none focus:outline-none focus:ring-0 placeholder:text-xs"
            />
          </div>
        </div>

        <div class="gap-4 grid grid-cols-3">
          <div class="flex flex-col items-start w-full">
            <label for="prots" class="font-semibold text-sm">Белки</label>
            <input
              v-model.number="foods.prots"
              @focusin="$event.target.select()"
              type="text"
              inputmode="decimal"
              placeholder="в 100г."
              class="bg-transparent placeholder:opacity-90 py-px pl-0 border-0 border-current focus:border-[var(--color-accent)] border-b-2 rounded-none outline-none focus:outline-none focus:ring-0 w-full placeholder:text-xs"
            />
          </div>
          <div class="flex flex-col items-start w-full">
            <label for="fats" class="font-semibold text-sm">Жиры</label>
            <input
              v-model.number="foods.fats"
              @focus.native="$event.target.select()"
              type="text"
              inputmode="decimal"
              placeholder="в 100г."
              class="bg-transparent placeholder:opacity-90 py-px pl-0 border-0 border-current focus:border-[var(--color-accent)] border-b-2 rounded-none outline-none focus:outline-none focus:ring-0 w-full placeholder:text-xs"
            />
          </div>
          <div class="flex flex-col items-start w-full">
            <label for="carbs" class="font-semibold text-sm">Углеводы</label>
            <input
              v-model.number="foods.carbs"
              @focus.native="$event.target.select()"
              type="text"
              inputmode="decimal"
              placeholder="в 100г."
              class="bg-transparent placeholder:opacity-90 py-px pl-0 border-0 border-current focus:border-[var(--color-accent)] border-b-2 rounded-none outline-none focus:outline-none focus:ring-0 w-full placeholder:text-xs form-input"
            />
          </div>
        </div>

        <div class="inline-flex items-center gap-5">
          <button
            type="submit"
            class="color-bg-accent shadow-lg shadow-stone-900/40 mt-6 py-3 rounded-xl focus:outline-none w-full font-semibold text-[var(--color-light)] text-sm hover:scale-105 focus:scale-100 transition-all hover:transiton"
          >
            {{ typeForm === 'update' ? 'Сохранить' : 'Добавить' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
