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

  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');
  const [selectedOption5, setSelectedOption5] = useState('');
  const [selectedOption6, setSelectedOption6] = useState('');
  const [selectedOption7, setSelectedOption7] = useState('');
  const [selectedOption8, setSelectedOption8] = useState('');
  const [selectedOption9, setSelectedOption9] = useState('');
  const [selectedOption10, setSelectedOption10] = useState('');
  const [selectedOption11, setSelectedOption11] = useState('');
  const [selectedOption12, setSelectedOption12] = useState('');
  const [selectedOption13, setSelectedOption13] = useState('');
  const [selectedOption14, setSelectedOption14] = useState('');
  const [selectedOption15, setSelectedOption15] = useState('');
  const [selectedOption16, setSelectedOption16] = useState('');
  const [selectedOption17, setSelectedOption17] = useState('');
  const [selectedOption18, setSelectedOption18] = useState('');
  const [selectedOption19, setSelectedOption19] = useState('');
  const [selectedOption20, setSelectedOption20] = useState('');



  return (
    <div>
      <div></div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home name={setName} srn={setSrn} email={setEmail} cls={setCls} phone={setPhone}  />}/>
          <Route path='/survey' element={<Survey setSelectedOption1={setSelectedOption1} setSelectedOption2={setSelectedOption2} setSelectedOption3={setSelectedOption3} setSelectedOption4={setSelectedOption4} setSelectedOption5={setSelectedOption5} setSelectedOption6={setSelectedOption6} setSelectedOption7={setSelectedOption7} setSelectedOption8={setSelectedOption8} setSelectedOption9={setSelectedOption9} setSelectedOption10={setSelectedOption10} setSelectedOption11={setSelectedOption11} setSelectedOption12={setSelectedOption12} setSelectedOption13={setSelectedOption13} setSelectedOption14={setSelectedOption14} setSelectedOption15={setSelectedOption15} setSelectedOption16={setSelectedOption16} setSelectedOption17={setSelectedOption17} setSelectedOption18={setSelectedOption18} setSelectedOption19={setSelectedOption19} setSelectedOption20={setSelectedOption20} selectedOption1={selectedOption1} selectedOption2={selectedOption2} selectedOption3={selectedOption3} selectedOption4={selectedOption4} selectedOption5={selectedOption5} selectedOption6={selectedOption6} selectedOption7={selectedOption7} selectedOption8={selectedOption8} selectedOption9={selectedOption9} selectedOption10={selectedOption10} selectedOption11={selectedOption11} selectedOption12={selectedOption12} selectedOption13={selectedOption13} selectedOption14={selectedOption14} selectedOption15={selectedOption15} selectedOption16={selectedOption16} selectedOption17={selectedOption17} selectedOption18={selectedOption18} selectedOption19={selectedOption19} selectedOption20={selectedOption20}/>}/> 
          <Route path='/test1' element={<Iteration1 option1={setOption1}/>}/>
          <Route path='/test2' element={<Iteration2 name={name} srn={srn} email={email} cls={cls} phone={phone} option1={option1} selectedOption1={selectedOption1} selectedOption2={selectedOption2} selectedOption3={selectedOption3} selectedOption4={selectedOption4} selectedOption5={selectedOption5} selectedOption6={selectedOption6} selectedOption7={selectedOption7} selectedOption8={selectedOption8} selectedOption9={selectedOption9} selectedOption10={selectedOption10} selectedOption11={selectedOption11} selectedOption12={selectedOption12} selectedOption13={selectedOption13} selectedOption14={selectedOption14} selectedOption15={selectedOption15} selectedOption16={selectedOption16} selectedOption17={selectedOption17} selectedOption18={selectedOption18} selectedOption19={selectedOption19} selectedOption20={selectedOption20}  />}/>
          <Route path='/final' element={<Final/>}/>
          <Route path='/audio' element={<AudioRecorder />} />
        </Routes>
        
      </Router>
    </div>
  )
}

export default App
