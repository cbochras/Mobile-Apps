package com.example.mealy.screens

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.fragment.app.activityViewModels
import androidx.navigation.fragment.findNavController
import androidx.navigation.fragment.navArgs
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.mealy.MealRepository
import com.example.mealy.MealViewModel
import com.example.mealy.MealViewModelFactory
import com.example.mealy.adapters.MealTypeAdapter
import com.example.mealy.database.MealDatabase
import com.example.mealy.databinding.FragmentDayMenuScreenBinding
import kotlinx.coroutines.ExperimentalCoroutinesApi

class DayMenuScreen : Fragment(), MealTypeAdapter.onItemClickListener {

    private var _binding: FragmentDayMenuScreenBinding? = null
    private val binding get() = _binding!!

    val args by navArgs<DayMenuScreenArgs>()

    val viewModel: MealViewModel by activityViewModels {
        MealViewModelFactory(
            MealRepository(
                MealDatabase.getDatabase(requireActivity()).mealDao()
            )
        )
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        _binding = FragmentDayMenuScreenBinding.inflate(inflater, container, false)

        return binding.root
    }

    override fun onDestroy() {
        _binding = null
        super.onDestroy()
    }

    @ExperimentalCoroutinesApi
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding.dayText.text = args.dayName

        viewModel.dayName.value = args.dayName
        viewModel.mealList.observe(viewLifecycleOwner) {
            Log.d(TAG, it.toString())
        }
        /**
        viewModel.list.observe(viewLifecycleOwner) {
        Log.d(TAG, it.toString())
        }
         */

        val listAdapter = MealTypeAdapter(viewModel, viewLifecycleOwner, args.dayName, this)
        binding.mealList.apply {
            adapter = listAdapter
            layoutManager = LinearLayoutManager(this.context)
            setHasFixedSize(true)
        }
        listAdapter.submitList(listOf("Breakfast", "Lunch", "Dinner"))

    }

    companion object {
        const val TAG = "DayMenuScreen"
    }

    override fun onAddIconClick(day: String, time: String) {
        val action = DayMenuScreenDirections.actionDayMenuScreenToMealAddScreen(day, time)
        Toast.makeText(this.context, "$day $time", Toast.LENGTH_SHORT).show()
        findNavController().navigate(action)
    }
}