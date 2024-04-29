import React, { useEffect } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

function AddModal({ isOpen, onClose }) {
  const [openModal, setOpenModal] = useState(isOpen);

  useEffect(() => {
    setOpenModal(isOpen);
  }, [isOpen]);

  return (
    <Modal show={openModal} size="md" onClose={onClose} popup>
      <Modal.Header />
      <Modal.Body>
        <form action="http://localhost:8000/api/v1/students " method="POST">
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add Student
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="* Name" />
              </div>
              <TextInput
                id="name"
                name="name"
                required
                placeholder="Name"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                id="email"
                type="email"
                name="email"
                placeholder="email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="age" value="* Age" />
              </div>
              <TextInput
                id="age"
                type="number"
                required
                placeholder="Age"
                name="age"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="city" value="* City" />
              </div>
              <TextInput
                id="city"
                type="text"
                required
                placeholder="City"
                name="city"
              />
            </div>
            <div className="w-full">
              <Button className="px-2" type="submit">
                Save Form
              </Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default AddModal;
