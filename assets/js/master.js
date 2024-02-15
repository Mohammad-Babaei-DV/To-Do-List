
let day = document.getElementById("day")
let time = document.getElementById("time")
function datee() {
  let part = new Date()
  let timee = part.toLocaleTimeString();
  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let todayy = daysOfWeek[part.getDay()]
  day.innerHTML = `${todayy}`
  time.innerHTML = `${timee}`
}
datee()
setInterval(() => {
  datee()
}, 1000);


//****************************************************************************************** */
let main = document.getElementById('main')
let span = document.getElementById('st')
main.addEventListener('scroll', (e) => {
  let st = e.target.scrollTop
  span.innerText = st

})
//**************************************************************************************************

slag = 1

let target1 = document.getElementById('target1')
let ul = document.getElementById('target2')
target1.addEventListener('click', (e) => {

  if (slag % 2) {
    ul.classList.remove('hidden')
    ul.classList.add('flex')
    slag++
  } else {
    ul.classList.add('hidden')
    ul.classList.add('flex')
    slag++
  }
})

//*******************************************************************************************************
turn = 1
let addd = document.getElementById('addd')
let extra = document.getElementById('extra')
let textarea = document.getElementById('textarea')


addd.addEventListener('click', add)

function add() {

  if (turn % 2) {
    addd.classList.remove('icon-plus-circled')
    addd.classList.remove('text-[#00235B]')
    addd.classList.add('icon-cancel-circled')
    addd.classList.add('text-[#f53f3f]')
    extra.classList.remove('top-[-100%]')
    extra.classList.add('top-0')
    textarea.value = ''
    textarea.focus()
    turn++
  } else {
    addd.classList.remove('icon-cancel-circled')
    addd.classList.remove('text-[#f53f3f]')
    addd.classList.add('icon-plus-circled')
    addd.classList.add('text-[#00235B]')
    extra.classList.remove('top-0')
    extra.classList.add('top-[-100%]')
    turn++
  }
}



//*****************************************************************************************************************

let save = document.getElementById('save')
let warning = document.getElementById('warning')
let cont = document.getElementById('cont')
let item = document.getElementById('item')
flag = 0
 
save.addEventListener('click', () => {
  let x = textarea.value
  
  if (x == '') {
    warning.classList.remove('text-blue-300')
    warning.classList.add('text-[red]')
  } else {
    
    let div = document.createElement('div')
    div.classList.add('w-full', 'flex', 'justify-center')
    div.innerHTML = `
  
  <div id='div1' class="relative py-[10px] w-full overflow-hidden flex justify-between items-center group"> 
    <span id='spa' data-status="off" onclick="myDone(this)" class="overflow-hidden p-[5px] w-[57px] absolute top-[-100%] z-[20] group-hover:top-[10px] duration-[.4s] right-[35%] rounded-[5px] flex justify-end items-center border-[2px] border-[#00235B] bg-[#00235B] text-[#FFDD83] cursor-pointer hover:bg-[#FFDD83] hover:text-[#00235B] ">
    <span>Not</span>&nbsp; 
    <span>Done?</span>
     
    </span>
    <div id='div2' class="relative w-[75%] md:w-[80%] h-full rounded-[10px] p-[10px] overflow-hidden shadow-xl bg-white shadow-slate-850 group after:absolute after:top-0 after:left-0 after:w-0 after:duration-[1s] after:h-full after:bg-[#3cec3caf]">
       ${x}  
    </div>
        <div class="w-[15%] flex justify-end items-center">
            <div><i onclick="myEdit(this)" id="edit" class=" w-full cursor-pointer hover:text-[red] duration-[.4s] text-[#00235B] text-[7vw] md:text-[3.5vw] xl:text-[2vw] flex justify-end items-center h-full icon-pencil-circled"></i></div>
            <div><i onclick="myDel(this)" id="del" class="w-full  cursor-pointer hover:text-[red] duration-[.4s] text-[#00235B] text-[7vw] md:text-[3.5vw] xl:text-[2vw] flex justify-end items-center h-full icon-cancel-circled"></i></div>
        </div>
  </div>
  `
    cont.appendChild(div)
    flag++
    if (flag > 1) {
      item.innerHTML = `${flag} Items`
    } else {
      item.innerHTML = `${flag} Item`
    }
    textarea.value = ''
    add()
  }
  textarea.addEventListener('keyup', () => {
    warning.classList.add('text-blue-300')
    warning.classList.remove('text-[red]')
  })
})

