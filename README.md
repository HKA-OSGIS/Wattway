**Wattway**

**happy EV journey**
1. our wattway plans trip for Ev car
2. calculates and find out charging points when your battery reaches to 10%
3. using that remaining 10% and mileage input it shows reachable charging points
4. provides option for charging time
5. calculates next lower battery point till you reach the destination

quick docker backend routing engine setup guide

Download OpenStreetMap extracts for example from [Geofabrik](http://download.geofabrik.de/)⁠

	wget http://download.geofabrik.de/europe/germany/germany-latest.osm.pbf
Pre-process the extract with the car profile and start a routing engine HTTP server on port 5000

    docker run -t -v "${PWD}:/data" osrm/osrm-backend osrm-extract -p /opt/car.lua /data/germany-latest.osm.pbf

The flag -v "${PWD}:/data" creates the directory /data inside the docker container and makes the current working directory "${PWD}" available there. The file /data/germany-latest.osm.pbf inside the container is referring to "${PWD}/germany-latest.osm.pbf" on the host.

    docker run -t -v "${PWD}:/data" osrm/osrm-backend osrm-partition /data/germany-latest.osrm
    docker run -t -v "${PWD}:/data" osrm/osrm-backend osrm-customize /data/germany-latest.osrm

Note that germany-latest.osrm has a different file extension.

    docker run -t -i -p 5000:5000 -v "${PWD}:/data" osrm/osrm-backend osrm-routed --algorithm mld /data/germany-latest.osrm

Make requests against the HTTP server

    curl "http://127.0.0.1:5000/route/v1/driving/13.388860,52.517037;13.385983,52.496891?steps=true"

## License

[WattWay](https://github.com/HKA-OSGIS/Wattway) by [HKA-OSGEO Bhavin, Kiasal, Sandys, Ravi](https://github.com/bhikadiyabhavin) is licensed under the  
[Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1).  

![CC License](https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1)
![BY License](https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1)
![NC License](https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1)

