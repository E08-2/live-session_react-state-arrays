# React State 2 - Updating arrays

When the user clicks the button, we want to add a new number to the state variable "numbers", which is an array.

As we have discussed, we cannot update the "numbers" array state variable by **pushing** a new value, as this would **mutate** the array!

Instead, there are two common ways around this problem, using common JavaScript features to update the state variable with a **new** array, instead of updating the old one.

You should research common ways of updating arrays in React state. When you find a solution, try to implement it!

**Your goal:**

1. The user clicks the button.
2. The state variable gets a new number added to it (this should be + 1 of the last highest number).
3. The app re-renders, and shows an unordered list with the **new** number of list-items (each with text content of one of the values inside the array).