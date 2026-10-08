const P = (t, q, code, out, x) => ({ t, q, code, out, ...x });

const RECORD = {
  profile: { name: "M. Radhika", roll: "26EU02911", year: "IInd Year", branch: "AI&ML", section: "B", subject: "Java Programming" },
  weeks: {
    1: { title: "Comparative Table", noCount: true, programs: [{
      t: "Comparative Table — Java, C, C++, Python & JavaScript",
      q: "Compare Java, C, C++, Python and JavaScript on key language features.",
      table: [
        ["Feature", "Java", "C", "C++", "Python", "JavaScript"],
        ["Year created", "1995", "1972", "1985", "1991", "1995"],
        ["Paradigm", "Object-oriented", "Procedural", "Procedural + OOP", "Multi-paradigm", "Multi-paradigm, event-driven"],
        ["Typing", "Static, strong", "Static, weak", "Static", "Dynamic, strong", "Dynamic, weak"],
        ["Execution", "Compiled to bytecode, run on JVM", "Compiled to machine code", "Compiled to machine code", "Interpreted", "Interpreted / JIT in browser"],
        ["Platform independent", "Yes (JVM)", "No", "No", "Yes", "Yes"],
        ["Memory management", "Automatic (garbage collector)", "Manual", "Manual", "Automatic", "Automatic"],
        ["Pointers", "Not supported", "Supported", "Supported", "Not supported", "Not supported"],
        ["Speed", "Fast", "Very fast", "Very fast", "Slower", "Moderate"],
        ["Typical use", "Enterprise apps, Android, web back-ends", "System software, embedded", "Games, systems, high-performance apps", "AI/ML, scripting, data science", "Web front-end and back-end"]
      ]
    }] },

    2: { title: "JDK Installation", programs: [
      { t: "Oracle JDK Installation — Windows", q: "Install Oracle JDK on Windows and verify the installation.",
        steps: [
          "Open the Oracle Java downloads page (oracle.com/java/technologies/downloads) and choose the Windows tab.",
          "Download the x64 Installer (.exe) of the latest LTS JDK.",
          "Run the installer, click Next, keep the default path (C:\\Program Files\\Java\\jdk-21) and click Install.",
          "Open Start → Environment Variables → System Variables → New: JAVA_HOME = C:\\Program Files\\Java\\jdk-21",
          "Edit the Path variable and add: %JAVA_HOME%\\bin",
          "Open a new Command Prompt and run: java -version",
          "Run: javac -version to confirm the compiler is installed."
        ] },
      { t: "OpenJDK Installation — Windows", q: "Install OpenJDK (Eclipse Temurin) on Windows and verify the installation.",
        steps: [
          "Open adoptium.net and download the Windows x64 JDK (.msi or .zip) of the latest LTS release.",
          "If using the .msi, run it and enable 'Set JAVA_HOME variable' and 'Add to PATH' on the feature screen, then Install.",
          "If using the .zip, extract it to C:\\Java\\jdk-21.",
          "Set JAVA_HOME = C:\\Java\\jdk-21 in System Environment Variables.",
          "Add %JAVA_HOME%\\bin to the Path variable.",
          "Open a new Command Prompt and run: java -version",
          "Run: javac -version to confirm the compiler is available."
        ] }
    ] },

    3: { title: "Data Types, Operators & Basics", programs: [
      P("Hello, Java!", "Display \"Hello, Java!\" and demonstrate the basic structure of a Java program.",
`public class HelloJava {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`, `Hello, Java!`),

      P("Primitive Data Types", "Declare variables of byte, short, int, long, float, double, char and boolean types and display their values.",
`public class DataTypes {
    public static void main(String[] args) {
        byte b = 100;
        short s = 20000;
        int i = 100000;
        long l = 123456789012L;
        float f = 3.14f;
        double d = 2.718281828;
        char c = 'A';
        boolean flag = true;

        System.out.println("byte    : " + b);
        System.out.println("short   : " + s);
        System.out.println("int     : " + i);
        System.out.println("long    : " + l);
        System.out.println("float   : " + f);
        System.out.println("double  : " + d);
        System.out.println("char    : " + c);
        System.out.println("boolean : " + flag);
    }
}`, `byte    : 100
short   : 20000
int     : 100000
long    : 123456789012
float   : 3.14
double  : 2.718281828
char    : A
boolean : true`),

      P("Arithmetic Operations on Integers", "Perform addition, subtraction, multiplication, division and modulus on two integer variables.",
`public class IntegerArithmetic {
    public static void main(String[] args) {
        int a = 20, b = 6;
        System.out.println("Addition       : " + (a + b));
        System.out.println("Subtraction    : " + (a - b));
        System.out.println("Multiplication : " + (a * b));
        System.out.println("Division       : " + (a / b));
        System.out.println("Modulus        : " + (a % b));
    }
}`, `Addition       : 26
Subtraction    : 14
Multiplication : 120
Division       : 3
Modulus        : 2`),

      P("Arithmetic on Floating-Point Numbers", "Perform arithmetic operations on floating-point numbers and display the results.",
`public class FloatArithmetic {
    public static void main(String[] args) {
        double x = 10.5, y = 2.5;
        System.out.println("Addition       : " + (x + y));
        System.out.println("Subtraction    : " + (x - y));
        System.out.println("Multiplication : " + (x * y));
        System.out.println("Division       : " + (x / y));
        System.out.println("Modulus        : " + (x % y));
    }
}`, `Addition       : 13.0
Subtraction    : 8.0
Multiplication : 26.25
Division       : 4.2
Modulus        : 0.5`),

      P("Character Data Type", "Display a character and its corresponding ASCII/Unicode value.",
`public class CharDemo {
    public static void main(String[] args) {
        char upper = 'A';
        char lower = 'a';
        System.out.println("Character : " + upper);
        System.out.println("Unicode   : " + (int) upper);
        System.out.println("Character : " + lower);
        System.out.println("Unicode   : " + (int) lower);
    }
}`, `Character : A
Unicode   : 65
Character : a
Unicode   : 97`),

      P("Boolean Variables and Relational Operators", "Demonstrate boolean variables and boolean expressions using relational operators.",
`public class BooleanDemo {
    public static void main(String[] args) {
        int a = 10, b = 20;
        boolean result = (a < b) && (b > 15);

        System.out.println("a > b  : " + (a > b));
        System.out.println("a < b  : " + (a < b));
        System.out.println("a == b : " + (a == b));
        System.out.println("a != b : " + (a != b));
        System.out.println("a >= b : " + (a >= b));
        System.out.println("a <= b : " + (a <= b));
        System.out.println("(a < b) && (b > 15) : " + result);
    }
}`, `a > b  : false
a < b  : true
a == b : false
a != b : true
a >= b : false
a <= b : true
(a < b) && (b > 15) : true`),

      P("Declaring and Initializing Variables", "Declare and initialize different types of variables and display their values.",
`public class VariablesDemo {
    public static void main(String[] args) {
        String name = "Radhika";
        int age = 19;
        double cgpa = 8.75;
        char grade = 'A';
        boolean passed = true;

        System.out.println("Name   : " + name);
        System.out.println("Age    : " + age);
        System.out.println("CGPA   : " + cgpa);
        System.out.println("Grade  : " + grade);
        System.out.println("Passed : " + passed);
    }
}`, `Name   : Radhika
Age    : 19
CGPA   : 8.75
Grade  : A
Passed : true`),

      P("Swapping Two Variables", "Swap the values of two variables using a temporary variable.",
`public class SwapDemo {
    public static void main(String[] args) {
        int a = 10, b = 20;
        System.out.println("Before swap: a = " + a + ", b = " + b);

        int temp = a;
        a = b;
        b = temp;

        System.out.println("After swap : a = " + a + ", b = " + b);
    }
}`, `Before swap: a = 10, b = 20
After swap : a = 20, b = 10`),

      P("Widening Type Conversion", "Demonstrate widening (implicit) type conversion.",
`public class WideningDemo {
    public static void main(String[] args) {
        int i = 100;
        long l = i;
        float f = l;
        double d = f;

        System.out.println("int value    : " + i);
        System.out.println("long value   : " + l);
        System.out.println("float value  : " + f);
        System.out.println("double value : " + d);
    }
}`, `int value    : 100
long value   : 100
float value  : 100.0
double value : 100.0`),

      P("Narrowing Type Casting", "Demonstrate narrowing (explicit) type casting.",
`public class NarrowingDemo {
    public static void main(String[] args) {
        double d = 9.78;
        int i = (int) d;
        int big = 130;
        byte b = (byte) big;

        System.out.println("Original double  : " + d);
        System.out.println("Cast to int      : " + i);
        System.out.println("Original int     : " + big);
        System.out.println("Cast to byte     : " + b);
    }
}`, `Original double  : 9.78
Cast to int      : 9
Original int     : 130
Cast to byte     : -126`),

      P("Character and ASCII Conversion", "Convert a character to its ASCII value and an integer back to a character.",
`public class AsciiConversion {
    public static void main(String[] args) {
        char c = 'G';
        int ascii = c;
        int num = 100;
        char ch = (char) num;
        char next = (char) (c + 1);

        System.out.println("Character        : " + c);
        System.out.println("ASCII value      : " + ascii);
        System.out.println("Number           : " + num);
        System.out.println("Character of num : " + ch);
        System.out.println("Next character   : " + next);
    }
}`, `Character        : G
ASCII value      : 71
Number           : 100
Character of num : d
Next character   : H`),

      P("Even or Odd", "Check whether a number is even or odd.",
`public class EvenOdd {
    public static void main(String[] args) {
        int num = 17;
        if (num % 2 == 0)
            System.out.println(num + " is Even");
        else
            System.out.println(num + " is Odd");
    }
}`, `17 is Odd`),

      P("Largest of Two Numbers", "Find the largest of two numbers.",
`public class LargestOfTwo {
    public static void main(String[] args) {
        int a = 45, b = 78;
        if (a > b)
            System.out.println(a + " is the largest");
        else
            System.out.println(b + " is the largest");
    }
}`, `78 is the largest`),

      P("Reserved Keywords", "Demonstrate Java reserved keywords, which cannot be used as identifiers.",
`public class ReservedKeywords {
    public static void main(String[] args) {
        String[] keywords = {"class", "public", "static", "void", "int", "double",
                             "if", "else", "for", "while", "return", "new"};

        System.out.println("Some reserved keywords in Java:");
        for (int i = 0; i < keywords.length; i++) {
            System.out.println((i + 1) + ". " + keywords[i]);
        }
        System.out.println("Reserved keywords cannot be used as identifiers.");
    }
}`, `Some reserved keywords in Java:
1. class
2. public
3. static
4. void
5. int
6. double
7. if
8. else
9. for
10. while
11. return
12. new
Reserved keywords cannot be used as identifiers.`),

      P("For Loop — Numbers 1 to 10", "Print the numbers 1 to 10 using a for loop.",
`public class ForLoopDemo {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
    }
}`, `1 2 3 4 5 6 7 8 9 10`)
    ] },

    4: { title: "No Programming Task", note: "No programming task was assigned this week." },
    5: { title: "No Programming Task", note: "No programming task was assigned this week." },
    6: { title: "Classes, Objects & Constructors", programs: [
      P("Student Information System", "Create a Student Information System using classes, objects, instance variables and methods.",
`class Student {
    int id = 101;
    String name = "Radhika";
    String course = "AI&ML";
    void display() {
        System.out.println("ID     : " + id);
        System.out.println("Name   : " + name);
        System.out.println("Course : " + course);
    }
}

public class StudentInfo {
    public static void main(String[] args) {
        new Student().display();
    }
}`, `ID     : 101
Name   : Radhika
Course : AI&ML`),
      P("Employee Information System", "Create an Employee Information System using a class, object, variables and methods.",
`class Employee {
    int empId = 501;
    String name = "Ravi";
    double salary = 45000;
    void display() {
        System.out.println("Employee ID : " + empId);
        System.out.println("Name        : " + name);
        System.out.println("Salary      : " + salary);
    }
}

public class EmployeeInfo {
    public static void main(String[] args) {
        new Employee().display();
    }
}`, `Employee ID : 501
Name        : Ravi
Salary      : 45000.0`),
      P("Book Details — Multiple Objects", "Create three Book objects and display their ID, title and author.",
`class Book {
    int id; String title, author;
    Book(int id, String title, String author) {
        this.id = id; this.title = title; this.author = author;
    }
    void display() {
        System.out.println(id + " | " + title + " | " + author);
    }
}

public class BookDetails {
    public static void main(String[] args) {
        Book b1 = new Book(1, "Head First Java", "Kathy Sierra");
        Book b2 = new Book(2, "Effective Java", "Joshua Bloch");
        Book b3 = new Book(3, "Java: The Complete Reference", "Herbert Schildt");
        b1.display();
        b2.display();
        b3.display();
    }
}`, `1 | Head First Java | Kathy Sierra
2 | Effective Java | Joshua Bloch
3 | Java: The Complete Reference | Herbert Schildt`),
      P("Array of Student Objects", "Create an array of five Student objects, accept their details and display them.",
`class Student {
    int id; String name;
    Student(int id, String name) { this.id = id; this.name = name; }
}

public class StudentArray {
    public static void main(String[] args) {
        String[] names = {"Radhika", "Anitha", "Sneha", "Priya", "Kavya"};
        Student[] s = new Student[5];
        for (int i = 0; i < 5; i++) {
            s[i] = new Student(101 + i, names[i]);
        }
        for (int i = 0; i < 5; i++) {
            System.out.println(s[i].id + " - " + s[i].name);
        }
    }
}`, `101 - Radhika
102 - Anitha
103 - Sneha
104 - Priya
105 - Kavya`),
      P("Reference Assignment", "Assign one object reference variable to another.",
`class Student {
    String name;
    Student(String name) { this.name = name; }
}

public class ReferenceAssign {
    public static void main(String[] args) {
        Student s1 = new Student("Radhika");
        Student s2 = s1;
        System.out.println("s1.name = " + s1.name);
        System.out.println("s2.name = " + s2.name);
        s2.name = "Anitha";
        System.out.println("After changing through s2:");
        System.out.println("s1.name = " + s1.name);
    }
}`, `s1.name = Radhika
s2.name = Radhika
After changing through s2:
s1.name = Anitha`),
      P("Comparing Object References", "Compare two object reference variables using the == operator.",
`class Student {
    String name;
    Student(String name) { this.name = name; }
}

public class CompareReferences {
    public static void main(String[] args) {
        Student s1 = new Student("Radhika");
        Student s2 = new Student("Radhika");
        Student s3 = s1;
        System.out.println("s1 == s2 : " + (s1 == s2));
        System.out.println("s1 == s3 : " + (s1 == s3));
    }
}`, `s1 == s2 : false
s1 == s3 : true`),
      P("Calculator Using Methods", "Create methods for addition, subtraction, multiplication and division.",
`class Calculator {
    int add(int a, int b) { return a + b; }
    int subtract(int a, int b) { return a - b; }
    int multiply(int a, int b) { return a * b; }
    double divide(int a, int b) { return (double) a / b; }
}

public class CalculatorDemo {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println("Addition       : " + c.add(20, 4));
        System.out.println("Subtraction    : " + c.subtract(20, 4));
        System.out.println("Multiplication : " + c.multiply(20, 4));
        System.out.println("Division       : " + c.divide(20, 4));
    }
}`, `Addition       : 24
Subtraction    : 16
Multiplication : 80
Division       : 5.0`),
      P("Rectangle Operations", "Calculate the area and perimeter of a rectangle using a constructor and methods.",
`class Rectangle {
    int length, breadth;
    Rectangle(int l, int b) { length = l; breadth = b; }
    int area() { return length * breadth; }
    int perimeter() { return 2 * (length + breadth); }
}

public class RectangleDemo {
    public static void main(String[] args) {
        Rectangle r = new Rectangle(10, 5);
        System.out.println("Area      : " + r.area());
        System.out.println("Perimeter : " + r.perimeter());
    }
}`, `Area      : 50
Perimeter : 30`),
      P("Student Constructors", "Demonstrate default and parameterized constructors using Student objects.",
`class Student {
    int id; String name;
    Student() { id = 0; name = "Unknown"; }
    Student(int id, String name) { this.id = id; this.name = name; }
    void display() { System.out.println(id + " - " + name); }
}

public class StudentConstructors {
    public static void main(String[] args) {
        Student s1 = new Student();
        Student s2 = new Student(101, "Radhika");
        s1.display();
        s2.display();
    }
}`, `0 - Unknown
101 - Radhika`),
      P("Constructor Overloading", "Demonstrate constructor overloading using constructors with different parameter lists.",
`class Box {
    Box() { System.out.println("Default constructor"); }
    Box(int side) { System.out.println("One-parameter constructor: side = " + side); }
    Box(int l, int b) { System.out.println("Two-parameter constructor: l = " + l + ", b = " + b); }
}

public class ConstructorOverloading {
    public static void main(String[] args) {
        new Box();
        new Box(5);
        new Box(4, 6);
    }
}`, `Default constructor
One-parameter constructor: side = 5
Two-parameter constructor: l = 4, b = 6`),
      P("Using this Keyword", "Use the this keyword to refer to the current object's variables.",
`class Student {
    int id; String name;
    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }
    void display() { System.out.println("ID: " + id + ", Name: " + name); }
}

public class ThisDemo {
    public static void main(String[] args) {
        new Student(101, "Radhika").display();
    }
}`, `ID: 101, Name: Radhika`),
      P("Constructor Chaining", "Demonstrate constructor chaining using this() between constructors.",
`class Test {
    Test() {
        this(10);
        System.out.println("Default constructor");
    }
    Test(int a) {
        this(a, 20);
        System.out.println("One-parameter constructor: " + a);
    }
    Test(int a, int b) {
        System.out.println("Two-parameter constructor: " + a + ", " + b);
    }
}

public class ChainingDemo {
    public static void main(String[] args) {
        new Test();
    }
}`, `Two-parameter constructor: 10, 20
One-parameter constructor: 10
Default constructor`),
      P("Demonstrating Garbage Collection", "Make an object eligible for garbage collection and request it using System.gc().",
`class Student {
    String name;
    Student(String name) { this.name = name; }
}

public class GCDemo {
    public static void main(String[] args) {
        Student s1 = new Student("Radhika");
        System.out.println("Object created: " + s1.name);
        s1 = null;
        System.out.println("Object is now eligible for garbage collection");
        System.gc();
        System.out.println("Garbage collection requested using System.gc()");
    }
}`, `Object created: Radhika
Object is now eligible for garbage collection
Garbage collection requested using System.gc()`),
      P("Object Eligibility for Garbage Collection", "Show different situations in which objects become eligible for garbage collection.",
`class Demo {
    String n;
    Demo(String n) { this.n = n; }
}

public class EligibilityDemo {
    static void create() {
        Demo e = new Demo("E");
    }
    public static void main(String[] args) {
        Demo d1 = new Demo("A");
        d1 = null;
        System.out.println("1. Object A eligible: reference set to null");

        Demo d2 = new Demo("B");
        d2 = new Demo("C");
        System.out.println("2. Object B eligible: reference reassigned");

        new Demo("D");
        System.out.println("3. Object D eligible: anonymous object");

        create();
        System.out.println("4. Object E eligible: method ended");
    }
}`, `1. Object A eligible: reference set to null
2. Object B eligible: reference reassigned
3. Object D eligible: anonymous object
4. Object E eligible: method ended`),
      P("Method Overloading", "Demonstrate method overloading using methods with different parameter lists.",
`class MathOps {
    int add(int a, int b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
    double add(double a, double b) { return a + b; }
}

public class OverloadDemo {
    public static void main(String[] args) {
        MathOps m = new MathOps();
        System.out.println("add(10, 20)      : " + m.add(10, 20));
        System.out.println("add(10, 20, 30)  : " + m.add(10, 20, 30));
        System.out.println("add(1.5, 2.5)    : " + m.add(1.5, 2.5));
    }
}`, `add(10, 20)      : 30
add(10, 20, 30)  : 60
add(1.5, 2.5)    : 4.0`),
      P("Overloading Area Methods", "Calculate the area of a circle, rectangle and square using overloaded methods.",
`class Area {
    void area(double r) { System.out.printf("Circle area    : %.2f%n", Math.PI * r * r); }
    void area(double l, double b) { System.out.printf("Rectangle area : %.2f%n", l * b); }
    void area(int side) { System.out.println("Square area    : " + (side * side)); }
}

public class AreaOverload {
    public static void main(String[] args) {
        Area a = new Area();
        a.area(5.0);
        a.area(10.0, 5.0);
        a.area(4);
    }
}`, `Circle area    : 78.54
Rectangle area : 50.00
Square area    : 16`),
      P("Passing Student Object", "Pass a Student object to a method and display its details.",
`class Student {
    int id; String name;
    Student(int id, String name) { this.id = id; this.name = name; }
}

public class PassObject {
    static void show(Student s) {
        System.out.println("ID   : " + s.id);
        System.out.println("Name : " + s.name);
    }
    public static void main(String[] args) {
        show(new Student(101, "Radhika"));
    }
}`, `ID   : 101
Name : Radhika`),
      P("Comparing Employee Salaries", "Compare the salaries of two Employee objects and display the employee with the higher salary.",
`class Employee {
    String name; double salary;
    Employee(String name, double salary) { this.name = name; this.salary = salary; }
}

public class CompareSalary {
    static void compare(Employee e1, Employee e2) {
        Employee high = (e1.salary > e2.salary) ? e1 : e2;
        System.out.println("Higher salary: " + high.name + " (" + high.salary + ")");
    }
    public static void main(String[] args) {
        compare(new Employee("Ravi", 35000), new Employee("Anitha", 42000));
    }
}`, `Higher salary: Anitha (42000.0)`),
      P("Returning a Student Object", "Create a Student object inside a method and return it to the caller.",
`class Student {
    int id; String name;
    Student(int id, String name) { this.id = id; this.name = name; }
}

public class ReturnObject {
    static Student create() {
        return new Student(101, "Radhika");
    }
    public static void main(String[] args) {
        Student s = create();
        System.out.println("ID   : " + s.id);
        System.out.println("Name : " + s.name);
    }
}`, `ID   : 101
Name : Radhika`),
      P("Returning a Bank Account Object", "Pass a Bank Account object to a method, update its balance and return the object.",
`class Account {
    String holder; double balance;
    Account(String holder, double balance) { this.holder = holder; this.balance = balance; }
}

public class ReturnAccount {
    static Account deposit(Account a, double amt) {
        a.balance += amt;
        return a;
    }
    public static void main(String[] args) {
        Account acc = new Account("Radhika", 5000);
        System.out.println("Before : " + acc.balance);
        Account updated = deposit(acc, 2000);
        System.out.println("After  : " + updated.balance);
    }
}`, `Before : 5000.0
After  : 7000.0`),
      P("Static Variable", "Count the number of Student objects created using a static variable.",
`class Student {
    static int count = 0;
    Student() { count++; }
}

public class StaticVariable {
    public static void main(String[] args) {
        new Student();
        new Student();
        new Student();
        System.out.println("Total students created: " + Student.count);
    }
}`, `Total students created: 3`),
      P("Static Methods", "Calculate square, cube and factorial using static methods.",
`public class StaticMethods {
    static int square(int n) { return n * n; }
    static int cube(int n) { return n * n * n; }
    static long factorial(int n) {
        long f = 1;
        for (int i = 2; i <= n; i++) f *= i;
        return f;
    }
    public static void main(String[] args) {
        System.out.println("Square of 5    : " + square(5));
        System.out.println("Cube of 3      : " + cube(3));
        System.out.println("Factorial of 5 : " + factorial(5));
    }
}`, `Square of 5    : 25
Cube of 3      : 27
Factorial of 5 : 120`),
      P("Final Keyword", "Demonstrate final variables, final methods and final classes.",
`class Base {
    final double PI = 3.14;
    final void show() {
        System.out.println("Final method: cannot be overridden");
    }
}

final class Utility {
    void info() {
        System.out.println("Final class: cannot be inherited");
    }
}

public class FinalDemo {
    public static void main(String[] args) {
        Base b = new Base();
        System.out.println("Final variable PI = " + b.PI);
        b.show();
        new Utility().info();
    }
}`, `Final variable PI = 3.14
Final method: cannot be overridden
Final class: cannot be inherited`),
      P("Blank Final Variable", "Demonstrate a blank final variable initialized through a constructor.",
`class Student {
    final int id;
    Student(int id) { this.id = id; }
}

public class BlankFinal {
    public static void main(String[] args) {
        Student s = new Student(101);
        System.out.println("Student ID (final): " + s.id);
    }
}`, `Student ID (final): 101`),
      P("College and Department — Nested Class", "Demonstrate a static nested Department class inside a College class.",
`class College {
    String name = "ABC College";
    static class Department {
        String dept = "AI&ML";
        void show() { System.out.println("Department: " + dept); }
    }
}

public class NestedCollege {
    public static void main(String[] args) {
        College.Department d = new College.Department();
        d.show();
    }
}`, `Department: AI&ML`),
      P("Employee Address — Nested Class", "Demonstrate a static nested Address class associated with an Employee.",
`class Employee {
    String name = "Ravi";
    static class Address {
        String city = "Hyderabad";
        String pin = "500001";
        void show() {
            System.out.println("City : " + city);
            System.out.println("PIN  : " + pin);
        }
    }
}

public class NestedAddress {
    public static void main(String[] args) {
        Employee e = new Employee();
        System.out.println("Employee: " + e.name);
        new Employee.Address().show();
    }
}`, `Employee: Ravi
City : Hyderabad
PIN  : 500001`),
      P("Student Address — Inner Class", "Demonstrate a non-static inner Address class inside StudentAddressInner.",
`class StudentAddressInner {
    String name = "Radhika";
    class Address {
        String city = "Hyderabad";
        void show() {
            System.out.println(name + " lives in " + city);
        }
    }
}

public class InnerDemo {
    public static void main(String[] args) {
        StudentAddressInner s = new StudentAddressInner();
        StudentAddressInner.Address a = s.new Address();
        a.show();
    }
}`, `Radhika lives in Hyderabad`),
      P("Library Management — Inner Class", "Demonstrate an inner Book class inside a LibraryBookManager class.",
`class LibraryBookManager {
    String library = "Central Library";
    class Book {
        int id; String title;
        Book(int id, String title) { this.id = id; this.title = title; }
        void show() {
            System.out.println(library + ": " + id + " - " + title);
        }
    }
}

public class LibraryDemo {
    public static void main(String[] args) {
        LibraryBookManager m = new LibraryBookManager();
        LibraryBookManager.Book b1 = m.new Book(1, "Java Basics");
        LibraryBookManager.Book b2 = m.new Book(2, "Data Structures");
        b1.show();
        b2.show();
    }
}`, `Central Library: 1 - Java Basics
Central Library: 2 - Data Structures`)
    ] },
    7: { title: "Strings & Inheritance Basics", programs: [
      P("String Constructors", "Create and initialize String objects using literals, new String(), character arrays and byte arrays.",
`public class StringConstructors {
    public static void main(String[] args) {
        String s1 = "Java";
        String s2 = new String("Java");
        char[] arr = {'J', 'a', 'v', 'a'};
        String s3 = new String(arr);
        byte[] bytes = {74, 97, 118, 97};
        String s4 = new String(bytes);
        String s5 = new String(arr, 1, 2);

        System.out.println("Literal       : " + s1);
        System.out.println("new String()  : " + s2);
        System.out.println("Char array    : " + s3);
        System.out.println("Byte array    : " + s4);
        System.out.println("Sub-array     : " + s5);
        System.out.println("s1 == s2      : " + (s1 == s2));
        System.out.println("s1.equals(s2) : " + s1.equals(s2));
    }
}`, `Literal       : Java
new String()  : Java
Char array    : Java
Byte array    : Java
Sub-array     : av
s1 == s2      : false
s1.equals(s2) : true`),

      P("StringBuffer Class", "Demonstrate mutable string operations: append, insert, replace, delete and reverse.",
`public class StringBufferDemo {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello");

        sb.append(" World");
        System.out.println("After append  : " + sb);

        sb.insert(5, ",");
        System.out.println("After insert  : " + sb);

        sb.replace(7, 12, "Java");
        System.out.println("After replace : " + sb);

        sb.delete(5, 6);
        System.out.println("After delete  : " + sb);

        sb.reverse();
        System.out.println("After reverse : " + sb);
    }
}`, `After append  : Hello World
After insert  : Hello, World
After replace : Hello, Java
After delete  : Hello Java
After reverse : avaJ olleH`),

      P("StringTokenizer Class", "Tokenize a sentence, display tokens, count them and repeat using a specified delimiter.",
`import java.util.StringTokenizer;

public class TokenizerDemo {
    public static void main(String[] args) {
        String text = "Java is a powerful language";
        StringTokenizer st = new StringTokenizer(text);
        System.out.println("Total tokens: " + st.countTokens());
        while (st.hasMoreTokens()) {
            System.out.println(st.nextToken());
        }

        String fruits = "apple,banana,mango,grape";
        StringTokenizer st2 = new StringTokenizer(fruits, ",");
        System.out.println("Tokens using delimiter ',': " + st2.countTokens());
        while (st2.hasMoreTokens()) {
            System.out.println(st2.nextToken());
        }
    }
}`, `Total tokens: 5
Java
is
a
powerful
language
Tokens using delimiter ',': 4
apple
banana
mango
grape`),

      P("Basic Inheritance", "Create a child class that inherits methods from a parent class.",
`class Animal {
    void eat() {
        System.out.println("Animal eats food");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

public class BasicInheritance {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
        d.bark();
    }
}`, `Animal eats food
Dog barks`),

      P("Using super Keyword", "Use super to access parent class variables and methods.",
`class Parent {
    String name = "Parent";
    void show() {
        System.out.println("Parent show() method");
    }
}

class Child extends Parent {
    String name = "Child";
    void display() {
        System.out.println("Child name  : " + name);
        System.out.println("Parent name : " + super.name);
        super.show();
    }
}

public class SuperDemo {
    public static void main(String[] args) {
        new Child().display();
    }
}`, `Child name  : Child
Parent name : Parent
Parent show() method`)
    ] },
    8: { title: "Inheritance & Polymorphism", programs: [
      P("Single Inheritance", "Demonstrate single inheritance using a Person superclass and Student subclass.",
`class Person {
    String name;
    int age;
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    void showPerson() {
        System.out.println("Name    : " + name);
        System.out.println("Age     : " + age);
    }
}

class Student extends Person {
    int rollNo;
    Student(String name, int age, int rollNo) {
        super(name, age);
        this.rollNo = rollNo;
    }
    void showStudent() {
        showPerson();
        System.out.println("Roll No : " + rollNo);
    }
}

public class SingleInheritance {
    public static void main(String[] args) {
        Student s = new Student("Radhika", 19, 101);
        s.showStudent();
    }
}`, `Name    : Radhika
Age     : 19
Roll No : 101`),

      P("Using super Keyword", "Use super to access superclass variables and methods.",
`class Vehicle {
    int speed = 60;
    void show() {
        System.out.println("Vehicle speed: " + speed);
    }
}

class Car extends Vehicle {
    int speed = 100;
    void display() {
        System.out.println("Car speed: " + speed);
        System.out.println("Vehicle speed (super): " + super.speed);
        super.show();
    }
}

public class SuperKeyword {
    public static void main(String[] args) {
        new Car().display();
    }
}`, `Car speed: 100
Vehicle speed (super): 60
Vehicle speed: 60`),

      P("Multilevel Inheritance", "Multilevel inheritance using Person, Employee and Manager classes.",
`class Person {
    String name = "Radhika";
}

class Employee extends Person {
    int empId = 501;
    double salary = 40000;
}

class Manager extends Employee {
    String department = "Development";
    void display() {
        System.out.println("Name       : " + name);
        System.out.println("Employee ID: " + empId);
        System.out.println("Salary     : " + salary);
        System.out.println("Department : " + department);
    }
}

public class MultilevelDemo {
    public static void main(String[] args) {
        new Manager().display();
    }
}`, `Name       : Radhika
Employee ID: 501
Salary     : 40000.0
Department : Development`),

      P("Method Overriding", "Method overriding using Animal, Dog and Cat classes.",
`class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows");
    }
}

public class OverridingDemo {
    public static void main(String[] args) {
        new Animal().sound();
        new Dog().sound();
        new Cat().sound();
    }
}`, `Animal makes a sound
Dog barks
Cat meows`),

      P("Dynamic Method Dispatch", "Dynamic method dispatch using Shape as superclass and Circle, Rectangle, Triangle as subclasses.",
`class Shape {
    void area() {
        System.out.println("Area of a shape");
    }
}

class Circle extends Shape {
    void area() {
        System.out.printf("Area of Circle    : %.2f%n", Math.PI * 5 * 5);
    }
}

class Rectangle extends Shape {
    void area() {
        System.out.println("Area of Rectangle : " + (10.0 * 5.0));
    }
}

class Triangle extends Shape {
    void area() {
        System.out.println("Area of Triangle  : " + (0.5 * 6 * 4));
    }
}

public class DispatchDemo {
    public static void main(String[] args) {
        Shape s;
        s = new Circle();
        s.area();
        s = new Rectangle();
        s.area();
        s = new Triangle();
        s.area();
    }
}`, `Area of Circle    : 78.54
Area of Rectangle : 50.0
Area of Triangle  : 12.0`),

      P("super with Method Overriding", "Use super.display() to invoke the superclass version before the subclass details.",
`class Person {
    String name = "Radhika";
    void display() {
        System.out.println("Name    : " + name);
    }
}

class Student extends Person {
    int rollNo = 101;
    @Override
    void display() {
        super.display();
        System.out.println("Roll No : " + rollNo);
    }
}

public class SuperOverride {
    public static void main(String[] args) {
        new Student().display();
    }
}`, `Name    : Radhika
Roll No : 101`),

      P("Multilevel Inheritance for Salary", "Calculate total salary using Employee, Developer and SeniorDeveloper classes.",
`class Employee {
    double basic = 30000;
}

class Developer extends Employee {
    double bonus = 5000;
}

class SeniorDeveloper extends Developer {
    double allowance = 8000;
    double totalSalary() {
        return basic + bonus + allowance;
    }
}

public class SalaryDemo {
    public static void main(String[] args) {
        SeniorDeveloper sd = new SeniorDeveloper();
        System.out.println("Basic     : " + sd.basic);
        System.out.println("Bonus     : " + sd.bonus);
        System.out.println("Allowance : " + sd.allowance);
        System.out.println("Total Salary: " + sd.totalSalary());
    }
}`, `Basic     : 30000.0
Bonus     : 5000.0
Allowance : 8000.0
Total Salary: 43000.0`),

      P("Dynamic Dispatch for Bank Accounts", "Dynamic method dispatch using BankAccount, SavingsAccount and CurrentAccount.",
`class BankAccount {
    void interest() {
        System.out.println("Interest rate not defined");
    }
}

class SavingsAccount extends BankAccount {
    void interest() {
        System.out.println("Savings Account interest: 4%");
    }
}

class CurrentAccount extends BankAccount {
    void interest() {
        System.out.println("Current Account interest: 0%");
    }
}

public class BankDispatch {
    public static void main(String[] args) {
        BankAccount acc;
        acc = new SavingsAccount();
        acc.interest();
        acc = new CurrentAccount();
        acc.interest();
    }
}`, `Savings Account interest: 4%
Current Account interest: 0%`),

      P("Constructor Execution in Multilevel Inheritance", "Show the order of constructor execution in multilevel inheritance.",
`class A {
    A() {
        System.out.println("Constructor of A");
    }
}

class B extends A {
    B() {
        System.out.println("Constructor of B");
    }
}

class C extends B {
    C() {
        System.out.println("Constructor of C");
    }
}

public class ConstructorOrder {
    public static void main(String[] args) {
        new C();
    }
}`, `Constructor of A
Constructor of B
Constructor of C`),

      P("Banking Application Using Inheritance", "Develop a simple banking application using inheritance.",
`class Account {
    String holder;
    double balance;

    Account(String holder, double balance) {
        this.holder = holder;
        this.balance = balance;
    }
    void deposit(double amt) {
        balance += amt;
        System.out.println("Deposited : " + amt);
    }
    void withdraw(double amt) {
        if (amt > balance)
            System.out.println("Insufficient balance");
        else {
            balance -= amt;
            System.out.println("Withdrawn : " + amt);
        }
    }
    void display() {
        System.out.println(holder + " - Balance: " + balance);
    }
}

class SavingsAccount extends Account {
    SavingsAccount(String holder, double balance) {
        super(holder, balance);
    }
    void addInterest(double rate) {
        double interest = balance * rate / 100;
        balance += interest;
        System.out.println("Interest added: " + interest);
    }
}

public class BankingApp {
    public static void main(String[] args) {
        SavingsAccount acc = new SavingsAccount("Radhika", 5000);
        acc.deposit(2000);
        acc.withdraw(1500);
        acc.withdraw(10000);
        acc.addInterest(5);
        acc.display();
    }
}`, `Deposited : 2000.0
Withdrawn : 1500.0
Insufficient balance
Interest added: 275.0
Radhika - Balance: 5775.0`)
    ] },
    9: { title: "Packages & Interfaces", programs: [
      P("Creating and Using a User-Defined Package", "Create a package named mypackage containing a Student class and access it from another program outside the package.",
`// Compile: javac -d . mypackage/Student.java
//          javac PackageDemo.java
// Run    : java PackageDemo

// File: mypackage/Student.java
package mypackage;

public class Student {
    public int id = 101;
    public String name = "Radhika";
    public void display() {
        System.out.println("Student ID   : " + id);
        System.out.println("Student Name : " + name);
    }
}

// File: PackageDemo.java
import mypackage.Student;

public class PackageDemo {
    public static void main(String[] args) {
        Student s = new Student();
        s.display();
    }
}`, `Student ID   : 101
Student Name : Radhika`),

      P("Importing Packages", "Import classes (Student and Faculty) from package college using a specific import and a wildcard import.",
`// Compile: javac -d . college/Student.java college/Faculty.java
//          javac SpecificImport.java WildcardImport.java
// Run    : java SpecificImport
//          java WildcardImport

// File: college/Student.java
package college;
public class Student {
    public void show() { System.out.println("Student class from college package"); }
}

// File: college/Faculty.java
package college;
public class Faculty {
    public void show() { System.out.println("Faculty class from college package"); }
}

// File: SpecificImport.java
import college.Student;

public class SpecificImport {
    public static void main(String[] args) {
        new Student().show();
    }
}

// File: WildcardImport.java
import college.*;

public class WildcardImport {
    public static void main(String[] args) {
        new Student().show();
        new Faculty().show();
    }
}`, `Student class from college package
Student class from college package
Faculty class from college package`),

      P("Packages and Member Access", "Show access to public, private, protected and default members from the same class, the same package and a different package.",
`// Compile: javac -d . pack1/Data.java pack1/SamePackage.java pack2/OtherPackage.java
// Run    : java pack1.SamePackage
//          java pack2.OtherPackage

// File: pack1/Data.java
package pack1;

public class Data {
    public int pub = 1;
    private int pri = 2;
    protected int pro = 3;
    int def = 4;

    public void showAll() {
        System.out.println("Same class        : public=" + pub + ", private=" + pri
                           + ", protected=" + pro + ", default=" + def);
    }
}

// File: pack1/SamePackage.java
package pack1;

public class SamePackage {
    public static void main(String[] args) {
        Data d = new Data();
        d.showAll();
        System.out.println("Same package      : public=" + d.pub + ", protected=" + d.pro
                           + ", default=" + d.def);
    }
}

// File: pack2/OtherPackage.java
package pack2;
import pack1.Data;

public class OtherPackage {
    public static void main(String[] args) {
        Data d = new Data();
        System.out.println("Different package : public=" + d.pub);
    }
}`, `Same class        : public=1, private=2, protected=3, default=4
Same package      : public=1, protected=3, default=4
Different package : public=1`),

      P("Demonstrating CLASSPATH", "Show how Java uses CLASSPATH to locate a user-defined package (utilities) containing a Calculator class.",
`// Step 1: javac -d C:/myclasses utilities/Calculator.java
// Step 2: set CLASSPATH=C:/myclasses;.
// Step 3: javac CalcTest.java
// Step 4: java CalcTest

// File: utilities/Calculator.java
package utilities;

public class Calculator {
    public int add(int a, int b) { return a + b; }
    public int multiply(int a, int b) { return a * b; }
}

// File: CalcTest.java
import utilities.Calculator;

public class CalcTest {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println("Sum     : " + c.add(10, 20));
        System.out.println("Product : " + c.multiply(10, 20));
    }
}`, `Sum     : 30
Product : 200`),

      P("Package Containing Multiple Classes", "Create a package bank containing Account, Customer and Transaction classes and access them from a main class outside the package.",
`// Compile: javac -d . bank/Account.java bank/Customer.java bank/Transaction.java
//          javac BankMain.java
// Run    : java BankMain

// File: bank/Account.java
package bank;
public class Account {
    public int accNo = 1001;
    public double balance = 5000;
}

// File: bank/Customer.java
package bank;
public class Customer {
    public String name = "Radhika";
}

// File: bank/Transaction.java
package bank;
public class Transaction {
    public static double deposit(Account a, double amt) {
        a.balance += amt;
        return a.balance;
    }
}

// File: BankMain.java
import bank.*;

public class BankMain {
    public static void main(String[] args) {
        Customer c = new Customer();
        Account a = new Account();
        System.out.println("Customer   : " + c.name);
        System.out.println("Account No : " + a.accNo);
        System.out.println("Balance    : " + a.balance);
        double newBal = Transaction.deposit(a, 2000);
        System.out.println("After depositing 2000.0, balance = " + newBal);
    }
}`, `Customer   : Radhika
Account No : 1001
Balance    : 5000.0
After depositing 2000.0, balance = 7000.0`),

      P("Defining and Implementing an Interface", "Create an interface Shape with a method area() and implement it using Circle and Rectangle classes.",
`interface Shape {
    void area();
}

class Circle implements Shape {
    double r = 5;
    public void area() {
        System.out.printf("Area of Circle    : %.2f%n", Math.PI * r * r);
    }
}

class Rectangle implements Shape {
    double l = 10, b = 5;
    public void area() {
        System.out.println("Area of Rectangle : " + (l * b));
    }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        new Circle().area();
        new Rectangle().area();
    }
}`, `Area of Circle    : 78.54
Area of Rectangle : 50.0`),

      P("Implementing Multiple Interfaces", "Show a class implementing multiple interfaces, Printable and Showable, using a single Demo class.",
`interface Printable {
    void print();
}

interface Showable {
    void show();
}

class Demo implements Printable, Showable {
    public void print() { System.out.println("Printing from Printable"); }
    public void show()  { System.out.println("Showing from Showable"); }
}

public class MultipleInterfaces {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.print();
        d.show();
    }
}`, `Printing from Printable
Showing from Showable`),

      P("Interface-Based Polymorphism", "Demonstrate polymorphism using an interface reference Vehicle assigned objects of Car and Bike.",
`interface Vehicle {
    void run();
}

class Car implements Vehicle {
    public void run() { System.out.println("Car is running"); }
}

class Bike implements Vehicle {
    public void run() { System.out.println("Bike is running"); }
}

public class InterfacePolymorphism {
    public static void main(String[] args) {
        Vehicle v;
        v = new Car();
        v.run();
        v = new Bike();
        v.run();
    }
}`, `Car is running
Bike is running`),

      P("Variables in Interfaces", "Demonstrate variables (MAX_MARKS and PI) declared in an interface Constants, accessed through an implementing class and directly through the interface name.",
`interface Constants {
    int MAX_MARKS = 100;
    double PI = 3.14;
}

class Test implements Constants {
    void show() {
        System.out.println("Via class     -> MAX_MARKS = " + MAX_MARKS + ", PI = " + PI);
    }
}

public class InterfaceVariables {
    public static void main(String[] args) {
        new Test().show();
        System.out.println("Via interface -> MAX_MARKS = " + Constants.MAX_MARKS + ", PI = " + Constants.PI);
    }
}`, `Via class     -> MAX_MARKS = 100, PI = 3.14
Via interface -> MAX_MARKS = 100, PI = 3.14`),

      P("Nested Interfaces", "Demonstrate a nested interface Department declared inside an outer class University, implemented and used in another class.",
`class University {
    interface Department {
        void showDepartment();
    }
}

class AIML implements University.Department {
    public void showDepartment() {
        System.out.println("Department: Artificial Intelligence & Machine Learning");
    }
}

public class NestedInterface {
    public static void main(String[] args) {
        University.Department d = new AIML();
        d.showDepartment();
    }
}`, `Department: Artificial Intelligence & Machine Learning`),

      P("Interface Inheritance", "Demonstrate inheritance between interfaces, where Dog extends Animal and both methods are implemented in class Labrador.",
`interface Animal {
    void eat();
}

interface Dog extends Animal {
    void bark();
}

class Labrador implements Dog {
    public void eat()  { System.out.println("Labrador eats"); }
    public void bark() { System.out.println("Labrador barks"); }
}

public class InterfaceInheritance {
    public static void main(String[] args) {
        Labrador l = new Labrador();
        l.eat();
        l.bark();
    }
}`, `Labrador eats
Labrador barks`),

      P("Real-World Application Using Interfaces", "A payment system where different payment methods implement a common Payment interface.",
`interface Payment {
    void pay(double amount);
}

class CreditCard implements Payment {
    public void pay(double amount) { System.out.println("Paid " + amount + " using Credit Card"); }
}

class UPI implements Payment {
    public void pay(double amount) { System.out.println("Paid " + amount + " using UPI"); }
}

class NetBanking implements Payment {
    public void pay(double amount) { System.out.println("Paid " + amount + " using Net Banking"); }
}

public class PaymentApp {
    public static void main(String[] args) {
        Payment[] methods = { new CreditCard(), new UPI(), new NetBanking() };
        for (Payment p : methods) {
            p.pay(1500);
        }
    }
}`, `Paid 1500.0 using Credit Card
Paid 1500.0 using UPI
Paid 1500.0 using Net Banking`)
    ] },

    10: { title: "Exception Handling & Byte Streams", programs: [
      P("Division by Zero — try-catch", "Use try-catch to handle division by zero.",
`public class DivideByZero {
    public static void main(String[] args) {
        int a = 10, b = 0;
        try {
            int result = a / b;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }
        System.out.println("Program continues after the catch block");
    }
}`, `Exception caught: / by zero
Program continues after the catch block`,
        { file: "DivideByZero.java", note: "Concept: ArithmeticException, try-catch.", run: "javac DivideByZero.java && java DivideByZero" }),

      P("ArithmeticException, ArrayIndexOutOfBoundsException and NullPointerException", "Demonstrate ArithmeticException, ArrayIndexOutOfBoundsException and NullPointerException.",
`public class CommonExceptions {
    public static void main(String[] args) {
        try {
            int x = 5 / 0;
        } catch (ArithmeticException e) {
            System.out.println("ArithmeticException: " + e.getMessage());
        }

        try {
            int[] arr = new int[3];
            arr[5] = 10;
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("ArrayIndexOutOfBoundsException: " + e.getMessage());
        }

        try {
            String s = null;
            System.out.println(s.length());
        } catch (NullPointerException e) {
            System.out.println("NullPointerException: the String reference is null");
        }
    }
}`, `ArithmeticException: / by zero
ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 3
NullPointerException: the String reference is null`,
        { file: "CommonExceptions.java", note: "The array message format shown is for Java 11 and above.", run: "javac CommonExceptions.java && java CommonExceptions" }),

      P("Uncaught Exception and Stack Trace", "Demonstrate an uncaught exception and show the JVM's default exception message and stack trace.",
`public class UncaughtDemo {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        System.out.println("Before exception");
        System.out.println(arr[5]);
        System.out.println("After exception");
    }
}`, `Before exception
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 3
    at UncaughtDemo.main(UncaughtDemo.java:5)`,
        { file: "UncaughtDemo.java", note: "The exception is not handled, so the JVM prints the default message and stack trace and stops the program. 'After exception' is never printed.", run: "javac UncaughtDemo.java && java UncaughtDemo" }),

      P("Multiple Catch Clauses", "Handle multiple exceptions using multiple catch clauses.",
`import java.util.Scanner;

public class MultipleCatch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        String s1 = sc.next();
        System.out.print("Enter second number: ");
        String s2 = sc.next();

        try {
            int a = Integer.parseInt(s1);
            int b = Integer.parseInt(s2);
            System.out.println("Result: " + (a / b));
        } catch (NumberFormatException e) {
            System.out.println("Invalid number entered");
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        } catch (Exception e) {
            System.out.println("Some other exception: " + e);
        }
    }
}`, `--- Run 1 ---
Enter first number: 20
Enter second number: 4
Result: 5
--- Run 2 ---
Enter first number: 10
Enter second number: 0
Cannot divide by zero
--- Run 3 ---
Enter first number: abc
Enter second number: 5
Invalid number entered`,
        { file: "MultipleCatch.java", note: "Concept: more than one catch block; the first matching one runs.", run: "javac MultipleCatch.java && java MultipleCatch" }),

      P("throw Statement", "Demonstrate the throw statement.",
`import java.util.Scanner;

public class ThrowDemo {
    static void checkAge(int age) {
        if (age < 18) {
            throw new ArithmeticException("Not eligible to vote");
        }
        System.out.println("Eligible to vote");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter age: ");
        int age = sc.nextInt();
        try {
            checkAge(age);
        } catch (ArithmeticException e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}`, `--- Run 1 ---
Enter age: 15
Exception: Not eligible to vote
--- Run 2 ---
Enter age: 20
Eligible to vote`,
        { file: "ThrowDemo.java", note: "Concept: throw is used to raise an exception manually.", run: "javac ThrowDemo.java && java ThrowDemo" }),

      P("throws Keyword and Exception Propagation", "Demonstrate the throws keyword and exception propagation.",
`public class ThrowsDemo {
    static void level1() throws Exception {
        System.out.println("level1: throwing exception");
        throw new Exception("Problem in level1");
    }

    static void level2() throws Exception {
        System.out.println("level2: calling level1()");
        level1();
        System.out.println("level2: this line is not executed");
    }

    public static void main(String[] args) {
        try {
            System.out.println("main: calling level2()");
            level2();
        } catch (Exception e) {
            System.out.println("main: exception caught: " + e.getMessage());
        }
    }
}`, `main: calling level2()
level2: calling level1()
level1: throwing exception
main: exception caught: Problem in level1`,
        { file: "ThrowsDemo.java", note: "Concept: the exception travels up from level1 to level2 to main, where it is finally caught.", run: "javac ThrowsDemo.java && java ThrowsDemo" }),

      P("finally Block", "Demonstrate the finally block.",
`import java.util.Scanner;

public class FinallyDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter divisor: ");
        int d = sc.nextInt();
        try {
            System.out.println("Result: " + (10 / d));
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        } finally {
            System.out.println("Finally block always executes");
        }
    }
}`, `--- Run 1 ---
Enter divisor: 2
Result: 5
Finally block always executes
--- Run 2 ---
Enter divisor: 0
Cannot divide by zero
Finally block always executes`,
        { file: "FinallyDemo.java", note: "Concept: finally runs whether or not an exception occurs.", run: "javac FinallyDemo.java && java FinallyDemo" }),

      P("User-Defined Exception", "Create a user-defined exception by extending Exception.",
`import java.util.Scanner;

class InvalidAgeException extends Exception {
    InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomException {
    static void validate(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above");
        }
        System.out.println("Valid age: " + age);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter age: ");
        int age = sc.nextInt();
        try {
            validate(age);
        } catch (InvalidAgeException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}`, `--- Run 1 ---
Enter age: 16
Caught: Age must be 18 or above
--- Run 2 ---
Enter age: 21
Valid age: 21`,
        { file: "CustomException.java", note: "Concept: a user-defined exception class extends Exception.", run: "javac CustomException.java && java CustomException" }),

      P("Validating Student Marks — Custom Exception", "Validate student marks and throw a custom exception when marks are outside the valid range.",
`import java.util.Scanner;

class InvalidMarksException extends Exception {
    InvalidMarksException(String message) {
        super(message);
    }
}

public class MarksValidation {
    static void checkMarks(int marks) throws InvalidMarksException {
        if (marks < 0 || marks > 100) {
            throw new InvalidMarksException("Marks must be between 0 and 100");
        }
        System.out.println("Marks accepted: " + marks);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter marks: ");
        int marks = sc.nextInt();
        try {
            checkMarks(marks);
        } catch (InvalidMarksException e) {
            System.out.println("Invalid marks: " + e.getMessage());
        }
    }
}`, `--- Run 1 ---
Enter marks: 85
Marks accepted: 85
--- Run 2 ---
Enter marks: 105
Invalid marks: Marks must be between 0 and 100`,
        { file: "MarksValidation.java", note: "Concept: custom checked exception with throw and throws.", run: "javac MarksValidation.java && java MarksValidation" }),

      P("Application Combining try, catch, throw, throws and finally", "Create one application combining try, multiple catch, throw, throws and finally.",
`import java.util.Scanner;

class InsufficientFundsException extends Exception {
    InsufficientFundsException(String message) {
        super(message);
    }
}

public class ATMApp {
    static double withdraw(double balance, double amt) throws InsufficientFundsException {
        if (amt <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        if (amt > balance) {
            throw new InsufficientFundsException("Insufficient funds. Balance is " + balance);
        }
        return balance - amt;
    }

    public static void main(String[] args) {
        double balance = 5000;
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter amount to withdraw: ");
        String input = sc.next();

        try {
            double amt = Double.parseDouble(input);
            balance = withdraw(balance, amt);
            System.out.println("Withdrawal successful. New balance: " + balance);
        } catch (NumberFormatException e) {
            System.out.println("Invalid input: please enter a number");
        } catch (IllegalArgumentException e) {
            System.out.println("Invalid amount: " + e.getMessage());
        } catch (InsufficientFundsException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Thank you for using the ATM");
        }
    }
}`, `--- Run 1 ---
Enter amount to withdraw: 2000
Withdrawal successful. New balance: 3000.0
Thank you for using the ATM
--- Run 2 ---
Enter amount to withdraw: 8000
Error: Insufficient funds. Balance is 5000.0
Thank you for using the ATM
--- Run 3 ---
Enter amount to withdraw: -5
Invalid amount: Amount must be positive
Thank you for using the ATM
--- Run 4 ---
Enter amount to withdraw: abc
Invalid input: please enter a number
Thank you for using the ATM`,
        { file: "ATMApp.java", note: "Concept: try, multiple catch, throw, throws and finally in one program. NumberFormatException is caught before IllegalArgumentException because it is its subclass.", run: "javac ATMApp.java && java ATMApp" }),

      P("InputStream and OutputStream", "Demonstrate InputStream and OutputStream.",
`import java.io.*;

public class StreamDemo {
    public static void main(String[] args) throws IOException {
        InputStream in = System.in;
        OutputStream out = System.out;

        System.out.print("Enter text: ");
        byte[] buffer = new byte[100];
        int n = in.read(buffer);

        out.write("You typed: ".getBytes());
        out.write(buffer, 0, n);
        out.flush();
    }
}`, `Enter text: Hello Streams
You typed: Hello Streams`,
        { file: "StreamDemo.java", note: "Concept: System.in is an InputStream and System.out is an OutputStream; both work with bytes.", run: "javac StreamDemo.java && java StreamDemo" }),

      P("Reading a File Using FileInputStream", "Read a file byte-by-byte using FileInputStream and display its contents.",
`import java.io.*;
import java.util.Scanner;

public class ReadBytes {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter file name: ");
        String name = sc.nextLine();

        try (FileInputStream fis = new FileInputStream(name)) {
            System.out.println("File contents:");
            int b;
            while ((b = fis.read()) != -1) {
                System.out.print((char) b);
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`, `Enter file name: input.txt
File contents:
Hello from FileInputStream`,
        { file: "ReadBytes.java", input: "input.txt in the same folder as ReadBytes.java, containing:  Hello from FileInputStream", run: "javac ReadBytes.java && java ReadBytes" }),

      P("Writing to a File Using FileOutputStream", "Write data to a file using FileOutputStream and verify its contents.",
`import java.io.*;

public class WriteBytes {
    public static void main(String[] args) {
        String data = "Java Byte Stream Demo";

        try (FileOutputStream fos = new FileOutputStream("output.txt")) {
            fos.write(data.getBytes());
            System.out.println("Data written to output.txt");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }

        try (FileInputStream fis = new FileInputStream("output.txt")) {
            System.out.println("Verifying file contents:");
            int b;
            while ((b = fis.read()) != -1) {
                System.out.print((char) b);
            }
            System.out.println();
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`, `Data written to output.txt
Verifying file contents:
Java Byte Stream Demo`,
        { file: "WriteBytes.java", note: "output.txt is created automatically in the folder where you run the program.", run: "javac WriteBytes.java && java WriteBytes" }),

      P("Copying a File Using Byte Streams", "Copy one file to another using FileInputStream and FileOutputStream.",
`import java.io.*;
import java.util.Scanner;

public class CopyBytes {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter source file name: ");
        String src = sc.nextLine();
        System.out.print("Enter destination file name: ");
        String dest = sc.nextLine();

        try (FileInputStream fis = new FileInputStream(src);
             FileOutputStream fos = new FileOutputStream(dest)) {
            int b;
            while ((b = fis.read()) != -1) {
                fos.write(b);
            }
            System.out.println("File copied successfully from " + src + " to " + dest);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`, `Enter source file name: source.txt
Enter destination file name: copy.txt
File copied successfully from source.txt to copy.txt`,
        { file: "CopyBytes.java", input: "source.txt in the same folder as CopyBytes.java, with any text", run: "javac CopyBytes.java && java CopyBytes" }),

      P("Copying an Image Using Byte Streams", "Copy an image from one file to another using byte streams and handle FileNotFoundException and IOException using try-catch-finally.",
`import java.io.*;
import java.util.Scanner;

public class CopyImage {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter source image name: ");
        String src = sc.nextLine();
        System.out.print("Enter destination image name: ");
        String dest = sc.nextLine();

        FileInputStream fis = null;
        FileOutputStream fos = null;

        try {
            fis = new FileInputStream(src);
            fos = new FileOutputStream(dest);
            int b;
            while ((b = fis.read()) != -1) {
                fos.write(b);
            }
            System.out.println("Image copied successfully.");
        } catch (FileNotFoundException e) {
            System.out.println("Error: File not found - " + e.getMessage());
        } catch (IOException e) {
            System.out.println("I/O error: " + e.getMessage());
        } finally {
            try {
                if (fis != null) fis.close();
                if (fos != null) fos.close();
                System.out.println("Streams closed.");
            } catch (IOException e) {
                System.out.println("Error while closing streams");
            }
        }
    }
}`, `--- Run 1 ---
Enter source image name: photo.jpg
Enter destination image name: copy.jpg
Image copied successfully.
Streams closed.
--- Run 2 ---
Enter source image name: missing.jpg
Enter destination image name: copy2.jpg
Error: File not found - missing.jpg (The system cannot find the file specified)
Streams closed.`,
        { file: "CopyImage.java", input: "photo.jpg (any image) in the same folder as CopyImage.java", note: "The exact 'file not found' text depends on the operating system.", run: "javac CopyImage.java && java CopyImage" })
    ] },

    11: { title: "Character Streams & Multithreading", programs: [
      P("Reader and Writer — Keyboard to Console", "Read characters from the keyboard using Reader and display them on the console using Writer.",
`import java.io.*;

public class ReaderWriterDemo {
    public static void main(String[] args) throws IOException {
        Reader reader = new InputStreamReader(System.in);
        Writer writer = new OutputStreamWriter(System.out);

        System.out.print("Enter text (end with #): ");
        StringBuilder sb = new StringBuilder();
        int ch;
        while ((ch = reader.read()) != -1 && ch != '#') {
            sb.append((char) ch);
        }

        writer.write("You entered: " + sb + System.lineSeparator());
        writer.flush();
    }
}`, `Enter text (end with #): Hello Java#
You entered: Hello Java`,
        { file: "ReaderWriterDemo.java", run: "javac ReaderWriterDemo.java && java ReaderWriterDemo" }),

      P("Reading a File Using FileReader", "Read the contents of a text file using FileReader and display them on the console.",
`import java.io.*;
import java.util.Scanner;

public class ReadFileDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter file name: ");
        String name = sc.nextLine();

        try (FileReader fr = new FileReader(name)) {
            System.out.println("File contents:");
            int ch;
            while ((ch = fr.read()) != -1) {
                System.out.print((char) ch);
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`, `Enter file name: input.txt
File contents:
Welcome to Java
Character streams are easy`,
        { file: "ReadFileDemo.java", input: "input.txt (in the same folder) containing:  Welcome to Java / Character streams are easy", run: "javac ReadFileDemo.java && java ReadFileDemo" }),

      P("Writing to a File Using FileWriter", "Write text into a file using FileWriter.",
`import java.io.*;
import java.util.Scanner;

public class WriteFileDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter file name: ");
        String name = sc.nextLine();
        System.out.print("Enter text to write: ");
        String text = sc.nextLine();

        try (FileWriter fw = new FileWriter(name)) {
            fw.write(text);
            System.out.println("Data written to " + name + " successfully.");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`, `Enter file name: output.txt
Enter text to write: Java character streams
Data written to output.txt successfully.`,
        { file: "WriteFileDemo.java", note: "output.txt is created automatically and will contain: Java character streams", run: "javac WriteFileDemo.java && java WriteFileDemo" }),

      P("Copying a File Using FileReader and FileWriter", "Copy the contents of one text file into another using FileReader and FileWriter.",
`import java.io.*;
import java.util.Scanner;

public class CopyFileDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter source file name: ");
        String src = sc.nextLine();
        System.out.print("Enter destination file name: ");
        String dest = sc.nextLine();

        try (FileReader fr = new FileReader(src);
             FileWriter fw = new FileWriter(dest)) {
            int ch;
            while ((ch = fr.read()) != -1) {
                fw.write(ch);
            }
            System.out.println("File copied successfully from " + src + " to " + dest);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`, `Enter source file name: source.txt
Enter destination file name: copy.txt
File copied successfully from source.txt to copy.txt`,
        { file: "CopyFileDemo.java", input: "source.txt (in the same folder) with any text", run: "javac CopyFileDemo.java && java CopyFileDemo" }),

      P("Counting Characters, Words and Lines", "Count the number of characters, words and lines in a text file using character streams.",
`import java.io.*;
import java.util.Scanner;

public class CountDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter file name: ");
        String name = sc.nextLine();

        int chars = 0, words = 0, lines = 0;
        boolean inWord = false;
        int last = -1;

        try (FileReader fr = new FileReader(name)) {
            int ch;
            while ((ch = fr.read()) != -1) {
                if (ch == '\\r') continue;
                if (ch == '\\n') {
                    lines++;
                    inWord = false;
                } else {
                    chars++;
                    if (ch == ' ' || ch == '\\t') {
                        inWord = false;
                    } else if (!inWord) {
                        inWord = true;
                        words++;
                    }
                }
                last = ch;
            }
            if (last != -1 && last != '\\n') lines++;

            System.out.println("Characters : " + chars);
            System.out.println("Words      : " + words);
            System.out.println("Lines      : " + lines);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`, `Enter file name: data.txt
Characters : 37
Words      : 8
Lines      : 3`,
        { file: "CountDemo.java", input: "data.txt containing 3 lines:  Hello World / Java is fun / Streams in Java", note: "Characters are counted excluding line-break characters.", run: "javac CountDemo.java && java CountDemo" }),

      P("Main Thread", "Demonstrate the Main Thread and display its name, priority and state.",
`public class MainThreadDemo {
    public static void main(String[] args) {
        Thread t = Thread.currentThread();

        System.out.println("Thread Name : " + t.getName());
        System.out.println("Priority    : " + t.getPriority());
        System.out.println("State       : " + t.getState());

        t.setName("MyMainThread");
        t.setPriority(8);
        System.out.println("After changing name and priority:");
        System.out.println("Thread Name : " + t.getName());
        System.out.println("Priority    : " + t.getPriority());
    }
}`, `Thread Name : main
Priority    : 5
State       : RUNNABLE
After changing name and priority:
Thread Name : MyMainThread
Priority    : 8`,
        { file: "MainThreadDemo.java", run: "javac MainThreadDemo.java && java MainThreadDemo" }),

      P("Creating a Thread by Extending Thread", "Create a thread by extending the Thread class.",
`class MyThread extends Thread {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(getName() + ": count = " + i);
        }
    }
}

public class ExtendThreadDemo {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        System.out.println("Main: starting the thread");
        t.start();
        System.out.println("Main: thread started");
    }
}`, `Main: starting the thread
Main: thread started
Thread-0: count = 1
Thread-0: count = 2
Thread-0: count = 3`,
        { file: "ExtendThreadDemo.java", note: "Thread execution order may vary: the line 'Main: thread started' can appear before, between or after the Thread-0 lines.", run: "javac ExtendThreadDemo.java && java ExtendThreadDemo" }),

      P("Creating a Thread by Implementing Runnable", "Create a thread by implementing the Runnable interface.",
`class MyTask implements Runnable {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(Thread.currentThread().getName() + ": count = " + i);
        }
    }
}

public class RunnableDemo {
    public static void main(String[] args) {
        MyTask task = new MyTask();
        Thread t = new Thread(task, "Worker");
        System.out.println("Main: starting the Runnable thread");
        t.start();
        System.out.println("Main: thread started");
    }
}`, `Main: starting the Runnable thread
Main: thread started
Worker: count = 1
Worker: count = 2
Worker: count = 3`,
        { file: "RunnableDemo.java", note: "Thread execution order may vary: the 'Main' line can appear between the Worker lines.", run: "javac RunnableDemo.java && java RunnableDemo" }),

      P("Multiple Threads — Concurrent Execution", "Create multiple threads and demonstrate their concurrent execution.",
`class Counter extends Thread {
    Counter(String name) {
        super(name);
    }
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(getName() + ": " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }
}

public class MultiThreadDemo {
    public static void main(String[] args) {
        Counter a = new Counter("Thread-A");
        Counter b = new Counter("Thread-B");
        Counter c = new Counter("Thread-C");
        a.start();
        b.start();
        c.start();
    }
}`, `Thread-A: 1
Thread-B: 1
Thread-C: 1
Thread-A: 2
Thread-C: 2
Thread-B: 2
Thread-B: 3
Thread-A: 3
Thread-C: 3`,
        { file: "MultiThreadDemo.java", note: "The three threads run at the same time, so the order of the lines within each round may be different every time you run the program.", run: "javac MultiThreadDemo.java && java MultiThreadDemo" }),

      P("isAlive() Method", "Demonstrate the use of the isAlive() method to check whether a thread is running.",
`class Task extends Thread {
    public void run() {
        System.out.println("Child thread is running...");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            System.out.println(e);
        }
        System.out.println("Child thread finished.");
    }
}

public class IsAliveDemo {
    public static void main(String[] args) throws InterruptedException {
        Task t = new Task();
        System.out.println("Before start, isAlive(): " + t.isAlive());

        t.start();
        System.out.println("After start, isAlive(): " + t.isAlive());

        t.join();
        System.out.println("After join, isAlive(): " + t.isAlive());
    }
}`, `Before start, isAlive(): false
After start, isAlive(): true
Child thread is running...
Child thread finished.
After join, isAlive(): false`,
        { file: "IsAliveDemo.java", note: "The line 'Child thread is running...' may appear before 'After start, isAlive(): true'.", run: "javac IsAliveDemo.java && java IsAliveDemo" }),

      P("join() Method", "Demonstrate the use of the join() method to make one thread wait for another thread to complete.",
`class Worker extends Thread {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println(e);
            }
            System.out.println("Worker: step " + i + " completed");
        }
    }
}

public class JoinDemo {
    public static void main(String[] args) throws InterruptedException {
        Worker w = new Worker();
        w.start();
        System.out.println("Main: waiting for Worker to finish...");

        w.join();

        System.out.println("Main: Worker has finished, main continues.");
    }
}`, `Main: waiting for Worker to finish...
Worker: step 1 completed
Worker: step 2 completed
Worker: step 3 completed
Main: Worker has finished, main continues.`,
        { file: "JoinDemo.java", note: "Because of join(), the last line is always printed only after the Worker thread has finished.", run: "javac JoinDemo.java && java JoinDemo" }),

      P("isAlive() and join() with Multiple Threads", "Create multiple threads and use isAlive() and join() to control their execution order.",
`class Task extends Thread {
    Task(String name) {
        super(name);
    }
    public void run() {
        System.out.println(getName() + " started");
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            System.out.println(e);
        }
        System.out.println(getName() + " finished");
    }
}

public class OrderDemo {
    public static void main(String[] args) throws InterruptedException {
        Task t1 = new Task("T1");
        Task t2 = new Task("T2");
        Task t3 = new Task("T3");

        t1.start();
        System.out.println("T1 alive after start: " + t1.isAlive());
        t1.join();
        System.out.println("T1 alive after join : " + t1.isAlive());

        t2.start();
        System.out.println("T2 alive after start: " + t2.isAlive());
        t2.join();
        System.out.println("T2 alive after join : " + t2.isAlive());

        t3.start();
        System.out.println("T3 alive after start: " + t3.isAlive());
        t3.join();
        System.out.println("T3 alive after join : " + t3.isAlive());

        System.out.println("All threads completed in the order T1, T2, T3");
    }
}`, `T1 alive after start: true
T1 started
T1 finished
T1 alive after join : false
T2 alive after start: true
T2 started
T2 finished
T2 alive after join : false
T3 alive after start: true
T3 started
T3 finished
T3 alive after join : false
All threads completed in the order T1, T2, T3`,
        { file: "OrderDemo.java", note: "Each 'alive after start' line and the matching 'started' line may swap places, but join() always forces T1, then T2, then T3 to finish in order.", run: "javac OrderDemo.java && java OrderDemo" })
    ] }
  }
};
const app = document.getElementById('app');
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const W = RECORD.weeks, PR = RECORD.profile;
document.getElementById('foot').textContent = PR.name + ' · ' + PR.roll + ' · ' + PR.subject;

