import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <header className="bg-primary text-white p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">IslandWave</h1>
        <nav>
          <Link href="/" className="mx-2">Home</Link>
          <Link href="/plans" className="mx-2">Plans</Link>
          <Link href="/beat-your-bill" className="mx-2">Beat Your Bill</Link>
          <Link href="/community" className="mx-2">Community</Link>
          <Link href="/marketplace" className="mx-2">Marketplace</Link>
          <Link href="/legal" className="mx-2">Legal</Link>
        </nav>
      </header>
      <main className="p-10 text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">Welcome to IslandWave</h2>
        <p className="text-lg mb-8">The fastest Internet on Vancouver Island with unbeatable deals.</p>
        <Link href="/beat-your-bill">
          <button className="bg-secondary text-white px-6 py-3 rounded-full text-xl">Beat Your Bill</button>
        </Link>
      </main>
      <footer className="bg-gray-100 p-6 text-center">
        <p>© 2025 IslandWave Internet Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}