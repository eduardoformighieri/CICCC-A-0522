package genericsDemo;
public class WildCard {
    
    public static void main(String[] args) {
        NumFunc<Integer> iObj = new NumFunc<>(2);
        NumFunc<Double> dObj = new NumFunc<>(-2.0);    

        System.out.println(iObj.absEqual(dObj));
    }
}

class NumFunc<T extends Number>{

    T num;

    NumFunc(T num){
        this.num = num;
    }

    boolean absEqual(NumFunc<?> obj){
        if(Math.abs(num.doubleValue()) == Math.abs(obj.num.doubleValue()))
            return true;
        return false;
    }
}