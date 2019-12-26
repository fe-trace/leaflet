window.onload = function() {
    var gps = L.latLng(29.573975460303267, 106.53287835708618);
    var map = window.map = L.map('map').setView(gps, 14);

    // 设置地图瓦片
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11'
    }).addTo(map);
    
    
    var latlngs = [
        [45.51, -122.68],
        [37.77, -122.43],
        [34.04, -118.2]
    ];
    var polyline = L.polygon(latlngs, {
        color: 'red',
        renderer: L.canvas()
    }).addTo(map);
    map.fitBounds(polyline.getBounds());

    // var marker = L.marker([45.51, -122.68]).addTo(map);
    // marker.bindTooltip("my tooltip text").openTooltip();

    var myIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon-2x.png',
    });
    L.marker([45.51, -122.68], {
        icon: myIcon,
        autoPan: true,
        renderer: L.canvas({ padding: 0.5 })
    }).bindTooltip("my tooltip text").setContent('<p>Hello world!<br />This is a nice popup.</p>').addTo(map);

    // L.circle([45.51, -122.68], {radius: 300}).addTo(map);




};