import java.util.Scanner;

public class Exercise3 {

 public static void main(String[] args) {

  Scanner scan = new Scanner(System.in);
  System.out.println("Input a number:");
  int num = scan.nextInt();
  for (int i = 1; i <= 10; i++) {
   System.out.printf("%d * %d = %d%n", num, i, (num * i));
  }
  scan.close();

 }

}
