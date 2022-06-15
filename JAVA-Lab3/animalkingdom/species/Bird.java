package animalkingdom.species;

import animalkingdom.Animal;

public class Bird extends Animal{
    
    private boolean featherless;
    private boolean flightless;


    public Bird() {
        super(0.0d, 0.0d, "Bird", "Warm-blooded");
        this.featherless = false;
        this.flightless = false;
    }

   

    public Bird(double height, double weight, String animalType, String bloodType, boolean featherless,
            boolean flightless) {
        super(height, weight, animalType, bloodType);
        this.featherless = featherless;
        this.flightless = flightless;
    }

    public boolean isFeatherless() {
        return featherless;
    }

    public boolean isFlightless() {
        return flightless;
    }

}
