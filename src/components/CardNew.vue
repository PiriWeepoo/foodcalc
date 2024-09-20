<script setup>
import { computed, reactive, ref, toRef, watch } from 'vue'
const props = defineProps({
  // id: Number,
  title: String,
  calories: Number,
  prots: Number,
  fats: Number,
  carbs: Number,
  rate: Number
  // imageUrl: String,
  // isFavorite: Boolean,
  // isAdded: Boolean,
  // onClickAdd: Function,
  // onChangeWeight: Function,
  // onClickFavorite: Function
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

  bjuNeed.fats = props.fats * koef
  bjuNeed.carbs = props.carbs * koef
  bjuNeed.weight = 100 * koef

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

  bjuNeed.prots = props.prots * koef
  bjuNeed.carbs = props.carbs * koef
  bjuNeed.weight = 100 * koef

  console.clear()
  console.log('koef=', koef)

  console.log('P=', bjuNeed.prots)
  console.log('F=', bjuNeed.fats)
  console.log('C=', bjuNeed.carbs)
  console.log('W=', bjuNeed.weight)
}

//===============================//
</script>

<!-- p-4 cursor-default flex items-center justify-between w-full w-full rounded-lg bg-indigo-300 px-3 hover:-translate-y-1-->
<!-- grid grid-cols-[50px_50px_50px] -->
<template>
  <div class="card color-accent">
    <div class="card__header">
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__cal">{{ calories }}</p>
    </div>
    <div class="card__info">
      <div class="card-inputs">
        <input
          v-model.number="bjuNeed.prots"
          class="card-input"
          type="text"
          inputmode="numeric"
          name="inputNeedProt"
          :placeholder="'Белки: ' + props.prots"
          @input="changeInputProt"
          @focus="$event.target.select()"
        />
        <input
          v-model.number="bjuNeed.fats"
          class="card-input"
          type="text"
          inputmode="numeric"
          name="inputNeedProt"
          :placeholder="'Жиры: ' + props.fats"
          @input="changeInputFat"
          @focus="$event.target.select()"
        />
        <input
          v-model.number="bjuNeed.carbs"
          class="card-input"
          type="text"
          inputmode="numeric"
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
        <p class="">Кэф: {{ rate }}</p>
      </div>

      <div class="card-weights">
        <input
          @focus.passive="$event.target.select()"
          v-model="bjuNeed.weight"
          type="text"
          inputmode="numeric"
          name="inpuraw"
          class="card-input"
        />

        <p class="">готовое: {{ Math.round(bjuNeed.weight * rate) }}</p>
        <p class="">сырое: {{ Math.round(bjuNeed.weight / rate) }}</p>
        <!-- <p class="">нужно: {{ needWeight }}</p> -->
      </div>
    </div>
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

.card__title {
  font-size: 1rem;
  font-weight: 700;
}

.card__cal {
  font-size: 1.5rem;
  font-weight: 900;
}

.card__info {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 64px minmax(0, 1fr);
  gap: 0.75rem;
  padding: 0.5rem 0.5rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.card-input {
  box-sizing: border-box;
  max-width: -webkit-fill-available;
  border-bottom: 1px solid currentColor;
  background: none;
  /* border-radius: 0.4rem; */
  outline: none;
  padding: 0 0.2rem;
  margin-bottom: 0.5rem;
}
</style>
