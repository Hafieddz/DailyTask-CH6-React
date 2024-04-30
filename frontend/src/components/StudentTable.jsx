import React, { useEffect, useState } from "react";
import { Button, Table } from "flowbite-react";
import { Spinner } from "flowbite-react";

function StudentTable({ students, isLoading, sendData }) {
  function handleData(data) {
    sendData(data);
  }

  return (
    <>
      {isLoading && (
        <div className="overflow-hidden w-full h-full justify-center flex items-center">
          <Spinner color="info" className="w-24 h-24" />
        </div>
      )}
      {!isLoading && students.length > 0 && (
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Student Name</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>City</Table.HeadCell>
              <Table.HeadCell>Age</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {students.map((student) => (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={student._id}
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {student.name}
                  </Table.Cell>
                  <Table.Cell>{student.email || "-"} </Table.Cell>
                  <Table.Cell>{student.city}</Table.Cell>
                  <Table.Cell>{student.age}</Table.Cell>
                  <Table.Cell className="flex gap-3">
                    <Button
                      className="px-1"
                      color="success"
                      onClick={() =>
                        handleData({ ...student, options: "update" })
                      }
                    >
                      Edit
                    </Button>
                    <Button
                      className="px-1"
                      color="failure"
                      onClick={() =>
                        handleData({ ...student, options: "delete" })
                      }
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </>
  );
}

export default StudentTable;
