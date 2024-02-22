import SearchImages from "./components/SearchImages.jsx";
import { useState } from "react";
import fakeUnsplash from "./api/api.js";
import ImageList from "./components/ImageList.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await fakeUnsplash(term);
    setImages(result);
  };

  return (
    <main
      className="bg-gradient-to-t from-[#232526] to-[#414345] bg-fixed overflow-hidden min-h-screen flex flex-col items-center justify-between w-full">
      <div className="flex flex-col items-center justify-between py-6 gap-y-6">
        <SearchImages onSubmit={handleSubmit} />
        <ImageList images={images} />
        <Footer />
      </div>
    </main>
  );
};

export default App;