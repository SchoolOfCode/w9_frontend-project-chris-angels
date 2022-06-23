
import React from 'react'

// function nextHint() {
//   var checkBox = document.getElementById("checkBox");
//   var list = document.getElementById("list");
//   if (checkBox === true) {
//     list.style.display = "block";
//   } else {
//     list.style.display = "none";
//   }
// }
// onclick={nextHint()}

function Hint({index, text}) {
  
  return (
    <li id="list" key={index} >{text.hint}<input type="checkbox" id="checkBox" ></input></li>
  )
}

export default Hint