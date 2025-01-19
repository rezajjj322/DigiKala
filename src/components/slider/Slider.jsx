import axios from "axios";
import { useEffect, useState } from "react";

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios.get(
          "/v2/mobile/?__digicdn_js_challenge=cab5c7581059b12536d8e907a510f7bfab7e3767"
        );
        const responseData = await response.data;
        
        const widgetsData = responseData.data.widgets;
        const fullSlider = widgetsData.find((item) => item.type === "full_slider").data;
        setSlides(fullSlider);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    axiosData();
  }, []);

  // تغییر خودکار اسلاید ها

  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [slides]);

  if (loading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا: {error}</div>;

  return (
    <div className="relative w-full h-96 flex overflow-x-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 -z-40 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title || "اسلاید"}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              currentSlide === index ? "bg-blue-700 w-6" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          >
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
