import React, { useEffect, useState } from "react";
import Student from "./components/Student";
import Header from "./components/Header";
import { Button } from "flowbite-react";
import DeleteModal from "./components/DeleteModal";
import FormModal from "./components/FormModal";

function App() {
  const [currentStudent, setCurrentStudent] = useState({});
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  function getData(data) {
    setCurrentStudent(data);
    if (data.options === "delete") {
      setShowDeleteModal(true);
    } else {
      setShowUpdateModal(true);
    }
  }

  return (
    <>
      <Header />
      <main className="bg-slate-200 p-5 h-screen flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black text-center">
            Student List
          </h1>
          <Button
            color="blue"
            className="px-5"
            onClick={() => setShowAddModal(true)}
          >
            Add Student
          </Button>
        </div>
        <Student sendData={getData} />
        <FormModal
          data={currentStudent}
          isOpen={showUpdateModal}
          onClose={() => {
            setShowUpdateModal(false);
            setCurrentStudent({});
          }}
          title="Update Student Data"
        />
        <DeleteModal
          data={currentStudent}
          isOpen={showDeleteModal}
          onClose={() => {
            setShowDeleteModal(false);
            setCurrentStudent({});
          }}
        />
        <FormModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          title="Add student data"
        />
      </main>
    </>
  );
}

export default App;
