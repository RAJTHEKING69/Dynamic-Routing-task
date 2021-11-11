import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

function Api() {
     const [userData,setUserData] = useState([]);
     const [pageNumber,setPageNumber] = useState(1);

     const getUserData = async() => {
         const response = await fetch(` https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=14`,{
         method : 'GET',
         headers : {
             'app-id' : '618224858da6bdeedeb7fbea'
         }
        }
         )
         const {data} = await response.json();
         setUserData(data);
     }

     const handleClick = (e)=>{
         setPageNumber(e)
     } 

    useEffect(() => {
        getUserData();
    }, [pageNumber])

    return (
        <div>
            
            <div className="container">
                <div className="row">
                    {
                        userData.map((user)=>(
                            <div className="col-md-5 m-4">
                                <Link to={`/user/${user.id}`} className='text-decoration-none'>
                                <div className="card">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img className='img-fluid p-3' src={user.picture} alt={user.firstName} />
                                        </div>
                                        <div className="col-md-8">
                                            <p className='mt-3'>ID: {user.id}</p>
                                            <p>{user.firstName + ' ' + user.lastName}</p>
                                        </div>
                                    </div>

                                </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className='container '>
                    {
                        [1,2,3,4,5,6].map((num)=>(
                            <button className='btn btn-info m-5' onClick={()=>{handleClick(num)}}>{num}</button>
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Api
