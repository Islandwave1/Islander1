
export default function BeatYourBill() {
  return (
    <div style={{ padding: '50px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h1>Beat Your Bill</h1>
      <p>Upload your current bill and we’ll beat it!</p>
      <form method="post" action="mailto:josh@islandwave.ca" encType="multipart/form-data">
        <input type="file" name="bill" accept="image/*,application/pdf" required style={{ marginBottom: '20px' }} />
        <br />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#16A34A', color: '#fff', border: 'none', borderRadius: '6px' }}>Send Bill</button>
      </form>
    </div>
  );
}
