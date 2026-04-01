import { useState } from "react";
import HeaderSection from "./Components/ Header/HeaderSection";
import PremiumDigitalTools from "./Components/PremiumDigitalTools/PremiumDigitalTools";
import StatsSection from "./Components/StatsSection";
import { ToastContainer } from "react-toastify";
import StepSection from "./Components/StepSection";

function App() {
  const [selectProduct, setSelectProduct] = useState([]);

  return (
    <>
      <HeaderSection selectProduct={selectProduct} />
      <StatsSection />
      <main>
        <PremiumDigitalTools
          selectProduct={selectProduct}
          setSelectProduct={setSelectProduct}
        />
        <StepSection />
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