function myDone(e) {
  let t = e.nextElementSibling
    if ((e.getAttribute('data-status')) == 'off') {
      t.classList.add('after:w-full')
      t.classList.remove('after:w-0')
      setTimeout(() => {
        e.classList.add('w-[90px]')
        e.classList.remove('w-[57px]')
        e.setAttribute('data-status','on')
      }, 500);
    }  
    else {
      t.classList.remove('after:w-full')
      t.classList.add('after:w-0')
      setTimeout(() => {
        e.classList.remove('w-[90px]')
        e.classList.add('w-[57px]')
        e.setAttribute('data-status','off')
      }, 500);  
    }
}
//*******************************************************************************************************************
let removeAll = document.querySelectorAll('#removeAll')
removeAll.forEach((val) => {
  val.addEventListener('click', () => {
    if (confirm('Do You Want to Remove All ?')) {
      localStorage.clear()
      cont.innerHTML = ''
      flag = 0
      slag = 1
      s = 1
      item.innerHTML = `${flag} Item`
      ul.classList.add('hidden')
      ul.classList.add('flex')
    }

  })
});
//********************************************************************************************************************
let compeletAll = document.querySelectorAll('#compeletAll')
compeletAll.forEach((val)=>{
  val.addEventListener('click',seed)
  
})
function seed() {
  ul.classList.add('hidden')
  ul.classList.add('flex')
  slag = 1
        let cont5 = document.querySelectorAll('#spa')
        cont5.forEach((val)=>{
         let attr = val.getAttribute('data-status')
         val.setAttribute('data-status','off')
         myDone(val)
        })
      }
//*********************************************************************************************************************
let dicard = document.getElementById('dicard')
dicard.addEventListener('click', () => {
  add()
})
//****************************************************************************⬇️****************************************
let delet = document.getElementById('delete')
let editpage = document.getElementById('editpage')
let textarea1 = document.getElementById('textarea1')
let save1 = document.getElementById('save1')
let div1 = document.querySelectorAll('#div1')
let b = 0
let d = 0
function myEdit(e) {
  let txt = e.parentElement.parentElement.previousElementSibling.innerText
  let hh = e.parentElement.parentElement.previousElementSibling
  textarea1.value = txt
  textarea1.focus()
  editpage.classList.add('left-0')
  editpage.classList.remove('left-[-100%]')
  mySave(hh)
  myDicard(hh)
  b++
  d++
}
//****************************************************************⬇️***************************************************
fg = []
function myDel(e) {
  e.closest('#div1').remove()
  flag--
  if (flag > 1) {
    item.innerHTML = `${flag} Items`
  } else {
    item.innerHTML = `${flag} Item`
  }
}
//****************************************************************************************************************

let warning1 = document.getElementById('warning1')

db = []
function mySave(e) {
  let vali = textarea1.value
  db.push(e)
  db[0].innerText = vali
  if (db[0].innerText == '') {
    warning1.classList.remove('text-blue-300')
    warning1.classList.add('text-[red]')
  } else {
    if (b % 2) {
      db = []
      editpage.classList.remove('left-0')
      editpage.classList.add('left-[-100%]')
      b = 0  
    }
  }
  textarea1.addEventListener('keyup', () => {
    warning1.classList.add('text-blue-300')
    warning1.classList.remove('text-[red]')
  }) 
}

//********************************************************************************************************************
let dicard1 = document.getElementById('dicard1')
dd = []
function myDicard(e) {
  dd.push(e)
  let dis = db[0].innerText
  db[0].innerText = dis
  if (b % 2) {
    db = []
    dd = []
    editpage.classList.remove('left-0')
    editpage.classList.add('left-[-100%]')
    b = 0
    d = 0

  }
}
//********************************************************************************************************************
























