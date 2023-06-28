import logo from './logo.svg';
import './App.css';
import Covid from './component/covid';


function App() {
  const myFunction = () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
    });
  };
  return (
  
      <div className="App">
        <div class="text-right p-2">
          <button onClick={myFunction} id='darkModeToggle' className='btn'><span>~ Dark Mode</span>
          </button>
        </div>
        <Covid />
      </div>
   
  );
}

export default App;
