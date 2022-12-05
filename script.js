let map, infoWindow;

// create the map
function initMap() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16.7,
        center: {
        lat: 49.02884701852467, lng: -122.28481317802066
    
        },
        mapId: 'aba742da6fbf2515',
        // remove satelite and street view
        mapTypeControl: false,
        streetViewControl: false,
    //   disableDefaultUI: true,
    });
    
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById("sidebar"));
    
    const control = document.getElementById("floating-panel");
    
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
    
    const onChangeHandler = function() {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    
    document.getElementById("start").addEventListener("change", onChangeHandler);
    document.getElementById("end").addEventListener("change", onChangeHandler);
    
    // Building Information
    const BuildA = 
    '<h1>Building A</h1>' +
    '<div>' +
    '<h4>Resources:</h4>'+
        "<p><li>ELS Help Centre</li>" +
        "<li>Finance and Administration</li>"+
        "<li>Human Resources</li>"+ 
        "<li>Spririt Bear Cafe</li>"+
        "<li>Parking Pay Staions: 3</li> </p>"+
        "<p>Building Plan: <br/>" +
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/aba2_Main-Floor.pdf"> 2nd floor</a><br/>'+
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/aba3_201709.pdf">3rd Floor</a><br/>'+
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/aba4_201609.pdf">4th floor</a></p>' +
        "</p>" +
    "</div>";

    const buildB =
    '<h1>Building B</h1>' +
    '<div>' +
    '<h4>Resources:</h4>'+
        '<li>Alumni Association</li>'+
        '<li>Art Gallery</li>'+
        '<li>Cafeteria</li>'+
        '<li>Facilies and Project Management</li>'+
        '<li>Financial Aid</li>'+
        '<li>Future Students Office</li>'+
        '<li>ITS Help Desk</li>'+
        '<li>Lecture Theatre</li>'+
        '<li>Office of the Registar</li>'+
        '<li>Security, Risk, and Safety</li>'+
        '<li>Shipping and Recieving</li>'+
        '<li>Student Services</li>'+
        '<li>UFV International</li>'+
        "<li>Parking Pay Staions: 2</li> </p>"+
        "<p>Building Plan: <br/>" +
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abb1---Main-Floor.pdf"> 1st floor</a><br/>'+
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abb2_2nd-Floor.pdf"> 2nd floor</a><br/>'+
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abb3---3rd-Floor.pdf">3rd Floor</a><br/>'+
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abb4_201403.pdf">4th floor</a></p>' +
        "</p>" +
    "</div>";
    const buildC = 
    '<h1>Building C</h1>' +
    '<div>' +
    '<h4>Resources:</h4>'+
        "<p><li>ELS Help Centre</li>" +
        "<li>Academic Integrity and Appeals </li>"+
        "<li>School of Business</li>"+ 
        "<li>Visual Arts</li>"+
        "<li>Pay Parking Staions: 1</li> </p>"+
        "<p>Building Plan: <br/>" +
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abc1_Main-Floor.pdf"> 1st floor</a><br/>'+
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abc2_201509.pdf">2nd Floor</a><br/>'+
        "</p>" +
    "</div>";

    const buildD =
    '<h1>Building D</h1>' +
    '<div>' +
    '<h4>Resources:</h4>'+
        "<p><li>Theatre</li>" +
        "<li>Pay Parking Staions: 1</li> </p>"+
        "<p>Building Plan: <br/>" +
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abd1_201808.pdf"> 1st floor</a><br/>'+
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abd2_20170917x11.pdf">2nd Floor</a><br/>'+
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abd3---3rd-Floor.pdf">3rd Floor</a><br/>'+
        "</p>" +
    "</div>";



    const buildE =
    '<h1>Building E</h1> <center><h3>Envision Athletic Centre</h2></center>' +
    '<div>' +
    '<h4>Resources:</h4>'+
        "<p><li>Theatre</li>" +
        "<li>Pay Parking Staions: 2</li> </p>"+
        "<p>Building Plan: <br/>" +
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abe1---Main-Floor.pdf"> 1st floor</a><br/>'+
        "</p>" +
    "</div>";



    const buildF =
    '<h1>Building F</h1> <center><h3>University House</h2></center>' +
    '<div>' +
    '<h4>Resources:</h4>'+
        "<p><li>South Asian Studies Institute</li>" +
        "<p><li>Conference Services</li>" +
        "<li>Pay Parking Staions: 0</li> </p>"+
        "<p>Building Plan: <br/>" +
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abf1_201610.pdf"> 1st floor</a><br/>'+
        "</p>" +
    "</div>";


    const buildG = 
    '<h1>Building G</h1> <center><h3>Peter Jones Learning Commons</h2></center> ' +
    '<div>' +
    '<h4>Resources:</h4>'+
        "<p><li>Academic Success Centre</li>" +
        "<li>Computer Lab </li>"+
        "<li>Library</li>"+ 
        "<li>Math and Stats Centre</li>"+
        "<li>Tim Hortons</li>"+
        "<li>Pay Parking Staions: 1</li> </p>"+
        "<p>Building Plan: <br/>" +
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abg0_1_201809.pdf"> 1st floor</a><br/>'+
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abg2_201809.pdf">2nd Floor</a><br/>'+
        "</p>" +
    "</div>";



    const buildH = 
    '<h1>Building H</h1><center><h3>Lá:lem te Baker</h2></center>' +
    '<div>' +
    '<h4>Resources:</h4>'+
        "<p><li>Bookstore</li>" +
        "<li>Parking Services</li>"+
        "<li>Student Housing</li>"+ 
        "<li>Pay Parking Staions: 0</li> </p>"+
        "<p>Building Plan: <br/>" +
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abh0_201309.pdf"> Underground Floor floor</a><br/>'+
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abh1---Main-Floor.pdf"> 1st floor</a><br/>'+
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abh2_201309.pdf">2nd Floor</a><br/>'+
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abh3_201309.pdf"> 3rd floor</a><br/>'+
        'https://www.ufv.ca/media/assets/facilities/floor-plans/abh4_201309.pdf">4th Floor</a><br/>'+
        "</p>" +
    "</div>";
    
    const buildK = 
    '<h1>Building K</h1>' +
    '<div>' +
    '<h4>Resources:</h4>'+
        '<li>Outdoor Patio</li>'+
        "<p>Building Plan: <br/>" +
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abk0---Basement-Floor-Plan.pdf"> Underground floor</a><br/>'+
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abk1---Floor-Plan.pdf"> 1st floor</a><br/>'+
        "</p>" +
    '</div';




    const buildS = 
    '<h1>Building S</h1><center><h3>Student Union Building</h2></center>' +
    '<div>' +
    '<h4>Resources:</h4>'+
        '<li>Advising Centre</li>'+
        '<li>ATM</li>'+
        '<li>Assessment Services</li>'+
        '<li>Career Centre</li>'+
        '<li>Campus Card Office</li>'+
        '<li>Cascade Newspaper</li>'+
        '<li>CIVL Radio</li>'+
        '<li>Evered Hall</li>'+
        '<li>Indigenous Student Centre</li>'+
        '<li>Student Life</li>'+
        '<li>Student Union Society</li>'+
        '<li>Fair Grounds Coffee Shop</li>'+
        '<li>Supported Learning Groups</li>'+
        "<li>Parking Pay Staions: 1</li> </p>"+
        "<p>Building Plan: <br/>" +
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abs1---Main-Floor.pdf"> 1st floor</a><br/>'+
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abs2_201610.pdf"> 2nd floor</a><br/>'+
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abs3---3rd-Floor.pdf">3rd Floor</a><br/>'+
        "</p>" +
    "</div>";



    const buildT =
    '<h1>Building T</h1><center><h3>Athletics</h2></center>' +
    '<div>' +
    '<h4>Resources:</h4>'+
        "<li>Teachers Lounge</li>"+
        "<li>Pay Parking Staions: 0</li> </p>"+
        "<p>Building Plan: <br/>" +
        '<a href="https://www.ufv.ca/media/assets/facilities/floor-plans/abt1_201309.pdf"> 1st floor</a><br/>'+
        "</p>" +
    "</div>";

    
    
    
    // map markers
    const markers = [
        [BuildA, 49.02909763703652, -122.28425597088086, "icons/a.png", 20, 20],
        [buildB, 49.028756818140394, -122.28576392001101, "icons/b.png", 20, 20],
        [buildC, 49.028034751392624, -122.28705052680793, "icons/c.png", 20, 20],
        [buildD, 49.0283346756614, -122.2854322322059, "icons/d.png", 20, 20],
        [buildE, 49.027243149772445, -122.2844363098999, "icons/e.png", 20, 20],
        [buildF, 49.0279435240869, -122.28286551638989, "icons/f.png", 12, 12],
        [buildG, 49.02842760057205, -122.28347812581478, "icons/g.png", 20, 20],
        [buildH, 49.02699080661097, -122.2826456053143, "icons/h.png", 12, 12],
        [buildK, 49.03075853274541, -122.28859826017906, "icons/k.png", 20, 20],
        [buildS, 49.02743884358799, -122.28535522392447, "icons/s.png", 20, 20],
        [buildT, 49.02789172508808, -122.28443948891649, "icons/t.png", 12, 12],
        ["Abbotsford Center", 49.0306528974253, -122.28718246747198, "icons/stadium.png", 30,]
    
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
    
        // abbotsford center 
        const ac = new google.maps.Marker({
            position: {lat:49.0306528974253, lng: -122.28718246747198},
            map,
            title: "Abbotsford Center",
            icon: {
                url: "icons/stadium.png",
                scaledSize: new google.maps.Size(30, 30),
            }
            
        });
    
        
    
    }
    infoWindow2 = new google.maps.InfoWindow();
    // where am i?
    const locationButton = document.createElement("button");
    locationButton.textContent = "Where am I?";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(locationButton);
    locationButton.addEventListener("click", () => {
        // look for user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                infoWindow2.setPosition(pos);
                infoWindow2.setContent("You are here!");
                infoWindow2.open(map);
                map.setCenter(pos);
                },
                () => {
                handleLocationError(true, infoWindow2, map.getCenter());
                }
            );
        } 
        else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow2, map.getCenter());
        }
    });
}
    
function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;

    directionsService
        .route({
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.WALKING,
        })
        .then((response) => {
        directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert("Directions request failed due to " + status));
}

// cant find user
function handleLocationError(browserHasGeolocation, infoWindow2, pos) {
    infoWindow2.setPosition(pos);
    infoWindow2.setContent(
        browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow2.open(map);
}
    
window.initMap = initMap;
      
      