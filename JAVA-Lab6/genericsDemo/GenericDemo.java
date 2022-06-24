package genericsDemo;

import javax.sound.sampled.SourceDataLine;

public class GenericDemo {
    public static void main(String[] args) {
        NumberFunctions<Integer> squareObj = new NumberFunctions<>(2);
        System.out.println(squareObj.square());
    }
}


class NumberFunctions<T extends Number>{

    T obj;

    NumberFunctions(T obj){
        this.obj = obj;
    }

    double square(){
        return obj.intValue() * obj.intValue();
    }
}