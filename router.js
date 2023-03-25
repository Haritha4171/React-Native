import App from './firstpage'
import Details from './crud'
import Otp from './otpgen.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function Root(){
    return(
        <div>
           <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/crud" element={<Details/>}/>
                <Route path="/otpgen" element={<Otp/>}/>
            </Routes>
           </Router>
        </div>
    )
}
export default Root;