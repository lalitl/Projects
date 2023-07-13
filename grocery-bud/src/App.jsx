import { useEffect, useState } from "react";
import List from "./List";
import Alert from "./Alert";

const getlocalStorage = () => {
  let list = localStorage.getItem('list')
  if(list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getlocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "please enter value", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...list, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "item edited", "success");
    } else {
      showAlert(true, "item added", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearList = () => {
    showAlert(true, "all items deleted sucessfully", "danger");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "item deleted sucessfully", "danger");
    const deleteItem = list.filter((item) => item.id !== id);
    setList(deleteItem);
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => {
      return item.id === id;
    });
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(()=> {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])
  return (
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            placeholder="e.g. milk"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn" type="submit">
            {isEditing ? "Edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
};

export default App;
