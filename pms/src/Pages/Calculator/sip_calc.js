import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function SIP() {
  const [inv, setInv] = useState(0);
  const [invError, setInvError] = useState('');

  const handleInvChange = (event) => {
    const inputValue = event.target.value;

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

    if (inputValue === '' || /^\d+$/.test(inputValue)) {
      setTimePeriod(inputValue);
      setTimePeriodError('');
    } else {
      setTimePeriodError('Invalid input');
    }
  };

  const calculateTotalInv = () => {
    const inv1 = Number(inv);
    const tPeriod = Number(timePeriod);

    return inv1 * 12 * tPeriod;
  };

  const calculateSIP = () => {
    const p = Number(inv);
    const i = Number(retRate) / 100 / 12;
    const n = Number(timePeriod) * 12;
    const result = Math.round(p * (Math.pow(1 + i, n) - 1) * ((1 + i) / i).toFixed(2));

    return result;
  };

  return (
    <>
      <div className='pt-4'>
        <div className='mx-auto s_card1 s_heading p-4'>
          <h1 className=' text-justify mb-2 text-base'>What is SIP - Systematic Investment Plan</h1>
          <p className='text-justify font-thin text-sm'>Systematic Investment Plan, commonly referred to as SIP, is a preferred mode of investment offered by mutual fund companies that allows you to invest money regularly. The power of compounding enables to grow your funds over time to a sizeable corpus.</p>
        </div>
        <div className='mt-4 s_card2 mx-auto p-4 s_heading'>
          <h1 className='text-justify'>SIP Calculator</h1>
          <div className='flex mt-2'>
            <div>
              <div className='flex mt-2'>
                <div className='flex items-center'>
                  <p className='text-justify font-normal text-sm mb-2'>Monthly Investment</p>
                </div>
                <div className='ml-8' style={{ marginLeft: "430px" }}>
                  <span className='mr-2'>₹</span>
                  <input value={inv} onChange={handleInvChange} type='text' size={8} className={`border-b-2 solid ${invError ? 'text-red-500' : ''}`} />
                </div>
              </div>
              <div className='mt-2'>
                <Box width={656}>
                  <Slider
                    size="small"
                    defaultValue={70}
                    value={inv}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    style={{ color: '#EF731F' }}
                    min={1}
                    max={100000}
                  />
                </Box>
              </div>

              <div className='flex'>
                <div className='flex items-center'>
                  <p className='text-justify font-normal text-sm mb-2'>Expected Return Rate(p.a)</p>
                </div>
                <div className='ml-8' style={{ marginLeft: "390px" }}>
                  <input value={retRate} onChange={handleRetChange} type='text' size={8} className={`border-b-2 solid ${retRateError ? 'text-red-500' : ''}`} />
                  <span>%</span>
                </div>
              </div>

              <div className='mt-2'>
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
              </div>
              <div className='flex'>
                <div className='flex items-center'>
                  <p className='text-justify font-normal text-sm mb-2'>Time Period</p>
                </div>
                <div className='ml-8' style={{ marginLeft: "485px" }}>
                  <input value={timePeriod} onChange={handleTimeChange} type='text' size={8} className={`border-b-2 solid ${timePeriodError ? 'text-red-500' : ''}`} />
                  <span className='mr-2'>Yrs</span>
                </div>
              </div>
              <div className='mt-2'>
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
                  <p className='mb-4 mt-2'>₹ {calculateTotalInv()}</p>
                  <p className='mb-4'>₹ {calculateSIP() - calculateTotalInv()}</p>
                  <p className='mb-4'>₹ {calculateSIP()}</p>
                </div>
              </div>
            </div>
            <div className='div_right mb-4'>
              <div className='s_circle transform hover:scale-110 duration-300 ease-in-out' >
                <CircularProgressbarWithChildren
                  value={calculateTotalInv() * 100 / calculateSIP()} styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "#EF731F",
                    pathColor: "#EF731F",
                    trailColor: "grey"
                  })} strokeWidth={17} className='hover:scale-110'>
                  <div style={{ fontSize: 16, marginTop: -5 }}>
                    <p>Total Value</p>
                    <strong>₹ {calculateSIP()}</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <div className='text-justify text-sm font-thin pl-4 flex'>
                <div className='pl-4'>
                  <ul className='list-disc'>
                    <li className='text-slate-600 mb-2 mt-4' style={{ color: "#EF731F" }}>Invested Amount</li>
                    <li className='text-slate-600 mb-4'>Est. Returns</li>
                  </ul>
                </div>
                <div className='pl-56 font-extrabold'>
                  <p className='mb-2 mt-4'>₹ {calculateTotalInv()}</p>
                  <p className='mb-4'>₹ {calculateSIP() - calculateTotalInv()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto s_card3 px-4 pt-4 mt-4 flex'>
          <div className='mr-4'>
            <img src="/images/sip_calc.svg" alt="SIP Calculator" />
          </div>
          <div>
            <div className='s_heading' style={{ width: "1092px" }}>
              <h1 className='text-justify'>Here's an example to understand this better</h1>
              <p className='text-justify font-thin text-sm mt-4'>Let’s take the example of MS. S. She is a private sector employee who has decided to invest 5000 every month in a SIP for a minimum of 10 years. The expected rate of return for her investment is 12%. So as per the formula, the calculator will give out the following results:</p>
            </div>
            <div className='flex'>
              <div className='ml-2 inner_div'>
                <p className='text-sm font-thin text-white pt-4 pr-4 pl-4'>Total amount invested in the SIP</p>
                <div className='flex'>
                  <div>
                    <img className='pt-2 pl-4' src="/images/money1.svg" alt="Money 1" />
                  </div>
                  <div className='ml-2'>
                    <p className='text-2xl font-extrabold font-thin text-white'>6,00,000</p>
                  </div>
                </div>
              </div>
              <div className='mx-4 flex items-center'>
                <img src="/images/arrow.svg" alt="Arrow" />
              </div>
              <div className='inner_div'>
                <p className='text-sm font-thin text-white pt-4 pr-4 pl-4'>Total amount of maturity of the SIP</p>
                <div className='flex'>
                  <div>
                    <img className='pt-2 pl-4' src="/images/money2.svg" alt="Money 2" />
                  </div>
                  <div className='ml-2'>
                    <p className='text-2xl font-extrabold font-thin text-white'>11,61,695</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className='ml-2 text-justify font-thin text-sm mt-4'>However, as stated above, it is essential to keep in mind that the amount the Ms. S receives can be more or less than the figure in the calculator depending on the market conditions in these 2 years.</p>
            </div>
          </div>
        </div>
        <div className='text-justify mt-4 s_card4 mx-auto p-4 s_heading mb-16'>
          <p className='last_heading'>Disclaimer</p>
          <p className='text-justify font-thin text-sm mt-2 mb-4'>Investosquare does not guarantee accuracy, completeness or correct sequence of any the details provided therein and therefore no reliance should be placed by the user for any purpose whatsoever on the information contained / data generated herein or on its completeness / accuracy. The use of any information set out is entirely at the User's own risk. User should exercise due care and caution (including if necessary, obtaining of advice of tax/ legal/ accounting/ financial/ other professionals) prior to taking of any decision, acting or omitting to act, on the basis of the information contained / data generated herein. Investosquare does not undertake any liability or responsibility to update any data. No claim (whether in contract, tort (including negligence) or otherwise) shall arise out of or in connection with the services against Investosquare. Neither Investosquare nor any of its agents or licensors or group companies shall be liable to user/ any third party, for any direct, indirect, incidental, special or consequential loss or damages (including, without limitation for loss of profit, business opportunity or loss of goodwill) whatsoever, whether in contract, tort, misrepresentation or otherwise arising from the use of these tools/ information contained / data generated herein.</p>
        </div>
      </div>
    </>
  )
}

export default SIP;
