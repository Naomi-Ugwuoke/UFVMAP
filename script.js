function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.02884701852467, lng: -122.28481317802066},
        zoom: 16.7,
        mapId: 'aba742da6fbf2515'
    });

    
    const markers = [
        ["link", 49.02909763703652, -122.28425597088086, "icons/a.png", 20, 20],
        ["Building B", 49.028756818140394, -122.28576392001101, "icons/b.png", 20, 20],
        ["Building C", 49.028034751392624, -122.28705052680793, "icons/c.png", 20, 20],
        ["Building D", 49.0283346756614, -122.2854322322059, "icons/d.png", 20, 20],
        ["Building E", 49.027243149772445, -122.2844363098999, "icons/e.png", 20, 20],
        ["Building F", 49.0279435240869, -122.28286551638989, "icons/f.png", 12, 12],
        ["Building G", 49.02842760057205, -122.28347812581478, "icons/g.png", 20, 20],
        ["Building H", 49.02699080661097, -122.2826456053143, "icons/h.png", 12, 12],
        ["Building K", 49.03075853274541, -122.28859826017906, "icons/k.png", 20, 20],
        ["Building S", 49.02743884358799, -122.28535522392447, "icons/s.png", 20, 20],
        ["Building T", 49.02789172508808, -122.28443948891649, "icons/t.png", 12, 12]

    ]

    for (let i = 0; i < markers.length; i++) {
        const currMarker = markers[i];
        const marker = new google.maps.Marker({
            position: { lat: currMarker[1], lng: currMarker[2] },
        	map,
        	title: currMarker[0],
        	icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
            },
            // drop down animation
            animation: google.maps.Animation.DROP,
        });

        

        // building marker popup descriptions
        const infowindow = new google.maps.InfoWindow({
            content: currMarker[0],
        });
        // marker.addListener('click', () => {
        //     infowindow.open(map, marker);
        // });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
        // marker.addListener('mouseout', function() {
        //     infowindow.close();
        // });

    
   

    }
    // abbotsford center
    const ac = new google.maps.Marker({
        position: {lat:49.0306528974253, lng: -122.28718246747198},
        MarkerLabel: {
            
            text: "Abbotsford center",
        },
    })



}


window.initMap = initMap;

//Colors:
/** Dark grey: rgba(156,161,174,255)
 * Light grey: rgba(200,201,202,255)
 * neon bright green: rgba(127,189,65,255)
 * background green: rgba(153,191,152,255)
 * light yellow: rgba(241,237,201,255)
 * blue - main roads: rgba(160,218,229,255)
 * 
 * map id : aba742da6fbf2515
 * api key: AIzaSyCbSY5XF9IslRl2kdf6JDeRSjtse__Q2WU
 */