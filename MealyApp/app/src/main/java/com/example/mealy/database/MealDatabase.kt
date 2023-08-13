package com.example.mealy.database

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase

/**
 * Class to finally implement the database
 * Somewhat like create database statement
 */

@Database(entities = [MealPlan::class], version = 1, exportSchema = false)
abstract class MealDatabase : RoomDatabase() {

    abstract fun mealDao(): MealDao

    companion object {
        @Volatile
        private var INSTANCE: MealDatabase? = null

        fun getDatabase(context: Context): MealDatabase {
            val tempInstance = INSTANCE
            if (tempInstance != null)
                return tempInstance
            else {
                synchronized(this) {
                    val instance = Room.databaseBuilder(
                        context.applicationContext,
                        MealDatabase::class.java,
                        "meal_database"
                    ).fallbackToDestructiveMigration()
                        .build()
                    INSTANCE=instance
                    return instance
                }
            }
        }
    }
}