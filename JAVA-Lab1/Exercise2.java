import java.util.Scanner;

public class Exercise2 {

 public static void main(String[] args) {

  Scanner scan = new Scanner(System.in);
  System.out.println("Input the cents:");
  int cents = scan.nextInt();
  System.out.printf("The value is %d dollars and %d cents", (cents/100), (cents%100));
  scan.close();

 }

}
