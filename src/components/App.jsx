import Header from './Header/Header';
import UseMemoExample from './UseMemoExample';
import UseRefInputFile from './UseRefInputFile';
import UseRefRenderCountExample from './UseRefRenderCountExample';
import UseRefForwardRefExample from './UseRefForwardRefExample';
import LoginForm from './Login/LoginForm';
import UseContextExample from './UseContextExample/UseContextExample';
const App = () => {
  return (
    <>
      <Header />
      {/* Step 1. Use memo calc logic */}
      {/* <UseMemoExample /> */}

      {/* Step 2. Use ref */}
      {/* <UseRefRenderCountExample /> */}

      {/* Step 3. Use ref file*/}
      {/* <UseRefInputFile /> */}

      {/* Step 4. Use forward ref */}
      <UseRefForwardRefExample />

      {/* Step 5. Use context */}
      {/* <UseContextExample /> */}

      {/* Step 6. Extended context with state */}
      {/* <LoginForm /> */}
    </>
  );
};
export default App;
