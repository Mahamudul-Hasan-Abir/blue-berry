import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-6 py-2 rounded-md"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">This is a Modal</h2>
            <p className="mb-4">Here is some content inside the modal.</p>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded-md absolute top-4 right-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
