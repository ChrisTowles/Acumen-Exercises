import MyCounter from '../components/MyCounter';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <MyCounter />
      </div>
    </div>
  );
}

export default Home;
