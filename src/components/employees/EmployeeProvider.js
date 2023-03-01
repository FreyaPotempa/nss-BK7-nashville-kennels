import { createContext, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return fetch(`http://localhost:8088/employees?_expand=location`)
      .then((res) => res.json())
      .then(setEmployees);
  };

  const addEmployee = (employeObj) => {
    return fetch(`http://localhost:8088/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeObj),
    }).then(getEmployees);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        getEmployees,
        addEmployee,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
