import { useState } from "react";
import Sidebar from "../../Utils/Sidebar";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdSave } from "react-icons/md";



const EventDetails = () => {
  const [items, setItems] = useState([]);
  const [type, setType] = useState('');
  const [venue, setVenue] = useState('');
  const [food, setFood] = useState('');
  const [price, setPrice] = useState('');
  const [entertainment, setEntertainment] = useState('');
  const [decoration, setDecoration] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  // Create operation
  const addItem = () => {
    if (type.trim() !== '' && venue.trim() !== '' && food.trim() !== '' && price.trim() && entertainment.trim() && decoration.trim()) {
      setItems([...items, { id: Date.now(), type: type, venue: venue, food: food, price: price, entertainment: entertainment, decoration: decoration}]);
      setType('');
      setVenue('');
      setFood('');
      setPrice('');
      setEntertainment('');
      setDecoration('');
    }
  };

  // Update operation
  const updateItem = (id, newType, newVenue, newFood, newPrice, newEntertainment, newDecoration) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, type: newType, venue: newVenue, food: newFood, price: newPrice, entertainment: newEntertainment, newDecoration };
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
    <div style={{backgroundColor: "#f5f5f5"}} className="flex gap-6">
      <Sidebar/>
      <div className="admin-input-box">
        <div className="admin-input-head">Event Details</div>
      <div className="admin-input-container">
        <div >
        <div className="admin-label">Event Type</div>
        <input className="admin-input"
          type="text"
          value={type}
          onChange={e => setType(e.target.value)}
          placeholder="Enter Event Type"
        />
        </div>
        <div>
        <div className="admin-label">Venue</div>
          <input className="admin-input"
            type="text"
            value={venue}
            onChange={e => setVenue(e.target.value)}
            placeholder="Enter Venue"
          />
        </div>

        <div>
        <div className="admin-label">Catering</div>
        <input className="admin-input"
          type="text"
          value={food}
          onChange={e => setFood(e.target.value)}
          placeholder="Enter Catering"
        />
        </div>
        <div>
        <div className="admin-label">Entertainment</div>
        <input className="admin-input"
          type="text"
          value={entertainment}
          onChange={e => setEntertainment(e.target.value)}
          placeholder="Enter  Entertainment"
        />
        </div>
        <div>
        <div className="admin-label">Decoration</div>
        <input className="admin-input"
          type="text"
          value={decoration}
          onChange={e => setDecoration(e.target.value)}
          placeholder="Enter  Decorations"
        />
        </div>
        <div>
        <div className="admin-label">Price</div>
        <input className="admin-input"
          type="text"
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder="Enter Price"
        />
        </div>
      </div>
      
      <div className="admin-button-container">
      <button className="admin-input-button" onClick={addItem}>Add Event</button>
      </div>


      <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Event Type</th>
            <th>Venue</th>
            <th>Catering</th>
            <th>Entertainment</th>
            <th>Decoration</th>
            <th>Price</th>
            <th>Actions</th>
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
                    value={item.type}
                    onChange={e => updateItem(item.id, e.target.value, item.venue, item.food, item.entertainment, item.decoration, item.price)}
                  />
                ) : (
                  item.type
                )}
              </td>
              <td>
              {editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.venue}
                    onChange={e => updateItem(item.id, item.type, e.target.value, item.food, item.entertainment, item.decoration, item.price)}
                  />
                ) : (
                  item.venue
                )}
              </td>
              <td>
              {editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.food}
                    onChange={e => updateItem(item.id, item.type, item.venue, e.target.value, item.entertainment, item.decoration, item.price)}
                  />
                ) : (
                  item.food
                )}
              </td>
              <td>{editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.entertainment}
                    onChange={e => updateItem(item.id, item.type, item.venue, item.food, e.target.value, item.decoration, item.price)}
                  />
                ) : (
                  item.entertainment
                )}
                </td>
              <td>{editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.decoration}
                    onChange={e => updateItem(item.id, item.type, item.venue, item.food, item.entertainment, e.target.value, item.price)}
                  />
                ) : (
                  item.decoration
                )}
                </td>
              <td>{editingItem === item.id ? (
                  <input
                    type="text"
                    value={item.price}
                    onChange={e => updateItem(item.id, item.type, item.venue, item.food, item.entertainment, item.decoration, e.target.value)}
                  />
                ) : (
                  item.price
                )}
                </td>
              <td>
                {editingItem === item.id ? (
                  <button onClick={() => updateItem(item.id, item.name, item.username, item.email, item.phone)}><MdSave size={20} color="#1c3b70" /></button>
                ) : (
                  <>
                    <button onClick={() => setEditingItem(item.id)}><MdModeEdit size={20} color="#1c3b70" /></button>
                    <button onClick={() => deleteItem(item.id)}><MdDelete size={20} color="#1c3b70" /></button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
}

export default EventDetails
