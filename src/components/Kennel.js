import "./Kennel.css"
import { NavBar } from "./nav/NavBar.js"
import { ApplicationViews } from "./views/ApplicationViews.js"
import { Route, Routes } from "react-router-dom"
import { Register } from "./auth/Register.js"
import { Authorized } from "./views/Authorized.js"
import { Login } from "./auth/Login"

export const Kennel = () => {
    return <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={
                <Authorized>
                    <>
                        <NavBar />
                        <h2 className="text-brown-500 text-3xl mt-4">Nashville Kennels</h2>
                        <ApplicationViews />
                    </>
            </Authorized>

            } />
        
        </Routes>
}
