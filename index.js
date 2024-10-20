// 1. Declare a variable in global scope called customerName
var customerName = 'bob';

// 2. Write a function that uppercases customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. Write a function that sets bestCustomer in global scope
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declare without var to make it global
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // This will change the bestCustomer variable
}

// 5. Declare a constant called leastFavoriteCustomer
const leastFavoriteCustomer = 'alice';

// 6. Function that attempts to change the constant
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'charlie'; // This will throw an error
}

