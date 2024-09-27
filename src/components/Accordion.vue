<script setup>
import { ref } from 'vue'
import AccordionItem from './AccordionItem.vue'

const props = defineProps({
  items: Array
})

// const newItems = props.items.map((item) => {
//   console.log(item)
//   return { ...item, isOpen: true }
// })

// const faqs = ref(
//   props.items.map((item) => {
//     console.log(item)
//     return { ...item, isOpen: false }
//   })
// )

// const faqs = ref(props.items)

// console.log(newItems.values)

// const toggleAnswer = (id) => {
//   faqs.value = faqs.value.map((faq) =>
//     faq.isOpen && faq.id !== id ? { ...faq, isOpen: false } : faq
//   )
//   faqs.value = faqs.value.map((faq) => (faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq))
// }
</script>

<template>
  <div>
    <h1>Accordion</h1>
    <div class="items">
      <AccordionItem
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :calories="item.calories"
        :prots="item.prots"
        :fats="item.fats"
        :carbs="item.carbs"
        :rate="item.rate"
        :isOpen="item.isOpen"
      />
    </div>
  </div>
</template>

<style>
.items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