function home() {
  const totalW = Object.keys(W).length;
  const totalP = Object.values(W).reduce((t, w) => t + (w.programs && !w.noCount ? w.programs.length : 0), 0);
  const ini = PR.name.replace(/[^A-Za-z ]/g, '').split(' ').map(x => x[0]).join('');
  app.innerHTML = `
  <section class="hero">
    <img class="avatar" src="assets/profile.png" alt="Profile" onerror="this.outerHTML='<div class=avatar>${ini}</div>'">
    <div>
      <p class="sub">Your journey through Java, week by week</p>
      <h1>${PR.name}</h1>
      <div class="tags">
        <span class="tag">Roll No: ${PR.roll}</span><span class="tag">${PR.year}</span>
        <span class="tag">${PR.branch}</span><span class="tag">Section ${PR.section}</span>
        <span class="tag">${PR.subject}</span>
      </div>
    </div>
  </section>
  <div class="stats">
    <div class="stat"><b>${totalW}</b><span>Total Weeks</span></div>
    <div class="stat"><b>${totalP}</b><span>Total Programs</span></div>
  </div>
  <h2>📚 Pick a week to explore</h2>
  <div class="grid">${Object.keys(W).map(n => `
    <a class="card" href="#/week/${n}"><b>Week ${n}</b><small>${W[n].title}</small></a>`).join('')}</div>`;
}

