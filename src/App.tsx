import { Navigate, Route, Routes } from "react-router";

import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Agenda } from "@/pages/Agenda";
import { Dashboard } from "@/pages/Dashboard";
import { Patients } from "@/pages/Patients";

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="pacientes" element={<Patients />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;