
//Setting na function nto handle the submit button being pressed
const submit = (ev) => {
  //Preventing defualt action of the document when the
  //submit button is clicked
  ev.preventDefault();
  //Assigning the values of the inputs fields to variable
  //So I can easily use them
  ps = document.getElementById('Pass').value
  us = document.getElementById('User').value

  //Creating a data object to hold the user data
  let data = {
    user: us,
    pass: ps,
    //Only reason for this is for easy extraction from the
    //database later
    type: 'user'
  }

  //Setting the options for the fetch function in a variable
  //for readability and easy malipulation
  options = {
    method: 'POST',
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify(data)
  }

  //Sending the information to the server
  //Through the url user info
  fetch('/user_info', options)
  //Ressting the document form input fields
  document.forms[0].reset()
}

//Checking if the submit button clicked
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('bt').addEventListener('click', submit)
})
