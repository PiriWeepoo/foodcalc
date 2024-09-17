<script setup>
import { onMounted, provide, reactive, ref, watch } from 'vue'
import axios from 'axios'

import Header from './components/Header.vue'
import CardList from './components/CardList.vue'
import Drawer from './components/Drawer.vue'
import Accordion from './components/Accordion.vue'
import CardNew from './components/CardNew.vue'

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
  <div class="wrapper relative">
    <Drawer v-if="drawerOpen" />
    <div class="m-1 m-auto">
      <!-- <Header /> -->
      <div class="sticky top-0 z-40 flex items-center justify-between p-2 drop-shadow-md">
        <h2 class="text-xl font-bold">Всё</h2>
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
              class="color-accent rounded-md border border-current py-2 pl-10 pr-4 opacity-50 outline-none focus:opacity-100"
              placeholder="Поиск..."
              type="text"
            />
          </div>
        </div>
      </div>
      <div class="bg-primary relative p-2">
        <CardNew
          title="РОЖКИ"
          :calories="350"
          :prots="13"
          :fats="1.5"
          :carbs="72"
          :rate="2.1"
          style="margin-bottom: 1rem"
        />

        <CardList :items="items" @addToFavorite="addToFavorite" />
        <Accordion />
      </div>
    </div>
    <button
      class="color-accent fixed bottom-2 right-2 h-12 w-12 rounded-full text-5xl opacity-50 shadow-lg"
      @click="openDrawer"
    >
      <svg
        class="m-auto"
        width="80%"
        height="80%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
      >
        <path
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
        />
      </svg>
    </button>
  </div>
</template>
