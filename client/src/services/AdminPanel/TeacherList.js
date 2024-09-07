import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TeacherList() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        async function fetchBookings() {
            try {
                const response = await axios.get('http://13.53.168.244/api/bookings');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        }
        fetchBookings();
    }, []);

    return (
        <div>
            <h1>Bookings</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>All Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => (

                        <tr key={booking._id}>
                            <td>
                                <Link to={`/languageslist`} state={{ booking, teacherId: booking.data.teacherId }}>{booking.data.teacherName}</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TeacherList;
