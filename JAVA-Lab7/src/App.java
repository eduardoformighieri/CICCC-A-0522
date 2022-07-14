import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

import com.mysql.cj.jdbc.Driver;

public class App {
    public static void main(String[] args) throws Exception {
        
        String url = "jdbc:mysql://127.0.0.1:3306/a0522";
        String user = "root";
        String password = "password";

        Scanner input = new Scanner(System.in);
        ResultSet resultSet;

        try {
            Connection conn = DriverManager.getConnection(url, user, password);

            Statement statement = conn.createStatement();

            while(true){
                System.out.println("Select an option\n"
                +"1) Print all employees\n"
                +"2) Add an employee\n\n\n");

                int option = input.nextInt();

                switch (option) {
                    case 1:

                        System.out.println("==================");
                        resultSet = statement.executeQuery("SELECT * FROM employee_tbl");
                        while(resultSet.next()){
                            String name = resultSet.getString("name");
                            String dept = resultSet.getString("dept");
                            int salary = resultSet.getInt("salary");
                            System.out.printf("%s - %s (%d)%n", name, dept, salary);
                            System.out.println(" . . . . . . . . . . . . ");
                        }
                        System.out.println("==================");
                        
                        continue;
                    case 2:
                        input.nextLine();

                        System.out.print("Please enter a name: ");
                        String inputName = input.nextLine(); 
                        System.out.print("Please enter a department: ");
                        String inputDept = input.nextLine(); 
                        System.out.print("Please enter a salary: ");
                        int inputSalary = input.nextInt(); 

                        String q = "INSERT INTO employee_tbl (name, dept, salary) VALUES (?, ?, ?)";
                        PreparedStatement stmt = conn.prepareStatement(q);
                        stmt.setString(1, inputName);
                        stmt.setString(2, inputDept);
                        stmt.setInt(3, inputSalary);

                        stmt.executeUpdate();

                        System.out.println("\n\n\n");

                        continue;
                
                    default:
                        System.out.println("Invalid option. Please try again.");
                        continue;
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }


    }

    public void intro(){
        String url = "jdbc:mysql://127.0.0.1:3306/a0522";
        String user = "root";
        String password = "password";
        int rowsAffected = 0;

        try {
            //eåstablish connection
            Connection conn = DriverManager.getConnection(url, user, password);

            //create a statement object
            Statement statement = conn.createStatement();

            // statement.executeQuery("SELECT * FROM employee_tbl");

            

            
            //create new employee
            // rowsAffected = statement.executeUpdate("INSERT INTO employee_tbl (name, dept, salary) VALUES ('Mark','Marketing',5000)");
            // System.out.println("Executed an INSERT statement = Rows affected: "+ rowsAffected);

            // String name = "Benny";
            // String dept = "IT";
            // int salary = 3000;

            // String qry = "INSERT INTO employee_tbl (name, dept, salary) VALUES (?, ?, ?)";
            // PreparedStatement statement2 = conn.prepareStatement(qry);
            // statement2.setString(1, name);
            // statement2.setString(2, dept);
            // statement2.setInt(3, salary);
            // statement2.executeUpdate();


            //ResultSet interface
            ResultSet resultSet = statement.executeQuery("SELECT * FROM employee_tbl");
            //Read the table
            while(resultSet.next()){
                System.out.println(resultSet.getString("name") + " - " + resultSet.getString("dept") + " ("+resultSet.getString("salary")+")");
            }


            //Update a statement
            // rowsAffected = statement.executeUpdate("UPDATE employee_tbl SET salary = 1 WHERE id = 1");
            // System.out.println("Executed an UPDATE statment - Rows Affect: " + rowsAffected);

            //Delete a single statement
            rowsAffected = statement.executeUpdate("DELETE FROM employee_tbl WHERE id = 2");
            System.out.println("Executed a DELETE statement - Rows Affect: "+ rowsAffected);




            //ResultSet interface
            resultSet = statement.executeQuery("SELECT * FROM employee_tbl");
            //Read the table
            while(resultSet.next()){
                System.out.println(resultSet.getString("name") + " - " + resultSet.getString("dept") + " ("+resultSet.getString("salary")+")");
            }

            

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
