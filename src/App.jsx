import { useState } from "react";
import HeaderSection from "./Components/ Header/HeaderSection";
import PremiumDigitalTools from "./Components/PremiumDigitalTools/PremiumDigitalTools";
import StatsSection from "./Components/StatsSection";
import { ToastContainer } from "react-toastify";
import StepSection from "./Components/StepSection";
import PriceSection from "./Components/PriceSection/PriceSection";
import ReadySection from "./Components/ReadySection";
import Footer from "./Components/Footer.jsx";

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
        <PriceSection />
        <ReadySection />
      </main>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
