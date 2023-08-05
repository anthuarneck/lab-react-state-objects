import Footer from "./Footer";
import Header from "./Header";
import menuItems from "./data";
import { useState } from "react";

function App() {
  const [currentItems, setCurrentItems] = useState([]);
  const [total, setTotal] = useState(0);

  function handleAddItem(item) {
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
    };
    setCurrentItems([...currentItems, newItem]);
    setTotal(total + item.price);
  }

  function removeItem({ id, price }) {
    const filteredItems = currentItems.filter((item) => item.id !== id);
    setCurrentItems(filteredItems);
    setTotal(total - price);
  }

  function closeOrder() {
    setCurrentItems([]);
    setTotal(0);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            {menuItems.map((item) => {
              return (
                <tr
                  key={item.id}
                  onClick={() => {
                    handleAddItem(item);
                  }}
                >
                  <td>{item.image}</td>
                  <td className="item-name">
                    <span>{item.name}</span> <br></br>
                    <span>🌶️ * {item.spiceLevel}</span>
                  </td>
                  <td>${item.price}</td>
                </tr>
              );
            })}
          </table>
        </aside>
        <section>
          <div>
            <h2>Current Order</h2>
            <ul>
              {currentItems.map((item) => {
                return (
                  <li key={item.id}>
                    <span
                      onClick={() => {
                        removeItem(item);
                      }}
                    >
                      ❌
                    </span>
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </li>
                );
              })}
            </ul>
            <h4>Total: ${total}</h4>
            <div>
              <button>Tidy order</button>
              <button
                onClick={() => {
                  closeOrder();
                }}
              >
                Close order
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
