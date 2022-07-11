package convertions;

import java.util.Scanner;

public class Temperature {
  static Scanner scan = new Scanner(System.in);

  static int fromUnity, toUnity;
  static double value, result;

  public static double convert(int fromUnity, int toUnity, double value){
    if(fromUnity == 1 && toUnity == 2){
      return (value - 273.15);
    }
    if(fromUnity == 1 && toUnity == 3){
      return ((value - 273.15) * 9/5 + 32);
    }
    if(fromUnity == 2 && toUnity == 1){
      return (value + 273.15);
    }
    if(fromUnity == 2 && toUnity == 3){
      return ((value * 9/5) + 32);
    }
    if(fromUnity == 3 && toUnity == 1){
      return ((value - 32) * 5/9 + 273.15);
    }
    if(fromUnity == 3 && toUnity == 2){
      return ((value - 32) * 5/9);
    }
    return value;
  }

  public static void options() {
    System.out.println("Type the unity you are converting from:");
    System.out.println("> Type 1 for kelvin(K)");
    System.out.println("> Type 2 for Celsius(°C)");
    System.out.println("> Type 3 for Fahrenheit(°F)");
    fromUnity = scan.nextInt();

    System.out.println("Type the value to be converted :");
    value = scan.nextDouble();

    System.out.println("Type the unity you are converting to:");
    System.out.println("> Type 1 for kelvin(K)");
    System.out.println("> Type 2 for Celsius(°C)");
    System.out.println("> Type 3 for Fahrenheit(°F)");
    toUnity = scan.nextInt();

    result = convert(fromUnity, toUnity, value);
    System.out.printf("Result: %f %n", result);

  }
}
