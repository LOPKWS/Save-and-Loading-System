
//Creating a function to handle the submit event from
//the html file
const submit = (ev) => {
  //Preventing the defualt action of submitting a form
  ev.preventDefault();
  //After reading a shit ton a article I still don't know why this
  //has to be an async function
  async function authenticate(input_pass){
    //Getting all the user information from the server
    const response = await fetch('/user_info_req')
    //Converting the data from json to utf-8
    const db_data = await response.json()
    //Cycling throught all the user objects we got
    //from the database and checking if the password
    //is equal to the one that was inputted
    for (let step = 0; step < db_data.length; step++) {
      const pass = db_data[step].pass;
      if (pass == input_pass){
        //If the input password was equal to the password
        //of any of the preexisting users
        alert('Succsess')
      }

      //NOTE: Should also check the username but was
      //focussed on the password

    }
  }
  //Calling the authenticate function and passing in the value from the
  //password input field
  authenticate(document.getElementById('Pass').value);
  document.forms[0].reset()

}
//Checking if the submit button clicked
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('bt').addEventListener('click', submit)
})
