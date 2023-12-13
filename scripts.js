function readingTime(el) {
  const text = el.innerText;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  //document.getElementById("time").innerText = time;
  return time;
}

body_items = document.getElementsByClassName('entry')

document.getElementById("num_entries").innerText = "0" + body_items.length;

for(var i =0, il = body_items.length;i<il;i++){
  body_items[i].querySelector('#time').innerText = readingTime(body_items[i].querySelector('.body'));
  //console.log(body_items[i].querySelector('#time').innerText)

  if (i == 0) {
    body_items[i].focus();
  }
}

