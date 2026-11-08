# Typed API Client

Build a reusable API client with:
- Generic `get<T>()`, `post<TBody, TResult>()` methods
- Base URL configuration
- Typed errors
- Request timeout using `AbortController`
- Runtime validation for untrusted JSON

Important: `response.json() as T` does not validate the response at runtime.
