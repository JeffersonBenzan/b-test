import { GifItem } from "./GifItem";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../App.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { useFetch } from "../hooks/useFetch";
import { getGif } from "../helpers/getGif";
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
export const GridGif = ({ gifts, category }) => {
    const [OriginalImages, setOriginalImages] = useState([]);
    const [showModal, setShowModal] = useState(false);
    
    useEffect(() => {
        if (showModal) {
            getImagesOriginal();
        }
    }, [showModal]);

    const getImagesOriginal = async () => {
        const data = await getGif(category, 'original');
        console.log(data);
        setOriginalImages(data.map((img=> img.url)));
    }

    const onClickHandler = () => {
        console.log("click");
        setShowModal(true);
    }
    return (
        <>
            <div className="grid">
                {gifts && gifts.length &&
                    gifts.map((gift, index) => (
                        <GifItem key={index} onClick={onClickHandler} {...gift} />
                    ))}
            </div>
        
        <Modal onClose={() => setShowModal(false)} show={showModal}>
            <div >
                <Carousel>
                    {OriginalImages && OriginalImages.length &&
                        OriginalImages.map((img, index) => (
                            <div key={index}>
                                <img src={img} />
                            </div>
                        ))}
                        
                </Carousel>
            </div>
        </Modal></>
    );
}
