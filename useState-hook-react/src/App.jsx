//React hook = special function that allows functional components to use React feature without writing class components
//(useState, useEffect, useContext, useReducer, useCallback, and more)

// useState() = a React hook that allows the creation of a stateful variable AND a setter function to update its value in the virtual DOM.[name, setName]
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";

function App() {
  
  return (
    <>
      <MyComponent />
      <Counter />
    </>
  )
}

export default App
