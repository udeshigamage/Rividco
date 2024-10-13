import { ToastContainer } from "react-toastify";
import Approutes from "./Routes/Approutes";

function App() {
  return (
    <>
      <div>
        <Approutes />
        <ToastContainer position="top-right" />
      </div>
    </>
  );
}

export default App;
