import React, { useState, useRef, TouchEvent } from "react";

interface ImageSliderProps {
  images: Record<string, string>;
}

const sliderStyle: React.CSSProperties = {
  overflow: "hidden",
  position: "relative",
  width: "100%",
};

const trackStyle: React.CSSProperties = {
  display: "flex",
  transition: "transform 0.3s ease-in-out",
};

const slideStyle: React.CSSProperties = {
  flexShrink: 0,
  width: "100%",
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // 이미지 객체를 배열로 변환
  const imageArray = Object.values(images);

  const handleTouchStart = (e: TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !startX) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100 + (diff / window.innerWidth) * 100}%)`;
    }
  };

  const handleTouchEnd = () => {
    if (!startX) return;
    setIsDragging(false);
    const threshold = 0.2;
    const diffX = startX - window.innerWidth * currentIndex;
    if (Math.abs(diffX / window.innerWidth) > threshold) {
      const newIndex = diffX > 0 ? currentIndex - 1 : currentIndex + 1;
      setCurrentIndex(Math.max(0, Math.min(imageArray.length - 1, newIndex)));
    }
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };

  return (
    <div style={sliderStyle}>
      <div
        style={{ ...trackStyle, width: `${imageArray.length * 100}%` }}
        ref={trackRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {imageArray.map((imageUrl, index) => (
          <div key={index} style={slideStyle}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} style={{ width: `${100 / imageArray.length}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
