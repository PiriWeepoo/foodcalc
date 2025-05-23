<script setup>
import { ref, onMounted } from 'vue'

// Nutrition plan data (would typically come from an API or imported JSON)
const nutritionPlan = ref({
  goal: 'Рекомпозиция тела (сжигание жира + рост мышц)',
  daily_calories: 2600,
  macronutrients: {
    protein: 200,
    fat: 75,
    carbs: 300
  },
  training_days: ['ПН', 'СР', 'ЧТ', 'СБ'],
  days: [
    {
      day: 'ПН',
      workout: true,
      workout_time: 'after_breakfast',
      meals: [
        {
          meal: 'Завтрак',
          dishes: [
            {
              name: 'Овсянка + протеин + банан',
              ingredients: ['Овсянка (60г)', 'Сывороточный протеин (30г)', 'Банан (100г)'],
              calories: 450,
              protein: 35,
              fat: 6,
              carbs: 65
            }
          ]
        },
        {
          meal: 'Перекус',
          dishes: [
            {
              name: 'Протеиновое печенье + яблоко',
              ingredients: ['Протеиновое печенье (2шт)', 'Яблоко (150г)'],
              calories: 200,
              protein: 10,
              fat: 4,
              carbs: 30
            }
          ]
        },
        {
          meal: 'Обед',
          dishes: [
            {
              name: 'Гречка + куриная грудка + салат',
              ingredients: ['Гречка (80г сух.)', 'Куриная грудка (150г)', 'Огурцы, помидоры'],
              calories: 550,
              protein: 45,
              fat: 10,
              carbs: 70
            }
          ]
        },
        {
          meal: 'Ужин',
          dishes: [
            {
              name: 'Индейка + картофель + брокколи',
              ingredients: ['Индейка (120г)', 'Картофель (150г)', 'Брокколи (100г)'],
              calories: 400,
              protein: 35,
              fat: 8,
              carbs: 40
            }
          ]
        },
        {
          meal: 'Перекус',
          dishes: [
            {
              name: 'Цельнозерновой хлеб + сыр',
              ingredients: ['Цельнозерновой хлеб (50г)', 'Легкий сыр (30г)'],
              calories: 200,
              protein: 10,
              fat: 8,
              carbs: 25
            }
          ]
        },
        {
          meal: 'Добавка',
          dishes: [
            {
              name: 'Зефир + мармелад',
              ingredients: ['Зефир (30г)', 'Мармелад (20г)'],
              calories: 150,
              protein: 0,
              fat: 0,
              carbs: 37
            }
          ]
        }
      ],
      totals: {
        calories: 1950,
        protein: 135,
        fat: 36,
        carbs: 267
      }
    },
    {
      day: 'ВТ',
      workout: false,
      meals: [
        {
          meal: 'Завтрак',
          dishes: [
            {
              name: 'Яичница + хлеб + апельсин',
              ingredients: ['Яйца (3шт)', 'Цельнозерновой хлеб (50г)', 'Апельсин (100г)'],
              calories: 400,
              protein: 25,
              fat: 15,
              carbs: 40
            }
          ]
        },
        {
          meal: 'Перекус',
          dishes: [
            {
              name: 'Протеиновый коктейль + миндаль',
              ingredients: ['Сывороточный протеин (30г)', 'Миндаль (20г)'],
              calories: 250,
              protein: 25,
              fat: 12,
              carbs: 10
            }
          ]
        },
        {
          meal: 'Обед',
          dishes: [
            {
              name: 'Макароны + куриные бедра + овощи',
              ingredients: ['Макароны (70г сух.)', 'Куриные бедра (150г)', 'Овощи по сезону'],
              calories: 600,
              protein: 40,
              fat: 20,
              carbs: 70
            }
          ]
        },
        {
          meal: 'Ужин',
          dishes: [
            {
              name: 'Рыба + овощи + лаваш',
              ingredients: ['Рыба (150г)', 'Овощи на гриле (200г)', 'Лаваш (30г)'],
              calories: 450,
              protein: 35,
              fat: 15,
              carbs: 40
            }
          ]
        },
        {
          meal: 'Перекус',
          dishes: [
            {
              name: 'Протеиновое печенье',
              ingredients: ['Протеиновое печенье (2шт)'],
              calories: 200,
              protein: 10,
              fat: 4,
              carbs: 30
            }
          ]
        },
        {
          meal: 'Добавка',
          dishes: [
            {
              name: 'Мармелад',
              ingredients: ['Мармелад (30г)'],
              calories: 100,
              protein: 0,
              fat: 0,
              carbs: 25
            }
          ]
        }
      ],
      totals: {
        calories: 2000,
        protein: 135,
        fat: 66,
        carbs: 215
      }
    },
    {
      day: 'СР',
      workout: true,
      workout_time: 'after_breakfast',
      meals: [
        {
          meal: 'Завтрак',
          dishes: [
            {
              name: 'Овсянка + яйца + груша',
              ingredients: ['Овсянка (60г)', 'Яйца (2шт)', 'Груша (100г)'],
              calories: 450,
              protein: 30,
              fat: 12,
              carbs: 60
            }
          ]
        },
        {
          meal: 'Перекус',
          dishes: [
            {
              name: 'Протеиновый батончик + грецкие орехи',
              ingredients: ['Протеиновый батончик (1шт)', 'Грецкие орехи (15г)'],
              calories: 250,
              protein: 20,
              fat: 10,
              carbs: 20
            }
          ]
        },
        {
          meal: 'Обед',
          dishes: [
            {
              name: 'Гречка + индейка + салат',
              ingredients: ['Гречка (80г сух.)', 'Индейка (150г)', 'Капуста, морковь'],
              calories: 550,
              protein: 45,
              fat: 10,
              carbs: 70
            }
          ]
        },
        {
          meal: 'Ужин',
          dishes: [
            {
              name: 'Куриная грудка + картофель + фасоль',
              ingredients: ['Куриная грудка (120г)', 'Картофель (100г)', 'Стручковая фасоль'],
              calories: 400,
              protein: 35,
              fat: 5,
              carbs: 40
            }
          ]
        },
        {
          meal: 'Перекус',
          dishes: [
            {
              name: 'Сыр + хлеб',
              ingredients: ['Легкий сыр (40г)', 'Цельнозерновой хлеб (30г)'],
              calories: 200,
              protein: 12,
              fat: 8,
              carbs: 20
            }
          ]
        },
        {
          meal: 'Добавка',
          dishes: [
            {
              name: 'Зефир',
              ingredients: ['Зефир (20г)'],
              calories: 70,
              protein: 0,
              fat: 0,
              carbs: 18
            }
          ]
        }
      ],
      totals: {
        calories: 1920,
        protein: 142,
        fat: 45,
        carbs: 228
      }
    },
    {
      day: 'ЧТ',
      workout: true,
      workout_time: 'after_dinner',
      meals: [
        {
          meal: 'Завтрак',
          dishes: [
            {
              name: 'Омлет + лаваш + авокадо',
              ingredients: ['Яйца (3шт)', 'Лаваш (50г)', 'Авокадо (50г)'],
              calories: 450,
              protein: 25,
              fat: 25,
              carbs: 30
            }
          ]
        },
        {
          meal: 'Перекус',
          dishes: [
            {
              name: 'Протеиновый коктейль + ягоды',
              ingredients: ['Сывороточный протеин (30г)', 'Ягоды (100г)'],
              calories: 200,
              protein: 25,
              fat: 2,
              carbs: 20
            }
          ]
        },
        {
          meal: 'Обед',
          dishes: [
            {
              name: 'Макароны + говядина + овощи',
              ingredients: ['Макароны (70г сух.)', 'Говядина (150г)', 'Овощной микс'],
              calories: 650,
              protein: 45,
              fat: 20,
              carbs: 70
            }
          ]
        },
        {
          meal: 'Ужин',
          dishes: [
            {
              name: 'Картофель + креветки + овощи',
              ingredients: ['Картофель (150г)', 'Креветки (120г)', 'Перец, цукини'],
              calories: 500,
              protein: 40,
              fat: 10,
              carbs: 60
            }
          ]
        },
        {
          meal: 'Перекус',
          dishes: [
            {
              name: 'Протеиновое печенье',
              ingredients: ['Протеиновое печенье (2шт)'],
              calories: 200,
              protein: 10,
              fat: 4,
              carbs: 30
            }
          ]
        },
        {
          meal: 'Добавка',
          dishes: [
            {
              name: 'Мармелад',
              ingredients: ['Мармелад (20г)'],
              calories: 70,
              protein: 0,
              fat: 0,
              carbs: 18
            }
          ]
        }
      ],
      totals: {
        calories: 2070,
        protein: 145,
        fat: 61,
        carbs: 228
      }
    },
    {
      day: 'ПТ',
      workout: false,
      meals: [
        {
          meal: 'Завтрак',
          dishes: [
            {
              name: 'Овсянка + протеин + киви',
              ingredients: ['Овсянка (50г)', 'Сывороточный протеин (30г)', 'Киви (2шт)'],
              calories: 400,
              protein: 35,
              fat: 5,
              carbs: 50
            }
          ]
        },
        {
          meal: 'Перекус',
          dishes: [
            {
              name: 'Яйца + огурец',
              ingredients: ['Яйца вареные (2шт)', 'Огурец (100г)'],
              calories: 150,
              protein: 12,
              fat: 10,
              carbs: 2
            }
          ]
        },
        {
          meal: 'Обед',
          dishes: [
            {
              name: 'Куриные бедра + гречка + салат',
              ingredients: ['Куриные бедра (150г)', 'Гречка (70г сух.)', 'Салат из свеклы'],
              calories: 600,
              protein: 40,
              fat: 25,
              carbs: 60
            }
          ]
        },
        {
          meal: 'Ужин',
          dishes: [
            {
              name: 'Свинина + тушеные овощи',
              ingredients: ['Свинина (120г)', 'Тушеные овощи (200г)'],
              calories: 500,
              protein: 30,
              fat: 25,
              carbs: 20
            }
          ]
        },
        {
          meal: 'Перекус',
          dishes: [
            {
              name: 'Хлеб + сыр',
              ingredients: ['Цельнозерновой хлеб (30г)', 'Легкий сыр (30г)'],
              calories: 200,
              protein: 10,
              fat: 10,
              carbs: 20
            }
          ]
        },
        {
          meal: 'Добавка',
          dishes: [
            {
              name: 'Зефир',
              ingredients: ['Зефир (30г)'],
              calories: 100,
              protein: 0,
              fat: 0,
              carbs: 25
            }
          ]
        }
      ],
      totals: {
        calories: 1950,
        protein: 127,
        fat: 75,
        carbs: 177
      }
    },
    {
      day: 'СБ',
      workout: true,
      workout_time: 'after_breakfast',
      meals: [
        {
          meal: 'Завтрак',
          dishes: [
            {
              name: 'Овсянка + протеин + манго',
              ingredients: ['Овсянка (70г)', 'Сывороточный протеин (30г)', 'Манго (100г)'],
              calories: 500,
              protein: 40,
              fat: 6,
              carbs: 75
            }
          ]
        },
        {
          meal: 'Перекус',
          dishes: [
            {
              name: 'Протеиновый батончик + миндаль',
              ingredients: ['Протеиновый батончик (1шт)', 'Миндаль (15г)'],
              calories: 250,
              protein: 20,
              fat: 10,
              carbs: 20
            }
          ]
        },
        {
          meal: 'Обед',
          dishes: [
            {
              name: 'Картофель + индейка + салат',
              ingredients: ['Картофель (200г)', 'Индейка (150г)', 'Руккола, томаты'],
              calories: 600,
              protein: 45,
              fat: 15,
              carbs: 70
            }
          ]
        },
        {
          meal: 'Ужин',
          dishes: [
            {
              name: 'Рыба + овощи + лаваш',
              ingredients: ['Рыба (150г)', 'Овощи на пару (200г)', 'Лаваш (30г)'],
              calories: 450,
              protein: 35,
              fat: 12,
              carbs: 40
            }
          ]
        },
        {
          meal: 'Перекус',
          dishes: [
            {
              name: 'Сыр + яблоко',
              ingredients: ['Легкий сыр (40г)', 'Яблоко (150г)'],
              calories: 200,
              protein: 12,
              fat: 8,
              carbs: 25
            }
          ]
        },
        {
          meal: 'Добавка',
          dishes: [
            {
              name: 'Мармелад',
              ingredients: ['Мармелад (20г)'],
              calories: 70,
              protein: 0,
              fat: 0,
              carbs: 18
            }
          ]
        }
      ],
      totals: {
        calories: 2070,
        protein: 152,
        fat: 51,
        carbs: 248
      }
    },
    {
      day: 'ВС',
      workout: false,
      meals: [
        {
          meal: 'Завтрак',
          dishes: [
            {
              name: 'Яичница + хлеб + апельсин',
              ingredients: ['Яйца (3шт)', 'Цельнозерновой хлеб (50г)', 'Апельсин (100г)'],
              calories: 400,
              protein: 25,
              fat: 15,
              carbs: 40
            }
          ]
        },
        {
          meal: 'Перекус',
          dishes: [
            {
              name: 'Протеиновое печенье + орехи',
              ingredients: ['Протеиновое печенье (2шт)', 'Грецкие орехи (15г)'],
              calories: 250,
              protein: 15,
              fat: 12,
              carbs: 25
            }
          ]
        },
        {
          meal: 'Обед',
          dishes: [
            {
              name: 'Гречка + куриные бедра + овощи',
              ingredients: ['Гречка (80г сух.)', 'Куриные бедра (150г)', 'Овощи по сезону'],
              calories: 600,
              protein: 45,
              fat: 20,
              carbs: 70
            }
          ]
        },
        {
          meal: 'Ужин',
          dishes: [
            {
              name: 'Индейка + овощи + лаваш',
              ingredients: ['Индейка (120г)', 'Овощи (200г)', 'Лаваш (30г)'],
              calories: 450,
              protein: 35,
              fat: 10,
              carbs: 50
            }
          ]
        },
        {
          meal: 'Перекус',
          dishes: [
            {
              name: 'Банан + сыр',
              ingredients: ['Банан (100г)', 'Легкий сыр (30г)'],
              calories: 200,
              protein: 10,
              fat: 8,
              carbs: 25
            }
          ]
        },
        {
          meal: 'Добавка',
          dishes: [
            {
              name: 'Зефир',
              ingredients: ['Зефир (20г)'],
              calories: 70,
              protein: 0,
              fat: 0,
              carbs: 18
            }
          ]
        }
      ],
      totals: {
        calories: 1970,
        protein: 130,
        fat: 65,
        carbs: 228
      }
    }
  ]
})

