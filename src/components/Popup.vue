<script setup>
import axios from 'axios'
import Form from './Form.vue'

const props = defineProps({
  item: Object,
  closePopup: Function
})

console.log(props.item.raw)

const deleteItem = async () => {
  try {
    const { data } = await axios.patch(
      'https://4b0723948a636cf0.mokky.dev/items/' + props.item.id,
      {
        isDeleted: true
      }
    )
    props.closePopup()
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="color-accent fixed right-0 top-0 z-50 flex h-full w-full flex-col p-8">
    <div class="mb-5 flex items-center justify-between gap-2">
      <svg
        @click="closePopup"
        class="rotate-180 cursor-pointer opacity-30 transition hover:-translate-x-1 hover:opacity-100"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7H14.7143"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.71436 1L14.7144 7L8.71436 13"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <h2 class="text-2xl font-bold">Редактирование {{ item.isDeleted }}</h2>
      <svg
        @click="deleteItem"
        class="cursor-pointer opacity-100 transition hover:-translate-y-1 hover:opacity-100"
        width="1.4rem"
        viewBox="0 0 512 512"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M448,85.333h-66.133C371.66,35.703,328.002,0.064,277.333,0h-42.667c-50.669,0.064-94.327,35.703-104.533,85.333H64   c-11.782,0-21.333,9.551-21.333,21.333S52.218,128,64,128h21.333v277.333C85.404,464.214,133.119,511.93,192,512h128   c58.881-0.07,106.596-47.786,106.667-106.667V128H448c11.782,0,21.333-9.551,21.333-21.333S459.782,85.333,448,85.333z    M234.667,362.667c0,11.782-9.551,21.333-21.333,21.333C201.551,384,192,374.449,192,362.667v-128   c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333V362.667z M320,362.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333v-128c0-11.782,9.551-21.333,21.333-21.333   c11.782,0,21.333,9.551,21.333,21.333V362.667z M174.315,85.333c9.074-25.551,33.238-42.634,60.352-42.667h42.667   c27.114,0.033,51.278,17.116,60.352,42.667H174.315z"
        />
      </svg>
    </div>
    <div class="content">
      <Form
        :id="item.id"
        :title="item.title"
        :calories="item.calories"
        :prots="item.prots"
        :fats="item.fats"
        :carbs="item.carbs"
        :rate="item.rate"
        :raw="item.raw"
        :ready="item.ready"
        typeForm="update"
      />
      <!-- <p>{{ item }}</p> -->
      <!-- <button @click="closePopup">закрыть</button> -->
    </div>
  </div>
</template>

<style></style>
