export default function Plans() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Beat Your Bill</h1>
      <p>Upload your bill and we'll beat it!</p>
      <form className="mt-4" action="mailto:josh@islandwave.ca" method="post" encType="multipart/form-data">
        <input type="file" name="bill" className="border p-2 rounded mb-4" required />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send Bill</button>
      </form>
    </div>
  )
}