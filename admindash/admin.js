//sidebar//
let sidebar = document.querySelector(".sidebar");
let sidebarbtn = document.querySelector(".sidebarbtn");

sidebarbtn.onclick = function() {
    sidebar.classList.toggle("active");

if(sidebar.classList.contains("active")){
    sidebarbtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
  }else{
    sidebarbtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}






// Profile//
//const profile = document.querySelector('nav .profile-details');
//const imgProfile = profile.querySelector('img');
//const dropdownProfile = profile.querySelector('.profile-link');

//imgProfile.addEventListener('click', function (){
//    dropdownProfile.classList.toggle('show');
//})
//window.addEventListener('click', function (e){
    //if(e.target !== imgProfile) {
        //if(e.target !== dropdownProfile) {
            //if(dropdownProfile.classList.contains('show')){
              //  dropdownProfile.classList.remove('show');
           // }
        //}
    //}
//})
