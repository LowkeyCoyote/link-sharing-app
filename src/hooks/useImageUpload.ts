import { useState, useRef, ChangeEvent } from 'react';
import { toast } from 'react-toastify';

const useImageUpload = (initialImageUrl: string | null) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(initialImageUrl);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const img = new Image();
      img.onload = function () {
        const image = this as HTMLImageElement;
        if (image.width <= 1024 && image.height <= 1024) {
          setSelectedImage(file);
          setImagePreview(imageUrl);
        } else {
          toast.warning('Image width and height must be inferior to 1024 pixels');
        }
      };
      img.src = imageUrl;
    }
  };

  return {
    selectedImage,
    imagePreview,
    fileInputRef,
    handleDivClick,
    handleImageChange,
  };
};

export default useImageUpload;