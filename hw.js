// a spaceShip object létrehozása a Fuel, Passangers, Shields és Speedometer property-kkel

let spaceShip =
{
    'Fuel':400,
    'Passengers':['John', 'Steve', 'Sam', 'Danielle'],
    'Shields': true,
    'Speedometer':0,
// a listPassengers metódus létrehozása az utasok listázásához
     listPassengers()
    {
        //ciklus: végigmegyünk a tömb elemein
        for(let i=0; i<this.Passengers.length;i++)
        {
            //ciklusmag: console-ra írjuk a tömb elemeit
            console.log("Passenger " + (i+1)+": "+this.Passengers[i]);
        }
    },
// az addPassenger metódus létrehozása a Passenger tömb bővítéséhez, paraméterként az új tag nevét kell megadni
    addPassenger(newPassenger){
        this.Passengers.push(newPassenger);
        console.log(newPassenger + " was added to the ship");
    },
//a travel metódus létrehozás az utazás értékeinek beállításához, paraméterként a távolságot kell megadni
    travel(distance)
    {   
        //console-ra kiírjuk a megtenni kívánt távolságot
        console.log("Trying to travel:" + distance);
        //amennyiben az üzemanyag értéke 0
        if(this.Fuel===0)
        {
            //console-ra kiírjuk, hogy a tank üres
            console.log("Can't go further, tank is empty");
        }
        else
        {   
            // a fuelNec változóba kiszámoljuk a távolság megtételéhez szükséges üzemanyagot
            let fuelNec = distance/2;
            // ha nincs elegendő üzemanyag
            if (this.Fuel-fuelNec<0)
            {
                //a távolságot az üzemanyaggal megtehetőre módosítjuk, az üzemanyagot 0-zuk és kiírjuk console-ra a megtehető távolságot
                distance = this.Fuel*2;
                this.Fuel = 0;
                console.log("Can only travel: "+distance);
            }

            //ha van elegendő üzemanyag
            else
            {   //az üzemanyagot csökkentjük a megtett táv szerint
                this.Fuel-= fuelNec;
                // ha az üzemanyag 30 alá csökken a pajzsokat kikapcsoljuk és ezt console-ra kiírjuk
                if(this.Fuel<30)
                {
                    this.Shields=false;
                    console.log("fuel is low, turning off shields...");
                }
            }
            // a megtett távolsággal növeljük a km óra állását
           this.Speedometer+= distance;
        }

        //console-ra kiírjuk a megtett távolságot és az aktuális üzemanyag mennyiséget
        console.log("the SpaceShip is at:" + this.Speedometer);
        console.log("the spaceship has: " + this.Fuel + " fuel");
    }

}

spaceShip.listPassengers();
spaceShip.addPassenger('Lindsay');
spaceShip.listPassengers();
spaceShip.travel(750);
spaceShip.travel(200);
spaceShip.travel(100);
