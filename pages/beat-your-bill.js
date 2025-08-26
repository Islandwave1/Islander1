
export default function BeatYourBill() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Beat Your Bill</h1>
      <p className="mb-4">Upload your current bill and we'll beat the price!</p>
      <form method="POST" action="mailto:josh@islandwave.ca" encType="multipart/form-data">
        <input type="file" name="bill" accept="image/*,.pdf" className="mb-4 block" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  )
}
