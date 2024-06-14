var color=document.getElementById('color');
var elements=document.getElementsByClassName("color-mode");
color.addEventListener('change',function(){
    localStorage.setItem("color-mode",color.value);
    for(var i=0;i<elements.length;i++)
    {
      elements[i].style.color=`${localStorage.getItem('color-mode')}`
    }

})
window.onload=function()
{
  for(var i=0;i<elements.length;i++)
    {
      elements[i].style.color=`${localStorage.getItem('color-mode')}`
    }
}
color.value=localStorage.getItem('color-mode');

/**************************************************************************************************************** */
var map=document.getElementById('map');
navigator.geolocation.getCurrentPosition(success,error);
var longitude;
var latitude;
function success(position)
{
     longitude=position.coords.longitude;
     latitude=position.coords.latitude;
     initMap(latitude,longitude);
    // console.log(longitude,latitude)
}
function error(e)
{
    e.meesage
}


function initMap(x,y) {
  const myLatLng = { lat: x, lng: y };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;