function week(n) {
  const w = W[n]; if (!w) return home();
  let body = w.note ? `<div class="note">${w.note}</div>` :
    `<div class="list">${w.programs.map((p, i) => `
    <a class="card" href="#/week/${n}/prog/${i + 1}"><span class="num">${i + 1}</span><div><b>${p.t}</b></div></a>`).join('')}</div>`;
  app.innerHTML = `<p class="crumb"><a href="#/">Home</a> › Week ${n}</p><h2 style="margin-top:6px">Week ${n}: ${w.title}</h2>${body}`;
}

function meta(p) {
  if (!p.file) return '';
  return `<div class="meta"><div><b>Save as:</b> <code>${p.file}</code></div>${p.input ? `<div><b>Input file:</b> ${p.input}</div>` : ''}${p.run ? `<div><b>Run:</b> <code>${esc(p.run)}</code></div>` : ''}</div>`;
}

function prog(n, i) {
  const w = W[n], p = w && w.programs && w.programs[i - 1]; if (!p) return week(n);
  let h = `<p class="crumb"><a href="#/">Home</a> › <a href="#/week/${n}">Week ${n}</a> › Program ${i}</p>
  <h2 style="margin-top:6px">Program ${i}: ${p.t}</h2><div class="q">${p.q}</div>${meta(p)}`;
  if (p.table) h += `<div class="tw"><table><tr>${p.table[0].map(c => `<th>${c}</th>`).join('')}</tr>${
    p.table.slice(1).map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
  if (p.steps) h += `<ol class="steps">${p.steps.map(s => `<li>${s}</li>`).join('')}</ol>`;
  if (p.code) h += `<div class="lbl">Code <button class="copy" id="cp">Copy</button></div><pre class="code">${esc(p.code)}</pre>
    <div class="lbl">Output</div><pre class="out">${esc(p.out)}</pre>${p.note ? `<p class="hint">${p.note}</p>` : ''}`;
  const pv = i > 1 ? `<a href="#/week/${n}/prog/${i - 1}">← Previous</a>` : '<span></span>';
  const nx = i < w.programs.length ? `<a href="#/week/${n}/prog/${i + 1}">Next →</a>` : `<a href="#/week/${n}">Back to Week ${n}</a>`;
  app.innerHTML = h + `<div class="pn">${pv}${nx}</div>`;
  const b = document.getElementById('cp');
  if (b) b.onclick = () => navigator.clipboard.writeText(p.code).then(() => { b.textContent = 'Copied!'; setTimeout(() => b.textContent = 'Copy', 1200); });
}

function buildNav() {
  document.getElementById('weeks').innerHTML = '<a href="#/">Home</a>' + Object.keys(W).map(n => `<a href="#/week/${n}" data-w="${n}">Week ${n}</a>`).join('');
}
function markNav(w) {
  document.querySelectorAll('#weeks a').forEach(a => a.classList.toggle('on', a.dataset.w === w || (!w && !a.dataset.w)));
}

function route() {
  const p = location.hash.split('/');
  if (p[1] === 'week' && p[3] === 'prog') prog(p[2], +p[4]);
  else if (p[1] === 'week') week(p[2]);
  else home();
  markNav(p[1] === 'week' ? p[2] : null);
  window.scrollTo(0, 0);
}
buildNav();
window.addEventListener('hashchange', route);
route();
