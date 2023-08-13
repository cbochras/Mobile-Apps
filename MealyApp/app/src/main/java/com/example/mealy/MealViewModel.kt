package com.example.mealy

import android.util.Log
import androidx.lifecycle.ViewModel
import androidx.lifecycle.asLiveData
import androidx.lifecycle.viewModelScope
import com.example.mealy.database.MealPlan
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.flatMapLatest
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.launch

class MealViewModel(val repository: MealRepository) : ViewModel() {

    val dayName = MutableStateFlow("EmptyValue")
    val mealTime = MutableStateFlow("Breakfast")

    @ExperimentalCoroutinesApi
    private val mealFlow = dayName.flatMapLatest {
        Log.i("ViewModel", it)
        repository.getMeal(it)
    }

    @ExperimentalCoroutinesApi
     val mealList = mealFlow.asLiveData()

    @ExperimentalCoroutinesApi
    val _list = mealTime.flatMapLatest { time ->
        mealFlow.map {
            it.filter {
                it.type == time
            }
        }
    }

    val list = _list.asLiveData()

    fun addMeal(meal: MealPlan) {
        viewModelScope.launch(Dispatchers.IO) {
            repository.addMealToDatabase(meal)
        }
    }

}