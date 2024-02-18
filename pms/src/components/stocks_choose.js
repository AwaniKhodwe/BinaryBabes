import React from "react";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import axios from 'axios'; // Import Axios

function Stocks({ stocks }) {

  // Function to handle adding a stock
  const handleAddStock = async (stock) => {
    try {
      // Replace 'userId' with the actual user ID
      const username = 'darshini'; 
      
      // Make a POST request to the backend
      await axios.post('http://localhost:5000/addstocks/addStock', {
        username,
        assetname: stock.name,
        value: stock.faceValue
      });

      // Handle success (optional)
      alert('Stock added successfully!');
    } catch (error) {
      // Handle error (optional)
      console.error('Error adding stock:', error);
      alert('Failed to add stock');
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {stocks.map((stock, index) => (
        <div key={index} className="relative bg-white shadow-md rounded-lg p-2">
          <h2 className="text-lg font-bold mb-2">{stock.name}</h2>
          <div className="absolute top-0 right-0">
            <AddCircleRoundedIcon
              className="m-2 text-violet hover:text-violet/60 cursor-pointer"
              onClick={() => handleAddStock(stock)}
            />
          </div>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Face Value:</span> {stock.faceValue}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Industry:</span> {stock.industry}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Sector:</span> {stock.sector}
          </p>
        </div>
      ))}
    </div>
  );
}

const stocks = [
    {
      name: "SIMPLEX PAPERS LTD.",
      faceValue: 1000,
      industry: "Paper & Paper Products",
      sector: "Commodities",
    },
    {
      name: "SIMPLEX MILLS COMPANY LTD.",
      faceValue: "50",
      industry: "Finance",
      sector: "Banking",
    },
    {
      name: "Jamshri Realty Ltd-$",
      faceValue: "25",
      industry: "Healthcare",
      sector: "Pharmaceuticals",
    },
    {
      name: "KAUSHALYA INFRASTRUCTURE",
      faceValue: "75",
      industry: "Energy",
      sector: "Renewables",
    },
    {
      name: "KAYCEE INDUSTRIES LTD.",
      faceValue: "150",
      industry: "Consumer Goods",
      sector: "Retail",
    },
    {
      name: "The Yamuna Syndicate Ltd",
      faceValue: "100",
      industry: "Technology",
      sector: "IT",
    },
    {
      name: "SOUTHERN GAS LTD.",
      faceValue: "50",
      industry: "Finance",
      sector: "Banking",
    },
    {
      name: "RAJA BAHADUR INTERNATIONAL LTD.",
      faceValue: "25",
      industry: "Healthcare",
      sector: "Pharmaceuticals",
    },
    {
      name: "Axis NIFTY IT ETF",
      faceValue: "75",
      industry: "Energy",
      sector: "Renewables",
    },
    {
      name: "SHAH CONSTRUCTION CO.LTD.",
      faceValue: "150",
      industry: "Consumer Goods",
      sector: "Retail",
    },
  ];

function App() {
  return (
    <div className="App">
      <Stocks stocks={stocks} />
    </div>
  );
}

export default App;

