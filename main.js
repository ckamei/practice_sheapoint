
function changeText() {
  let name = document.getElementsByClassName('name')
  let url = '';
  let changeUrl = '';
  let url_regex = /"(.*?)"/g;
  for (let i = 0; i < name.length; i++) {
    url = name[i].innerText
  }

  name[0].addEventListener('click', () => {
  for (let j = 0; j < 2; j++) {
    changeUrl = url.match(url_regex);
  }
  navigator.clipboard.writeText(changeUrl)
    .then(() => alert("コピーできました！"));
  })

}


changeText();
