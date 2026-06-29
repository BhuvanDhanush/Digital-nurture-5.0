import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.Mockito;

@ExtendWith(MockitoExtension.class)
public class MyServiceTest {

    // ─────────────────────────────────────────────────────────
    // Approach 1: Manual mock creation (as in the exercise)
    // ─────────────────────────────────────────────────────────

    @Test
    @DisplayName("Manual mock: stub getData() and verify fetchData()")
    public void testExternalApi() {
        // Step 1: Create a mock object for the external API
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Stub the method to return a predefined value
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Inject mock into the service and call the method
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Step 4: Assert the result matches the stubbed value
        assertEquals("Mock Data", result);

        // Step 5 (bonus): Verify the mock method was actually called
        verify(mockApi, times(1)).getData();
    }

    // ─────────────────────────────────────────────────────────
    // Approach 2: Annotation-based mock (cleaner, idiomatic)
    // ─────────────────────────────────────────────────────────

    @Mock
    ExternalApi mockApiAnnotation;

    @InjectMocks
    MyService serviceAnnotation;

    @Test
    @DisplayName("Annotation mock: @Mock + @InjectMocks")
    public void testExternalApiWithAnnotations() {
        when(mockApiAnnotation.getData()).thenReturn("Annotated Mock Data");

        String result = serviceAnnotation.fetchData();

        assertEquals("Annotated Mock Data", result);
        verify(mockApiAnnotation).getData();
    }

    // ─────────────────────────────────────────────────────────
    // Approach 3: Stubbing with different return values
    // ─────────────────────────────────────────────────────────

    @Test
    @DisplayName("Stub returns different values on successive calls")
    public void testMultipleReturnValues() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        when(mockApi.getData())
            .thenReturn("First")
            .thenReturn("Second")
            .thenReturn("Default");

        MyService service = new MyService(mockApi);

        assertEquals("First",   service.fetchData());
        assertEquals("Second",  service.fetchData());
        assertEquals("Default", service.fetchData());

        verify(mockApi, times(3)).getData();
    }

    // ─────────────────────────────────────────────────────────
    // Approach 4: Stub to throw an exception
    // ─────────────────────────────────────────────────────────

    @Test
    @DisplayName("Stub throws exception to simulate API failure")
    public void testExternalApiThrowsException() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        when(mockApi.getData()).thenThrow(new RuntimeException("API unavailable"));

        MyService service = new MyService(mockApi);

        org.junit.jupiter.api.Assertions.assertThrows(
            RuntimeException.class,
            () -> service.fetchData()
        );

        verify(mockApi).getData();
    }
}
