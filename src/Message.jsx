function Message({ name, role, onDelete }) {
  return (
    <div>
      <h3>
        Hello, {name} 👋 - {role}
      </h3>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Message;
