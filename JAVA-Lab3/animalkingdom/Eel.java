package animalkingdom;

import animalkingdom.species.Fish;

public class Eel extends Fish{
    private String feature;

    public Eel(){
        super();
        this.feature = "Release electric charge";
    }

    public Eel(double height, double weight, String animalType, String bloodType, String habitat, boolean withGills,
            String feature) {
        super(height, weight, animalType, bloodType, habitat, withGills);
        this.feature = feature;
    }

    public String getFeature() {
        return feature;
    }

    @Override
    public String toString() {
        return 
        "=====================================\n" +
        "Eel\n"+
        "=====================================\n" +
        "height='" + getHeight() + "',\n" +
        "weight='" + getWeight() + "',\n" +
        "animalType='" + getAnimalType() + "',\n" +
        "bloodType='" + getBloodType() + "',\n" +
        "habitat='" + getHabitat() + "',\n" +
        "withGills='" + isWithGills() + "',\n" +
        "feature='" + getFeature() + "'";
    }    
    
}
