import React, { useState } from "react";
import Avatar from "@/components/ui/avatar";
import TweetTextBox from "./tweet-text-box";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { FiImage, FiX, FiLoader } from "react-icons/fi";
import axios from 'axios';

const CreateTweet = ({setE}:{setE:(val:boolean)=>void}) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const selector = useSelector(
    (state: RootState) => state.userReducer.userData
  );

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      const totalImages = selectedImages.length + newFiles.length;

      if (totalImages > 4) {
        alert("You can upload a maximum of 4 images");
        return;
      }

      const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));

      setSelectedImages((prev) => [...prev, ...newFiles]);
      setPreviewImages((prev) => [...prev, ...newPreviewUrls]);
    }
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setSelectedImages((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
    setPreviewImages((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  function handleTextChange(text: string) {
    setContent(text);
  }

  async function handlePost(e: React.FormEvent) {
    e.preventDefault();
    
    if (!content.trim() && selectedImages.length === 0) {
      alert("Please add some content or an image before posting.");
      return;
    }

    setIsLoading(true);
  
    const formData = new FormData();
    formData.append("content", content);
    formData.append("author", (selector.displayName) as string)
    formData.append("author_image", (selector.image) as string)

    if (selectedImages && selectedImages.length > 0) {
      selectedImages.forEach((image) => {
        formData.append("images", image);
      });
    }
  
    try {
      const response = await axios.post(
        `http://localhost:3001/api/v1/posts/create?userID=${selector.spotifyId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true
        }
      );
  
      console.log("Response:", response.data);
      
      setContent("");
      setSelectedImages([]);
      setPreviewImages([]);
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to post. Please try again.");
    } finally {
      setIsLoading(false);
      setE(true)
    }
  }

  return (
    <div>
      <div className="flex w-full justify-around text-center text-md text-gray-600">
        <div className="py-3 w-full hover:bg-primary hover:cursor-pointer text-white font-bold underline decoration-blue-400 decoration-4 underline-offset-[0.8rem]">
          Posts
        </div>
        <div className="py-3 w-full hover:bg-primary hover:cursor-pointer">
          Playlists
        </div>
      </div>
      <section className="px-4 py-4 grid grid-cols-[auto,1fr] gap-4 border-t">
        <Avatar
          src={
            selector.image
              ? selector.image
              : "https://avatars.githubusercontent.com/u/21146643?s=400&u=8f4932274619bcbee8f811f9e1dde0f2c6290af3&v=4"
          }
          alt="Profile"
        />
        <div className="w-full">
          <TweetTextBox 
            handleTextChange={handleTextChange} 
          />

          {previewImages.length > 0 && (
            <div
              className={`grid gap-2 mt-4 ${
                previewImages.length === 1
                  ? "grid-cols-1"
                  : previewImages.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-2"
              }`}
            >
              {previewImages.map((src, index) => (
                <div key={index} className="relative">
                  <img
                    src={src}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
                  >
                    <FiX size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between gap-4 mt-4">
            <div className="flex items-center">
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="image-upload"
                className={`hover:bg-sky-100 p-2 rounded-full transition-colors duration-500 ease-out cursor-pointer ${
                  previewImages.length >= 4
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <FiImage size={24} className="text-primary" />
              </label>
              {previewImages.length > 0 && (
                <span className="ml-2 text-sm text-gray-500">
                  {previewImages.length}/4
                </span>
              )}
            </div>
            <button
              onClick={handlePost}
              disabled={isLoading}
              className={`
                bg-primary 
                hover:bg-sky-400 
                hover-transition 
                px-5 
                py-2 
                text-white 
                font-bold 
                rounded-full 
                max-w-2xl 
                mobile:w-auto
                flex 
                items-center 
                justify-center
                ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {isLoading ? (
                <>
                  <FiLoader className="mr-2 animate-spin" />
                  Posting...
                </>
              ) : (
                "Post"
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateTweet;