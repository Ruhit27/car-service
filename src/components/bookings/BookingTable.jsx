import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const BookingTable = (props) => {
  

    const { user } = useContext(AuthContext)
    console.log(user)
    const {_id} =props.booking 
    const { email, img, price, name, date } = props.booking.order;
    const {deleteBtn} = props
    return (
        <tr>
            <th>
                <button onClick={()=>deleteBtn(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="https://ew.com/thmb/Bjg9F5T08YEoTA9H6SgkAiXnJ4s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/League-of-Super-Pets-100722-5a89b6d9084643e098cb3a7eb55a48c3.jpg" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <td>

                <br />
                <span className="badge badge-ghost badge-sm">{date}</span>
            </td>
            <td>{price}</td>

        </tr>
    );
};

export default BookingTable;