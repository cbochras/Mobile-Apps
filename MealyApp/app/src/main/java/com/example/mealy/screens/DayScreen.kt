package com.example.mealy.screens

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.GridLayoutManager
import com.example.mealy.adapters.DayAdapter
import com.example.mealy.databinding.FragmentDayScreenBinding

/**
 * Contains a list of days in a grid to choose from
 * hard coded , use gridview, top level view should be ScrollView/NestedScrollView
 */

var _binding: FragmentDayScreenBinding? = null
val binding get() = _binding!!

class DayScreen : Fragment(), DayAdapter.onItemClickListener {
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        _binding = FragmentDayScreenBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onDestroy() {
        _binding = null
        super.onDestroy()
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        //create adapter
        val adapter = DayAdapter(this)
        binding.dayList.adapter = adapter
        binding.dayList.layoutManager = GridLayoutManager(this.context, 2)
        binding.dayList.hasFixedSize()

        //create data
        val dayList =
            listOf("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")
        adapter.submitList(dayList)
    }

    override fun onItemClick(day: String) {
        val action = DayScreenDirections.actionDayScreenToDayMenuScreen(day)
        findNavController().navigate(action)
    }
}