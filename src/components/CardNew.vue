<script setup>
import { reactive, ref, inject, provide } from 'vue'
import Popup from './Popup.vue'

const props = defineProps({
  id: Number,
  title: String,
  calories: Number,
  prots: Number,
  fats: Number,
  carbs: Number,
  rate: Number,
  raw: Number,
  ready: Number,
  isOpen: Boolean,
  dateUpdate: Number,
  isDeleted: Boolean
})

//===============================//
const bjuNeed = reactive({
  prots: null,
  carbs: null,
  fats: null,
  weight: null
})

const popupOpen = ref(false)

const closePopup = () => {
  popupOpen.value = false
}

const openPopup = () => {
  popupOpen.value = true
}

const changeInputProt = () => {
  const koef = bjuNeed.prots / props.prots //parseFloat((val / props.fats).toFixed(2))

  bjuNeed.fats = (props.fats * koef).toFixed(2)
  bjuNeed.carbs = (props.carbs * koef).toFixed(2)
  bjuNeed.weight = (100 * koef).toFixed(2)
}

const changeInputCarb = () => {
  const koef = bjuNeed.carbs / props.carbs //parseFloat((val / props.fats).toFixed(2))

  bjuNeed.fats = (props.fats * koef).toFixed(2)
  bjuNeed.prots = (props.prots * koef).toFixed(2)
  bjuNeed.weight = (100 * koef).toFixed(2)
}

const changeInputFat = () => {
  const koef = bjuNeed.fats / props.fats //parseFloat((val / props.fats).toFixed(2))

  bjuNeed.prots = (props.prots * koef).toFixed(2)
  bjuNeed.carbs = (props.carbs * koef).toFixed(2)
  bjuNeed.weight = (100 * koef).toFixed(2)
}

//===============================//

const formatDate = (timestamp) => {
  let formattedDate = ''
  if (isNaN(timestamp)) {
    console.log('')
  } else {
    // const timestamp = props.dateUpdate // example timestamp
    const date = new Date(timestamp)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date)
  }

  return formattedDate // prints "March 24, 2021"
}

provide('popupActions', {
  closePopup,
  openPopup
})

const isCarb = ref(props.carbs > props.prots ? true : false)
const isProt = ref(props.prots > props.carbs ? true : false)

// console.log(props.title, props.prots, props.carbs, isProt.value)

const toggleCardInfo = inject('toggleCardInfo')
</script>

