import logo from './logo.svg';
import './App.css';
import Card from './components/card/card.js'
import Input from './components/util/input'
import Button from './components/util/button'
import { useState } from 'react';
function App() {
  const [tIncome,setTotalIncome]=useState(0.00)
  const[data,setData]=useState([])
  const [text,setText]=useState("")
  const [amount,setAmount]=useState(0.00)
  const [restBlance,setRestBlance]=useState(0.00)
  const [negBlance,setNegBlance]=useState(0.00)

  const getText=(e)=>setText(e.target.value);
  const getAmount=(e)=>setAmount(e.target.value)


  const addExpense=()=>{
    const expenseData = {
      id: Math.floor(Math.random() * 100),
      text:text,
      amount: amount,
    }; 
    setData([expenseData,...data])
    if(amount>0){
      setTotalIncome(Number(tIncome)+Number(amount))
      setRestBlance(Number(restBlance)+Number(amount))
    }else if(amount<0){
        setNegBlance(Number(negBlance)-Number(amount))
        setRestBlance(Number(restBlance)+Number(amount)) 
      }else{
        console.log("lol")
      }
      setText("")
      setAmount(0.00)    
  }

  return (
    <div className="App">
      <Card>
        <h2 className='heading'>Expense Tracker</h2>
        <div className='balance-tag'>
          <h3>
            Your balance
          </h3>
          <h1>
          {restBlance}.Rs
          </h1>
        </div>
        <div className='balance-data'>
          <div className='income'>
          <h3>
            INCOME
          </h3>
          <p>{tIncome} Rs.</p>
          </div>
          <div className='vertical'></div>
          <div className='expenses'>
          <h3>
            EXPENSE
          </h3>
          <p>{negBlance} Rs.</p>
          </div>
        </div>
        <div className='history'>
            <h3>History</h3>
            <hr/>
            {data.map((trx,index)=>(
              <div className='history-crad'>
                <p>{trx.text}</p>
                <p>{trx.amount} Rs.</p>
            </div>
            ))}
            
          </div>
          <div className='new-transaction'>
            <h3>Add New Transaction</h3>
            <hr/>
            <div className='expense-text'>
              <label for="nText">Text</label>
            <br/>  <Input type="text" value={text} placeholder="Enter Text ...." name="nText" className="nText" onChange={getText}/>
            </div>
            <div className='Amount-text'>
              <p for="Amount">Amount<br/>(negative-expense,posrtive-income)</p>
              <br/><Input value={amount} type="number" placeholder="Enter Amount ...." name="Amount" className="Namount" onChange={getAmount}/>
            </div>
            <div className='btn'>
              <Button btn="Add Transaction" onClick={addExpense} />
            </div>
          </div>
      </Card>
    </div>
  );
}

export default App;
