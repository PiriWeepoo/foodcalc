<template>
  <header class="sticky top-0 flex justify-between border-b border-current px-8 py-4">
    <div class="flex items-center gap-4">
      <img src="/logo.png" alt="logo" />
      <div>
        <h2 class="text-xl font-bold uppercase">Sneakers</h2>
        <p class="text-slate-400">Магазин лучших кросовок</p>
      </div>
    </div>
    <ul class="flex items-center gap-10">
      <li class="flex cursor-pointer items-center gap-4 text-gray-500 hover:text-black">
        <img src="/cart.svg" alt="Cart" />
        <b>1000 руб</b>
      </li>
      <li class="flex cursor-pointer items-center gap-4 text-gray-500 hover:text-black">
        <img src="/heart.svg" alt="Favorite" />
        <b>Закладки</b>
      </li>
      <li class="flex cursor-pointer items-center gap-4 text-gray-500 hover:text-black">
        <img src="/profile.svg" alt="Profile" />
        <b>Профиль</b>
      </li>
    </ul>
  </header>
</template>
