import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import SIP from './sip_calc';
import Lumpsum from './lumsum_calc';

function Calculator() {
  const [sipClick, setSipClick] = useState(true);
  const [lumpsumClick, setLumpsumClick] = useState(false);

  const handleSipChange = () => {
    setSipClick(true);
    setLumpsumClick(false);
  };

  const handleLumpsumChange = () => {
    setLumpsumClick(true);
    setSipClick(false);
  };

  return (
    <>
      <Navbar />
      <div className="mt-16 mx-auto max-w-lg px-4">
        <div className="s_card1 s_heading p-4">
          <h1 className="text-base md:text-xl mb-2 text-center">Calculate SIP or Lumpsum</h1>
          <div className="flex mt-4 justify-center">
            <div className="mr-2">
              <button onClick={handleSipChange} className={`rounded-2xl w-32 ${sipClick ? 'bg-orange-500 text-white' : 'bg-orange-100 hover:bg-orange-300'}`}>SIP</button>
            </div>
            <div>
              <button onClick={handleLumpsumChange} className={`rounded-2xl w-32 ${lumpsumClick ? 'bg-orange-500 text-white' : 'bg-orange-100 hover:bg-orange-300'}`}>Lumpsum</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 mx-auto max-w-lg px-4">
        {sipClick ? <SIP /> : <Lumpsum />}
      </div>
    </>
  );
}

export default Calculator;
