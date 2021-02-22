// Code Keypad Component Here
function enteringPassword () {
  console.log("Entering password...")
}

function Keypad(props) {
  return (
    <input type="password" onChange={enteringPassword}></input>
  )
}

export default Keypad