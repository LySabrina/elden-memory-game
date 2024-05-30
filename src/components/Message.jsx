import { useEffect, useState } from "react";
import "../styles/_Message.scss";
import PropTypes from "prop-types";
function Message({ message = "YOU FAILED" }) {
  return (
    <div className="message-container">
      <div className="message">
        <div className="message__blur"></div>
        <h1
          className={`message__title ${
            message === "VICTORY"
              ? "message__title--yellow"
              : "message__title--red"
          }`}
        >
          {message}
        </h1>
      </div>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string,
};
export default Message;
