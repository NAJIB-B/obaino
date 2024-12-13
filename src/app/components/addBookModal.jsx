import { useState } from 'react';

import { useCreateBookMutation } from '../services/dashboard';
import LoadingPage from './loadingPage';

const AddBookModal = ({ isOpen, closeModal}) => {
	const [createBook, {isLoading}] = useCreateBookMutation()
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
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
	formData.append('link', link);
    formData.append('description', description);

    try {

		const response = await createBook(formData).unwrap()
      
      console.log('book created:', response); 
      closeModal();
    } catch (error) {
      console.error('Error uploading the image:', error);
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
          className="absolute top-2 right-2 text-xli text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold text-center mb-4">Add A Book</h2>
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
            <label htmlFor="link" className="block text-sm font-medium text-gray-700">
              Link
            </label>
            <input
              type="text"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
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


export default AddBookModal;