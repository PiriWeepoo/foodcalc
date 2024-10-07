<script setup>
import Card from './CardNew.vue'

defineProps({
  items: Array
})

// const emit = defineEmits(['addToFavorite'])

// const onClickAdd = () => {
//   alert('dobavit')
// }
</script>

<template>
  <div class="grid gap-2">
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :calories="item.calories.toString()"
      :prots="item.prots.toString()"
      :fats="item.fats.toString()"
      :carbs="item.carbs.toString()"
      :rate="item.rate.toString()"
      :raw="item.raw.toString()"
      :ready="item.ready.toString()"
      :is-open="item.isOpen"
      :is-deleted="item.isDeleted"
    />
  </div>
</template>
