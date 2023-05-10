import Counter from "./components/Counter";
import MyList from "./components/MyList";
import ProductList from "./components/ProductList";

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];

function App() {
  return (
    <div>
      Hello World
      <Blog posts={posts} />
      <MyList />
      <ProductList />
      <Counter />
    </div>
  );
}
export default App;
