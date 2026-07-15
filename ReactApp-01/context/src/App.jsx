
import './App.css'
import About from './Screens/About/About'
import Home from './Screens/Home/Home'
import { UserProvider } from './Context/context'



function App() {
  return (
    <>
      {/* 3. Wrap your consuming components */}
      <UserProvider>
        
        <h1 className='text-3xl bg-red-300'>This is my Heading</h1>
        <Home />
        <About/>
      </UserProvider>
    </>
  )
}

export default App
