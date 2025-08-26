
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <header className="w-full bg-blue-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Islandwave</h1>
        <nav>
          <Link href="/beat-your-bill" className="mx-2">Beat Your Bill</Link>
          <Link href="/legal" className="mx-2">Legal</Link>
          <Link href="/community" className="mx-2">Community</Link>
        </nav>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-3xl font-bold mb-4">Welcome to Islandwave</h2>
        <p className="text-lg text-gray-700 mb-6">Better Internet. Better Community.</p>
        <Link href="/beat-your-bill" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Beat Your Bill</Link>
      </main>
    </div>
  )
}
