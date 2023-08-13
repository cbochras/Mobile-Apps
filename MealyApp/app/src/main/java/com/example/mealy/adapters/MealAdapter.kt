package com.example.mealy.adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import com.example.mealy.database.MealPlan
import com.example.mealy.databinding.MealItemBinding

class MealAdapter :
    ListAdapter<MealPlan, MealAdapter.MealItemViewHolder>(MealPlanDiffUtilCallback()) {

    inner class MealItemViewHolder(val binding: MealItemBinding) :
        RecyclerView.ViewHolder(binding.root) {
        fun bind(item: MealPlan) {
            binding.mealName.text = item.mealItem
            binding.mealQuantity.text = "x${item.quantity}"
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MealItemViewHolder {
        val binding =
            MealItemBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return MealItemViewHolder(binding)
    }

    override fun onBindViewHolder(holder: MealItemViewHolder, position: Int) {
        val item = getItem(position)
        holder.bind(item)
    }
}

class MealPlanDiffUtilCallback : DiffUtil.ItemCallback<MealPlan>() {
    override fun areItemsTheSame(oldItem: MealPlan, newItem: MealPlan) =
        oldItem.id == newItem.id

    override fun areContentsTheSame(oldItem: MealPlan, newItem: MealPlan) =
        oldItem == newItem

}