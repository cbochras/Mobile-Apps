using ReciepeApp.DataAccess;
using ReciepeApp.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReciepeApp.ViewModels
{
    public class ItemsViewModel : BaseViewModel
    {
        private string mealType;
        private string keyOne;
        private string keyTwo;
        private string keyThree;

        public IList<string> Types { get; set; } = new List<string>()
        {
            "Breakfast",
            "Breakfast Snack",
            "Lunch",
            "Lunch Snack",
            "Dinner"
        };

        public ItemsViewModel()
        {
            this.MealType = Types[0];
            //this.KeyOne = " ";
            //this.KeyTwo = " ";
            //this.KeyThree = " ";
        }

        public async Task<Meal> FindMeal()
        {
            return  await DbContext.FindFavouriteAsync(MealType, KeyOne, KeyTwo, KeyThree);
        }

        public string MealType
        {
            get
            {
                return mealType;
            }
            set
            {
                mealType = value;
                OnPropertyChanged();
            }
        }

        public string KeyOne
        {
            get
            {
                return keyOne;
            }
            set
            {
                keyOne = value;
                OnPropertyChanged();
            }
        }

        public string KeyTwo
        {
            get
            {
                return keyTwo;
            }
            set
            {
                keyTwo = value;
                OnPropertyChanged();
            }
        }

        public string KeyThree
        {
            get
            {
                return keyThree;
            }
            set
            {
                keyThree = value;
                OnPropertyChanged();
            }
        }


    }
}
