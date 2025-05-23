<script setup>
import { reactive } from 'vue'
import { onMounted, provide, ref, watch } from 'vue'
import axios from 'axios'

import CardList from '../components/CardList.vue'
import Drawer from '../components/Drawer.vue'

const items = ref([])

const drawerOpen = ref(false)

const closeDrawer = () => {
  fetchItems()
  drawerOpen.value = false
}

const openDrawer = () => {
  drawerOpen.value = true
}
const filters = reactive({
  sortBy: '-dateUpdate',
  searchQuery: ''
})

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

const onChangeSearchInput = (event) => {
  filters.searchQuery = event.target.value
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get('https://4b0723948a636cf0.mokky.dev/items?isDeleted=false', {
      params
    })

    items.value = data.map((obj) => ({
      ...obj
    }))
  } catch (err) {
    console.log(err)
  }
}

const toggleCardInfo = async (id) => {
  try {
    // faqs.value = faqs.value.map((faq) =>
    //   faq.isOpen && faq.id !== id ? { ...faq, isOpen: false } : faq
    // )
    // faqs.value = faqs.value.map((faq) => (faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq))

    items.value = items.value.map((item) =>
      item.isOpen && item.id !== id ? { ...item, isOpen: false } : item
    )
    items.value = items.value.map((item) =>
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
    )

    // console.log(data)
  } catch (err) {
    console.log(err)
  }
}

provide('cartActions', {
  closeDrawer,
  openDrawer
})

provide('toggleCardInfo', toggleCardInfo)

onMounted(async () => {
  await fetchItems()
})

watch(filters, fetchItems)
</script>

<template>
  <Drawer v-if="drawerOpen" />
  <div class="">
    <!-- <Header /> -->
    <div class="flex justify-between items-center gap-2 p-2">
      <button class="active:rotate-[360deg] transition ease-in-out" @click="fetchItems">
        <svg
          height="24"
          viewBox="0 0 513 513"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="color-accent"
        >
          <path
            d="M66.074,228.731C81.577,123.379,179.549,50.542,284.901,66.045c35.944,5.289,69.662,20.626,97.27,44.244l-24.853,24.853   c-8.33,8.332-8.328,21.84,0.005,30.17c3.999,3.998,9.423,6.245,15.078,6.246h97.835c11.782,0,21.333-9.551,21.333-21.333V52.39   c-0.003-11.782-9.556-21.331-21.338-21.329c-5.655,0.001-11.079,2.248-15.078,6.246L427.418,65.04   C321.658-29.235,159.497-19.925,65.222,85.835c-33.399,37.467-55.073,83.909-62.337,133.573   c-2.864,17.607,9.087,34.202,26.693,37.066c1.586,0.258,3.188,0.397,4.795,0.417C50.481,256.717,64.002,244.706,66.074,228.731z"
          />
          <path
            d="M479.429,256.891c-16.108,0.174-29.629,12.185-31.701,28.16C432.225,390.403,334.253,463.24,228.901,447.738   c-35.944-5.289-69.662-20.626-97.27-44.244l24.853-24.853c8.33-8.332,8.328-21.84-0.005-30.17   c-3.999-3.998-9.423-6.245-15.078-6.246H43.568c-11.782,0-21.333,9.551-21.333,21.333v97.835   c0.003,11.782,9.556,21.331,21.338,21.329c5.655-0.001,11.079-2.248,15.078-6.246l27.733-27.733   c105.735,94.285,267.884,85.004,362.17-20.732c33.417-37.475,55.101-83.933,62.363-133.615   c2.876-17.605-9.064-34.208-26.668-37.084C482.655,257.051,481.044,256.91,479.429,256.891z"
          />
        </svg>
      </button>
      <select
        @change="onChangeSelect"
        class="opacity-20 px-3 py-1 border rounded-md outline-none w-1/2 text-[var(--color-accent)]"
        name=""
        id=""
      >
        <option value="title">По названию</option>
        <option value="-id">Сначала новые</option>
        <option value="id">Сначала старые</option>
        <option value="dateUpdate">По обновлению старые</option>
        <option value="-dateUpdate">По обновлению новые</option>
      </select>
      <div class="relative">
        <img class="top-2 left-4 absolute" src="/search.svg" alt="" />
        <input
          @focus.passive="$event.target.select()"
          @input="onChangeSearchInput"
          class="box-border opacity-20 focus:opacity-100 py-1 pr-2 pl-10 border border-current rounded-md outline-none w-full text-[var(--color-accent)] transition-all"
          placeholder="Поиск..."
          type="text"
        />
      </div>
    </div>
    <div class="relative">
      <CardList :items="items" />
      <!-- <MenuBar /> -->
    </div>
  </div>
  <button
    class="right-3 bottom-11 fixed bg-[var(--color-light)] opacity-60 drop-shadow-lg p-0.5 rounded-full color-text-accent"
    @click="openDrawer"
  >
    <svg
      height="50"
      viewBox="0 0 24 24"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm4 13h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2z"
      />
    </svg>
  </button>
</template>

<style scoped></style>
