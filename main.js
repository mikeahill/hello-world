function Toggle(abstractID) {
     var CurrentAbstract = document.getElementById(abstractID);
     if (CurrentAbstract.style.display == 'none') {
         CurrentAbstract.style.display = 'block';
     }
     else {
         CurrentAbstract.style.display = 'none';
     }
 }
 
 function DropDownMenu(MenuID) {
     document.getElementById(MenuID).classList.toggle("Show");
 }
 
