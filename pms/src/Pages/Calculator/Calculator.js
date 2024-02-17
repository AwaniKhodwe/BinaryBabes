import {React, useState} from "react";
import Header from '../components/InvestoCartNext/admin/header';
import SIP from './sip_calc';
import Lumpsum from './lumsum_calc'

function calculator()
{
    const [sipClick, setSipClick] = useState(true);
    const [lumpsumClick, setLumpsumClick] = useState(false);

    const handleSipChange= () =>{
        setSipClick(true);
        setLumpsumClick(false);
    }

    const handleLumpsumChange = () => {
        setLumpsumClick(true);
        setSipClick(false);
    }
    return(
        <>
            <Header />
            <div style={{paddingTop: "100px"}}>
                <div className="mx-auto s_card1 s_heading p-4">
                    <h1 className="text-justify mb-2 text-base text-xl">Calculate SIP or Lumpsum</h1>
                    <div className="flex mt-4">
                        <div className="mr-2 ">
                            {sipClick ? <button onClick={handleSipChange} className="rounded-2xl bg-orange-500 w-32 ">SIP</button> 
                            : <button onClick={handleSipChange} className="rounded-2xl bg-orange-100 w-32 hover:bg-orange-300">SIP</button>}
                            
                        </div>
                        <div>
                            {lumpsumClick ? <button onClick={handleLumpsumChange} className="rounded-2xl bg-orange-500 w-32 ">Lumpsum</button> 
                            : <button onClick={handleLumpsumChange} className="rounded-2xl bg-orange-100 w-32 hover:bg-orange-300">Lumpsum</button>}
                        </div>
                    </div>
                </div>
                
            </div>
            <div>
                {sipClick ? <SIP /> : <Lumpsum />}
            </div>
           

            
        </>
    )
}

export default calculator;