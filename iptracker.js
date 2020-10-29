let search = document.getElementById('search');
let text = document.getElementById('inputtext');
let address = document.getElementById('address');
let locationdata = document.getElementById('location');
let timezone = document.getElementById('timezone');
let ispdata = document.getElementById('isp');

search.addEventListener('click', () =>{
    var ip = text.value;
    console.log(ip);
   fetch('https://geo.ipify.org/api/v1?apiKey=at_NcoM3iIohLf5kVB7gywLOEU0LrQgI&ipAddress='+ip)
   .then(response => response.json())
    .then(data =>{
       address.innerHTML = data.ip;
       locationdata.innerHTML = data.location.country;
       timezone.innerHTML = data.location.timezone;
       ispdata.innerHTML = data.isp;
       
   });
});