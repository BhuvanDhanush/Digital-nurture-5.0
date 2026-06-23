public class FinancialForeCastingMain {

    static double forecastValue(double currentValue, double growthRate, int years) {
        if (years == 0) return currentValue;
        return forecastValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    static double forecastValueMemo(double currentValue, double growthRate, int years, double[] memo) {
        if (years == 0) return currentValue;
        if (memo[years] != 0) return memo[years];
        memo[years] = forecastValueMemo(currentValue * (1 + growthRate), growthRate, years - 1, memo);
        return memo[years];
    }

    public static void main(String[] args) {
        System.out.println("==========================================");
        System.out.println("   Welcome to the Financial Forecaster!  ");
        System.out.println("==========================================\n");

        double initialInvestment = 10000.0;
        double annualGrowthRate  = 0.08;
        int    forecastYears     = 5;

        System.out.println("Starting Investment : $" + initialInvestment);
        System.out.println("Annual Growth Rate  : " + (annualGrowthRate * 100) + "%");
        System.out.println("Forecasting For     : " + forecastYears + " years\n");

        System.out.println("--- Year by Year Forecast (Recursive) ---");
        for (int year = 1; year <= forecastYears; year++) {
            double value = forecastValue(initialInvestment, annualGrowthRate, year);
            System.out.printf("Year %d  ->  $%.2f%n", year, value);
        }

        System.out.println("\n--- Optimized Forecast (Memoization) ---");
        double[] memo = new double[forecastYears + 1];
        double finalValue = forecastValueMemo(initialInvestment, annualGrowthRate, forecastYears, memo);
        System.out.printf("Final Value after %d years  ->  $%.2f%n", forecastYears, finalValue);

        System.out.println("\n==========================================");
        System.out.println("         Time Complexity Analysis         ");
        System.out.println("==========================================");
        System.out.println("Plain Recursion  ->  O(n) : one call per year, no repeated work here");
        System.out.println("Memoization      ->  O(n) : same speed but stores results to avoid");
        System.out.println("                            recomputation in overlapping subproblems");
        System.out.println("\nFor complex forecasting with branching scenarios,");
        System.out.println("memoization saves serious time by never calculating the same");
        System.out.println("year twice. Always the smarter choice at scale!");
        System.out.println("\nGood luck with your investments!");
    }
}
