const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const night_mode_1 = document.createElement("div");
night_mode_1.classList.add("night_mode");
container.appendChild(night_mode_1);

const toggle = document.createElement("div");
toggle.classList.add("toggle_circle");
night_mode_1.appendChild(toggle);

const change = document.createElement("div");
change.classList.add("change_light_color");
container.appendChild(change);

const color = document.createElement("div");
color.classList.add("colors");
change.appendChild(color);

const colorInput = document.createElement("input");
colorInput.classList.add("colors_input");
colorInput.setAttribute("type", "color");
color.appendChild(colorInput);

const keyboard_w = document.createElement("div");
keyboard_w.classList.add("keyboard_wrap");
container.appendChild(keyboard_w);

const lights = document.createElement("div");
lights.classList.add("keyboard_lights");
keyboard_w.appendChild(lights);

const divTe = document.createElement("div");
divTe.classList.add("keyboard_keys");
keyboard_w.appendChild(divTe);

var keyboardRows = [
    ["`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=","Backspace"],
    ["Tab","Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]","\\","DEL"],
    ["Caps Lock","A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'","ENTER"],
    ["Shift","Z", "X", "C", "V", "B", "N", "M", ",", ".", "/","▲","Shift"],
    ["Ctrl","Win", "Alt", " ", "Alt", "Ctrl","◄", "▼","►"]
  ];
  
 

  for (var i = 0; i < keyboardRows.length; i++) {
    var row = document.createElement("div");
    row.className = "row";
  
  
   for (var j = 0; j < keyboardRows[i].length; j++) {
     var key = document.createElement("div");
    key.className = "keys";
    key.innerHTML = keyboardRows[i][j];
  
      // Добавляем класс "first" к первой кнопке в строке
  if (j === 0) {
  
      if (i === 1) {
        key.classList.add("tab_key");
      }
  
      if (i === 2) {
        key.classList.add("caps_lock_key");
      }
  
      if (i === 3) {
        key.classList.add("shift_key");
        key.classList.add("shift_left");
      }
      if (i === 4) {
        key.classList.add("ctrl_key");
        key.classList.add("ctrl_left");
      }

  }

  if (j === 1) {
    if (i === 4) {
        key.classList.add("win_key");
      }
  }

  if (j === 2) {
    if (i === 4) {
        key.classList.add("alt_key");
        key.classList.add("alt_left");
      }
  }

  if (j === 3) {
    if (i === 4) {
        key.classList.add("space_key");
      }
  }

  if (j === 4) {
    if (i === 4) {
        key.classList.add("alt_key");
        key.classList.add("alt_left");
      }
  }

  if(j === 5){
    if (i === 4) {
        key.classList.add("ctrl_key");
        key.classList.add("ctrl_left");
      }
  }
  

  // Добавляем класс "last" к последней кнопке в строке
  if (j === keyboardRows[i].length - 1) {
    
    if (i === 0) {
      key.classList.add("backspace_key");
    }

    if (i === 1) {
      key.classList.add("slash_key");
    }

    if (i === 2) {
      key.classList.add("enter_key");
    }

    if (i === 3) {
      key.classList.add("shift_key");
      key.classList.add("shift_right");
    }

  }
  
      row.appendChild(key);
     
    }
  
    // Добавляем строку в элемент контейнера
    divTe.appendChild(row);
  
   
  }

  const textInput = document.createElement("input");
  textInput.classList.add("text");
  textInput.setAttribute("type", "text");
  container.appendChild(textInput);




  
  let keys = document.querySelectorAll('.keys');
  let spaceKey = document.querySelector('.space_key');
  let shift_left = document.querySelector('.shift_left');
  let shift_right = document.querySelector('.shift_right');
  let caps_lock_key = document.querySelector('.caps_lock_key');
  let toggle_circle = document.querySelector('.toggle_circle');
  let night_mode = document.querySelector('.night_mode');
  let body = document.querySelector('body');
  let text_input = document.querySelector('.text');
  let change_color = document.querySelector('.change_light_color');
  let colors_input = document.querySelector('.colors_input');
  let keyboard_lights = document.querySelector('.keyboard_lights');
  let keyboard_wrap = document.querySelector('.keyboard_wrap');
  
  for(let i = 0; i < keys.length; i++) {
      keys[i].setAttribute('keyname', keys[i].innerText);
      keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
  }
  
  window.addEventListener('keydown', function(e) {
      for(let i = 0; i < keys.length; i++) {
          if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
              keys[i].classList.add('active')
          }
          if(e.code == 'Space') {
              spaceKey.classList.add('active')
          }
          if(e.code == 'ShiftLeft') {
              shift_right.classList.remove('active')
          }
          if(e.code == 'ShiftRight') {
              shift_left.classList.remove('active')
          }
          if(e.code == 'CapsLock') {
              caps_lock_key.classList.toggle('active');
          }
      }
  })
  
  window.addEventListener('keyup', function(e) {
      for(let i = 0; i < keys.length; i++) {
          if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
              keys[i].classList.remove('active')
              keys[i].classList.add('remove')
          }
          if(e.code == 'Space') {
              spaceKey.classList.remove('active');
              spaceKey.classList.add('remove');
          }
          if(e.code == 'ShiftLeft') {
              shift_right.classList.remove('active')
              shift_right.classList.remove('remove')
          }
          if(e.code == 'ShiftRight') {
              shift_left.classList.remove('active')
              shift_left.classList.remove('remove')
          }
          setTimeout(()=> {
              keys[i].classList.remove('remove')
          },200)
      }
  })
  
  
  night_mode.addEventListener('click',function() {
      toggle_circle.classList.toggle('active');
      body.classList.toggle('active');
      night_mode.classList.toggle('active');
      keyboard_wrap.classList.toggle('active');
      text_input.classList.toggle('active');
      change_color.classList.toggle('active');
      for(let i = 0; i < keys.length; i++) {
          keys[i].classList.toggle('keys_night')
      }
  })
  
  colors_input.addEventListener('input',function() {
      for(let i = 0; i < keys.length; i++) {
          keys[i].style.color = colors_input.value
      }
      keyboard_lights.style.background = colors_input.value;
  })



