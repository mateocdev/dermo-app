import { Routes, Route } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login && Register */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />
    </Routes>
  )
}
