using ReciepeApp.DataAccess;
using ReciepeApp.ViewModels;
using System;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace ReciepeApp
{
    public partial class MainPage : ContentPage
	{
        public ItemsViewModel viewModel = new ItemsViewModel();
        public MainPage()
        {
            
            NavigationPage.SetHasNavigationBar(this, false);
            viewModel.MealType = viewModel.Types[0];
            BindingContext = viewModel = new ItemsViewModel();
            InitializeComponent();
        }

        private async void OnLoginClicked(object sender, EventArgs e)
        {
            
            var res = await viewModel.FindMeal();
            if (res.Ingredients == " ")
            {
                await DisplayAlert("Your reciepe", "Just go to the shop!", "OK");
            }
            else
            {
                string img = (Task.FromResult<Meal>(res)).Result.Image;
                string info = (Task.FromResult<Meal>(res)).Result.Name+
                    "INGRIDIENTS:\n" + (Task.FromResult<Meal>(res)).Result.Ingredients + "\n\n"+
                    "STEPS:\n" + (Task.FromResult<Meal>(res)).Result.Steps + "\n\n" + 
                    "TIME:\n" + (Task.FromResult<Meal>(res)).Result.PrepTime + "\n\n" +
                    "CALORIES:\n"  + (Task.FromResult<Meal>(res)).Result.Calories;

                await Navigation.PushAsync(new ResultPage(img, info), false);
            }
        }
    }
}
