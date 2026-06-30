public class MyService {

    private final ExternalApi externalApi;

    // Dependency injected via constructor (makes it easy to mock)
    public MyService(ExternalApi externalApi) {
        this.externalApi = externalApi;
    }

    /**
     * Fetches data using the external API.
     * This is the method we want to test in isolation.
     */
    public String fetchData() {
        return externalApi.getData();
    }
}
