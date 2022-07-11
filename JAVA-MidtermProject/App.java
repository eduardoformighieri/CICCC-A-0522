import java.util.Scanner;
import convertions.Length;
import convertions.Mass;
import convertions.Temperature;

public class App {
  static Scanner scan = new Scanner(System.in);
  static Length length = new Length();
  static Mass mass = new Mass();
  static Temperature temperature = new Temperature();

  static int convertionType;

  public static void chooseConvertion(int convertionType){

    switch(convertionType) {
      case 1:
        length.options();
        break;
      case 2:
        mass.options();
        break;
      case 3:
        temperature.options();
        break;
      default:
        System.out.println("Bye!");
        break;
    }
  }


  public static void main(String[] args) {

    do{
      System.out.println("Choose your convertion type:");
      System.out.println("> Type 1 for length convertion");
      System.out.println("> Type 2 for mass convertion");
      System.out.println("> Type 3 for temperature convertion");
      System.out.println("> Type any other key to quit");
      convertionType = scan.nextInt();
      chooseConvertion(convertionType);
        }while(convertionType >= 1 && convertionType <= 3);
    }
  }

