
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
      setTimeout(() => navigator.clipboard.writeText(changeUrl), 100);
      console.log('hello');
      //alert("コピーできました！");
    })
  }
    // passList += `<a href=${changeUrl[0]}>link</a>`
    // name[0].insertAdjacentHTML("beforebegin", passList);

}
//sampleArea.insertAdjacentHTML("beforebegin", "表示したい文字列");

changeText();


// onst button = document.querySelector('#button')
// button.addEventListener('click', () => {
//   navigator.clipboard.writeText('コピーされた文章')
//   button.innerHTML = 'コピー完了！'
//   setTimeout(() => button.innerHTML = '文章をコピー', 1000)
// })
