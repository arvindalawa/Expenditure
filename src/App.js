import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';
import React,{useState} from 'react';

let DUMMY_EXPENSE=[
    {
        id:'e1',
        title:'school fee',
        amount:250,
        date:new Date(2021,5,12)
    }, {
        id:'e2',
        title:'Books',
        amount:230,
        date:new Date(2021,2,22)
    }, {
        id:'e3',
        title:'recharge',
        amount:599,
        date:new Date(2021,15,2)
    }, {
        id:'e4',
        title:'gift',
        amount:150,
        date:new Date(2022,5,12)
    }
];

const App=()=>{
    const[expenses,setExpenses]=useState(DUMMY_EXPENSE);


    const addExpenseHandler=(expense)=>{
        const updatedExpense=[expense,...expenses];
        setExpenses(updatedExpense);
    };
    return ( 
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses} />
    
    </div>
    );
}
export default App;