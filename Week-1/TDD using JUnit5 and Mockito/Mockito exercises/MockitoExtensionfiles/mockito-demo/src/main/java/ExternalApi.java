public interface ExternalApi {
    /**
     * Simulates fetching data from an external API.
     * In production, this might make an HTTP call.
     */
    String getData();
}
