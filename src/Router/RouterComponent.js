import {Routes,Route} from 'react-router-dom'
import Api from '../Api/Api'
import Userdetails from '../UserDeatail/Userdetails'

function RouterComponent() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Api/>}/>
                <Route path='/user/:id' element={<Userdetails/>}/>
            </Routes>
        </div>
    )
}

export default RouterComponent
