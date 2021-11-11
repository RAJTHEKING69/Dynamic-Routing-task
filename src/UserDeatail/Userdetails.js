import {useState,useEffect} from 'react'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

function Userdetails() {
    const [userDetail,setUserDetail] = useState({})

    const {id} = useParams();
 
    const getUserDetails =async()=>{

        const {data} = await axios.get(`https://dummyapi.io/data/v1/user/${id}`,{
            headers:{
                'app-id' : '618224858da6bdeedeb7fbea'
            }
        })
        setUserDetail(data)
    }

    useEffect(() => {
        getUserDetails();
    }, [])

    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="row">
                        <div className="col-md-4 p-4 text-secondary">
                            <p><strong>ID:</strong>{userDetail.id}</p>
                             <img className='img-fluid w-50 p-4' src={userDetail.picture} alt={userDetail.firstName} />                           
                        </div>
                        <div className="col-md-4 p-4 text-secondary">
                            <section>
                                <p><strong>{userDetail.title + '. ' + userDetail.firstName + ' ' + userDetail.lastName}</strong></p>
                                <p><strong>Gender:</strong>{userDetail.gender}</p>
                                <p><strong>Date of Birth:</strong>{userDetail.dateOfBirth}</p>
                                <p><strong>Register date:</strong>{userDetail.registerDate}</p>
                                <p><strong>Email:</strong>{userDetail.email}</p>
                                <p><strong>Phone:</strong>{userDetail.phone}</p>
                            </section>
                        </div>
                        <div className="col-md-4 p-4 text-secondary">
                            <p><strong>Address</strong></p>
                            <p><strong>State :</strong>{userDetail?.location?.state}</p>
                            <p><strong>Street :</strong>{userDetail?.location?.street}</p>
                            <p><strong>City :</strong>{userDetail?.location?.city}</p>
                            <p><strong>Country :</strong>{userDetail?.location?.country}</p>
                            <p><strong>Timezone :</strong>{userDetail?.location?.timezone}</p>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userdetails
