<script setup>
import { onMounted, provide, reactive, ref, watch } from 'vue'
import axios from 'axios'

import Header from './components/Header.vue'
import CardList from './components/CardList.vue'
import Drawer from './components/Drawer.vue'
import Accordion from './components/Accordion.vue'
import CardNew from './components/CardNew.vue'

const items = ref([])
const drawerInfo = {
  title: '',
  type: ''
}

const drawerOpen = ref(false)

const closeDrawer = () => {
  fetchItems()
  drawerOpen.value = false
}

const openDrawer = () => {
  drawerInfo.title = 'Добавление еды!'
  console.log(drawerInfo.title)
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
      isOpen: false
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

provide('toggleCardInfo', toggleCardInfo)

// provide('calculateWeight', calculateWeight)
</script>

<template>
  <div class="wrapper fixed relative">
    <Drawer v-if="drawerOpen" :drawerTitle="drawerInfo.title" />
    <div class="m-1 m-auto">
      <!-- <Header /> -->
      <div class="flex items-center justify-between p-2 drop-shadow-md">
        <button class="" @click="fetchItems">
          <h2 class="text-xl font-bold">Всё</h2>
        </button>
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
              @focus.passive="$event.target.select()"
              @input="onChangeSearchInput"
              class="rounded-md border border-current py-2 pl-10 pr-4 text-[var(--color-accent)] opacity-50 outline-none focus:opacity-100"
              placeholder="Поиск..."
              type="text"
            />
          </div>
        </div>
      </div>
      <div class="bg-primary relative p-2">
        <!-- <CardNew
          title="РОЖКИ"
          :calories="350"
          :prots="13"
          :fats="1.5"
          :carbs="72"
          :rate="2.1"
          style="margin-bottom: 1rem"
        /> -->

        <CardList :items="items" />
        <!-- <Accordion :items="items" /> -->
      </div>
    </div>
    <button
      class="color-text-accent fixed bottom-2 right-2 opacity-60 drop-shadow-lg"
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
  </div>
</template>
