import React, { useEffect, useState } from 'react';

const MaskedImage = ({ src, alt, className, style }) => {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.crossOrigin = "Anonymous";

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw the image
            ctx.drawImage(img, 0, 0);

            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imgData.data;

            // Iterate through pixels to remove GREEN background
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                // Green Screen Logic: Green is significantly stronger than Red and Blue
                if (g > 100 && g > r + 30 && g > b + 30) {
                    data[i + 3] = 0; // Set alpha to 0 (transparent)
                }
            }

            ctx.putImageData(imgData, 0, 0);
            setImageSrc(canvas.toDataURL());
        };

        img.src = src;
    }, [src]);

    if (!imageSrc) return null;

    return (
        <img
            src={imageSrc}
            alt={alt}
            className={className}
            style={style}
        />
    );
};

export default MaskedImage;
