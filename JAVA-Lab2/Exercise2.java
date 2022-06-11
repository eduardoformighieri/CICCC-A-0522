import java.util.Scanner;

public class Exercise2 {

 public static void main(String[] args) {

    int n;
    Scanner scan = new Scanner(System.in);

    System.out.println("Input the N:");
    n = scan.nextInt();

    System.out.println("The sum of 1 to " + n + " is " + (n * (n + 1) / 2));

    scan.close();
 }

}
