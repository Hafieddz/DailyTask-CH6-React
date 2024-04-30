import React, { useEffect, useState } from "react";
import StudentTable from "./StudentTable";

function Student({sendData}) {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    async function fetchStudents() {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8000/api/v1/students");
        const result = await response.json();
        setStudents(result.data);
      } catch (error) {
        setErrorMsg("Failed to fetch data!");
      }
      setIsLoading(false);
    }
    fetchStudents();
  }, []);

  function handleData(data) {
    sendData(data);
  }

  return (
    <>
      {errorMsg && (
        <h2 className="text-xl font-bold flex justify-center"> {errorMsg} </h2>
      )}
      <StudentTable
        students={students}
        isLoading={isLoading}
        sendData={handleData}
      />
    </>
  );
}

export default Student;
