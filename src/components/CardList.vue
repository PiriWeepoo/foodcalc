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
  <div class="gap-2">
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :calories="item.calories"
      :prots="item.prots"
      :fats="item.fats"
      :carbs="item.carbs"
      :rate="item.rate"
      :raw="item.raw"
      :ready="item.ready"
      :date-update="item.dateUpdate"
      :is-open="item.isOpen"
      :is-deleted="item.isDeleted"
    />
  </div>
</template>
