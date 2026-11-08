# TypeScript Interview Questions

## Fundamentals
1. What is TypeScript, and how is it different from JavaScript?
2. What is type inference?
3. Difference between `any` and `unknown`?
4. Difference between `void` and `never`?
5. What are union and intersection types?

## Functions and objects
6. What are optional and readonly properties?
7. What is function overloading?
8. Interface vs type alias?
9. What is declaration merging?
10. What is a type guard?

## Advanced
11. What are generics and generic constraints?
12. Explain `keyof` and `typeof`.
13. What are mapped and conditional types?
14. Explain `infer`.
15. What does `Partial<T>` do?
16. What is a discriminated union?
17. What is exhaustive checking?
18. What is module augmentation?

## React and backend
19. How do you type React props and state?
20. How do you type DOM events?
21. How do you type Express request bodies?
22. Why is runtime validation needed for API data?
23. How do you model a generic API response?
24. How would you structure a TypeScript backend?

## Short answer guide
- TypeScript checks types during development/compilation; it does not add runtime validation automatically.
- `unknown` requires narrowing; `any` opts out of checking.
- `never` represents values that should not occur or functions that do not complete normally.
- Use generics to preserve relationships between input and output types.
- Use Zod or another validator to check untrusted runtime data.
