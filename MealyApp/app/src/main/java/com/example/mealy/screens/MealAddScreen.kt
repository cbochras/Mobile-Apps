package com.example.mealy.screens

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.activityViewModels
import androidx.navigation.fragment.navArgs
import com.example.mealy.MealRepository
import com.example.mealy.MealViewModel
import com.example.mealy.MealViewModelFactory
import com.example.mealy.database.MealDatabase
import com.example.mealy.database.MealPlan
import com.example.mealy.databinding.FragmentMealAddScreenBinding
import com.google.android.material.bottomsheet.BottomSheetDialogFragment

class MealAddScreen : BottomSheetDialogFragment() {

    private var _binding: FragmentMealAddScreenBinding? = null
    val binding get()= _binding!!



    private val viewModel: MealViewModel by activityViewModels {
        MealViewModelFactory(MealRepository(MealDatabase.getDatabase(requireActivity()).mealDao()))
    }


    private val args by navArgs<MealAddScreenArgs>()
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        _binding = FragmentMealAddScreenBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onDestroy() {
        _binding = null
        super.onDestroy()
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)


        binding.submit.setOnClickListener {

            val mealItem = binding.mealItem.text
            val mealQuantity = binding.mealQuantity.text

            if (mealItem != null && mealQuantity != null) {
                viewModel.addMeal(
                    MealPlan(
                        id = 0,
                        mealItem.toString(),
                        mealQuantity.toString().toInt(),
                        args.day,
                        args.time
                    )
                )
            }
        }

    }
}