<!-- p-4 cursor-default flex items-center justify-between w-full w-full rounded-lg bg-indigo-300 px-3 hover:-translate-y-1-->
<!-- grid grid-cols-[50px_50px_50px] -->
<template>
  <Popup v-if="popupOpen" :closePopup="closePopup" :item="props" />
  <div class="relative card">
    <div class="card__header" @click="() => toggleCardInfo(props.id)">
      <h2 class="header__title">{{ title }}</h2>
      <div class="header__info">
        <Transition name="fade" mode="out-in">
          <p class="header__bju" v-show="false">Б: {{ prots }} Ж: {{ fats }} У: {{ carbs }}</p>
        </Transition>
        <p class="color-text-accent header__cal">{{ formatDate(dateUpdate) }}</p>
        <div class="circle" :class="{ carb: isCarb, prot: isProt }"></div>
      </div>
    </div>
    <Transition name="slide-info" mode="out-in">
      <div class="card__info" v-show="props.isOpen">
        <div class="bju">
          <p>Б: {{ !bjuNeed.weight ? prots : Math.round(bjuNeed.weight * prots * 0.01) }}</p>
          <p>Ж: {{ !bjuNeed.weight ? fats : Math.round(bjuNeed.weight * fats * 0.01) }}</p>
          <p>У: {{ !bjuNeed.weight ? carbs : Math.round(bjuNeed.weight * carbs * 0.01) }}</p>
          <p class="">Кф: {{ rate }}</p>
        </div>
        <div class="card-inputs">
          <input
            v-model.number="bjuNeed.prots"
            class="card-input"
            type="text"
            inputmode="decimal"
            name="inputNeedProt"
            :placeholder="'Белки: ' + props.prots"
            @input="changeInputProt"
            @focus="$event.target.select()"
          />
          <input
            v-model.number="bjuNeed.fats"
            class="card-input"
            type="text"
            inputmode="decimal"
            name="inputNeedProt"
            :placeholder="'Жиры: ' + props.fats"
            @input="changeInputFat"
            @focus="$event.target.select()"
          />
          <input
            v-model.number="bjuNeed.carbs"
            class="card-input"
            type="text"
            inputmode="decimal"
            name="inputNeedCarbs"
            :placeholder="'Углеводы: ' + props.carbs"
            @input="changeInputCarb"
            @focus="$event.target.select()"
          />
        </div>

        <div class="card-weights">
          <input
            @focus.passive="$event.target.select()"
            v-model="bjuNeed.weight"
            type="text"
            inputmode="decimal"
            name="inpuraw"
            class="card-input"
          />
          <p class="">готовое: {{ Math.round(bjuNeed.weight * rate) }}</p>
          <p class="">сырое: {{ Math.round(bjuNeed.weight / rate) }}</p>
          <!-- <p class="">нужно: {{ needWeight }}</p> -->
        </div>
        <button
          class="right-2 bottom-2 absolute rounded-full color-text-accent info__edit-button"
          @click="openPopup"
        >
          <svg
            viewBox="0 0 24 24"
            width="2rem"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            opacity="50%"
          >
            <path
              d="m13.75,11.664l-3.457,3.457c-.559.559-1.332.879-2.121.879h-.172v-.172c0-.789.32-1.562.879-2.121l3.457-3.457,1.414,1.414Zm1.043-3.871l-1.043,1.043,1.414,1.414,1.043-1.043c.39-.39.39-1.024,0-1.414s-1.023-.391-1.414,0Zm9.207,4.207c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-6.379-5.621c-1.17-1.17-3.072-1.17-4.242,0l-5.914,5.914c-.944.944-1.465,2.2-1.465,3.535v1.172c0,.553.447,1,1,1h1.172c1.335,0,2.591-.521,3.535-1.465l5.914-5.914c1.17-1.17,1.17-3.072,0-4.242Z"
            />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.card {
  /* backdrop-filter: blur(10px); */
  /* background-color: rgba(235, 235, 235, 0.4); */
  /* border: 1px solid rgba(255, 255, 255, 0.2); */
  cursor: pointer;
  /* border-radius: 1em; */
  /* display: grid; */
  /* outline-offset: -4px; */
  /* filter: drop-shadow(0px 1px 2px rgba(20, 20, 20, 0.2)); */
}

.card__header {
  display: flex;
  justify-content: space-between;
  /* font-size: x-large; */
  padding: 0.2rem 1rem;
  box-sizing: border-box;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  /* box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.2); */
  align-items: center;
}

.header__title {
  font-size: 1rem;
  font-weight: 400;
  /* width: 300px; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.header__bju {
  font-size: 0.8rem;
  font-weight: 400;
  opacity: 40%;
}

.header__cal {
  font-size: 0.5rem;
  font-weight: 700;
  width: 3rem;
  margin-right: 1rem;
  text-align: right;
  opacity: 0.7;
}

.card__info {
  border-top: 1px solid currentColor;
  display: grid;
  grid-template-columns: 70px minmax(0, 1fr) minmax(0, 1fr);
  gap: 0.75rem;
  padding: 0.5rem 0.5rem;
  max-height: 120px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow:
    0px -8px 8px -5px rgba(0, 0, 0, 0.3) inset,
    0px 8px 8px -5px rgba(0, 0, 0, 0.3) inset;
}

.card-input {
  box-sizing: border-box;
  max-width: -webkit-fill-available;
  border-bottom: 1px solid currentColor;
  background: none;
  border-radius: 0px;
  /* border-radius: 0.4rem; */
  outline: none;
  padding: 0 0.2rem;
  margin-bottom: 0.5rem;
}
.card-input:focus-visible {
  border-color: var(--color-accent);
}

.header__info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.info__edit-button {
  border-radius: 100%;
  box-shadow: inset 0 2px 2px 0 rgb(0 0 0 / 0.4);
  opacity: 60%;
}

.carb {
  background-color: #c96951;
  /* background-color: hsl(12, 53%, 75%); */
}
.prot {
  background-color: #379595;
  /* background-color: hsl(180, 46%, 60%); */
}

.circle {
  width: 1rem;
  height: 1rem;
  opacity: 0.5;
  /* background: blue; */
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
}

/* ANIMATION START */

.slide-info-enter-active,
.slide-info-leave-active {
  transition: all 0.4s ease;
  height: 120px;
  overflow: hidden;
}

.slide-info-enter-from,
.slide-info-leave-to {
  opacity: 0;
  padding: 0;
  /* transform: translateY(-30px); */
  height: 0px;
}

fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* ANIMATION END */
</style>
