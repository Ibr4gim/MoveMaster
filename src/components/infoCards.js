import React from "react";
import "./infoCards.css";

const cardsData = [
  {
    img: "path/to/image1.jpg",
    title: "Card Title 1",
    text: "This is the description for card 1.",
  },
  {
    img: "path/to/image2.jpg",
    title: "Card Title 2",
    text: "This is the description for card 2.",
  },
  {
    img: "path/to/image3.jpg",
    title: "Card Title 3",
    text: "This is the description for card 3.",
  },
  {
    img: "path/to/image4.jpg",
    title: "Card Title 4",
    text: "This is the description for card 4.",
  },
  {
    img: "path/to/image5.jpg",
    title: "Card Title 5",
    text: "This is the description for card 5.",
  },
  {
    img: "path/to/image6.jpg",
    title: "Card Title 6",
    text: "This is the description for card 6.",
  },
];

const InfoCards = () => {
  return (
    <div className="info-cards">
      {cardsData.map((card, index) => (
        <div key={index} className="info-card">
          <img src={card.img} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
