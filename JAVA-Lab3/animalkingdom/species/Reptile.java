package animalkingdom.species;

import animalkingdom.Animal;

public class Reptile extends Animal {
    
    private String skinType;
    private String skeletalStructure;
    private String eggType;

    public Reptile(){
        super(0.0d, 0.0d, "Reptile", "Cold-blooded");
        this.skinType = "Dry skin";
        this.skeletalStructure = "Vertebrae";
        this.eggType = "Soft-shelled eggs";
    }

    public Reptile(double height, double weight, String animalType, String bloodType, String skinType,
            String skeletalStructure, String eggType) {
        super(height, weight, animalType, bloodType);
        this.skinType = skinType;
        this.skeletalStructure = skeletalStructure;
        this.eggType = eggType;
    }

    public String getSkinType() {
        return skinType;
    }

    public String getSkeletalStructure() {
        return skeletalStructure;
    }

    public String getEggType() {
        return eggType;
    }


}
