import { useState } from 'react';

export default function BeatYourBill() {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your bill has been sent to josh@islandwave.ca');
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-6 text-primary">Beat Your Bill</h1>
      <p className="mb-4">Upload your current Internet bill and we'll beat the price!</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input type="file" className="mb-4" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit" className="bg-secondary text-white px-6 py-3 rounded-full">Submit</button>
      </form>
    </div>
  );
}