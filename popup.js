
document.addEventListener("DOMContentLoaded", function() {
    loadGroups();

    var plus = document.getElementById("plus");
    var sub = document.getElementById("submit");
    var addRow = document.getElementById("addRow");

    plus.addEventListener("click", function() {
        openPlusMenu();
    });

    sub.addEventListener("click", function() {
        closeSubmit();
    });

    addRow.addEventListener("click", function() {
      addFields();
   });
});






function okButton (){
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.display = "none";
}

function openPlusMenu () {
    console.log("benlo");
    var plusmenu = document.getElementById("plusMenu");
    plusmenu.style.visibility = "visible";
}

function closeSubmit(){
    console.log("We are here");
    var submit = document.getElementById("plusMenu");
    submit.style.visibility = "hidden";
}


var fields = 0;

function addFields() {
   if (fields == 5) {
      var addRow = document.getElementById('addRow');
      addRow.disabled = true;
   }
   fields++;
   var plusForm = document.getElementById('plusForm');
   var nameTxt = document.createTextNode("Name: ");
   // var nameTxt = document.createElement('p');
   // nameTxt.innerHTML = "Name: ";
   plusForm.appendChild(nameTxt);
   var name = document.createElement('input');
   name.type = "text";
   name.id = "name" + fields;
   plusForm.appendChild(name);
   var urlTxt = document.createTextNode("Link: ");
   // var urlTxt = document.createElement('p');
   // urlTxt.innerHTML = "URL: ";
   plusForm.appendChild(urlTxt);
   var url = document.createElement('input');
   url.type = "text";
   url.id = "url" + fields;
   plusForm.appendChild(url);
   var br = document.createElement('br');
   plusForm.appendChild(br);
   console.log(fields);
}


function loadGroups() {
   var data = getData(null);
   console.log(data.keys());
  // var totalgroups = 0; //import this from taras' database
  // var i;
  // for (i = totalgroups; i > 0 ; i -= 1){
  //     document.createElement("COMP 1531");
  // }

}
