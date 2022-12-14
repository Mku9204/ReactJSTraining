import './App.css';
import Card from './components/card/card.js'
import Input from './components/util/input'
import Button from './components/util/button'
import { useState } from 'react';
import inputStyle from './components/util/input_style';
function App() {
  const [totalBlance, setTotalBlance] = useState(0.00)
  const [data, setData] = useState([])
  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0.00)
  const [icomeBlance, setIncomeBlance] = useState(0.00)
  const [expBlance, setExpBlance] = useState(0.00)

  const getText = (e) => setText(e.target.value);
  const getAmount = (e) => setAmount(e.target.value)


  const addExpense = () => {
    const expenseData = {
      id: Math.floor(Math.random() * 100),
      text: text,
      amount: amount,
    };
    setData([expenseData, ...data])
    setTotalBlance(Number(totalBlance) + Number(amount))
    if (amount < 0) {
      setExpBlance(Number(expBlance) + Number(amount))
    } else {
      setIncomeBlance(Number(icomeBlance) + Number(amount))
    }
    setText("")
    setAmount(0.00)
  }
  const deleteExpenseBtn = (id, amount) => {
    const myarr = data.filter((item) => item.id !== id);
    setData(myarr);
    setTotalBlance(Number(totalBlance) - Number(amount))
    amount < 0 ? (
      setExpBlance(Number(expBlance) - Number(amount))
    ) : (
      setIncomeBlance(Number(icomeBlance) - Number(amount))
    )

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
            {totalBlance}.Rs
          </h1>
        </div>
        <div className='balance-data'>
          <div className='income'>
            <h3>
              INCOME
            </h3>
            <p>{icomeBlance} Rs.</p>
          </div>
          <div className='vertical'></div>
          <div className='expenses'>
            <h3>
              EXPENSE
            </h3>
            <p>{expBlance} Rs.</p>
          </div>
        </div>
        {data.length > 0 ? (
          <div className='history'>
            <h3>History</h3>
            <hr />
            {data.map((trx, index) => (
              <>
                <div className='history-crad' key={index}>
                  <p>{trx.text}</p>
                  <p>{trx.amount} Rs.</p>
                  <Button style={{ background: 'red' }} btn="del" className="delbtn" onClick={() => deleteExpenseBtn(trx.id, trx.amount)} />
                </div>
              </>
            ))}
          </div>
        ) : (
          <div className='history'>
            <div className='history-crad-no' style={{ color: 'red' }}>
              <h2 >Not transcation history found</h2>
            </div>

          </div>
        )
        }

        <div className='new-transaction'>
          <h3>Add New Transaction</h3>
          <hr />
          <div className='expense-text'>
            <label for="nText">Text</label>
            <br />
            {/* <Input type="text" value={text} placeholder="Enter Text ...." name="nText" className="nText" onChange={getText} />
           */}
            <Input
              classes={inputStyle.nText1}
              label="Enter Text ...."
              variant="outlined"
              inputProps={{ inputMode: 'text', pattern: '[0-9]*' }}
              fullWidth
              size="small" />
          </div>
          <div className='Amount-text'>
            <p for="Amount">Amount<br />(negative-expense,posrtive-income)</p>
            <br />
            <Input value={amount}
              size="small"
              placeholder="Rs. 1000"
              label="Enter Amount ...." name="Amount"
              className="Namount1" onChange={getAmount}
              inputProps={{ inputMode: 'number', pattern: '[0-9]*' }}
              fullWidth />
          </div>
          <div className='btn'>
            <Button btn="Add Transaction" onClick={addExpense} />
          </div>
        </div>
      </Card >
    </div >
  );
}

export default App;
