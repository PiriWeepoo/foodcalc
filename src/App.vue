<script setup>
import MenuBar from './components/MenuBar.vue'

// const fetchFavorites = async () => {
//   try {
//     const { data: favorites } = await axios.get('https://4b0723948a636cf0.mokky.dev/favorites')

//     items.value = items.value.map((item) => {
//       const favorite = favorites.find((favorite) => favorite.itemId === item.id)

//       if (!favorite) {
//         return item
//       }

//       return {
//         ...item,
//         isFavorite: true,
//         favoriteId: favorite.id
//       }
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }

// const addToFavorite = async (item) => {
//   try {
//     if (!item.isFavorite) {
//       const obj = {
//         parentId: item.id
//       }
//       const { data } = await axios.post('https://4b0723948a636cf0.mokky.dev/favorites', obj)

//       item.isFavorite = true

//       item.favoriteId = data.id
//     } else {
//       //  await axios.delete('https://4b0723948a636cf0.mokky.dev/favorites/', obj)
//     }

//     // console.log(data)
//   } catch (err) {
//     console.log(err)
//   }
// }
</script>

<template>
  <div class="fixed-background"></div>
  <div class="mb-10 wrapper">
    <RouterView />
    <MenuBar />
  </div>
</template>
<style scoped>
.fixed-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* background-image: linear-gradient( */
  /* -30deg,
    var(--color-text-accent) 0%,
    var(--color-bg-accent) 100%
  ); */
  /* background-size: contain; */
  background: var(--color-bg-main);
  background-attachment: fixed;
  z-index: -1;
}
</style>
