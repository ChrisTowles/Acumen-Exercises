import ListOfNames from '../components/ListOfNames';

const names = ['Chris', 'Paul', 'Douglas', 'Jordan'];

function Names() {
  return (
    <div>
      <h1>Names</h1>
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <ListOfNames names={names} />
      </div>
    </div>
  );
}

export default Names;
