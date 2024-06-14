const Alerrt = ({ message, onClose }: { message: string; onClose: any }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-2">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-80 md:max-w-sm mx-auto">
        <h2 className="font-bold text-lg mb-4">Thank you for your message!</h2>
        <p className="mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Alerrt;
