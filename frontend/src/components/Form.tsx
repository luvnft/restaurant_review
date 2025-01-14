import { ReviewVariant } from "@/models/Review";
import { FC } from "react";

interface FormProps {
  title: string;
  description: string;
  location: string;
  rating: number;
  variant: ReviewVariant;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  setLocation: (value: string) => void;
  setRating: (value: number) => void;
  handleSubmit: () => void;
}
const ReviewForm: FC<FormProps> = ({
  title,
  description,
  location,
  rating,
  variant,
  setTitle,
  setDescription,
  setLocation,
  setRating,
  handleSubmit,
}) => {
  const formSubmit = (e: any) => {
    e.preventDefault();
    if (rating < 0 || rating > 10) {
      alert("Rating must be between 0 and 10.");
      return;
    }
    handleSubmit();
  };
  return (
    <div>
      <div className="flex justify-center items-center mb-4">
        {/* Logo with text */}
        <img
          src="/solview.webp"
          alt="SOLVIEW Logo"
          className="h-10 mr-2"
        />
        <h1 className="text-2xl font-bold">SOLVIEW</h1>
        <p className="text-sm text-gray-500">Solana biz reviews</p>
      </div>
      <form
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(e) => formSubmit(e)}
      >
        <div className="w-full max-w-xs">
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2">
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2">
              W3W Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2">
              Rating
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rating"
              type="number"
              placeholder="Description"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              max={10}
              min={0}
            />
          </div>
  
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              {variant === ReviewVariant.add ? "Add Review" : "Edit Review"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

  export default ReviewForm;