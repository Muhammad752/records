import './App.css';
import { useState, useEffect, useCallback } from 'react';
import { BiCalendar } from 'react-icons/bi';
import { AddAppointment } from './Components/AddAppointment';
import Search from './Components/Search';
// import appointmentList from "./data.json"
import AppointmentInfo from './Components/AppointmentInfo';

function App() {
  const [appointmentList, setAppointmentList] = useState([])
  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setAppointmentList(data)
      })
  }, []);

  useEffect(() => {
    fetchData()
  }, [fetchData])
  return (
    <div className="App container mx-auto mt-3 font-thin w-4/5">
      <h1 className="text-5xl mb-12">
        <BiCalendar className="inline-block text-red-400 align-top" />Your Appointments</h1>
      <AddAppointment />
      <Search data={appointmentList} />

      <ul className="divide-y-2 divide-gray-200">
        {appointmentList.map((appointment) => (
          <AppointmentInfo appointment={appointment} key={appointment.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
