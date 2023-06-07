import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const FirstNameErrorMessage = (e) => {
  return (
    <p className="FieldError">Must be at least 1 letter.</p>
  );
};

const LastNameErrorMessage = (e) => {
  return (
    <p className="FieldError">Must be at least 1 letter.</p>
  );
};

const PasswordErrorMessage = (e) => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

const EmailErrorMessage = (e) => {
  return (
    <p className="FieldError">Enter a valid email address.</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState({
    value: "",
    isTouched: false,
  });
  const [lastName, setLastName] = useState({
    value: "",
    isTouched: false,
  });
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
   return (
    firstName.value.length > 1 &&
    lastName.value.length > 1 &&
    validateEmail(email.value) &&
    password.value.length > 8 &&
    role !== "role"
   );
  };

  const clearForm = () => {
      setFirstName({
        value: "",
        isTouched: false,
        });
      setLastName({
        value: "",
        isTouched: false,
        });
      setEmail({
        value: "",
        isTouched: false,
        });
      setPassword({
      value: "",
      isTouched: false,
      });
      setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="fName">First name</label>
            <input id="fName"
              value={firstName.value}
              onChange={(e) => {
                setFirstName({...firstName, value:e.target.value});
              }}
                onBlur={() => {
                setFirstName({...firstName, isTouched: true});
                }}
              placeholder="Anthony"
              />
              {firstName.isTouched && firstName.value.length < 1 ? (
            < FirstNameErrorMessage />
          ) :null}
          </div>
          <div className="Field">
            <label htmlFor="lName">Last name</label>
            <input id="lName"
              value={lastName.value}
              onChange={(e) => {
                setLastName({...lastName, value:e.target.value});
              }}
                onBlur={() => {
                setLastName({...lastName, isTouched: true});
                }}
              placeholder="Bourdain"
              />
              {lastName.isTouched && lastName.value.length < 1 ? (
            < LastNameErrorMessage />
          ) :null}
          </div>
          <div className="Field">
            <label htmlFor="email">Email address</label>
            <input id="email"
            value={email.value}
            type="email"
            onChange={(e) => {
              setEmail({...email, value:e.target.value});
            }}
              onBlur={() => {
              setEmail({...email, isTouched: true});
              }}
              placeholder="anthony@eating.com"
              />
             <div>
              {email.isTouched && (!validateEmail(email.value)) ? (
            < EmailErrorMessage />
          ) :null}
            </div>
          </div>
          <div className="Field">
            <label htmlFor="password">Password</label>
            <input id="password"
            value={password.value}
            type="password"
            onChange={(e) => {
              setPassword({...password, value:e.target.value});
            }}
            onBlur={() => {
              setPassword({...password, isTouched: true});
            }}
            placeholder="********"
            />
          {password.isTouched && password.value.length < 8 ? (
            < PasswordErrorMessage />
          ) :null}
          </div>
          <div className="Field">
            <label htmlFor="role">Role</label>
            <select id="role"
              value={role}
              onChange={(e) => {
              setRole(e.target.value);
            }}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}
export default App;
