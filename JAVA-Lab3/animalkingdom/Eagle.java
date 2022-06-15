package animalkingdom;

import animalkingdom.species.Bird;

public class Eagle extends Bird {

    public Eagle(){
        super(200.0, 50.0, "Bird", "Warm-blooded", false, false);
    }

    @Override
    public String toString() {
        return 
        "=====================================\n" +
        "Eagle\n"+
        "=====================================\n" +
        "height='" + getHeight() + "',\n" +
        "weight='" + getWeight() + "',\n" +
        "animalType='" + getAnimalType() + "',\n" +
        "bloodType='" + getBloodType() + "',\n" +
        "featherless='" + isFeatherless() + "',\n" +
        "flightless='" + isFlightless() + "'";
    }  
}
