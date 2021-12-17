import './App.css';
import Headers from './components/header';
import HomePage from './components/home';

function App() {
  return (
   <div className="grid grid-rows-1">
     <header className='bg-white px-12 shadow-md py-2 sticky top-0 z-index'>
         <Headers/>
     </header>
      <div className="container px-20">
        <div className='grid grid-cols-6'>
          <div className='col-span-1'>
            {/* <h1>Sidebar</h1> */}
          </div>
          <div className='col-span-3 my-3'>
             <HomePage/>
          </div>
          <div className='col-span-2 p-2'>

          </div>
        </div> 
       </div> 
    </div>
  );
}

export default App;
