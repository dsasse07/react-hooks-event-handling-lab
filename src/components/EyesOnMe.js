// Code EyesOnMe Component Here
function inFocus() {
  console.log("Good!")
}

function lostFocus() {
  console.log('Hey! Eyes on me!')
}

function EyesOnMe(props) {
  return (
    <button onFocus={inFocus} onBlur={lostFocus} >Eyes on me</button>
  )
}

export default EyesOnMe