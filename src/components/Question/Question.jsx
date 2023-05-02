import "./Question.css";

const Question = () => {
  return (
    <div className="Question">
      <div className="question-answer">
        <h1>What is the difference between state and props in React?</h1>
        <span>
          State is used to manage data that can change within a component, while
          props are used to pass data from a parent component to a child
          component
        </span>
      </div>

      <div className="question-answer">
        <h1>How does useState work?</h1>
        <span>
          When you call useState, React creates a new state variable and sets it
          to the initial value you provide. It also returns a function that you
          can use to update the state variable. When you call this function with
          a new value, React will re-render the component and update the UI to
          reflect the new state.
        </span>
      </div>
      <div className="question-answer">
        <h1>Purpose of useEffect other than fetching data?</h1>
        <span>
          The useEffect hook in React is used to perform side effects in a
          functional component. While fetching data is one of the most common
          use cases, useEffect can also be used for other purposes such as:
          <ol>
            <li>Updating the document title based on the component state</li>
            <li>Setting up event listeners</li>
            <li>Animating components</li>
            <li>
              Performing cleanup actions such as removing event listeners or
              canceling timers
            </li>
          </ol>
        </span>
      </div>

      <div className="question-answer">
        <h1>How Does React work?</h1>
        <span>
          React is a popular JavaScript library for building user interfaces. It
          allows developers to create reusable UI components and manage the
          state of those components efficiently. React uses a virtual DOM
          (Document Object Model) to update the UI efficiently by minimizing the
          number of DOM manipulations required. When a components state changes,
          React updates the virtual DOM, calculates the difference between the
          previous and current state, and applies only the necessary changes to
          the real DOM. This makes React very fast and efficient, even for
          complex UIs. Additionally, React can be used with other libraries and
          frameworks, making it a versatile choice for web development. Written
          by Chatsonic
        </span>
      </div>
    </div>
  );
};

export default Question;
