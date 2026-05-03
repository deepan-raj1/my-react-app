// import { useState } from "react";
// import Message from "./Message";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>React Practice 🚀</h1>

//       {/* Counter Section */}
//       <h2>Counter App 🔥</h2>
//       <h3>{count}</h3>

//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//       <button onClick={() => setCount(0)}>Reset</button>

//       <hr />

//       {/* Props Section */}
//       <h2>Props Example 👇</h2>

//       <Message name="Deepak" role="Python Developer" />
//       <Message name="Rahul" role="Frontend Developer" />
//       <Message name="Arun" role="AI Engineer" />
//     </div>
//   );
// }

// export default App;

//-------------------------------------------------------

// import Message from "./Message";

// function App() {
//   const users = [
//     { name: "Deepak", role: "Python Developer" },
//     { name: "Rahul", role: "Frontend Developer" },
//     { name: "Arun", role: "AI Engineer" },
//     { name: "Kiran", role: "Full Stack Developer" },
//   ];

//   return (
//     <div>
//       <h1>Users List 🚀</h1>

//       {users.map((user, index) => (
//         <Message
//           key={index}
//           name={user.name}
//           role={user.role}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

//-------------------------------

import { useState } from "react";
import Message from "./Message";

function App() {
  const [users, setUsers] = useState([
    { name: "Deepak", role: "Python Developer" },
    { name: "Rahul", role: "Frontend Developer" },
    { name: "Arun", role: "AI Engineer" },
  ]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const addUser = () => {
    // ✅ Validation here
    if (!name || !role) {
      alert("Please enter both fields");
      return;
    }

    const newUser = { name, role };
    setUsers([...users, newUser]);

    setName("");
    setRole("");
  };

  const deleteUser = (indexToDelete) => {
    if (!window.confirm("Are you sure?")) return;

    const updatedUsers = users.filter((_, index) => index !== indexToDelete);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>Users Management 🚀</h1>

      {/* Input Section */}
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button onClick={addUser}>Add User</button>

      <hr />

      {/* Display Users */}
      {users.map((user, index) => (
        <Message
          key={index}
          name={user.name}
          role={user.role}
          onDelete={() => deleteUser(index)}
        />
      ))}
    </div>
  );
}

export default App;

