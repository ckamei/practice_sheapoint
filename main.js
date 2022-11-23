
function changeText() {
  let name = document.getElementsByClassName('name')
  let url = '';
  let changeUrl = '';
  let urlName = '';
  let url_regex = /"(.*?)"/g;
  for (let i = 0; i < name.length; i++) {
    url = name[i].innerText
  }

  for (let j = 0; j < 2; j++) {
    changeUrl = url.match(url_regex);
    urlName = url.replace(url_regex, "")
    console.log(changeUrl);
    //console.log(urlName);
    //name[0].innerHTML = `<a ${changeUrl}>${urlName}</a>`
    
  }
  name[0].addEventListener('click', () => {
    setTimeout(() => navigator.clipboard.writeText(changeUrl[0]), 100);
    console.log('click');
    alert("コピーできました！");
  })

}

changeText();

// const button = document.querySelector('#button')
// button.addEventListener('click', () => {
//   navigator.clipboard.writeText('コピーされた文章')
//   button.innerHTML = 'コピー完了！'
//   setTimeout(() => button.innerHTML = '文章をコピー', 1000)
// })
