import { useState } from "react";
import HeaderSection from "./Components/ Header/HeaderSection";
import PremiumDigitalTools from "./Components/PremiumDigitalTools/PremiumDigitalTools";
import StatsSection from "./Components/StatsSection";

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
      </main>
    </>
  );
}

export default App;
