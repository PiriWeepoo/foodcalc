<script setup>
import DrawerHead from './DrawerHead.vue'
import Form from './Form.vue'
</script>

<template>
  <div class="color-accent fixed right-0 top-0 z-50 flex h-full w-full flex-col p-8">
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
