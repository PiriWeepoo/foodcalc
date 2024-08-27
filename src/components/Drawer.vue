<script setup>
import DrawerHead from './DrawerHead.vue'
import CartItemList from './CartItemList.vue'
</script>

<template>
  <div class="fixed left-0 top-0 z-10 h-full w-full bg-black opacity-70"></div>
  <div class="fixed right-0 top-0 z-20 flex h-full w-full flex-col bg-white p-8">
    <DrawerHead />

    <CartItemList />

    <div class="my-6 flex flex-col gap-2">
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
      class="disable:bg-slate-400 w-full cursor-pointer rounded-xl bg-lime-500 py-3 text-white transition hover:bg-lime-600 active:bg-lime-700"
    >
      Оформить заказ
    </button>
  </div>
</template>
