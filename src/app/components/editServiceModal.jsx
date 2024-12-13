import { useState } from 'react';

import { useUpdateServiceMutation } from '../services/dashboard';
import LoadingPage from './loadingPage';

const EditServiceModal = ({ isOpen, closeModal, data}) => {


	const [updateService, {isLoading}] = useUpdateServiceMutation()
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);

    try {

const id = data.id
console.log("this is the id", id)
		const response = await updateService({body: formData, id}).unwrap()
      
      console.log('Service updated:', response); 
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
        <h2 className="text-2xl font-semibold text-center mb-4">Edit Service</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              rows="4"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
			  required
            />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
	</>

  );
};


export default EditServiceModal;