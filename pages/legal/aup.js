import Layout from '../../components/Layout'
export default function AUP(){
  return (<Layout>
    <h1 className='text-3xl font-bold mb-4'>Acceptable Use Policy</h1>
    <ul className='list-disc pl-5 mt-3 space-y-1 text-white/80'>
      <li>No unlawful activity or rights infringement.</li>
      <li>No spam, malware, or network abuse.</li>
      <li>Residential plans are for personal, non-commercial use.</li>
    </ul>
  </Layout>)
}
