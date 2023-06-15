using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Linq;
using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Android.Widget;

namespace ReciepeApp.Droid
{
    class SQLiteService
    {
        public XDocument GetXML()
        {
            return MainActivity.xml;
        }
    }
}