import logo from './logo.svg';
import './App.css';
import {TodoBox} from './components/TodoBox';
import { DataContextProvider } from './context/DataContext';

function App() {
  return (
    <DataContextProvider>
      <TodoBox/>
    </DataContextProvider>

  );
}

export default App;
