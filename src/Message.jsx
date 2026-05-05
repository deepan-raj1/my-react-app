function Message({ name, role, onDelete, onEdit }) {
  return (
    <div>
      <h3>
        Hello, {name} 👋 - {role}
      </h3>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
}

export default Message;
