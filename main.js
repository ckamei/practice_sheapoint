
function changeText() {
  let name = document.getElementsByClassName('name')
  let url = '';
  let changeUrl = '';
  let url_regex = /"(.*?)"/g;
  for (let i = 0; i < name.length; i++) {
    url = name[i].innerText
  }
  for (let j = 0; j < 2; j++) {
    changeUrl = url.match(url_regex);
    
    console.log(changeUrl[j]);
    
    name[0].addEventListener('click', () => {
      setTimeout(() => navigator.clipboard.writeText(changeUrl[1]), 100);
      console.log('click');
      alert("コピーできました！");
    })
  }

}

changeText();
