import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Survey from './Components/Survey'
import Iteration1 from './Components/Iteration1'
import Iteration2 from './Components/Iteration2'
import Final from './Components/Final'
import Navbar from './Components/Navbar';
import AudioRecorder from './Components/AudioRecorder';


function App() {
  const [count, setCount] = useState(0)
  
  const [option1, setOption1] =useState()
  const [option2, setOption2] =useState()
  const [name, setName] = useState()
  const [srn, setSrn] = useState()
  const [email, setEmail] = useState()
  const [cls, setCls] = useState()
  const [phone, setPhone] = useState()

  return (
    <div>
      <div></div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home name={setName} srn={setSrn} email={setEmail} cls={setCls} phone={setPhone}  />}/>
          <Route path='/survey' element={<Survey/>}/> 
          <Route path='/test1' element={<Iteration1 option1={setOption1}/>}/>
          <Route path='/test2' element={<Iteration2 name={name} srn={srn} email={email} cls={cls} phone={phone} option1={option1} />}/>
          <Route path='/final' element={<Final/>}/>
          <Route path='/audio' element={<AudioRecorder />} />
        </Routes>
        
      </Router>
    </div>
  )
}

export default App
