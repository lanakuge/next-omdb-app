import { useState } from "react";

function Tutorial() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("id-ID"));
  const [person, setPerson] = useState({
    name: "Nizhar",
    age: 19,
  });

  setInterval(() => {
    setTime(new Date().toLocaleTimeString("id-ID"));
  }, 1000);

  return (
    <>
      <p>{time}</p>
      <input
        className="input input-sm input-bordered"
        type="text"
        onChange={e => {
          setPerson({ ...person, name: e.target.value });
        }}
        value={person.name}
      />
      <input
        className="input input-sm input-bordered"
        type="text"
        onChange={e => {
          setPerson({ ...person, age: e.target.value });
        }}
        value={person.age}
      />
      <p>Nama : {person.name}</p>
      <p>Umur : {person.age}</p>
    </>
  );
}

export default Tutorial;
