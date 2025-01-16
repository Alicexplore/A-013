import Maintenance from "./components/Maintenance";
import Dashboard from "./pages/Dashboard"; 

function App() {
  const isMaintenance = true;

  return (
    <div className="relative">
  
      <div className="relative z-0">
        <Dashboard />
      </div>

      {isMaintenance && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <Maintenance />
        </div>
      )}
    </div>
  );
}

export default App;
