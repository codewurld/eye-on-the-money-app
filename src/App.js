import logo from './logo.svg';
import Header from './components/Header/Header';
import Balance from './components/Balance/Balance'
import IncomeAndOutgoings from './components/IncomeAndOutgoings/IncomeAndOutgoings';
import PurchaseList from './components/PurchaseList/PurchaseList';
import AddNewTransaction from './components/AddNewTransaction/AddNewTransaction';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeAndOutgoings />
        <PurchaseList />
        <AddNewTransaction />
      </div>
    </div>
  );
}

export default App;
