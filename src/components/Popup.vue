<script setup>
import DrawerHead from './DrawerHead.vue'
import Form from './Form.vue'

const props = defineProps({
  item: Object,
  closePopup: Function
})
</script>

<template>
  <div class="color-accent fixed right-0 top-0 z-50 flex h-full w-full flex-col p-8">
    <DrawerHead :title="item.title" />
    <div class="content">
      <Form
        :id="item.id"
        :title="item.title"
        :calories="item.calories"
        :prots="item.prots"
        :fats="item.fats"
        :carbs="item.carbs"
        :rate="item.rate"
        typeForm="update"
      />
      <!-- <p>{{ item }}</p> -->
      <button @click="closePopup">закрыть</button>
    </div>
  </div>
</template>

<style></style>
