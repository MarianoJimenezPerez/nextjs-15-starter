# SERVICES

### HOW IT WORKS?

The services are organized into separate folders, each representing a specific API. Each service follows these guidelines:

1.  **Structure:**

    - Every service resides in its own subfolder.
    - The folder contains:
      - `name.api.ts`: The main service class that handles API interactions.
      - `types.ts`: Defines the parameter and response types for the service methods.

2.  **Service Definition:**

    - Each service is implemented as a TypeScript class.
    - The class receives an `HttpClient` instance (e.g., Axios) in its constructor.
    - The methods inside the class represent the API endpoints, returning consistent responses using `ApiResponse<T>` for both success and error cases.

3.  **Instantiating a Service:**

    - Services are instantiated in the `index.ts` file and exported for usage across the application.

    Example:

    ```typescript
    import { configureHttpClient } from '@/lib/httpClient/axios/configureHttpClient';
    import AuthService from './auth/auth.api';

    const apiBaseURL = process.env.API_BASE_URL || '';

    export const apiHttpClient = configureHttpClient(apiBaseURL);

    export const authService = new AuthService(apiHttpClient);
    ```

4.  **Consistent Error Handling:**

    - The HttpClient layer ensures that all API responses follow a standardized structure (ApiResponse<T>), making it easier to handle errors in a predictable manner.

5.  **Example Service:** Here's a simplified example of how a service class is structured:

    Example:

    ```typescript
    import { HttpClient, ApiResponse } from '@/lib/httpClient/types';

    import { LoginParams, LoginResponse } from './types';

    class AuthService {
      private httpClient: HttpClient;

      constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
      }

      public async login(
        params: LoginParams,
      ): Promise<ApiResponse<LoginResponse>> {
        return this.httpClient.post<LoginResponse>('/auth/login/', params);
      }
    }

    export default AuthService;
    ```

By following this approach, the project maintains consistency, scalability, and reusability in its service implementations.
