# React State: Light Switch Part 2

Let's return to the idea of a light switch component from yesterday, this time to practice using **state** in your components...

## Instructions:
 
1. Create two new components in this project: a `Status` component and a `LightSwitch` component. Then create one instance of each new component in your `App` component (i.e. `<LightSwitch />` and `<Status />`). 
>- The `LightSwitch` component should render a button, containing the text "Press Switch". 
>- The `Status` component should render a div, containing the text "The room is lit".

2. Create a `useState` hook in the `App` component. This should keep track of a variable called `lightOn`, which should be initialized to `true` when creating your hook. 

3. Clicking the button should update `lightOn` to its opposite value, and also update the text in the `Status` div: 
>- If `lightOn` is `true`, the text should read: "The room is lit"
>- If `lightOn` is `false`, the text should read: "The room is dark"

**Hint:** Don't forget to use **props** to pass: 

>- the function to be run in `App` when the button is clicked (to be passed to the `LightSwitch` component) 
>- the current value of `lightOn` (to be passed to the `Status` component, so it can use it to render the correct text)

---

### Bonus - you only need to do this if you finish early!

5. Add another `useState` hook to your `App` component. This should keep track of a state variable called `count`, which should be initialized to a starting value of `0`. 

6. Create another component called `Counter` and add a `<Counter />` to `<App />` as a child component. This should render a div, which on page load contains the text content: "You clicked the light switch 0 times". The number (initially "0") should be controlled by the state variable `count` (you should pass this to the `<Counter />` component using a **prop**).  

7. Create a new component called `<ResetButton />` and add it to your page. This should render with the text content "Reset count".

8. Change your app so that, when you click the "Flick switch" button, the text content of the `<Counter />` component is also updated to keep track of how many times you clicked the button (e.g., after seven clicks, "You clicked the light switch 7 times"). 

9. Finally, add functionality to the "Reset" button so that, when you click it, the `counter` state variable is set to `0`. If you are updating your state variable correctly, this will automatically re-render the page, so the `<Counter />` component says "You clicked the light switch 0 times."