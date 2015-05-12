### wp-multi-category-js


####English
JS for displaying multi-category results in wordpress
<br/>
*Wordpress have a standard to join categories when you need to display posts from more than one category ( http://mywebsite.com/category/category1+category2)*
<br/>
*On this js, I show a way to get the values from a select and through a post in the form,show dynamic results for multiple categories queries.*

######*multi-category.js*
>change those 3 parameters and add as many as you wish,add as many ifs as you have fields in the form :
<br />
 var url = "http://www.yourwebsite.com/category/the-category";
<br />
to your base category url
<br />formname = the form name
<br />formfield = the field name
<br />
<i>  if (formname.formfield.value != "") {
  strPar = strPar +"+"+formname.formfield.value;
}
</i>

######*form.php*
>each option value = category slug. 


####Português
JS para mostrar resultados multi-categoria no wordpress
<br/>
*O Wordpress tem um padrão para mostrar posts de mais de uma categoria( http://mywebsite.com/category/category1+category2)*
<br/>
*Nesse JS, eu mostro uma forma de como incluir os resultados dinamicos de um select do usuario para exibir uma query de multipla categoria*

######*multi-category.js*
>mude esses 3 parametros e adicione quantos você precisar com o if:
<br />
 var url = "http://www.yourwebsite.com/category/the-category";
<br />
para sua url de categoria base
<br />formname = o form name
<br />formfield = o name do campo
<br />
<i>  if (formname.formfield.value != "") {
  strPar = strPar +"+"+formname.formfield.value;
}
</i>

######*form.php*
>cada value da option é um slug da categoria que vai ser adicionado se selecionado

