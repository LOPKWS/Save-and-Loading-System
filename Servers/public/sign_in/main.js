const submit = (ev) => {
  ev.preventDefault();
  ps = document.getElementById('Pass').value
  us = document.getElementById('User').value
  //console.log(hash.sha256('mep'))
  let data = {
    user: us,
    pass: ps,
    type: 'user'
  }
  console.log(data)
  options = {
    method: 'POST',
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify(data)
  }
  fetch('/user_info', options)
  document.forms[0].reset()
}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('bt').addEventListener('click', submit)
})
