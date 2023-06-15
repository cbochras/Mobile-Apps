using System;
using System.Collections.Generic;
using System.Text;

namespace ReciepeApp.ViewModels
{
    public class ResultViewModel: BaseViewModel
    {
        private string info;

        public string Info
        {
            get
            {
                return info;
            }
            set
            {
                info = value;
                OnPropertyChanged();
            }
        }


        private string img;

        public string Img
        {
            get
            {
                return img;
            }
            set
            {
                img = value;
                OnPropertyChanged();
            }
        }
    }
}
