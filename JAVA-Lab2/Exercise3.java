import java.util.Scanner;

public class Exercise3 {

 public static void main(String[] args) {

    String word;
    Scanner scan = new Scanner(System.in);

    System.out.println("Input a word:");
    word = scan.nextLine();

    for(int i = 1; i <= word.length(); i++){
        System.out.println(word);
    }

    scan.close();
 }

}
