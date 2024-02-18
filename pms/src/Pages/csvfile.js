import React, { useState } from 'react';
import axios from 'axios';

function CsvFile() {
  const [file, setFile] = useState(null);
  const [sums, setSums] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please choose a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/calccsv/upload-csv', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSums(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {sums && (
        <div>
          <p>Sum of Bonds: {sums.sumBonds}</p>
          <p>Sum of Equity: {sums.sumEquity}</p>
          <p>Sum of Mutual Funds: {sums.sumMutualFunds}</p>
        </div>
      )}
    </div>
  );
}

export default CsvFile;