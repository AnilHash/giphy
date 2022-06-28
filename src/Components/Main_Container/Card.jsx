import React from "react";

const Card = ({ gif, handleModal }) => {
  return (
    <div className="card" onClick={() => handleModal(gif.id)}>
      <img src={gif.images.preview_gif.url} />
    </div>
  );
};

export default Card;
