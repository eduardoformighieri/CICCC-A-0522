package animalkingdom.species;

import animalkingdom.Animal;

public class Fish extends Animal {

    private String habitat;
    private boolean withGills;

    public Fish(){
        super(0.0d, 0.0d, "Fish", "Cold-blooded");
        this.habitat = "Sea water";
        this.withGills = true;
    }

    public Fish(double height, double weight, String animalType, String bloodType, String habitat, boolean withGills) {
        super(height, weight, animalType, bloodType);
        this.habitat = habitat;
        this.withGills = withGills;
    }

    public String getHabitat() {
        return habitat;
    }

    public boolean isWithGills() {
        return withGills;
    }


}
