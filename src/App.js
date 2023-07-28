import { useState } from "react";
import "./App.css";

const App = () => {
  const [newToDo, setNewToDo] = useState("");
  const [addToDo, setAddToDo] = useState([]);

  const addItem = (item, buttons) => {
    if (newToDo === "") {
      alert("Enter an Item");
      return;
    }
    let newItem = [...addToDo];
    newItem.push({ text: item, buttons, completed: false });
    setAddToDo(newItem);
    setNewToDo("");
  };

  const remove = (index) => {
    let newItem = [...addToDo];
    newItem.splice(index, 1);
    setAddToDo(newItem);
  };

  const complete = (index) => {
    let newItem = [...addToDo];
    newItem[index].completed = !newItem[index].completed;
    setAddToDo(newItem);
  };

  return (
    <div>
      <h1>To do list</h1>

      <input
        type="text"
        placeholder="What needs doing?"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      ></input>

      <button
        onClick={() => {
          addItem(newToDo, ["Complete", "Delete"]);
        }}
      >
        +
      </button>

      {addToDo.map((item, index) => {
        return (
          <div key={index}>
            <ul className={item.completed ? "complete" : ""}>{item.text}</ul>
            <div>
              {item.buttons.map((buttonText, buttonIndex) => (
                <button
                  key={buttonIndex}
                  onClick={() => {
                    if (buttonText === "Complete") {
                      complete(index);
                    } else if (buttonText === "Delete") {
                      remove(index);
                    }
                  }}
                >
                  {buttonText}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
