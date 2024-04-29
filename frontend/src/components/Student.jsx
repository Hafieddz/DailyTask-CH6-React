import React, { useEffect, useState } from "react";
import StudentTable from "./StudentTable";
import Modals from "./DeleteModal";

function Student() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchStudents() {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8000/api/v1/students");
        const result = await response.json();
        setStudents(result.data);
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    }
    fetchStudents();
  }, []);
  return (
    <>
      <StudentTable students={students} isLoading={isLoading} />
    </>
  );
}

export default Student;
