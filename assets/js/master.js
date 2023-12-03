

let _h1 = document.getElementById("dt")
_h1.addEventListener('load', datee())
function datee() {
  let part =  new Date()
  let timee = part.toLocaleTimeString();
  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let todayy = daysOfWeek[part.getDay()] 
  _h1.innerHTML=`${todayy} ${timee}`
  }

let inp1 = document.getElementById('inp1')
let inp2 = document.getElementById('inp2')
let inp3 = document.getElementById('inp3')
let dell = []
let line = []
let edit = []
 let span1 = []
 let span2=[]
document.getElementById('btn1').addEventListener('click',()=>{
    let enter1 = inp1.value
    let enter2 = inp2.value
    let enter3 = inp3.value 
        if ((enter1 == "")|| 
            (enter1==" ")||
            (enter1 == null)||
            (enter1.length<1)){
                alert('Please Write Something 😊')
                inp1.focus()
        }else if ((enter2 == "")|| 
                  (enter2 ==null)){
                    alert('Please Enter Start Time 😒')
                    inp2.focus()

        }else if ((enter3 == "")|| 
            (enter3 ==null)){
              alert('Please Enter End Time 😢')
              inp3.focus()

         }else{
      let lii = document.createElement('li')
        lii.classList.add('extra')
        lii.innerHTML=`
        <div class = "div1">
        <input  type='checkbox'/>
        <span id='span1' class="addspan1"><i></i>${enter1}</span>
        </div>
        
        <div class = "div2">
          <div class = "div3">
            <span id='span2' class="addspan2">${enter2} - ${enter3}</span>
          </div>
          <div class = "div4">
              <button id="btn2"><i class="material-icons">&#xe150;</i></button>
              <button id="btn3"><i class="material-icons">&#xe16c;</i></button>
          </div>
        </div>
        ` 
        document.getElementById('list1').appendChild(lii)
        inp1.value=null
        inp2.value=null
        inp3.value=null
        inp1.focus() 
       
        // *********************Delete 
            
          dell = document.querySelectorAll("#list1 #btn3") 
          // console.log(dell);
          dell.forEach((val)=>{
            val.addEventListener('click',()=>{
              let sec = val.closest('li')
              sec.classList.add('close')
            setTimeout(() => {
              sec.remove() 
              inp1.focus() 
            }, 1000);
            })
            
          })

          // line through **************
          line = document.querySelectorAll('#list1 input')
          // console.log(line);
          line.forEach((val)=>{
            val.addEventListener('click',()=>{
              let _child = val.nextElementSibling.children
            if (val.checked) {
                 
                _child[0].style.width = '100%'
            } else {
                _child[0].style.width = '0'
    
            }
            })
          })

          // ***********Edit
            span1 = document.getElementById('span1')
            span2 = document.getElementById('span2')
            edit = document.querySelectorAll('#list1 #btn2')
            edit.forEach((val)=>{
              val.addEventListener('click',()=>{
              // console.log(val);
              
              if ((span1.contentEditable == "true")&
                  (span2.contentEditable == 'true')) {
                span1.contentEditable= "false"
                span2.contentEditable= "false"
                val.innerHTML='<i class="material-icons">&#xe150;</i>'
                alert('Your Changes Saved')
            }else{
              span1.contentEditable  = "true"
              span2.contentEditable  = "true"
              span1.focus()
              val.innerHTML='<i class="material-icons">&#xe876;</i>'
                
            }
            })
          })




  
        }
 
})


 


// function test(){
//   console.log(lii);
// }
// test()
  
//  function dell(d){
//   let chilld = d.nextElementSibling.children
//   if (d.checked) {
//       chilld[0].style.width='100%'
       
//   }else{
//       chilld[0].style.width='0'
//   }
// }
 














 







