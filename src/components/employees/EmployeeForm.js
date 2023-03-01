import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../location/LocationProvider";
import { EmployeeContext } from "./EmployeeProvider";

export const EmployeeForm = () => {
  const navigate = useNavigate();
  const { addEmployee } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  const [employee, setEmployee] = useState({
    name: "",
    locationId: 0,
  });

  useEffect(() => {
    getLocations();
  }, []);

  const handleInput = (event) => {
    const newEmployee = { ...employee };
    newEmployee[event.target.id] = event.target.value;
    setEmployee(newEmployee);
  };

  const handleClickSaveEmployee = (event) => {
    const locationId = parseInt(employee.locationId);

    if (locationId === 0) {
      window.alert("please select a location");
    } else {
      const newEmployee = {
        name: employee.name,
        locationId: locationId,
      };
      addEmployee(newEmployee).then(() => {});
      navigate("/employees");
    }
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee Name:</label>
          <input
            type="text"
            id="name"
            required
            autoFocus
            className="form-control"
            placeholder="Full Name"
            value={employee.name}
            onChange={handleInput}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to Location:</label>
          <select
            name="locationId"
            id="locationId"
            className="form-control"
            value={employee.locationId}
            onChange={handleInput}
          >
            <option value="0">Select a location</option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleClickSaveEmployee}
      >
        Save Employee
      </button>
    </form>
  );
};
