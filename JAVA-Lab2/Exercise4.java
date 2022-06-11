import java.util.Scanner;

public class Exercise4 {

 public static void main(String[] args) {

    int count, sum = 0;
    Scanner scan = new Scanner(System.in);

    System.out.println("How many integers will be added?");
    count = scan.nextInt();

    while(count > 0){
        System.out.println("Enter an integer:");
        sum += scan.nextInt();
        count--;
    }

    System.out.println("The sum is " + sum);

    scan.close();
 }

}
