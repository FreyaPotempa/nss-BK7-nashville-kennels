import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Employee } from "./Employee";
import { EmployeeContext } from "./EmployeeProvider";

export const EmployeeList = () => {
  const navigate = useNavigate();
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <section className="employees flex flex-row flex-wrap m-4">
        {employees.map((employee) => (
          <div
            key={`employeeList--${employee.id}`}
            className="bg-gray-100 hover:bg-slate-600 hover:text-white border-double border-4 border-sky-500 font-bold p-4 m-2"
          >
            <Link to={`/employees/detail/${employee.id}`}>{employee.name}</Link>
          </div>
        ))}
      </section>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 ml-2 rounded-full"
        onClick={() => navigate("/employees/create")}
      >
        Add Employee
      </button>
    </>
  );
};
