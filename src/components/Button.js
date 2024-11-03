function Button(props) {
  return (
    <div style={{ border: "10px solid orange" }}>
      <h3>This is Button component</h3>
      <button onClick={() => alert(props.msg)}>Click me!</button>
    </div>
  );
}

export default Button;
