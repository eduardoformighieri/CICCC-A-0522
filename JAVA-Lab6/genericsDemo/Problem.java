package genericsDemo;

public class Problem {
    public static void main(String[] args) {
        
        PrintIntegers pi = new PrintIntegers(1);
        pi.printValue();

        PrintDouble pd = new PrintDouble(1.12);
        pd.printValue();

        PrintString ps = new PrintString("1.25");
        ps.printValue();

        MyGenericClass<Integer> object1 = new MyGenericClass<>(10);
        MyGenericClass<Double> object2 = new MyGenericClass<>(1.650);
        MyGenericClass<String> object3 = new MyGenericClass<>("hoge");
        object1.showType();
        object2.showType();
        object3.showType();

    }
}

class PrintIntegers {
    Integer i;

    public PrintIntegers(Integer i){
        this.i = i;
    }

    void printValue(){
        System.out.println(i);
    }
}

class PrintDouble {
    Double i;

    public PrintDouble(Double i){
        this.i = i;
    }

    void printValue(){
        System.out.println(i);
    }
}

class PrintString {
    String i;

    public PrintString(String i){
        this.i = i;
    }

    void printValue(){
        System.out.println(i);
    }
}

class MyGenericClass<T>{

    T obj;

    MyGenericClass(T obj){
        this.obj = obj;
    }

    void showType(){
        System.out.println(obj.getClass().getName());
    }
}

