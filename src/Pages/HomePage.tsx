import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [roomId, setRoomId] = useState<string>("");
  const navigate = useNavigate();

  const handleRoomIdGenerate = () => {
    const randomId = Math.random().toString(36).substring(2, 9);
    const timestamp = Date.now().toString().slice(-4); // Fixed substring -> slice
    setRoomId(randomId + timestamp);
  };

  const handleNavigation = (type: "one-on-one" | "group-call") => {
    if (!roomId) {
      alert("Please Generate Room Id First");
      return;
    }
    navigate(`/room/${roomId}?type=${type}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-50 font-sans">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Welcome to Video Calling App
        </h1>
        <p className="text-lg text-gray-600 mb-5">
          Start a video call with a randomly generated Room ID
        </p>

        <div className="flex items-center justify-center gap-2 mb-5">
          <input
            type="text"
            className="w-64 p-2.5 rounded border border-gray-300 text-center text-gray-700"
            placeholder="Generated Room ID"
            value={roomId}
            readOnly
          />
          <button
            onClick={handleRoomIdGenerate}
            className="px-4 py-2.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Generate
          </button>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleNavigation("one-on-one")}
            disabled={!roomId}
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            One-on-One Call
          </button>
          <button
            onClick={() => handleNavigation("group-call")}
            disabled={!roomId}
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Group Call
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;