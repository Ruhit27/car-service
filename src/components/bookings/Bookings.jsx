import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingTable from './BookingTable';
import axios from 'axios';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:3000/bookings/${user?.email}`
    useEffect(() => {
       axios.get(url,{withCredentials:true})
       .then(res=>{
        setBookings(res.data)
       })
    }, [])

    const deleteBtn=(id) =>{
        const procced = confirm('Are you sure you want to delete')
        if(procced)
        {
            fetch(`http://localhost:3000/bookings/${id}`, {
                method: "DELETE"
            })
         .then(res=>res.json())
         .then(data=>{
             
          if(data.deletedCount>0)
          {
            alert('Deleted successfully')
            const remaining = bookings.filter(booking=>booking._id != id) 
            setBookings(remaining)
          }
           
         })
        }     

    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                  
                 
                      {
                        bookings.map(booking=> <BookingTable key={booking._id} booking={booking} deleteBtn={deleteBtn} ></BookingTable>)
                      }
                   
                </tbody>
             

            </table>
        </div>
    );
};



export default Bookings;