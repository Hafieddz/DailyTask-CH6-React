import { useEffect, useState } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";

export default function FormModal({ data, title, isOpen, onClose }) {
  const [openModal, setOpenModal] = useState(isOpen);

  useEffect(() => {
    setOpenModal(isOpen);
  }, [isOpen]);

  let formAction;

  if (data) {
    formAction = `http://localhost:8000/api/v1/students/update/${data._id}`;
  } else {
    formAction = "http://localhost:8000/api/v1/students";
  }

  return (
    <Modal show={openModal} size="md" onClose={onClose} popup>
      <Modal.Header />
      <Modal.Body>
        <form action={formAction} method="POST">
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {title}
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="* Name" />
              </div>
              {!data ? (
                <TextInput id="name" name="name" required placeholder="Name" />
              ) : (
                <TextInput
                  id="name"
                  name="name"
                  required
                  defaultValue={data.name}
                />
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              {!data ? (
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email"
                />
              ) : (
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  defaultValue={data.email}
                />
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="age" value="* Age" />
              </div>
              {!data ? (
                <TextInput
                  id="age"
                  type="number"
                  required
                  placeholder="Age"
                  name="age"
                />
              ) : (
                <TextInput
                  id="age"
                  type="number"
                  required
                  name="age"
                  defaultValue={data.age}
                />
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="city" value="* City" />
              </div>
              {!data ? (
                <TextInput
                  id="city"
                  type="text"
                  required
                  placeholder="City"
                  name="city"
                />
              ) : (
                <TextInput
                  id="city"
                  type="text"
                  required
                  name="city"
                  defaultValue={data.city}
                />
              )}
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
