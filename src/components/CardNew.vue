<script setup>
import { computed, reactive, ref } from 'vue'
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

const weight = ref('100')

const needProt = ref(props.prots)

// const needWeight = ref(0)

const needWeight = computed(() => {
  console.log(needProt.value)
  return Math.round((needProt.value / props.carbs) * 100)
})
</script>

<!-- p-4 cursor-default flex items-center justify-between w-full w-full rounded-lg bg-indigo-300 px-3 hover:-translate-y-1-->
<!-- grid grid-cols-[50px_50px_50px] -->
<template>
  <div class="card">
    <div class="card__header">
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__cal">{{ calories }}</p>
    </div>
    <div class="card__info">
      <div class="">
        <input
          v-model="needProt"
          class="card-input"
          type="text"
          inputmode="numeric"
          name="inputNeedProt"
          @focus="$event.target.select()"
        />
        <p>Б: {{ prots }}</p>
        <p>Ж: {{ fats }}</p>
        <p>У: {{ carbs }}</p>
        <p class="">Кэф: {{ rate }}</p>
      </div>
      <div>
        <div class="">
          <input
            @focus.passive="$event.target.select()"
            v-model="weight"
            type="text"
            inputmode="numeric"
            name="inpuraw"
            class="peer border-b border-gray-300 bg-inherit py-1 transition-colors focus:border-b-2 focus:border-blue-700 focus:outline-none"
          />
        </div>
        <p class="">готовое: {{ Math.round(weight * rate) }}</p>
        <p class="">сырое: {{ Math.round(weight / rate) }}</p>
        <p class="">нужно: {{ needWeight }}</p>
        <!-- <p
          class=""
        >
          {{ Math.round(rawWeight) }}
        </p> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  color: var(--color-primary);
}
.card {
  cursor: pointer;
  border-radius: 1em;
  /* display: grid; */
  /* padding: 1em; */
  /* outline-offset: -4px; */
  filter: drop-shadow(0px 5px 5px rgba(20, 20, 20, 0.4));
}

.card__header {
  display: flex;
  justify-content: space-between;
  font-size: x-large;
  padding: 0.2rem 1rem;
  box-sizing: border-box;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: var(--color-secondary);
  /* box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.2); */
  border-bottom: 1px solid var(--color-primary);
  align-items: center;
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
  padding: 4px 1rem;
  background-color: var(--color-secondary);
  grid-template-columns: repeat(2, 1fr);
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.card-input {
  border: 1px solid var(--color-primary);
  border-radius: 0.4rem;
  outline: none;
  color: var(--color-secondary);
  padding: 0 0.2rem;
}
</style>
