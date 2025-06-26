import '../../StyleSheets/style.css';
import '../../index'
import mirukuMatcha from '../../Assets/Products/Teas/mirukuMatcha.png'
import mizuMatcha from '../../Assets/Products/Teas/mizuMatcha.png'
import matchaMug from '../../Assets/Products/Teas/matchaMug.png'
import React, { useState } from 'react';


const Favorites = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const productsCarousel = [
        {
            id: 1,
            image: mizuMatcha,
            name: "Mizu Matcha.",
            price: "€32.95",
            description: "Our matcha designed for usucha tea preparation."
        },
        {
            id: 2,
            image: matchaMug,
            name: "Mizu Matcha & WatchHouse x Monoware Mug.",
            description: "Our usucha Matcha paired with our mug.",
            price: "€57.95"
        },
        {
            id: 3,
            image: mirukuMatcha,
            name: "Miruku Matcha.",
            description: "Our matcha designed for milk.",
            price: "€65.95"
        }
    ];

    const next = () => {
        setCurrentIndex(currentIndex + 1 >= productsCarousel.length ? 0 : currentIndex + 1);
    };

    const prev = () => {
        setCurrentIndex(currentIndex - 1 < 0 ? productsCarousel.length - 1 : currentIndex - 1);
    };

    const getVisibleCards = () => {
        const cards = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % productsCarousel.length;
            cards.push(productsCarousel[index]);
        }
        return cards;
    };

    return (
        <div className="favorites">

            <div className="favoritesHeader">
                <h2 className="favoritesTitle">Our Favorites.</h2>
                <button className="beigeBtn">SHOP NOW</button>
            </div>

            <div className="carouselContainer">
                <div className="cardsContainer">
                    {getVisibleCards().map((product, index) => (
                        <div key={`${product.id}-${index}`} className="productCard">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="productImg"
                            />
                            <h3 className="productName">{product.name}</h3>
                            <p className="productDescription">{product.description}</p>
                            <p className="productPrice">{product.price}</p>
                        </div>
                    ))}
                </div>

                <button onClick={prev} className="navBtn navBtnLeft">
                    ←
                </button>
                <button onClick={next} className="navBtn navBtnRight">
                    →
                </button>
            </div>
        </div>
    );
};

export default Favorites;