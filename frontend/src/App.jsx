import React, { useEffect, useState } from "react";
import Student from "./components/Student";
import Header from "./components/Header";
import { Button } from "flowbite-react";
import AddModal from "./components/AddModal";

function App() {
  const [isAddModal, setIsAddModal] = useState(false);
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
            onClick={() => setIsAddModal(true)}
          >
            Add Student
          </Button>
        </div>
        <Student />
        <AddModal isOpen={isAddModal} onClose={() => setIsAddModal(false)} />
      </main>
    </>
  );
}

export default App;
