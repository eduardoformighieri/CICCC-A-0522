import java.util.Scanner;

public class Calculator {
  static Scanner scan = new Scanner(System.in);
  private static double num1, num2, result;
  static String operator;

  public static double add() {
		return (num1 + num2);
	}

	public static double subtract() {
		return (num1 - num2);
	}

	public static double multiply() {
		return (num1 * num2);
	}

	public static double divide() {
		return (num1 / num2);
	}

  public static void calculate() {
    System.out.println("Please type the first number");
    num1 = scan.nextDouble();
    System.out.println("Choose an operation:");
    System.out.println("> Type + for addition");
    System.out.println("> Type - for subtraction");
    System.out.println("> Type * for multiplication");
    System.out.println("> Type / for division");
    operator = scan.next();
    System.out.println("Please type the second number");
    num2 = scan.nextDouble();

    if (operator.equals("+")){
      result = add();
    }
    if (operator.equals("-")){
      result = subtract();
    }
    if (operator.equals("*")){
      result = multiply();
    }
    if (operator.equals("/")){
      if (num2 == 0){
        System.out.println("cannot divide by zero");
        continueOrQuit();
      }
      result = divide();
    }

    System.out.printf("%f %s %f = %f %n", num1, operator, num2, result);
    continueOrQuit();
  }
  public static void continueOrQuit() {
		System.out.println("Do you want to continue or quit?");
    String ending = scan.next();

    if (ending.equals("continue")) {
      calculate();
    }
    if (ending.equals("quit")) {
      System.out.println("Bye!");
    }
	}
  public static void main(String[] args) {
    calculate();
  }
}
