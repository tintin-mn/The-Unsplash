import ImageShow from "./ImageShow.jsx";

const ImageList = ({ images }) => {
  const loadImages = images?.map((image) => {
    return <ImageShow key={image?.id} image={image} />;
  });
  return (
    <div className="grid grid-cols-2 gap-2 mx-3">
      {loadImages}
    </div>
  );
};

export default ImageList;