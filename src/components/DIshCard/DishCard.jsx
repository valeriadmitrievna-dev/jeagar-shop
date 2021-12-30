import React, { useState } from 'react';
import * as H from './index.styled';
export default function DishCard({ dish, id, handleSetOrder }) {
  const [coordsX, setcoordsX] = useState();
  const [coordsY, setcoordsY] = useState();
  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    const absoluteX = event.clientX - bounds.left;
    const absoluteY = event.clientY - bounds.top;
    setcoordsX(Math.round(((absoluteX * 100) / width - 50) * 0.2));
    setcoordsY(Math.round(((absoluteY * 100) / height - 50) * 0.2));
  };
  const handleLeave = () => {
    setcoordsX(0);
    setcoordsY(0);
  };
  return (
    <H.DishCard
      style={{
        transform: `rotateY(${-coordsX}deg) rotateX(${coordsY}deg) translate(${
          coordsX / 2
        }px , ${coordsY / 2}px)`,
      }}
      onMouseMove={(e) => handleMove(e)}
      onMouseLeave={handleLeave}
      key={id}
      onClick={() => handleSetOrder(dish)}
    >
      <img src={dish.cover} alt="" />
      <H.DishCardContainer>
        <h5>{dish.title}</h5>
        <h2>$ {dish.price}</h2>
        <p>{dish.available} Bowls available</p>
        <h3>{dish.description}</h3>
        <h4>Calories: {dish.calories}</h4>
      </H.DishCardContainer>
    </H.DishCard>
  );
}