const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
const selectedDay = ref(null)

const selectDay = (dayName) => {
  selectedDay.value = nutritionPlan.value.days.find((day) => day.day === dayName)
}

// Initialize with the first day
onMounted(() => {
  if (nutritionPlan.value.days.length > 0) {
    selectedDay.value = nutritionPlan.value.days[0]
  }
})
</script>

<template>
  <div class="meal-plan-container">
    <!-- <h1>Мой план питания</h1>
    <div class="goal-info">
      <h2>Цель: {{ nutritionPlan.goal }}</h2>
      <div class="daily-macros">
        <div class="macro-item">
          <span class="macro-label">Калории:</span>
          <span class="macro-value">{{ nutritionPlan.daily_calories }} ккал</span>
        </div>
        <div class="macro-item">
          <span class="macro-label">Белки:</span>
          <span class="macro-value">{{ nutritionPlan.macronutrients.protein }}г</span>
        </div>
        <div class="macro-item">
          <span class="macro-label">Жиры:</span>
          <span class="macro-value">{{ nutritionPlan.macronutrients.fat }}г</span>
        </div>
        <div class="macro-item">
          <span class="macro-label">Углеводы:</span>
          <span class="macro-value">{{ nutritionPlan.macronutrients.carbs }}г</span>
        </div>
      </div>
    </div> -->

    <div class="day-selector">
      <button
        v-for="day in daysOfWeek"
        :key="day"
        @click="selectDay(day)"
        :class="{ active: selectedDay?.day === day }"
      >
        {{ day }}
      </button>
    </div>

    <div v-if="selectedDay" class="day-plan">
      <!-- <div class="day-header">
        <h2>{{ selectedDay.day }}</h2>
        <div v-if="selectedDay.workout" class="workout-info">
          <span
            >Тренировка:
            {{
              selectedDay.workout_time === 'after_breakfast' ? 'после завтрака' : 'после обеда'
            }}</span
          >
        </div>
        <div v-else class="workout-info">
          <span>День без тренировки</span>
        </div>
      </div> -->

      <div class="meals-container">
        <div v-for="meal in selectedDay.meals" :key="meal.meal" class="meal-card">
          <h3>{{ meal.meal }}</h3>
          <div v-for="dish in meal.dishes" :key="dish.name" class="dish">
            <h4>{{ dish.name }}</h4>
            <div class="ingredients">
              <span>Ингредиенты:</span>
              <ul>
                <li v-for="(ingredient, index) in dish.ingredients" :key="index">
                  {{ ingredient }}
                </li>
              </ul>
            </div>
            <div class="nutrition-facts">
              <div class="nutrition-item">
                <span class="nutrition-label">Калории:</span>
                <span class="nutrition-value">{{ dish.calories }} ккал</span>
              </div>
              <div class="nutrition-items">
                <div class="nutrition-item">
                  <span class="nutrition-label">Белки:</span>
                  <span class="nutrition-value">{{ dish.protein }}г</span>
                </div>
                <div class="nutrition-item">
                  <span class="nutrition-label">Жиры:</span>
                  <span class="nutrition-value">{{ dish.fat }}г</span>
                </div>
                <div class="nutrition-item">
                  <span class="nutrition-label">Углеводы:</span>
                  <span class="nutrition-value">{{ dish.carbs }}г</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="day-totals">
        <h3>Итого за день:</h3>
        <div class="totals-grid">
          <div class="total-item">
            <span class="total-label">Калории:</span>
            <span class="total-value"
              >{{ selectedDay.totals.calories }} / {{ nutritionPlan.daily_calories }} ккал</span
            >
          </div>
          <div class="total-item">
            <span class="total-label">Белки:</span>
            <span class="total-value"
              >{{ selectedDay.totals.protein }} / {{ nutritionPlan.macronutrients.protein }}г</span
            >
          </div>
          <div class="total-item">
            <span class="total-label">Жиры:</span>
            <span class="total-value"
              >{{ selectedDay.totals.fat }} / {{ nutritionPlan.macronutrients.fat }}г</span
            >
          </div>
          <div class="total-item">
            <span class="total-label">Углеводы:</span>
            <span class="total-value"
              >{{ selectedDay.totals.carbs }} / {{ nutritionPlan.macronutrients.carbs }}г</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.meal-plan-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

