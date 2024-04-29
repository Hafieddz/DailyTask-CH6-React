import React, { useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

function DeleteModal({ isOpen, onClose, data }) {
  const [openModal, setOpenModal] = useState(isOpen);

  useEffect(() => {
    setOpenModal(isOpen);
  }, [isOpen]);

  return (
    <>
      <Modal show={openModal} size="md" onClose={onClose} popup>
        <Modal.Header className="bg-slate-200" />
        <Modal.Body className="bg-slate-200">
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure want to delete this student?
            </h3>
            <div className="flex justify-center gap-4">
              <form
                action={`http://localhost:8000/api/v1/students/delete/${data._id}`}
                method="POST"
              >
                <Button color="failure" type="submit">
                  Yes, I'm sure
                </Button>
              </form>
              <Button color="gray" onClick={onClose}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteModal;
