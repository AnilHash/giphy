import React, { useEffect, useState } from "react";
import "../styles/components/modal.scss";

const Modal = ({ show, id, onClose }) => {
  const [gif, setGif] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/${id}?api_key=fzzmkHZQdDPrFCl9NnL2w2tqYlTIEnRR`
    )
      .then((res) => res.json())
      .then((data) => setGif(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{gif?.title}</h4>
        </div>
        <div className="modal-body">
          <img src={gif?.images.original.url} width="300" height="300" />
        </div>
        <div className="modal-footer">
          <button className="button" onClick={onClose}>
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
