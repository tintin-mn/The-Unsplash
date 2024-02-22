const ImageShow = ({image}) => {
    return (
        <img src={image?.urls?.regular} alt='pic' className="rounded h-full"/>
    );
};

export default ImageShow;