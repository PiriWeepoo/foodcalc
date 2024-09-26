<script setup>
import { ref } from 'vue'
const props = defineProps({
  id: Number,
  title: String,
  calories: Number,
  prots: Number,
  fats: Number,
  carbs: Number,
  rate: Number,
  isOpen: Boolean
})

const open = ref(false)

const emit = defineEmits(['toggleAnswer']) // defining events to emit
const handleClick = (id) => emit('toggleAnswer', id) // emitting toggleAnswer event with id attribute.
</script>

<template>
  <div class="item">
    <div class="header cursor-pointer" @click="() => handleClick(props.id)">
      <div class="question">{{ title }},{{ id }},{{ isOpen }}</div>
    </div>
    <div class="answer" :class="['answer', { open: props.isOpen }]">
      <p>{{ calories }}</p>
    </div>
  </div>
</template>

<style scoped>
.faq {
  flex-grow: 1;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid antiquewhite;
  padding: 10px;
  border-radius: 6px 6px 0 0;
  cursor: pointer;
}
.question {
  font-weight: 700;
}
.icon {
  width: 30px;
  height: 30px;
  transition: transform 0.5s;
}
img {
  width: 100%;
  height: auto;
}
.icon-open {
  transform: rotate(180deg);
}

.answer {
  height: 0px;
  overflow-y: scroll;
  line-height: 1.5;
  background-color: antiquewhite;
  color: var(--color-accent);
  transition: height 0.5s;
}
.answer::-webkit-scrollbar {
  width: 5px;
}
.answer::-webkit-scrollbar-track {
  appearance: none;
  background-color: transparent;
}
.answer::-webkit-scrollbar-thumb {
  width: 5px;
  background-color: rgb(232, 210, 182);
  border-radius: 50px;
}
p {
  padding: 10px;
}

.open {
  height: 100px;
}
</style>
