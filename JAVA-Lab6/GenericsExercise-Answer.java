class GenericsExercise {
    public static void main(String[] args) {
        System.out.printf("Max of %d, %d and %d is %d\n\n", 3, 4, 5,
            MaximumTest.maximum(3, 4, 5));
        System.out.printf("Max of %.1f,%.1f and %.1f is %.1f\n\n", 6.6, 8.8, 7.7,
            MaximumTest.maximum(6.6, 8.8, 7.7));

        System.out.println("A".compareTo("B"));
    }
}

class MaximumTest{

    public static <T extends Number & Comparable<T>> T maximum(T x, T y, T z){
        T max = x; // assume x is initially the largest

        if (y.compareTo(max) > 0) {
            max = y; // y is the largest so far
        }

        if (z.compareTo(max) > 0) {
            max = z; // z is the largest now
        }

        // if (y.doubleValue() > max.doubleValue()) {
        //     max = y; // y is the largest so far
        // }

        // if (z.doubleValue() > max.doubleValue()) {
        //     max = z; // z is the largest now
        // }

        return max;
    }


    // determines the largest of three Comparable objects
    // public static int maximum (int x, int y, int z) {
    //     int max = x; // assume x is initially the largest

    //     if (y > max) {
    //         max = y; // y is the largest so far
    //     }

    //     if (z > max) {
    //         max = z; // z is the largest now
    //     }
    //     return max; // returns the largest object
    // }

    // public static double maximum(double x, double y, double z) {
    //     double max = x; // assume x is initially the largest

    //     if (y > max) {
    //         max = y; // y is the largest so far
    //     }

    //     if (z > max) {
    //         max = z; // z is the largest now
    //     }
    //     return max; // returns the largest object
    // }
    
}