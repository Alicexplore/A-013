import { useState } from "react";
import Maintenance from "./components/Maintenance";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isMaintenanceVisible, setMaintenanceVisible] = useState(true);

  const closeMaintenance = () => {
    setMaintenanceVisible(false);
  };

  return (
    <div className="relative">
      {/* Dashboard toujours visible */}
      <Dashboard />

      {/* Afficher Maintenance si isMaintenanceVisible est true */}
      {isMaintenanceVisible && <Maintenance onClose={closeMaintenance} />}
    </div>
  );
}

export default App;
