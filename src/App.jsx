import React from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useParams
} from "react-router-dom";

const Welcome = (props) => {
  return (
    <h1>Welcome</h1>
  );
}

const ParamRoute = (props) => {
  const { param1, param2, param3 } = useParams();
  let paramType = ""
  if (isNaN(param1)) {
    paramType = "word"
  } else {
    paramType = "number"
  }
  const paramStyle = {
    color: `${ param2 }`,
    background: `${ param3 }`,
  }
  return (
    <>
      <h1 style={paramStyle}>The {paramType} is: {param1}</h1>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Welcome />} />
        <Route path="/:param1?/:param2?/:param3?" element={<ParamRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
