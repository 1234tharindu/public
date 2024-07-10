// App.js
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import NoPage from "./pages/NoPage";
import HomeScreen from "./pages/Homescreen";
import HomeCards from "./pages/HomeCards";
import HRHome from "./pages/HRHome";
import MainLayout from "./component/MainLayout";
import FinanceHome from "./pages/homePages/FinanceHome";
import PayrollHome from "./pages/homePages/PayrollHome";
import Login from "./pages/Auth/Login";
import { themeSettings } from "./theme";
// Human Resources
import HRTask2 from "./pages/Modules/HumanResources/HRTask2";
import HRTask1 from "./pages/Modules/HumanResources/HRTask1";
import HRTask3 from "./pages/Modules/HumanResources/HRTask3";
// Payroll
import PayrollTask1 from "./pages/Modules/Payroll/PayrollTask1";
import PayrollTask2 from "./pages/Modules/Payroll/PayrollTask2";
import PayrollTask3 from "./pages/Modules/Payroll/PayrollTask3";

export default function App() {
  const [moduleId, setModuleId] = useState(null);
  const mode = "dark"; // or 'light' depending on your preference
  const theme = createTheme(themeSettings(mode));

  useEffect(() => {
    // Logic to retrieve moduleId from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const moduleIdParam = urlParams.get("moduleId");
    if (moduleIdParam) {
      setModuleId(parseInt(moduleIdParam, 10));
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        {/* <ThemeProvider theme={theme}> */}
        <Routes>
          {/* Define the main layout and its nested routes */}


          <Route path="/HomeScreen" element={<HomeScreen />} />
          {/* <Route path="/" element={<MainLayout />}> */}

          <Route path="/homecard" element={<HomeCards />} />
          {/* <Route path="/" element={<MainLayout />}> */}
          <Route path="/" element={<MainLayout moduleId={moduleId} />}>
            {/* Hunam Resources */}
            <Route path="hrhome" element={<HRHome />} />
            <Route
              path="modules/humanresources/HRTask1"
              element={<HRTask1 />}
            />
            <Route
              path="modules/humanresources/HRTask2"
              element={<HRTask2 />}
            />
            <Route
              path="modules/humanresources/HRTask3"
              element={<HRTask3 />}
            />
            {/* Finance */}
            <Route path="homePages/financeHome" element={<FinanceHome />} />

            {/* Payroll */}
            <Route path="homePages/payrollHome" element={<PayrollHome />} />
            <Route
              path="modules/payroll/payrollTask1"
              element={<PayrollTask1 />}
            />
            <Route
              path="modules/payroll/payrollTask2"
              element={<PayrollTask2 />}
            />
            <Route
              path="modules/payroll/payrollTask3"
              element={<PayrollTask3 />}
            />

            <Route path="*" element={<NoPage />} />
          </Route>

          {/* Routes that don't use the main layout */}
          <Route index element={<HomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </div>
  );
}
