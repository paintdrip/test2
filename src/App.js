import Completed from './components/Completed';
import NewTask from './components/NewTask';
import Todos from './components/Todos';
import './styles/App.css';

function App() {
  return (
    <div className="container">
      <NewTask />

      <Todos />

      <Completed />
    </div>
  );
}

export default App;
