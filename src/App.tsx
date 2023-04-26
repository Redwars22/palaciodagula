import './App.css';
import Main from './components/Main';
import Welcome from './components/Welcome/Step01';
import PickHamburger from './components/PickHamburger/Step02';
import { useGlobalStore } from './modules/store';
import Additionals from './components/Additionals/Step03';
import TotalValue from './components/TotalValue/Step04';
import Address from './components/Address/Step05';
import PaymentAndCheckout from './components/Checkout/Step06';
import Confirm from './components/Confirm/Step07';

function App() {
  return (
    <div className="App">
      <Main>
      {useGlobalStore().step === "1" && <Welcome/>}
      {useGlobalStore().step === "2" && <PickHamburger/>}
      {useGlobalStore().step === "3" && <Additionals/>}
      {useGlobalStore().step === "4" && <TotalValue/>}
      {useGlobalStore().step === "5" && <Address/>}
      {useGlobalStore().step === "6" && <PaymentAndCheckout/>}
      {useGlobalStore().step === "7" && <Confirm/>}
      </Main>
    </div>
  );
}

export default App;
