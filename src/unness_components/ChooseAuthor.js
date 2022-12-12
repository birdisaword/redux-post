import React from 'react';
import './drop-down_styles.css'

function ChooseAuthor() {
  return (
    <div>
      <div className="dropdown">
  <button onClick={myFunction} className="dropbtn">choose author</button>
  <div id="myDropdown" className="dropdown-content">
    <h1>author 1</h1>
    <h1>author 2</h1>
    <h1>author 3</h1>
  </div>
</div>
    </div>
  ); 
}

function myFunction() {
  let element = document.getElementById("myDropdown");
  element.classList.toggle("show");
}

export default ChooseAuthor;