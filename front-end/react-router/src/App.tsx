/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Link,
  Route,
  Routes,
  Navigate,
  useLocation,
  Form,
  useSubmit,
} from "react-router-dom";

const App = () => {
  const { state } = useLocation();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1>Hallo world</h1>
            <Link to={"/login"}>Login</Link>
          </div>
        }
      />
      <Route path="/about-us" element={<h1>About Us state: {state}</h1>} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/about"
        element={<Navigate to="/about-us" replace state={10} />}
      />
    </Routes>
  );
};

const Login = () => {
  const submit = useSubmit();

  return (
    <Form
      onChange={(event) => {
        submit(event.currentTarget);
        console.log(event.currentTarget);
      }}>
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </Form>
  );
};

export default App;
