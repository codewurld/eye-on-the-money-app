import logo from './logo.svg';
import Header from './components/Header/Header';
import Balance from './components/Balance/Balance'
import IncomeAndOutgoings from './components/IncomeAndOutgoings/IncomeAndOutgoings';
import PurchaseList from './components/PurchaseList/PurchaseList';
import AddNewTransaction from './components/AddNewTransaction/AddNewTransaction';
import { GlobalProvider } from './context/context';

import './App.css';


// wrap all components in GlobalProvider to give access to context in APPjs 

function App() {


  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeAndOutgoings />
        <PurchaseList />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
