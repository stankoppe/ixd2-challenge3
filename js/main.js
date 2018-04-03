$(function() {
	// init the page
})
var map;

function initMap() {
	// Create a map object and specify the DOM element for display.
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 28.6144578,
			lng: -80.694108
		},
		zoom: 13,
		styles: [{
			"elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#242f3e"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#746855"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#242f3e"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.locality",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#d59563"
			      }
			    ]
			  },
			  {
			    "featureType": "landscape.natural.terrain",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      {
			        "color": "#c300d8"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#d59563"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#263c3f"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#6b9a76"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.school",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#e22f11"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.sports_complex",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#e22f11"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#38414e"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      {
			        "color": "#212a37"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9ca5b3"
			      }
			    ]
			  },
			  {
			    "featureType": "road.arterial",
			    "elementType": "geometry.fill",
			    "stylers": [
			      {
			        "color": "#ff01c8"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#746855"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry.fill",
			    "stylers": [
			      {
			        "color": "#e22f11"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      {
			        "color": "#1f2835"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#f3d19c"
			      }
			    ]
			  },
			  {
			    "featureType": "transit",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#2f3948"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.station",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#d59563"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#17263c"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#515c6d"
			}]
		}]
	});

	var script = document.createElement('script');
	script.src =
		'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
	document.getElementsByTagName('head')[0].appendChild(script);
}

function eqfeed_callback(results) {
	var heatmapData = [];
	for (var i = 0; i < results.features.length; i++) {
		var coords = results.features[i].geometry.coordinates;
		var latLng = new google.maps.LatLng(coords[1], coords[0]);
		heatmapData.push(latLng);
	}
	var heatmap = new google.maps.visualization.HeatmapLayer({
		data: heatmapData,
		dissipating: false,
		map: map
	});
}
