import java.util.Scanner;

public class Exercise1 {

 public static void main(String[] args) {

  Scanner scan = new Scanner(System.in);
  System.out.println("Input the radius:");
  int radius = scan.nextInt();
  System.out.println("The radius is: " + radius);
  System.out.println("The area is: " + (Math.PI * radius * radius));
  scan.close();

 }

}
