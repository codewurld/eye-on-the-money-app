import logo from './logo.svg';
import Header from './components/Header/Header';
import Balance from './components/Balance/Balance'
import IncomeAndOutgoings from './components/IncomeAndOutgoings/IncomeAndOutgoings';
import PurchaseList from './components/PurchaseList/PurchaseList';
import AddNewTransaction from './components/AddNewTransaction/AddNewTransaction';
import { GlobalProvider } from './context/context';
import LandingPage from './components/landingPage/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';


// wrap all components in GlobalProvider to give access to context in APPjs 

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}>
        </Route>
        <Route exact path="/home" element={
          <GlobalProvider>
            <Header />
            <div className="container">
              <Balance />
              <IncomeAndOutgoings />
              <PurchaseList />
              <AddNewTransaction />
            </div>
          </GlobalProvider>
        }>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
