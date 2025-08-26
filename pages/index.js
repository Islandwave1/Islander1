export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <img src="/logo.png" alt="IslandWave Logo" className="w-40 mb-6" />
      <h1 className="text-4xl font-bold text-blue-700">Welcome to IslandWave</h1>
      <p className="mt-4 text-lg text-gray-700">Your trusted Internet Service Provider across Canada.</p>
      <a href="/plans" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">View Plans</a>
    </div>
  )
}