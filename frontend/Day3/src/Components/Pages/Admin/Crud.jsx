import { useState } from 'react';

function Crud() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  // Create operation
  const addItem = () => {
    if (name.trim() !== '' && username.trim() !== '' && email.trim() !== '' && phone.trim() ) {
      setItems([...items, { id: Date.now(), name: name, username: username, email: email, phone: phone}]);
      setName('');
      setUsername('');
      setEmail('');
      setPhone('');
    }
  };

  // Update operation
  const updateItem = (id, newName, newUsername, newEmail, newPhone) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, name: newName, username: newUsername, email: newEmail, phone: newPhone };
      }
      return item;
    });
    setItems(updatedItems);
    setEditingItem(null);
  };

  // Delete operation
  const deleteItem = id => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <div>
      <div>
        
      </div>
      <h1>CRUD Operations in React.js</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter item name"
        />
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Enter item description"
        />
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter item description"
        />
        <input
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Enter item description"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.name}
                    onChange={e => updateItem(item.id, e.target.value, item.username, item.email, item.phone)}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
              {editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.username}
                    onChange={e => updateItem(item.id, item.user, e.target.value, item.email, item.phone)}
                  />
                ) : (
                  item.username
                )}
              </td>
              <td>
              {editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.email}
                    onChange={e => updateItem(item.id, item.name, item.username, e.target.value, item.phone)}
                  />
                ) : (
                  item.email
                )}
              </td>
              <td>{editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.phone}
                    onChange={e => updateItem(item.id, item.name, item.username, item.email, e.target.value)}
                  />
                ) : (
                  item.phone
                )}
                </td>
              <td>
                {editingItem === item.id ? (
                  <button onClick={() => updateItem(item.id, item.name, item.username, item.email, item.phone)}>Save</button>
                ) : (
                  <>
                    <button onClick={() => setEditingItem(item.id)}>Edit</button>
                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Crud;
