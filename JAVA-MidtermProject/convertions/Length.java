package convertions;

import java.util.Scanner;

public class Length {
  static Scanner scan = new Scanner(System.in);

  static int fromUnity, toUnity;
  static double value, result;

  public static double milimmiterCoefficient(int unity){
    double coefficient = 0;

    switch(unity) {
      case 1: //mm
        coefficient = 1;
        break;
      case 2: //cm
        coefficient = 10;
        break;
      case 3: //dm
        coefficient = 100;
        break;
      case 4: //m
        coefficient = 1000;
        break;
      case 5: //mi
        coefficient = 1609344;
        break;
      case 6: //yd
        coefficient = 914.4;
        break;
      case 7: //ft
        coefficient = 304.8;
        break;
      case 8: //in
        coefficient = 25.4;
        break;
    }

    return coefficient;
  }

  public static double convert(int fromUnity, int toUnity, double value){
    return (value * milimmiterCoefficient(fromUnity) / milimmiterCoefficient(toUnity));
  }

  public static void options() {
    System.out.println("Type the unity you are converting from:");
    System.out.println("> Type 1 for milimiter(mm)");
    System.out.println("> Type 2 for centimeter(cm)");
    System.out.println("> Type 3 for decimeter(dm)");
    System.out.println("> Type 4 for meter(m)");
    System.out.println("> Type 5 for mile(mi)");
    System.out.println("> Type 6 for yard(yd)");
    System.out.println("> Type 7 for foot(ft)");
    System.out.println("> Type 8 for inch(in)");
    fromUnity = scan.nextInt();

    System.out.println("Type the value to be converted :");
    value = scan.nextDouble();

    System.out.println("Type the unity you are converting to:");
    System.out.println("> Type 1 for milimiter(mm)");
    System.out.println("> Type 2 for centimeter(cm)");
    System.out.println("> Type 3 for decimeter(dm)");
    System.out.println("> Type 4 for meter(m)");
    System.out.println("> Type 5 for mile(mi)");
    System.out.println("> Type 6 for yard(yd)");
    System.out.println("> Type 7 for foot(ft)");
    System.out.println("> Type 8 for inch(in)");
    toUnity = scan.nextInt();

    result = convert(fromUnity, toUnity, value);
    System.out.printf("Result: %f %n", result);

  }
}
