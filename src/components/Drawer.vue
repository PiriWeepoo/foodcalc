<script setup>
import axios from 'axios'

import DrawerHead from './DrawerHead.vue'
import CartItemList from './CartItemList.vue'
import Form from './Form.vue'

const food = {
  title: String,
  calories: Number,
  prots: Number,
  fats: Number,
  carbs: Number,
  rate: Number,
  ingredients: []
}

const addFood = async () => {
  try {
    const { food } = await axios.post('https://4b0723948a636cf0.mokky.dev/favorites', {
      title: 'Рисик',
      calories: '350',
      prots: '12',
      fats: '2',
      carbs: '77',
      rate: '2.0',
      ingredients: []
    })
    console.log(food)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-white p-8">
    <DrawerHead />

    <Form />
    <!-- <CartItemList /> -->

    <!-- <div class="my-6 flex flex-col gap-2">
      <div class="flex justify-between">
        <p>Итого:</p>
        <span class="font-bold">19 000 руб</span>
      </div>

      <div class="flex justify-between">
        <p>Налог 5%:</p>
        <span class="font-bold">4 500 руб</span>
      </div>
    </div> -->
  </div>
</template>
