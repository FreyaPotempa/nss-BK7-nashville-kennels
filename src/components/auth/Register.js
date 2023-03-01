import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
  const [customer, setCustomer] = useState({
    email: "",
    name: "",
    address: "",
  });
  let navigate = useNavigate();

  const registerNewUser = () => {
    return fetch("http://localhost:8088/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    })
      .then((res) => res.json())
      .then((createdUser) => {
        if (createdUser.hasOwnProperty("id")) {
          localStorage.setItem(
            "kennel_user",
            JSON.stringify({
              id: createdUser.id,
            })
          );

          navigate("/");
        }
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    return fetch(`http://localhost:8088/users?email=${customer.email}`)
      .then((res) => res.json())
      .then((response) => {
        if (response.length > 0) {
          // Duplicate email. No good.
          window.alert("Account with that email address already exists");
        } else {
          // Good email, create user.
          registerNewUser();
        }
      });
  };

  const updateCustomer = (evt) => {
    const copy = { ...customer };
    copy[evt.target.id] = evt.target.value;
    setCustomer(copy);
  };

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form--login" onSubmit={handleRegister}>
        <h1 className="h3 mb-3 font-weight-normal">
          Please Register for Nashville Kennels
        </h1>
        <fieldset>
          <label htmlFor="name"> Full Name </label>
          <input
            onChange={updateCustomer}
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your name"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email"> Email address </label>
          <input
            onChange={updateCustomer}
            type="email"
            id="email"
            className="form-control"
            placeholder="Email address"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="address"> Address </label>
          <input
            onChange={updateCustomer}
            type="address"
            id="address"
            className="form-control"
            placeholder="street address"
            required
          />
        </fieldset>
        <fieldset>
          <button type="submit"> Register </button>
        </fieldset>
      </form>
    </main>
  );
};
