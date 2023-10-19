import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
    const imageStyle = {
        height: '200px',
        width: 'auto',
        margin: '0 10px', // Add margin to the right and left of the image
    };

    return (
        <div>
            <p className="text-center font-bold text-4xl mt-10">Our Feature Product</p>
            <Marquee pauseOnHover className="h-[300px] mt-10 mb-10">
                <img
                    src="https://i.ibb.co/Z2250zW/iphone-14.png"
                    alt=""
                    style={imageStyle}
                />
                <img
                    src="https://i.ibb.co/9cNDNTg/Mac-Book-Air-15inch-5.webp"
                    alt=""
                    style={imageStyle}
                />
                <img
                    src="https://i.ibb.co/nzY0ZQQ/appleaheadphon.jpg"
                    alt=""
                    style={imageStyle}
                />
                <img
                    src="https://i.ibb.co/41xS77Q/Apple-20-W-Type-C-Power-Adapter-with-Cable-UK-1.jpg"
                    alt=""
                    style={imageStyle}
                />
                <img
                    src="https://i.ibb.co/8r2nyb4/best-samsung-laptops.jpg"
                    alt=""
                    style={imageStyle}
                />
            </Marquee>
        </div>
    );
};

export default MarqueeSlider;
