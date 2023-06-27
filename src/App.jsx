import { useEffect, useState } from "react";
import NameCard from "./components/NameCard";
import Test from "./components/Test";
import Counter from "./components/Counter";

// import { users } from "./data/users";
const App = () => {
  const [users, setUsers] = useState();
  async function fetchData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      setUsers(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <Counter />
      {/* <Test name="amit mali" />
      <Test name="Mrunali">
        <h2>some chidren text</h2>
      </Test>
      <Test />
      <Test />
      <Test /> */}
      {users &&
        users.map((user) => {
          return (
            <NameCard
              name={user.name}
              email={user.email}
              contact={user.phone}
            />
          );
        })}{" "}
    </div>
  );
};

export default App;
