<script setup>
import { onMounted, provide, reactive, ref, watch } from 'vue'
import axios from 'axios'

import Header from './components/Header.vue'
import CardList from './components/CardList.vue'
import Drawer from './components/Drawer.vue'
import Accordion from './components/Accordion.vue'

const items = ref([])

const drawerOpen = ref(false)

const closeDrawer = () => {
  drawerOpen.value = false
}

const openDrawer = () => {
  drawerOpen.value = true
}

const filters = reactive({
  sortBy: 'id',
  searchQuery: ''
})

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

const onChangeSearchInput = (event) => {
  filters.searchQuery = event.target.value
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get('https://4b0723948a636cf0.mokky.dev/favorites')

    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.itemId === item.id)

      if (!favorite) {
        return item
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  } catch (err) {
    console.log(err)
  }
}

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        parentId: item.id
      }
      const { data } = await axios.post('https://4b0723948a636cf0.mokky.dev/favorites', obj)

      item.isFavorite = true

      item.favoriteId = data.id
    } else {
      //  await axios.delete('https://4b0723948a636cf0.mokky.dev/favorites/', obj)
    }

    // console.log(data)
  } catch (err) {
    console.log(err)
  }
}

// const calculateWeight = async (item) => {
//   try {
//     if (!item.isFavorite) {
//       const obj = {
//         parentId: item.id
//       }
//       //const { data } = await axios.post('https://4b0723948a636cf0.mokky.dev/favorites', obj)

//       console.log(item.id)
//     } else {
//       //  await axios.delete('https://4b0723948a636cf0.mokky.dev/favorites/', obj)
//     }

//     // console.log(data)
//   } catch (err) {
//     console.log(err)
//   }
// }

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get('https://4b0723948a636cf0.mokky.dev/items', {
      params
    })

    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      isAdded: false
    }))
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  await fetchItems()
  await fetchFavorites()
})

watch(filters, fetchItems)

provide('cartActions', {
  closeDrawer,
  openDrawer
})
// provide('calculateWeight', calculateWeight)
</script>

<template>
  <Drawer v-if="drawerOpen" />
  <div class="m-1 m-auto rounded-xl bg-white shadow-xl">
    <!-- <Header /> -->
    <div class="sticky top-0 z-10 flex items-center justify-between bg-white p-2 drop-shadow-md">
      <h2 class="text-xl font-bold text-gray-400">Всё</h2>
      <div class="flex gap-4">
        <!-- <select
            @change="onChangeSelect"
            class="rounded-md border px-3 py-2 outline-none"
            name=""
            id=""
          > 
            <option value="title">По названию</option>
            <option value="price">По цене (дорогие)</option>
            <option value="-price">По цене (дешевые)</option>
          </select> -->

        <div class="relative">
          <img class="absolute left-4 top-3" src="/search.svg" alt="" />
          <input
            @input="onChangeSearchInput"
            class="rounded-md border border-gray-200 py-2 pl-10 pr-4 outline-none focus:border-gray-400"
            placeholder="Поиск..."
            type="text"
          />
        </div>
      </div>
    </div>
    <div class="relative p-2">
      <CardList :items="items" @addToFavorite="addToFavorite" />
      <Accordion />
    </div>
    <button
      class="absolute bottom-2 right-2 h-12 w-12 rounded-full bg-indigo-200 text-4xl text-indigo-300 shadow-lg"
      @click="openDrawer"
    >
      +
    </button>
  </div>
</template>
