import Wrapper from "./Wrapper";
function Header(props) {
  return (
    <div style={{ border: "10px solid lightgray" }}>
      <h1>Header here</h1>
      <Wrapper msg={props.msg} />
    </div>
  );
}

export default Header;
