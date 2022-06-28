import React, { useState } from "react";
import Card from "./Card";

import "../../styles/components/cardcontainer.scss";
import Modal from "../Modal";

const CardsContainer = ({ cards }) => {
  const [id, setId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  function handleModal(card_id) {
    setId(card_id);
    setShowModal(true);
  }
  return (
    <div className="cards-container">
      {cards?.map((gif) => (
        <Card key={gif.id} gif={gif} handleModal={handleModal} />
      ))}

      {showModal && (
        <Modal onClose={() => setShowModal(false)} show={showModal} id={id} />
      )}
    </div>
  );
};

export default CardsContainer;
