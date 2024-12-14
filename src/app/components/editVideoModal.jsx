import { useState } from 'react';

import { useUpdateVideoMutation } from '../services/dashboard';
import LoadingPage from './loadingPage';

const EditVideoModal = ({ isOpen, closeModal}) => {


	const [updateVideo, {isLoading}] = useUpdateVideoMutation()
  const [ytVideo, setYtVideo] = useState("");




  const handleSubmit = async (e) => {
    e.preventDefault();

	const unedited = ytVideo;

	const parts = ytVideo.split("/")
	const end = parts[parts.length - 1]
	const start = "https://www.youtube.com/embed/"

	const final = start + end




    const formData = new FormData();
    formData.append('link', ytVideo);

	const body = {
		link: final
	}




    try {

		const response = await updateVideo(body).unwrap()
      
      console.log('video updated:', response); 
     closeModal();
    } catch (error) {
      console.log('Error uploading the image:', error);
    }
  };

  if (!isOpen) return null; // Don't render modal if not open



  return (
	<>
	{isLoading ? <LoadingPage></LoadingPage> : ""}
	    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold text-center mb-4">Change Video</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="link" className="block text-sm font-medium text-gray-700">
              Youtube video link
            </label>
            <input
              type="text"
              id="link"
              value={ytVideo}
              onChange={(e) => setYtVideo(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>


          <div className="flex justify-center">
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md">
              Change Video
            </button>
          </div>
        </form>
      </div>
    </div>
	</>

  );
};


export default EditVideoModal;