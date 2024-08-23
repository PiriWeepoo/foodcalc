<script setup>
import DrawerHead from './DrawerHead.vue'
import CartItemList from './CartItemList.vue'
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed flex right-0 top-0 z-20 p-8">
    <DrawerHead />

    <CartItemList />

    <div class="flex flex-col gap-2 my-6">
      <div class="flex justify-between">
        <p>Итого:</p>
        <span class="font-bold">19 000 руб</span>
      </div>

      <div class="flex justify-between">
        <p>Налог 5%:</p>
        <span class="font-bold">4 500 руб</span>
      </div>
    </div>
    <button
      class="bg-lime-500 text-white w-full rounded-xl py-3 hover:bg-lime-600 active:bg-lime-700 disable:bg-slate-400 transition cursor-pointer"
    >
      Оформить заказ
    </button>
  </div>
</template>
