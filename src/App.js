import "./App.css";
import { useState, useEffect, useCallback } from "react";
import { BiCalendar } from "react-icons/bi";
import { AddAppointment } from "./Components/AddAppointment";
import Search from "./Components/Search";
// import appointmentList from "./data.json"
import AppointmentInfo from "./Components/AppointmentInfo";

function App() {
  const [appointmentList, setAppointmentList] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("petName");
  const [orderBy, setOrderBy] = useState("asc");

  const filteredAppointments = appointmentList
    .filter((item) => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      );
    })
    .sort((a, b) => {
      let order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setAppointmentList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="App container mx-auto mt-3 font-thin w-4/5">
      <h1 className="text-5xl mb-12 flex gap-5 justify-center my-5 py-5">
        <BiCalendar className="inline-block" />
        Your Appointments
      </h1>
      <AddAppointment
        onSendAppointment={(newApt) => {
          setAppointmentList([newApt, ...appointmentList]);
        }}
        last={appointmentList.reduce(
          (max, apt) => (Number(apt.id) > max ? Number(apt.id) : max),
          0
        )}
      />
      <Search
        data={appointmentList}
        query={query}
        onQueryChange={(myQuery) => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={(mySort) => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={(mySort) => setSortBy(mySort)}
      />

      <ul className="divide-y-2 divide-gray-200">
        {filteredAppointments.map((appointment) => (
          <AppointmentInfo
            appointment={appointment}
            key={appointment.id}
            onDeleteAppointment={(appointmentId) =>
              setAppointmentList(
                appointmentList.filter(
                  (appointment) => appointment.id !== appointmentId
                )
              )
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
