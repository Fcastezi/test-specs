/****block 18 writing test spects*****/

/**unit tests**/

/*-- multiplication-*/
//expect multiplication(4,8) to be a number 
//expect multiplication(6,9) to be equal 54
//expect multiplication('b',2) to be an error
//expect multiplication() to be empty
//expect multiplication('5','7') to be an error
//expect multiplication([1,2,3,4], {color:red, size: 9})

/*--concatOdds--*/
//expect concatOdds([3, 2, 1], [9, 1,1,1, 4, 15, -1]) takes two arrays of integers as arguments. 
//expect concatOdds([-1, 1, 3, 9, 15]) to return a new array 
//expect concatOdds('b',2) to be an error
//expect concatOdds() to be empty
//expect concatOdds('5','7') to be an error


/**functional test**/

/*-- shopping cart checkout feature --*/

//the shopping app feature should allow user to check out as a ghest (without account), or as a logged user
//should ask the user if they want to create an account
//or log in to pay as a ghest
//if the cart is empty it should stay the same state until the user adds an item
//it should subjest the user to buy add items and buy them
//it should guide the user each step until the item is paid 
//it should give the user a copy of purchase and comfirmation
//the feature is missing the option to return the item
