const submit = (ev) => {
  ev.preventDefault();
 //document.getElementById('Pass').value
  //console.log(data)
  async function authenticate(input_pass){
    const response = await fetch('/user_info_req')
    const db_data = await response.json()
    //console.log(db_data.length)
    for (let step = 0; step < db_data.length; step++) {
      const pass = db_data[step].pass;
      if (pass == input_pass){
        console.log('succsess')
      }
    }
  }
   authenticate(document.getElementById('Pass').value);
   document.forms[0].reset()

}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('bt').addEventListener('click', submit)
})
