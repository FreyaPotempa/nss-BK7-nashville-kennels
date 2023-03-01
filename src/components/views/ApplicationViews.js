import { Route, Routes, Outlet } from "react-router-dom";
import { AnimalProvider } from "../animal/AnimalProvider";
import { CustomerList } from "../customers/CustomerList";
import { CustomerProvider } from "../customers/CustomerProvider";
import { EmployeeList } from "../employees/EmployeeList";
import { EmployeeProvider } from "../employees/EmployeeProvider";
import { LocationProvider } from "../location/LocationProvider";
import { LocationList } from "../location/LocationList";
import { AnimalForm } from "../animal/AnimalForm";
import { EmployeeForm } from "../employees/EmployeeForm";
import { LocationForm } from "../location/LocationForm";
import { AnimalList } from "../animal/AnimalList";
import { AnimalDetail } from "../animal/AnimalDetail";
import { Employee } from "../employees/Employee";
import { Location } from "../location/Location";
import { AnimalSearch } from "../animal/AnimalSearch";

export const ApplicationViews = () => {
  return (
    <>
      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <EmployeeProvider>
              <Routes>
                <Route path="/locations" element={<LocationList />} />
                <Route
                  path="/locations/detail/:locationId"
                  element={<Location />}
                />
                <Route path="/locations/create" element={<LocationForm />} />
                <Route
                  path="/animals"
                  element={
                    <>
                      <AnimalSearch />
                      <AnimalList />
                    </>
                  }
                />
                <Route path="/animals/create" element={<AnimalForm />} />
                <Route
                  path="/animals/edit/:animalId"
                  element={<AnimalForm />}
                />
                <Route
                  path="/animals/detail/:animalId"
                  element={<AnimalDetail />}
                />
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/employees" element={<EmployeeList />} />
                <Route
                  path="/employees/detail/:employeeId"
                  element={<Employee />}
                />
                <Route path="/employees/create" element={<EmployeeForm />} />
              </Routes>
            </EmployeeProvider>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>
    </>
  );
};
