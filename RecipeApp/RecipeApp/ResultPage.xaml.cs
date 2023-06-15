using ReciepeApp.ViewModels;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace ReciepeApp
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class ResultPage : ContentPage
	{
        public static ResultViewModel Vm { get; set; }

        public ResultPage(string img, string info)
        {

            Vm = new ResultViewModel();
            Vm.Img = img;
            Vm.Info = info;
            BindingContext = Vm;

            InitializeComponent();
        }

    }
}