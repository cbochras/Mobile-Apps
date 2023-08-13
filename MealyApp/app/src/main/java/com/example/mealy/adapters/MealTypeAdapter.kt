package com.example.mealy.adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.core.view.isVisible
import androidx.lifecycle.LifecycleOwner
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import com.example.mealy.MealViewModel
import com.example.mealy.R
import com.example.mealy.databinding.MealTypeItemBinding
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class MealTypeAdapter(
    val viewModel: MealViewModel,
    val lifecycleOwner: LifecycleOwner,
    val day: String,
    val listener: onItemClickListener
) :
    ListAdapter<String, MealTypeAdapter.MealViewHolder>(MealDiffUtilCallback()) {

    inner class MealViewHolder(val binding: MealTypeItemBinding) :
        RecyclerView.ViewHolder(binding.root) {
        fun bind(item: String) {
            binding.mealTypeText.text = item
            println(viewModel.toString())


            binding.dropDownIcon.setOnClickListener {
                binding.mealList.isVisible = !binding.mealList.isVisible
                binding.dropDownIcon.setImageResource(if (binding.mealList.isVisible) R.drawable.ic_baseline_keyboard_arrow_up_24 else R.drawable.ic_baseline_keyboard_arrow_down_24)
                val adapter = MealAdapter()
                val position = bindingAdapterPosition
                val item = getItem(position)
                viewModel.mealTime.value = item ?: ""
                binding.mealList.apply {
                    this.adapter = adapter
                }
                viewModel.list.observe(lifecycleOwner) {
                    CoroutineScope(Dispatchers.Default).launch {
                        val list = it.filter { mealPlan ->
                            mealPlan.type == item
                        }
                        withContext(Dispatchers.Main) {
                            adapter.submitList(list)
                        }
                    }
                }
            }

            binding.addButton.setOnClickListener {
                listener.onAddIconClick(day, item)
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MealViewHolder {
        val binding =
            MealTypeItemBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return MealViewHolder(binding)
    }

    override fun onBindViewHolder(holder: MealViewHolder, position: Int) {
        val item = getItem(position)
        holder.bind(item)
    }

    interface onItemClickListener {
        fun onAddIconClick(day: String, time: String)
    }
}

class MealDiffUtilCallback : DiffUtil.ItemCallback<String>() {
    override fun areItemsTheSame(oldItem: String, newItem: String): Boolean {
        return oldItem == newItem
    }

    override fun areContentsTheSame(oldItem: String, newItem: String): Boolean {
        return oldItem == newItem
    }

}