.goal-info {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
}

.goal-info h2 {
  margin-top: 0;
  color: #2c3e50;
}

.daily-macros {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.macro-item {
  background-color: #e9ecef;
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: bold;
}

.macro-label {
  color: #6c757d;
  margin-right: 5px;
}

.day-selector {
  display: flex;
  /* justify-content: space-between; */
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 5px;
}

.day-selector button {
  flex: 1;
  /* min-width: 120px; */
  padding: 10px;
  border: none;
  background-color: #e9ecef;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;
}

.day-selector button:hover {
  background-color: #dee2e6;
}

.day-selector button.active {
  background-color: var(--color-accent);
  color: white;
}

.day-plan {
  background-color: #f8f9fa;
  border-radius: 8px;
}

.day-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dee2e6;
}

.day-header h2 {
  margin: 0;
  color: #2c3e50;
}

.workout-info {
  background-color: #e9ecef;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.9em;
}

.meals-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.meal-card {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.meal-card h3 {
  margin-top: 0;
  color: var(--color-accent);
  border-bottom: 1px solid #dee2e6;
  padding-bottom: 5px;
}

.dish {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px dashed #dee2e6;
}

.dish:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.dish h4 {
  margin: 10px 0 5px 0;
  color: #2c3e50;
}

.ingredients {
  margin-bottom: 10px;
}

.ingredients span {
  font-weight: bold;
  color: #6c757d;
}

.ingredients ul {
  margin: 5px 0 0 0;
  padding-left: 20px;
}

.ingredients li {
  margin-bottom: 3px;
}

.nutrition-facts {
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  gap: 5px;
  margin-top: 10px;
}

.nutrition-items {
  display: flex;
  gap: 5px;
}

.nutrition-item {
  display: flex;
  justify-content: space-between;
}

.nutrition-label {
  color: #6c757d;
}

.nutrition-value {
  font-weight: bold;
}

.day-totals {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.day-totals h3 {
  margin-top: 0;
  text-align: center;
  color: #2c3e50;
}

.totals-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.total-item {
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}

.total-label {
  font-weight: bold;
  color: #2c3e50;
}

.total-value {
  font-weight: bold;
  color: #007bff;
}

@media (max-width: 768px) {
  .meals-container {
    grid-template-columns: 1fr;
  }

  .totals-grid {
    grid-template-columns: 1fr;
  }

  .day-selector {
    /* flex-direction: column; */
  }

  .day-selector button {
    width: 100%;
  }
}
</style>
