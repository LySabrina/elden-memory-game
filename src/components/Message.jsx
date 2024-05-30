import "../styles/_Message.scss";
function Message({ message }) {
  return (
    <div className="message">
      <div className="message__blur"></div>
      <h1 className="message__title message__title--red">YOU DIED</h1>
    </div>
  );
}
export default Message;
