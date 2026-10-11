# Issue Log - Grocery Receipt Lab

## Bug 1

Location: receipt.ts, line 11

Issue: Extra comma in the ITEMS array

Explanation: There's an extra comma after eggs that creates an empty spot in the grocery list.

Suggested Fix: Remove the extra comma.

Status: Fixed

## Bug 2

Location: receipt.ts, addItem(), line 16

Issue: Incorrect object syntax

Explanation: The object uses = instead of : when assigning the name and price. This causes a syntax error.

Suggested Fix: Replace the = signs with colons.

Status: Fixed

## Bug 3

Location: receipt.ts, deleteItem(), line 21

Issue: Incorrect item search

Explanation: indexOf("name") searches for the actual word "name" instead of the item we're trying to delete. The idx variable is also never used.

Suggested Fix: Use findIndex() to search for the item by its name and use the result when deleting it.

Status: Fixed

## Bug 4

Location: receipt.ts, deleteItem(), line 22

Issue: Removes the wrong item

Explanation: pop() always removes the last item in the list, even if that's not the item we wanted to delete.

Suggested Fix: Use splice() with the correct index to remove the item.

Status: Fixed

## Bug 5

Location: receipt.ts, total(), line 27

Issue: Incorrect loop

Explanation: The loop tries to go through the number 3 instead of the grocery list. A number isn't something we can loop through with for...of.

Suggested Fix: Loop through the ITEMS array instead.

Status: Fixed

## Bug 6

Location: receipt.ts, total(), lines 28-30

Issue: Subtotal isn't calculated correctly

Explanation: The function uses total as if it were a number, but total is actually the function itself. There's no variable storing the subtotal.

Suggested Fix: Create a subtotal variable starting at 0, add each item's price, and return the subtotal.

Status: Fixed

## Bug 7

Location: receipt.ts, tax(), line 34

Issue: Incorrect tax calculation

Explanation: The function adds the tax rate directly to the subtotal instead of calculating the tax as a percentage. For example, 10% tax on $100 should give $110, not $100.10.

Suggested Fix: Multiply the subtotal by the tax rate and add that amount to the subtotal.

Status: Fixed

## Bug 8

Location: receipt.ts, printReceipt(), lines 41-42

Issue: Items aren't printed correctly

Explanation: The loop already gives us each item, but the code tries to use it as an array index. The string also uses single quotes instead of backticks, so the item names and prices won't display correctly.

Suggested Fix: Use the item's name and price directly and use backticks with ${} to display them.

Status: Fixed

## Bug 9

Location: receipt.ts, printReceipt(), line 46

Issue: Incorrect subtotal output

Explanation: String(total) refers to the function itself instead of calling it to get the subtotal.

Suggested Fix: Use total() to calculate and display the subtotal.

Status: Fixed

## Bug 10

Location: receipt.ts, printReceipt(), line 47

Issue: Mismatched quotation marks

Explanation: The console.log statement starts with a backtick but ends with a double quote. This causes a syntax error.

Suggested Fix: Use matching backticks.

Status: Fixed

## Bug 11

Location: receipt.ts, printReceipt(), lines 47-48

Issue: Incorrect tax and total output

Explanation: The receipt prints the tax rate instead of the actual tax amount. It also converts taxRate into a string even though tax() expects a number.

Suggested Fix: Calculate the tax amount for the receipt and pass taxRate as a number.

Status: Fixed

## Bug 12

Location: receipt.ts, printReceipt(), line 48

Issue: Incorrect total formatting

Explanation: The total has an extra + in the output, and the receipt won't display the final amount correctly.

Suggested Fix: Remove the extra + and use a template literal to display the total.

Status: Fixed

## Root Cause, Error, Defect, and Failure

**Root Cause:**
One possible root cause is confusion about how functions and variables work, especially in the total() function.

**Error:**
The programmer used = instead of : when creating an object in addItem().

**Defect:**
The deleteItem() function uses pop(), which removes the last item instead of the item we're trying to delete.

**Failure:**
When I ran the Jest tests, the test suite failed because TypeScript detected that total() wasn't returning a number. None of the seven tests were able to run.

## ESLint Results

Not completed yet. Any additional issues found by ESLint will be added here.

## ESLint Results

### ESLint Finding 1

Location: receipt.ts, addItem(), line 17

Issue: Parsing error - ':' expected

Explanation: ESLint found that the object uses = instead of : when setting its properties. This prevents ESLint from parsing the file and checking for other issues.

Suggested Fix: Replace the = signs with colons when creating the object.

Status: Fixed

This issue was already identified in Bug 2 during the manual code review. ESLint reported 1 error and 0 warnings. No additional issues were found because ESLint stopped at the error.
