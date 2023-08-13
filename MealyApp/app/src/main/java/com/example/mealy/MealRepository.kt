package com.example.mealy

import com.example.mealy.database.MealDao
import com.example.mealy.database.MealPlan

class MealRepository(val dao: MealDao) {

    fun getMeal(dayName: String) =
        dao.getDayMeal(day = dayName)

    suspend fun addMealToDatabase(meal: MealPlan) = dao.addMeal(meal)


}