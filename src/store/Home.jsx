import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar';
import Sliderwithinfo from '../component/Sliderwithinfo';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from '../component/PieChart';
import Select from '../component/Select';
import styles from "./Home.css";
import SliderIntrest from '../component/SliderIntrest';

Chart.register(CategoryScale);


const Home = () => {

  const [homevalue, setHomeValue]   = useState(1700)
  const [downpaymnet, setDownpayment]   = useState(180)
  const [loanamount, setLoanaAmount]   = useState(4300)
  const [interestrate, setInterestRate]   = useState(2)
  const [monthlyinterest , setMonthlyInterest] = useState(0)
  const [tenureparent , setTenurePrent] = useState()

  const [chartdata , setChartData] = useState({

    labels: ['Principal', 'Interest'], 
    datasets: [
      {
        label: "Monthly Payment",
        data: [homevalue, 230],
        backgroundColor: [
          "rgb(255,224,230)",
          "rgb(215,236,251)"

        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  useEffect(() => {
    // upadte the downplayment
    const downpaymentvalue = homevalue * 0.20;
    setDownpayment(downpaymentvalue)
    // update the loanamount 
    const loanamountvalue = homevalue - downpaymnet
    setLoanaAmount(loanamountvalue)
  }, [homevalue , downpaymnet, loanamount]);

  useEffect(() => {
    const r = interestrate/12;
    const n = tenureparent * 12;
    const EMI = (loanamount * r * (1 + r)**n) / (( 1 + r)**n -1)
    setMonthlyInterest(EMI)
  }, [loanamount ,interestrate , tenureparent ]);

  return (
    <>
        <Navbar />
        <div className='bottom'
        style={{
            display:'flex'
        }}
        >
            {/* {slider} */}
          
            <div className='leftside'
            style={{
                width:'30%',
                height: '50px'
            }}
            >
                <Sliderwithinfo title = {"Home Value"} symbole = {"$"} setValue = {setHomeValue} value = {homevalue} min= {1000} max = {10000} />
                <Sliderwithinfo title = {"Down Payment"} symbole = {"$"} setValue = {setDownpayment} value = {downpaymnet} min= {0} max = {homevalue} />
                <Sliderwithinfo title = {"Loan Amount"} symbole = {"$"} setValue = {setLoanaAmount} value = {loanamount} min= {0} max = {homevalue} />
                <SliderIntrest title = {"Interest Rate"} symbole = {"%"}setValue = {setInterestRate} value = {interestrate} min= {2} max = {15} />
                <Select  setTenurePrent = {setTenurePrent} />
            </div>

            {/* {graph} */}
            <div className='rightside'
            style={{
                width:'50%'
            }}
            >
                <p className='answer'> Monthly Amount - ${Math.floor(monthlyinterest)}</p>
              <PieChart chartData={chartdata} /> 
            </div>
          
        </div>
       
    </>
  )
}


export default Home;