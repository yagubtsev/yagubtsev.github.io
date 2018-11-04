
if(document.body.clientWidth<=640) { 
 $('.team__teamslider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false,  
 });   
}
else {
 $('.team__teamslider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
  arrows: false,  
 });
}


let openbutton = document.getElementsByClassName('menu__open');
let closebutton = document.getElementsByClassName('menu__close');
let menu = document.getElementsByClassName('header__menulist');
menu = menu[0];

openbutton = openbutton[0];
closebutton = closebutton[0];
console.log(openbutton);

openbutton.addEventListener('click', function() {  
 closebutton.style.display = "block";
 openbutton.style.display = "none";
 menu.style.display = "flex";
});



closebutton.addEventListener('click', function () {   
 closebutton.style.display = "none";
 openbutton.style.display = "block";
 menu.style.display = "none";
});

$(document).ready(function(){
 
 $("#menu").on("click","a", function (event) {

  
     event.preventDefault();

  
     var id  = $(this).attr('href'), 

         top = $(id).offset().top;
 

     $('body,html').animate({scrollTop: top}, 1500);

 });

});


let typebuttons = document.getElementsByClassName('typebutton');
let allbutton  = document.getElementsByClassName('allbutton');
let designbutton  = document.getElementsByClassName('designbutton');
let allitem = document.getElementsByClassName('latestworks__item');
let designitems = document.getElementsByClassName('webdesign');
let uxbutton = document.getElementsByClassName('uxbutton');
let uxitems = document.getElementsByClassName('uxdesign');
let mockupbutton  = document.getElementsByClassName('mockupbutton');
let mockupitems = document.getElementsByClassName('mockups');

allbutton = allbutton[0];
designbutton = designbutton[0];
uxbutton = uxbutton[0];
mockupbutton = mockupbutton[0];


allbutton.addEventListener('click', function(event) { 
     
 for(let i=0; i<allitem.length; i++) {
  allitem[i].style.display= "block";
 }  
 for(let i=0; i< typebuttons.length;i++) {
    typebuttons[i].classList.remove('activetype');  
 }
 allbutton.classList.add('activetype');
  
 event.preventDefault();
});


designbutton.addEventListener('click', function(event) { 
     
    for(let i=0; i<allitem.length; i++) {
     allitem[i].style.display= "none";
    }   
 
 for (let i=0; i< designitems.length; i++) { 
  designitems[i].style.display = "block";     
 }
 
 for(let i=0; i< typebuttons.length;i++) {
    typebuttons[i].classList.remove('activetype');  
 }

 designbutton.classList.add('activetype'); 
 event.preventDefault();
});


 
uxbutton.addEventListener('click', function() { 
     
    for(let i=0; i<allitem.length; i++) {
     allitem[i].style.display= "none";
    }   
    for (let i=0; i< uxitems.length; i++) { 
    uxitems[i].style.display = "block";     
    }
    for(let i=0; i< typebuttons.length;i++) {
        typebuttons[i].classList.remove('activetype');  
     }
     
    uxbutton.classList.add('activetype');
     
 event.preventDefault();
});


