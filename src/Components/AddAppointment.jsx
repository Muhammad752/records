import { BiCalendarPlus } from "react-icons/bi";
import "./AddAppointment.scss";
import { useReducer, useState } from "react";

export const AddAppointment = ({ onSendAppointment, last }) => {
  const [toggleForm, setToggleForm] = useReducer((a) => !a, false);

  const emptyFormData = {
    ownerName: "",
    petName: "",
    aptDate: "",
    aptTime: "",
    aptNotes: "",
  };

  const [formData, setFormData] = useState(emptyFormData);

  const pushFormData = (ev) => {
    console.log(ev);
    const appointment = {
      id: last + 1,
      ownerName: formData.ownerName,
      petName: formData.petName,
      aptDate: formData.aptDate + " " + formData.aptTime,
      aptNotes: formData.aptNotes,
    };
    onSendAppointment(appointment);
    setToggleForm(!toggleForm);
    setFormData(emptyFormData);
  };

  return (
    <div>
      <button
        onClick={setToggleForm}
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md ${
          toggleForm ? "rounded-t-md" : "rounded-md"
        } transition-all`}
      >
        <div>
          <BiCalendarPlus className="inline-block align-text-top" /> Add
          Appointment
        </div>
      </button>
      {toggleForm && (
        <form
          className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4"
          onSubmit={pushFormData}
        >
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="ownerName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Owner Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                onChange={(ev) => {
                  setFormData({ ...formData, ownerName: ev.target.value });
                }}
                value={formData.ownerName}
                name="ownerName"
                id="ownerName"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="petName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Pet Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                onChange={(ev) => {
                  setFormData({ ...formData, petName: ev.target.value });
                }}
                value={formData.petName}
                name="petName"
                id="petName"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptDate"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                onChange={(ev) => {
                  setFormData({ ...formData, aptDate: ev.target.value });
                }}
                value={formData.aptDate}
                name="aptDate"
                id="aptDate"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptTime"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Time
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="time"
                onChange={(ev) => {
                  setFormData({ ...formData, aptTime: ev.target.value });
                }}
                value={formData.aptTime}
                name="aptTime"
                id="aptTime"
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptNotes"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Appointment Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                id="aptNotes"
                onChange={(ev) => {
                  setFormData({ ...formData, aptNotes: ev.target.value });
                }}
                value={formData.aptNotes}
                name="aptNotes"
                rows="3"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Detailed comments about the condition"
              ></textarea>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
