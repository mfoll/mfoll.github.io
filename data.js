var APP_DATA = {
  "scenes": [
    {
      "id": "0-entre--bureau",
      "name": "Entrée / bureau",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.3503386067245735,
        "pitch": -0.005119869928883247,
        "fov": 1.530841108736652
      },
      "linkHotspots": [
        {
          "yaw": 1.6268708450573346,
          "pitch": 0.2634285818070605,
          "rotation": 0,
          "target": "1-salon"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1845747265899913,
          "pitch": -0.020966374792326548,
          "title": "Bureau",
          "text": ""
        }
      ]
    },
    {
      "id": "1-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.24885055395796485,
        "pitch": 0.04527711709305038,
        "fov": 1.530841108736652
      },
      "linkHotspots": [
        {
          "yaw": -2.1363117178803037,
          "pitch": 0.4485588232852571,
          "rotation": 6.283185307179586,
          "target": "0-entre--bureau"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.024750787076886382,
          "pitch": -0.07850852640623529,
          "title": "Rangements / étagères",
          "text": ""
        },
        {
          "yaw": -1.5627337932883307,
          "pitch": 0.3922609922381568,
          "title": "Meuble TV",
          "text": ""
        }
      ]
    }
  ],
  "name": "Maison Oullins Laetitia et Matthieu",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
