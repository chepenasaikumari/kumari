const InnerItem = props => {
  const { destinationDetails, deleteTodo } = props;
  const { id, timeAccessed, logoUrl, title } = destinationDetails;

  const onclickButton = () => {
    deleteTodo(id);
  };

  return (
    <li className="destination-item">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="app logo" className="image" />
      <p className="paragraph">{title}</p>

      <button
        className="button"
        type="button"
        data-testid="delete"
        onClick={onclickButton} // Ensure this line is correct
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-button"
        />
      </button>
    </li>
  );
};

export default InnerItem;
