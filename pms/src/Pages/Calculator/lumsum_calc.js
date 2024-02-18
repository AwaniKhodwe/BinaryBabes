
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import { invalid } from 'moment/moment';
import { Height } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';



function sip()
{
  const [inv, setInv] = useState(0);
  const [invError, setInvError] = useState('');

  const handleInvChange = (event) => {
    const inputValue = event.target.value;

    // Check if the input is a valid positive integer
    if (inputValue === '' || /^\d+$/.test(inputValue)) {
      setInv(inputValue);
      setInvError('');
    } else {
      setInvError('Invalid input');
    }
  };

  const [retRate, setRetRate] = useState(0);
  const [retRateError, setRetRateError] = useState('');

  const handleRetChange = (event) => {
    const inputValue = event.target.value;

    // Check if the input is a valid positive integer
    if (inputValue === '' || /^\d+$/.test(inputValue)) {
      setRetRate(inputValue);
      setRetRateError('');
    } else {
      setRetRateError('Invalid input');
    }
  };

  const [timePeriod, setTimePeriod] = useState(0);
  const [timePeriodError, setTimePeriodError] = useState('');

  const handleTimeChange = (event) => {
    const inputValue = event.target.value;

    // Check if the input is a valid positive integer
    if (inputValue === '' || /^\d+$/.test(inputValue)) {
      setTimePeriod(inputValue);
      setTimePeriodError('');
    } else {
      setTimePeriodError('Invalid input');
    }
  };
 const calculateTotalInv=()=>{
  
    const inv1=Number(inv);
    const tPeriod= Number(timePeriod);
    
    return inv1*12*tPeriod;

 };

 const calculateLumpsum=()=>{
    
    let P = Number(inv);
    let Rate =  Number(retRate) / 100
    let r = Rate;
    let n = Number(timePeriod);
    let result =  P * Math.pow(1 + r, n);
    return result.toFixed(0);
 };





  return(
    <>
    
      <div className='pt-4'>
        <div className='mx-auto s_card1 s_heading p-4'>
          <h1 className=' text-justify mb-2 text-base'>What is Lumpsum</h1>
          <p className='text-justify font-thin text-sm'>A lump sum investment, often referred to simply as a lump sum, involves investing a single substantial amount of money at once into a mutual fund or other financial instrument. This method capitalizes on the potential for significant returns and benefits from compounding, potentially resulting in substantial growth over time.</p>
        </div>
        <div className='mt-4 s_card2 mx-auto p-4 s_heading'>
          <h1 className='text-justify'>Lumpsum Calculator</h1>
          <div className='flex mt-2'>
            <div>
            <div className='flex mt-2'>
                <div className='flex items-center'>
                  <p className='text-justify font-normal text-sm mb-2'>One Time Investment</p>
                </div>
                <div className='ml-8' style={{marginLeft: "430px"}}>
                  
                    <span className='mr-2'>₹</span>
                    <input value={inv} onChange={handleInvChange} type='text' size={8} className={`border-b-2 solid ${invError ? 'text-red-500' : ''}`} />
                   
                </div>
                
              </div>
              <div className='mt-2'>
                {/* Monthly Investment */}
                {/* <p className='text-justify font-normal text-sm mb-2'>Monthly Investment</p> */}
                <Box width={656}>
                  <Slider
                    size="small"
                    defaultValue={70}
                    value={inv}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    style={{ color: '#EF731F' }}
                    min={1}
                    max={1000000}

                  />
                </Box>
              </div>

              <div className='flex'>
                <div className='flex items-center'>
                  <p className='text-justify font-normal text-sm mb-2'>Expected Return Rate(p.a)</p>
                </div>
                <div className='ml-8' style={{marginLeft: "390px"}}>
                  
                    <input value={retRate} onChange={handleRetChange} type='text' size={8} className={`border-b-2 solid ${retRateError ? 'text-red-500' : ''}`}/>
                    <span>%</span>
                </div>
                
              </div>
              
              <div  className='mt-2'>
                  {/* Expected Return Rate */}
                  {/* <p className='text-justify font-normal text-sm mb-2'>Expected Return Rate</p> */}
                  <Box width={656}>
                    <Slider
                      size="small"
                      defaultValue={70}
                      value={retRate}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      style={{ color: '#EF731F' }}
                      min={1}
                      max={100}
                    />
                  </Box>
                
                {/* <div className='ml-8 mt-4'>
                  <form>
                    <input type='text' size={8} className='border-2 solid border-black'/>
                  </form>
                </div> */}
              </div>
              <div className='flex'>
                <div className='flex items-center'>
                  <p className='text-justify font-normal text-sm mb-2'>Time Period</p>
                </div>
                <div className='ml-8' style={{marginLeft: "485px"}}>
                    
                    <input value={timePeriod} onChange={handleTimeChange} type='text' size={8} className={`border-b-2 solid ${timePeriodError ? 'text-red-500' : ''}`}/>
                    <span className='mr-2'>Yrs</span>
                </div>
                
              </div>
              <div  className='mt-2'>
                {/* Time Period */}
                {/* <p className='text-justify font-normal text-sm mb-2'>Time Period</p> */}
                <Box width={656}>
                  <Slider
                    size="small"
                    defaultValue={70}
                    value={timePeriod}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    style={{ color: '#EF731F' }}
                    min={1}
                    max={50}
                  />
                </Box>
              </div>
                
              <div className='text-justify text-sm font-thin flex'>
                <div>
                  <p className='text-slate-600 mb-4 mt-2'>Monthly Investment</p>
                  <p className='text-slate-600 mb-4'>Est. returns</p>
                  <p className='text-slate-600 mb-4'>Total value</p>
                </div>
                <div className='lower_div font-extrabold text-base'>
                  <p className='mb-4 mt-2'>₹ {inv}</p>
                  <p className='mb-4'>₹ {calculateLumpsum()-inv}</p>
                  
                  <p className='mb-4'>₹ {calculateLumpsum()}</p>
                  
                </div>
              </div>
            </div>
            <div className='div_right mb-4'>
              <div className='s_circle transform hover:scale-110 duration-300 ease-in-out' >
                <CircularProgressbarWithChildren 
                  value={inv*100/calculateLumpsum()} styles={buildStyles({
                  strokeLinecap: "butt",
                  textColor: "#EF731F",
                  pathColor: "#EF731F",
                  trailColor: "grey"
                  })} strokeWidth={17} className=''>
                  <div style={{ fontSize: 16, marginTop: -5 }}>
                    <p>Total Value</p>
                    <strong>₹ {calculateLumpsum()}</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              
                
              
              <div className='text-justify text-sm font-thin pl-4 flex'>
                  <div className='pl-4'>
                    <ul className='list-disc'>
                      <li className='text-slate-600 mb-2 mt-4' style={{color: "#EF731F"}}>Invested Amount</li>
                      <li className='text-slate-600 mb-4'>Est. Returns</li>
                    </ul>
                    
                  </div>
                  <div className='pl-56 font-extrabold'>
                    <p className='mb-2 mt-4'>₹ {inv}</p>
                    <p className='mb-4'>₹ {calculateLumpsum()-inv}</p>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto s_card3 px-4 pt-4 mt-4 flex'>
          <div className='mr-4'>
            <img src="/images/sip_calc.svg"></img>
          </div>
          <div >
            <div className='s_heading' style={{width: "1092px"}}>
              <h1 className='text-justify'>Here's an example to understand this better</h1>
              <p className='text-justify font-thin text-sm mt-4'>Let’s take the example of MS. S. She is a private sector 
              employee who has decided to invest 1 lac as one time investment for a period of 10 years. The expected rate of return for her 
              investment is 12%. So as per the formula, the calculator will give out the following results:</p>
            </div>
            <div className='flex'>
                <div className='ml-2 inner_div'>
                  <p className='text-sm font-thin text-white pt-4 pr-4 pl-4'>Total amount invested in the Lumpsum</p>
                  <div className='flex'>
                    <div>
                      <img className='pt-2 pl-4' src="/images/money1.svg"></img>
                    </div>
                    <div className='ml-2'>
                      <p className='text-2xl font-extrabold font-thin text-white'>1,00,000</p>
                      {/* <p className='text-sm font-thin text-white'>Invested 5000p.m.X 12 X 2yr</p> */}
                    </div>
                  </div>
                  
                  

                </div>
                <div className='mx-4 flex items-center'>
                    {/* //arrow */}
                    <img src="/images/arrow.svg"></img>
                </div>
                <div className='inner_div'>
                <p className='text-sm font-thin text-white pt-4 pr-4 pl-4'>Total amount of maturity of the Lumpsum</p>
                  <div className='flex'>
                    <div>
                      <img className='pt-2 pl-4' src="/images/money2.svg"></img>
                    </div>
                    <div className='ml-2'>
                      <p className='text-2xl font-extrabold font-thin text-white'>3,10,585</p>
                      {/* <p className='text-sm font-thin text-white'>Invested 5000p.m.X 12 X 2yr</p> */}
                    </div>
                  </div>

                </div>
            </div>
            <div>
              <p className='ml-2 text-justify font-thin text-sm mt-4'>However, as stated above, it is essential to keep in mind that the amount the Ms. S receives can be more or less than the figure in the calculator depanding on the market conditions in these 10 years.</p>

            </div>
          </div>
        </div>
        <div className='text-justify mt-4 s_card4 mx-auto p-4 s_heading mb-16'>
            <p className='last_heading'>Disclaimer</p>
            <p className='text-justify font-thin text-sm mt-2 mb-4'>Investosquare does not guarantee accuracy, completeness or correct sequence of any the details
               provided therein and therefore no reliance should be placed by the user for any purpose whatsoever 
               on the information contained / data generated herein or on its completeness / accuracy. The use of any 
               information set out is entirely at the User's own risk. User should exercise due care and caution (including 
               if necessary, obtaining of advise of tax/ legal/ accounting/ financial/ other professionals) prior to taking of any
                decision, acting or omitting to act, on the basis of the information contained / data generated herein. 
                Investosquare  does not undertake any liability or responsibility to update any data. No claim (whether in contract, 
                tort (including negligence) or otherwise) shall arise out of or in connection with the services against Investosquare. 
                Neither Investosquare nor any of its agents or licensors or group companies shall be liable to user/ any third party, 
                for any direct, indirect, incidental, special or consequential loss or damages (including, without limitation for loss of 
                profit, business opportunity or loss of goodwill) whatsoever, whether in contract, tort,
               misrepresentation or otherwise arising from the use of these tools/ information contained / data generated herein.</p>
        </div>
      </div>

      {/* let p = Initial Investment
      let i = Expected Return  / 100 / 12; //return
      let n = Period of Investment (yrs) * 12; //no of month
      let result = p * (Math.pow(1 + i, n) - 1) * ((1 + i) / i).toFixed(2); */}
    
    
    </>
  )
}

export default sip;