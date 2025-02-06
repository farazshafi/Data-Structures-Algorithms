function fibonacci(n) {
    // Base cases
    if (n === 1) return 0;
    if (n === 2) return 1;
    
    // Recursive call
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage
console.log(fibonacci(6));
