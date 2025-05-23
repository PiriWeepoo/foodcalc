<script setup></script>

<template>
  <div class="right-0 bottom-0 left-0 fixed h-10">
    <div class="menu-items">
      <RouterLink class="link" to="/">ЕДА</RouterLink>
      <RouterLink class="link" to="/PlanView">ПЛАН</RouterLink>
    </div>
  </div>
</template>

<style>
.menu-items {
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  gap: 5px;
}

.menu-items .link {
  flex: 1;
  text-align: center;
  /* min-width: 120px; */
  border: none;
  background-color: #e9ecef;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;
}
</style>
