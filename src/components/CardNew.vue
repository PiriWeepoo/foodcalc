<script setup>
import { reactive, toRef, inject } from 'vue'
const props = defineProps({
  id: Number,
  title: String,
  calories: Number,
  prots: Number,
  fats: Number,
  carbs: Number,
  rate: Number,
  isOpen: Boolean
})

// const weight = ref('100')

// const needProt = ref(props.prots)

// const needWeight = ref(0)

// const needWeight = computed(() => {
//   console.log(needProt.value)
//   return Math.round((needProt.value / props.carbs) * 100)
// })

//===============================//
const bjuNeed = reactive({
  prots: null,
  carbs: null,
  fats: null,
  weight: null
})

const PROT = toRef(bjuNeed, 'prots')
const CARB = toRef(bjuNeed, 'carbs')
const FAT = toRef(bjuNeed, 'fats')
const WEIGHT = toRef(bjuNeed, 'weight')

// watch(PROT, (val) => {
//   const koef = parseFloat((val / props.prots).toFixed(2))

//   bjuNeed.fats = parseFloat((props.fats * koef).toFixed(2))
//   bjuNeed.carbs = parseFloat((props.carbs * koef).toFixed(2))
//   bjuNeed.weight = parseFloat((100 * koef).toFixed(2))

//   console.clear()
//   console.log('koef=', koef)

//   console.log('P=', val)
//   console.log('F=', bjuNeed.fats)
//   console.log('C=', bjuNeed.carbs)
//   console.log('W=', bjuNeed.weight)
// })

// watch(CARB, (val) => {
//   const koef = parseFloat((val / props.carbs).toFixed(2))

//   bjuNeed.prots = parseFloat((props.prots * koef).toFixed(2))
//   bjuNeed.fats = parseFloat((props.fats * koef).toFixed(2))
//   bjuNeed.weight = parseFloat((100 * koef).toFixed(2))

//   console.clear()
//   console.log('koef=', koef)

//   console.log('P=', bjuNeed.prots)
//   console.log('F=', bjuNeed.fats)
//   console.log('C=', val)
//   console.log('W=', bjuNeed.weight)
// })

// watch(FAT, (val) => {
//   const koef = parseFloat((val / props.fats).toFixed(2))

//   bjuNeed.prots = parseFloat((props.prots * koef).toFixed(2))
//   bjuNeed.carbs = parseFloat((props.carbs * koef).toFixed(2))
//   bjuNeed.weight = parseFloat((100 * koef).toFixed(2))

//   console.clear()
//   console.log('koef=', koef)

//   console.log('P=', bjuNeed.prots)
//   console.log('F=', val)
//   console.log('C=', bjuNeed.carbs)
//   console.log('W=', bjuNeed.weight)
// })

//===============================//

const changeInputProt = () => {
  const koef = bjuNeed.prots / props.prots //parseFloat((val / props.fats).toFixed(2))

  bjuNeed.fats = parseFloat((props.fats * koef).toFixed(2))
  bjuNeed.carbs = parseFloat((props.carbs * koef).toFixed(2))
  bjuNeed.weight = parseFloat((100 * koef).toFixed(2))

  console.clear()
  console.log('val=', bjuNeed.prots)
  console.log('koef=', koef)

  console.log('P=', bjuNeed.prots)
  console.log('F=', bjuNeed.fats)
  console.log('C=', bjuNeed.carbs)
  console.log('W=', bjuNeed.weight)
}

const changeInputCarb = () => {
  const koef = bjuNeed.carbs / props.carbs //parseFloat((val / props.fats).toFixed(2))

  bjuNeed.fats = parseFloat((props.fats * koef).toFixed(2))
  bjuNeed.prots = parseFloat((props.prots * koef).toFixed(2))
  bjuNeed.weight = parseFloat((100 * koef).toFixed(2))

  console.clear()
  console.log('koef=', koef)

  console.log('P=', bjuNeed.prots)
  console.log('F=', bjuNeed.fats)
  console.log('C=', bjuNeed.carbs)
  console.log('W=', bjuNeed.weight)
}

const changeInputFat = () => {
  const koef = bjuNeed.fats / props.fats //parseFloat((val / props.fats).toFixed(2))

  bjuNeed.prots = parseFloat((props.prots * koef).toFixed(2))
  bjuNeed.carbs = parseFloat((props.carbs * koef).toFixed(2))
  bjuNeed.weight = parseFloat((100 * koef).toFixed(2))

  console.clear()
  console.log('koef=', koef)

  console.log('P=', bjuNeed.prots)
  console.log('F=', bjuNeed.fats)
  console.log('C=', bjuNeed.carbs)
  console.log('W=', bjuNeed.weight)
}

//===============================//

const toggleCardInfo = inject('toggleCardInfo')
</script>

<!-- p-4 cursor-default flex items-center justify-between w-full w-full rounded-lg bg-indigo-300 px-3 hover:-translate-y-1-->
<!-- grid grid-cols-[50px_50px_50px] -->
<template>
  <div class="card color-accent relative">
    <div class="card__header" @click="() => toggleCardInfo(props.id)">
      <h2 class="header__title">{{ title }}</h2>
      <div class="header__info">
        <Transition name="fade" mode="out-in">
          <p class="header__bju" v-show="!props.isOpen">
            Б: {{ prots }} Ж: {{ fats }} У: {{ carbs }}
          </p>
        </Transition>
        <p class="header__cal color-text-accent">{{ calories }}</p>
      </div>
    </div>
    <Transition name="slide-info" mode="out-in">
      <div class="card__info" v-show="props.isOpen">
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
        <div class="bju">
          <p>Б: {{ prots }}</p>
          <p>Ж: {{ fats }}</p>
          <p>У: {{ carbs }}</p>
          <p class="">Кф: {{ rate }}</p>
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
          class="info__edit-button color-text-accent fixed bottom-2 right-2 rounded-full"
          @click=""
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
  cursor: pointer;
  border-radius: 1em;
  /* display: grid; */
  /* outline-offset: -4px; */
  filter: drop-shadow(0px 5px 5px rgba(20, 20, 20, 0.4));
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
  border-bottom: 1px solid currentColor;
}

.header__title {
  font-size: 1rem;
  font-weight: 700;
}

.header__bju {
  font-size: 0.8rem;
  font-weight: 400;
  opacity: 40%;
}

.header__cal {
  font-size: 1.5rem;
  font-weight: 900;
  width: 3rem;
  text-align: right;
}

.card__info {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 70px minmax(0, 1fr);
  gap: 0.75rem;
  padding: 0.5rem 0.5rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  max-height: 120px;
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
</style>
