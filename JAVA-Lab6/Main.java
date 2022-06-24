import java.util.*;

public class Main {
    public static void main(String[] args) {
        
        ArrayList<Integer> list1 = new ArrayList<>();
        list1.add(40);
        list1.add(30);
        list1.add(90);
        list1.add(10);
        list1.add(50);
        list1.add(70);

        
        Collections.sort(list1);
        list1.sort(null);
        System.out.println(list1);

        ArrayList<String> list2 = new ArrayList<>();
        list2.add("Eating");
        list2.add("Sleeping");
        list2.add("Drinking");
        list2.add("Coding");
        list2.add("Cooking");

        
        // Collections.sort(list1);
        list2.sort(null);
        System.out.println(list2);


        ArrayList<Employee> list3 = new ArrayList<>();
        list3.add(new Employee("Eric", 6000, "IT"));
        list3.add(new Employee("James", 2000, "Accounting"));
        list3.add(new Employee("Tom", 1000, "Sales"));
        list3.add(new Employee("Clara", 4000, "Marketing"));

        
        Collections.sort(list3);
        // list3.sort(null);
        System.out.println(list3);
    }
}

class Employee implements Comparable<Employee>{
    String name;
    int salary;
    String department;


    public Employee(String name, int salary, String department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    @Override
    public int compareTo(Employee o) {
        
        if(this.salary < o.salary){
            return -1;
        }else if(this.salary > o.salary){
            return 1;
        }else{
            return 0;
        }

    }

    @Override
    public String toString() {
        return "Employee [department=" + department + ",\n name=" + name + ",\n salary=" + salary + "]";
    }
    
}