mockupbutton.addEventListener('click', function(event) {  
    for(let i=0; i<allitem.length; i++) {
     allitem[i].style.display= "none";
    }   
    for (let i=0; i< uxitems.length; i++) { 
        mockupitems[i].style.display = "block";     
    }
    
    for(let i=0; i< typebuttons.length;i++) {
        typebuttons[i].classList.remove('activetype');  
     }
    
     mockupbutton.classList.add('activetype');
      
 event.preventDefault();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlmKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg8PTY0MCkgeyBcclxuICQoJy50ZWFtX190ZWFtc2xpZGVyJykuc2xpY2soe1xyXG4gIGRvdHM6IHRydWUsXHJcbiAgaW5maW5pdGU6IHRydWUsXHJcbiAgc3BlZWQ6IDMwMCxcclxuICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgYXJyb3dzOiBmYWxzZSwgIFxyXG4gfSk7ICAgXHJcbn1cclxuZWxzZSB7XHJcbiAkKCcudGVhbV9fdGVhbXNsaWRlcicpLnNsaWNrKHtcclxuICBkb3RzOiB0cnVlLFxyXG4gIGluZmluaXRlOiB0cnVlLFxyXG4gIHNwZWVkOiAzMDAsXHJcbiAgc2xpZGVzVG9TaG93OiAzLFxyXG4gIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gIGFycm93czogZmFsc2UsICBcclxuIH0pO1xyXG59XHJcblxyXG5cclxubGV0IG9wZW5idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51X19vcGVuJyk7XHJcbmxldCBjbG9zZWJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVfX2Nsb3NlJyk7XHJcbmxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19tZW51bGlzdCcpO1xyXG5tZW51ID0gbWVudVswXTtcclxuXHJcbm9wZW5idXR0b24gPSBvcGVuYnV0dG9uWzBdO1xyXG5jbG9zZWJ1dHRvbiA9IGNsb3NlYnV0dG9uWzBdO1xyXG5jb25zb2xlLmxvZyhvcGVuYnV0dG9uKTtcclxuXHJcbm9wZW5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHsgIFxyXG4gY2xvc2VidXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuIG9wZW5idXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gbWVudS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5jbG9zZWJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgICBcclxuIGNsb3NlYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuIG9wZW5idXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuIG1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiBcclxuICQoXCIjbWVudVwiKS5vbihcImNsaWNrXCIsXCJhXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICBcclxuICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBcclxuICAgICB2YXIgaWQgID0gJCh0aGlzKS5hdHRyKCdocmVmJyksIFxyXG5cclxuICAgICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wO1xyXG4gXHJcblxyXG4gICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogdG9wfSwgMTUwMCk7XHJcblxyXG4gfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG5sZXQgdHlwZWJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0eXBlYnV0dG9uJyk7XHJcbmxldCBhbGxidXR0b24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWxsYnV0dG9uJyk7XHJcbmxldCBkZXNpZ25idXR0b24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVzaWduYnV0dG9uJyk7XHJcbmxldCBhbGxpdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGF0ZXN0d29ya3NfX2l0ZW0nKTtcclxubGV0IGRlc2lnbml0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2ViZGVzaWduJyk7XHJcbmxldCB1eGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3V4YnV0dG9uJyk7XHJcbmxldCB1eGl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndXhkZXNpZ24nKTtcclxubGV0IG1vY2t1cGJ1dHRvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2NrdXBidXR0b24nKTtcclxubGV0IG1vY2t1cGl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9ja3VwcycpO1xyXG5cclxuYWxsYnV0dG9uID0gYWxsYnV0dG9uWzBdO1xyXG5kZXNpZ25idXR0b24gPSBkZXNpZ25idXR0b25bMF07XHJcbnV4YnV0dG9uID0gdXhidXR0b25bMF07XHJcbm1vY2t1cGJ1dHRvbiA9IG1vY2t1cGJ1dHRvblswXTtcclxuXHJcblxyXG5hbGxidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkgeyBcclxuICAgICBcclxuIGZvcihsZXQgaT0wOyBpPGFsbGl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICBhbGxpdGVtW2ldLnN0eWxlLmRpc3BsYXk9IFwiYmxvY2tcIjtcclxuIH0gIFxyXG4gZm9yKGxldCBpPTA7IGk8IHR5cGVidXR0b25zLmxlbmd0aDtpKyspIHtcclxuICAgIHR5cGVidXR0b25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZXR5cGUnKTsgIFxyXG4gfVxyXG4gYWxsYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZXR5cGUnKTtcclxuICBcclxuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuXHJcbmRlc2lnbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7IFxyXG4gICAgIFxyXG4gICAgZm9yKGxldCBpPTA7IGk8YWxsaXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgIGFsbGl0ZW1baV0uc3R5bGUuZGlzcGxheT0gXCJub25lXCI7XHJcbiAgICB9ICAgXHJcbiBcclxuIGZvciAobGV0IGk9MDsgaTwgZGVzaWduaXRlbXMubGVuZ3RoOyBpKyspIHsgXHJcbiAgZGVzaWduaXRlbXNbaV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgICAgIFxyXG4gfVxyXG4gXHJcbiBmb3IobGV0IGk9MDsgaTwgdHlwZWJ1dHRvbnMubGVuZ3RoO2krKykge1xyXG4gICAgdHlwZWJ1dHRvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZldHlwZScpOyAgXHJcbiB9XHJcblxyXG4gZGVzaWduYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZXR5cGUnKTsgXHJcbiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4gXHJcbnV4YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7IFxyXG4gICAgIFxyXG4gICAgZm9yKGxldCBpPTA7IGk8YWxsaXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgIGFsbGl0ZW1baV0uc3R5bGUuZGlzcGxheT0gXCJub25lXCI7XHJcbiAgICB9ICAgXHJcbiAgICBmb3IgKGxldCBpPTA7IGk8IHV4aXRlbXMubGVuZ3RoOyBpKyspIHsgXHJcbiAgICB1eGl0ZW1zW2ldLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICAgICBcclxuICAgIH1cclxuICAgIGZvcihsZXQgaT0wOyBpPCB0eXBlYnV0dG9ucy5sZW5ndGg7aSsrKSB7XHJcbiAgICAgICAgdHlwZWJ1dHRvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZldHlwZScpOyAgXHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgdXhidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZldHlwZScpO1xyXG4gICAgIFxyXG4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5cclxubW9ja3VwYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHsgIFxyXG4gICAgZm9yKGxldCBpPTA7IGk8YWxsaXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgIGFsbGl0ZW1baV0uc3R5bGUuZGlzcGxheT0gXCJub25lXCI7XHJcbiAgICB9ICAgXHJcbiAgICBmb3IgKGxldCBpPTA7IGk8IHV4aXRlbXMubGVuZ3RoOyBpKyspIHsgXHJcbiAgICAgICAgbW9ja3VwaXRlbXNbaV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmb3IobGV0IGk9MDsgaTwgdHlwZWJ1dHRvbnMubGVuZ3RoO2krKykge1xyXG4gICAgICAgIHR5cGVidXR0b25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZXR5cGUnKTsgIFxyXG4gICAgIH1cclxuICAgIFxyXG4gICAgIG1vY2t1cGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmV0eXBlJyk7XHJcbiAgICAgIFxyXG4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufSk7Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
