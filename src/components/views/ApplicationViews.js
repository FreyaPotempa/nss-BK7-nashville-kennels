import { Route, Routes, Outlet } from "react-router-dom"
import { AnimalProvider } from "../animal/AnimalProvider"
import { CustomerList } from "../customers/CustomerList"
import { CustomerProvider } from "../customers/CustomerProvider"
import { EmployeeList } from "../employees/EmployeeList"
import { EmployeeProvider } from "../employees/EmployeeProvider"
import { LocationProvider } from "../location/LocationProvider"
import { LocationList } from "../location/LocationList"
import { AnimalForm } from "../animal/AnimalForm"
import { EmployeeForm } from "../employees/EmployeeForm"
import { LocationForm } from "../location/LocationForm"
import { AnimalList } from "../animal/AnimalList"

export const ApplicationViews = () => {
    return (
        <>
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <EmployeeProvider>
                            <Routes>
                                <Route path="/locations" element={
                                    <LocationList />
                                } />
                                 <Route path="/locations/create" element={
                                    <LocationForm />
                                } />
                                <Route path="/animals" element={
                                    <AnimalList />
                                } />
                                <Route path="/animals/create" element={
                                    <AnimalForm />
                                } />
                                <Route path="/customers" element={
                                    <CustomerList />
                                } />
                                <Route path="/employees" element={
                                    <EmployeeList />
                                } />
                                <Route path="/employees/create" element={
                                    <EmployeeForm />
                                } />
                            </Routes>
                        </EmployeeProvider>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

        </>
    )
}