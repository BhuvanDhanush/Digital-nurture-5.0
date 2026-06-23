public class SingleTonPatternMain {

    static class Logger {
        private static Logger instance;

        private Logger() {
            System.out.println("[System] Logger initialized. This will only happen ONCE!");
        }

        public static synchronized Logger getInstance() {
            if (instance == null) {
                instance = new Logger();
            }
            return instance;
        }

        public void log(String message) {
            System.out.println("[" + java.time.LocalDateTime.now() + "] LOG: " + message);
        }
    }

    public static void main(String[] args) {
        System.out.println("=== Starting Singleton Test ===\n");

        Logger logger1 = Logger.getInstance();
        logger1.log("User logged in successfully.");

        Logger logger2 = Logger.getInstance();
        logger2.log("User updated their profile.");

        System.out.println("\n=== Verification Proof ===");

        boolean isSame = (logger1 == logger2);
        System.out.println("Do logger1 and logger2 share the exact same instance? " + isSame);

        System.out.println("Logger 1 Memory ID: " + System.identityHashCode(logger1));
        System.out.println("Logger 2 Memory ID: " + System.identityHashCode(logger2));
    }
}
