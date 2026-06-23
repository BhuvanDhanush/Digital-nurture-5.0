public class ECommerceMain {

    static class Product {
        int productId;
        String productName;
        String category;

        Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        public String toString() {
            return "ID: " + productId + " | Name: " + productName + " | Category: " + category;
        }
    }

    static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.productId == targetId) return p;
        }
        return null;
    }

    static Product binarySearch(Product[] products, int targetId) {
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            if (products[mid].productId == targetId)      return products[mid];
            else if (products[mid].productId < targetId)  left = mid + 1;
            else                                          right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        System.out.println("Welcome to the E-Commerce Search System!");
        System.out.println("==========================================\n");

        Product[] products = {
                new Product(101, "Wireless Headphones", "Electronics"),
                new Product(203, "Running Shoes",       "Footwear"),
                new Product(305, "Coffee Maker",        "Appliances"),
                new Product(412, "Yoga Mat",            "Fitness"),
                new Product(519, "Sunglasses",          "Accessories"),
                new Product(624, "Laptop Stand",        "Electronics"),
                new Product(731, "Water Bottle",        "Fitness"),
                new Product(845, "Desk Lamp",           "Home Decor")
        };

        int searchId = 412;

        System.out.println("Searching for Product ID: " + searchId + "\n");

        System.out.println("--- Linear Search ---");
        Product linearResult = linearSearch(products, searchId);
        if (linearResult != null)
            System.out.println("Found it! " + linearResult);
        else
            System.out.println("Oops! Product not found.");

        System.out.println("\n--- Binary Search ---");
        Product binaryResult = binarySearch(products, searchId);
        if (binaryResult != null)
            System.out.println("Found it! " + binaryResult);
        else
            System.out.println("Oops! Product not found.");

        System.out.println("\n==========================================");
        System.out.println("         Time Complexity Analysis         ");
        System.out.println("==========================================");
        System.out.println("Linear Search  ->  O(n)   : checks every product one by one");
        System.out.println("Binary Search  ->  O(log n): keeps halving the search space");
        System.out.println("\nFor large product catalogs, Binary Search is the clear winner!");
        System.out.println("It's lightning fast — finding 1 item in 1 million takes only ~20 steps.");
        System.out.println("\nHappy Shopping!");
    }
}
