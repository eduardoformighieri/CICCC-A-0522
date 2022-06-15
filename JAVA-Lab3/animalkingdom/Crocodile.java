package animalkingdom;

import animalkingdom.species.Reptile;

public class Crocodile extends Reptile {
    
    public Crocodile(){
        super(0.5d, 1000.0d, "Reptile", "Cold-blooded", "Dry skin", "Vertebrae", "Hard-shelled eggs");
    }

    @Override
    public String toString() {
        return "Crocodile []";
    }

    public String showInfo(){
        return
        "=======================\n"+
        "Crocodile\n"+
        "=======================\n"+
        "height='" + getHeight() + "'\n"+
        "weight='" + getWeight() + "'\n"+
        "animalType='" + getAnimalType() + "'\n"+
        "bloodType='" + getBloodType() + "'\n"+
        "skeletalStructure='" + getSkeletalStructure() + "'\n"+
        "skinType='" + getSkinType() + "'\n"+
        "eggType='" + getEggType() + "'\n";
    }
}
