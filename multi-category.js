function escolhe()
{

        var url = "http://www.yourwebsite.com/category/the-category";
var strPar = "";
   // check the parameters
        if (formname.formfield.value != "") {
  strPar = strPar +"+"+formname.formfield.value;
}


       if (formname.formfield2.value != "") {
  strPar = strPar +"+"+formname.formfield2.value;
}

      if (formname.formfield3.value != "") {
  strPar = strPar +"+"+formname.formfield3.value;
}

        if (strPar != "") {
  url = url + strPar;
}

 window.location = url ;
      }
