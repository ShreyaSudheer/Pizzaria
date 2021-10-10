menu_list_array = [
"Chicken Tandoori Pizza",
"Paneer Tikka Pizza",
"Veg Extravaganza Pizza",
"Veg Margherita Pizza",
"Veg Supreme Pizza"
 ];

function getmenu(){
var htmldata;

menu_list_array.sort();

        for(var i=0;i<menu_list_array.length;i++)
{
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
        menu_list_array.push(item);
        menu_list_array.sort();
        htmldata="<section class='cards'>"
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<div class="card">' +'<img src="pizzaImg.png"/ height="50">' + menu_list_array[i] + '</div>'
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}

