
import MainPage from './pages/MainPage';
import { useDarkMode } from './hooks/useDarkMode';
import { useJeff } from './hooks/useJeff';

function App() {

  const input = useDarkMode()
  const banana = useJeff()

  return (
    
    <div className={input.isDarkMode ? "dark" : "light"}>
      <button onClick={input.toggleDarkMode}>Dark/Light</button>
    
      <div className={banana.isThereJeff ? "jeff" : "light"}>
      <button onClick={banana.toggleJeff}>Jeff/No Jeff</button>
      </div>
      <MainPage className="main"/>
    </div>
  );
}

export default App;
