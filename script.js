let myLeads = ["www.awesome.com", "www.awesome.com", "www.awesome.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

let listItem = ""

for (let i = 0; i < myLeads.length; i++) {
    listItem += "<li>" + myLeads[i] + "</li>"
    
    ulEl.innerHTML = listItem
    // SAME
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}