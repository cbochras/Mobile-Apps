namespace ReciepeApp.DataAccess
{
    public class Meal
    {
        private int id;
        public int IdMeal
        {
            get
            {
                return id;
            }
            set
            {
                id = value;
            }
        }

        private int idC;
        public int IdCategory
        {
            get
            {
                return idC;
            }
            set
            {
                idC = value;
            }
        }

        private string ingr;
        public string Ingredients
        {
            get
            {
                return ingr;
            }
            set
            {
                ingr = value;
            }
        }

        private string steps;
        public string Steps
        {
            get
            {
                return steps;
            }
            set
            {
                steps = value;
            }
        }

        private string cal;
        public string Calories
        {
            get
            {
                return cal;
            }
            set
            {
                cal = value;
            }
        }

        private string prepTime;
        public string PrepTime
        {
            get
            {
                return prepTime;
            }
            set
            {
                prepTime = value;
            }
        }

        private string mealImg;
        public string MealImage
        {
            get
            {
                return mealImg;
            }
            set
            {
                mealImg = value;
            }
        }

        private string name;
        public string Name
        {
            get
            {
                return name;
            }
            set
            {
                name = value;
            }
        }

        private string img;
        public string Image
        {
            get
            {
                return img;
            }
            set
            {
                img = value;
            }

        }



        public Meal()
        {
            IdMeal = 0;
            Name = " ";
            Ingredients = " ";
            Steps = " ";
            Calories = " ";
            PrepTime = " ";
            Image = " ";
        }

        public Meal(string n, string ingr, string st, string cal, string prTime, string img)
        {
            Name = name;
            Ingredients = ingr;
            Steps = st;
            Calories = cal;
            PrepTime = prTime;
            Image = img;
        }

    }
}
