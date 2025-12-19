import { Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Names from './views/Names';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
        <Link to="/names">Names</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/names" element={<Names />} />
      </Routes>
    </div>
  );
}

export default App;
