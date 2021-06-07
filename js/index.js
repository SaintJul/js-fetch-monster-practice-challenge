//const monCon = document.getElementById("monster-container")
document.addEventListener("DOMContentLoaded", () => {

const createMon = document.getElementById("create-monster")
const monstr = document.getElementById("monster-container")

const inputForm = document.createElement("form")
inputForm.id = "monster-form"
const inputName = document.createElement("input")
inputForm.appendChild(inputName)
inputName.id = "name"
inputName.placeholder = "Name..."
const inputAge = document.createElement("input")
inputForm.appendChild(inputAge)
inputAge.id = "age"
inputAge.placeholder = "Age..."
const inputDes = document.createElement("input")
inputForm.appendChild(inputDes)
inputDes.id = "description"
inputDes.placeholder = "Description..."

const btn = document.createElement("button")
inputForm.appendChild(btn)
btn.innerText= "Create"
createMon.appendChild(inputForm)

createMon.addEventListener("submit", function(event) {
    event.preventDefault()
 
    addMonster((inputForm["name"].value),(inputForm["age"].value),(inputForm["description"].value))
    /*let newMonster = {
        name : 

    }*/
})


function addMonster(name,age,description){
    //console.log(name)
    //console.log(age)    
    //console.log(description)
    

    let formMon = {       
        name : `${name}`,
        age : `${age}`,
        description : `${description}`
    } 
    return JSON.stringify(formMon)

}

const configOB = {
    method : "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body : addMonster()
}

  function printMonsters(data, num ){
      for (i = num; i< num +50; i++){
          const div = document.createElement("div")
          const h2 = document.createElement("h2")
          const h4 = document.createElement("h4")
          const p = document.createElement("p")
        
          div.appendChild(h2)
          h2.innerText = (data[i]["name"])
          div.appendChild(h4)
          h4.innerText= "Age: " + (data[i]["age"])
          div.appendChild(p)
          p.innerText ="Bio: " + (data[i]["description"])

          monstr.appendChild(div)  
        }
    }

//

  fetch("http://localhost:3000/monsters", configOB)
  .then(function(response){
      return response.json()
  })
  .then(function(object){
        printMonsters(object, 0)
  })
  .catch(function(error){
    alert("A Mistake WAS Made ERROR!")
      console.log(error.message)
  })








})
