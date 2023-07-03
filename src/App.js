import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import "./App.css";

function App() {
  const users = [
    {
      name: "John",
      lastName: "Doe",
      age: 25,
      id: 1,
    },
    {
      name: "Jane",
      lastName: "Smith",
      age: 30,
      id: 2,
    },
    {
      name: "Alice",
      lastName: "Johnson",
      age: 35,
      id: 3,
    },
    {
      name: "Bob",
      lastName: "Williams",
      age: 40,
      id: 4,
    },
    {
      name: "Emily",
      lastName: "Brown",
      age: 27,
      id: 5,
    },
    {
      name: "Michael",
      lastName: "Davis",
      age: 32,
      id: 6,
    },
    {
      name: "Sophia",
      lastName: "Martinez",
      age: 29,
      id: 7,
    },
    {
      name: "David",
      lastName: "Taylor",
      age: 38,
      id: 8,
    },
    {
      name: "Olivia",
      lastName: "Thomas",
      age: 33,
      id: 9,
    },
    {
      name: "Daniel",
      lastName: "Clark",
      age: 31,
      id: 10,
    },
  ];
  return (
    <div className="App">
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
}

export default App;
