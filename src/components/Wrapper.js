import Button from "./Button";
function Wrapper(props) {
  return (
    <div style={{ border: "10px solid whitesmoke" }}>
      <h2>Wrapper here</h2>
      <Button msg={props.msg} />
    </div>
  );
}

export default Wrapper;
