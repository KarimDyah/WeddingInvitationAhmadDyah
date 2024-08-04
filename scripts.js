function initMap() {
    var location = { lat: -7.034774050274511, lng: 111.80794440344225 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

window.onload = function() {
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap";
    document.body.appendChild(script);
}
