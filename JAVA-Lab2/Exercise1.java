import java.util.Scanner;

public class Exercise1 {

 public static void main(String[] args) {

    int start, end;
    Scanner scan = new Scanner(System.in);

    System.out.println("Input the start:");
    start = scan.nextInt();
    System.out.println("Input the end:");
    end = scan.nextInt();

    for (int i = start; i <= end; i++) {
        System.out.println(i);
    }

    scan.close();
 }

}
