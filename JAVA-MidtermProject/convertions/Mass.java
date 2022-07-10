package convertions;

import java.util.Scanner;

public class Mass {
  static Scanner scan = new Scanner(System.in);

  static int fromUnity, toUnity;
  static double value, result;

  public static double milligramCoefficient(int unity){
    double coefficient = 0;

    switch(unity) {
      case 1: //mg
        coefficient = 1;
        break;
      case 2: //g
        coefficient = 1000;
        break;
      case 3: //kg
        coefficient = 1000000;
        break;
      case 4: //t
        coefficient = 1000000000;
        break;
      case 5: //lbs
        coefficient = 453600;
        break;
    }

    return coefficient;
  }

  public static double convert(int fromUnity, int toUnity, double value){
    return (value * milligramCoefficient(fromUnity) / milligramCoefficient(toUnity));
  }

  public static void options() {
    System.out.println("Type the unity you are converting from:");
    System.out.println("> Type 1 for milligram(mg)");
    System.out.println("> Type 2 for gram(g)");
    System.out.println("> Type 3 for kilogram(kg)");
    System.out.println("> Type 4 for ton(t)");
    System.out.println("> Type 5 for pound(lbs)");
    fromUnity = scan.nextInt();

    System.out.println("Type the value to be converted :");
    value = scan.nextDouble();

    System.out.println("Type the unity you are converting to:");
    System.out.println("> Type 1 for milligram(mg)");
    System.out.println("> Type 2 for gram(g)");
    System.out.println("> Type 3 for kilogram(kg)");
    System.out.println("> Type 4 for ton(t)");
    System.out.println("> Type 5 for pound(lbs)");
    toUnity = scan.nextInt();

    result = convert(fromUnity, toUnity, value);
    System.out.printf("Result: %f", result);

  }
}
