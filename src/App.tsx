import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    'dog',
    'cat',
    'bird'
];
  return <div><ListGroup items={items} heading="Cities"/></div>;
}

export default App;