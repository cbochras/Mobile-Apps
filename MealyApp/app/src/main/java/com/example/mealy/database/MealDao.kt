package com.example.mealy.database

import androidx.room.*
import kotlinx.coroutines.flow.Flow

/**
 * A Dao(Database Access Object) is an interface which defines the queries to be run as methods
 * Methods in the DAO will be autoimplemented
 * suspend is a Kotlin keyword to mark that this function has to execute off the main thread,enabling use of coroutines(multithreading)
 * Flow is a keyword that returns an async stream of data
 * Not to worry I will implement the database myself - Shaurya
 */
@Dao
interface MealDao {

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun addMeal(meal: MealPlan)

    @Query("SELECT * from meal_plan where day LIKE '%'||:day||'%'")
    fun getDayMeal(day: String): Flow<List<MealPlan>>


    @Delete
    fun deleteMealItem(mealItem: MealPlan)
}