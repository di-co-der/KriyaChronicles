import React, { useRef, useState } from "react";

const Camera = () => {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);

  // Start Camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true, // Enables video
      });
      videoRef.current.srcObject = stream;
    } catch (err) {
      setError("Unable to access the camera. Please allow camera permissions.");
      console.error(err);
    }
  };

  // Stop Camera
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  // Call `startCamera` when the component mounts
  React.useEffect(() => {
    startCamera();
    return () => stopCamera(); // Clean up when unmounting
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-28">
      <h1 className="text-2xl font-bold mb-4">Camera</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <video ref={videoRef} autoPlay playsInline className="border rounded-lg w-full max-w-md"></video>
      )}
      <button
        onClick={stopCamera}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600"
      >
        Stop Camera
      </button>
    </div>
  );
};

export default Camera;
