let myLeads = ["www.awesome.com", "www.awesome.com", "www.awesome.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItem = ""

    for (let i = 0; i < myLeads.length; i++) {
            listItem += `
                <li>
                    <a target='_blank' href='${myLeads[i]}'>
                        ${myLeads[i]}
                    </a>
                </li>
            `
            // SAME
            // const li = document.createElement("li")
            // li.textContent = myLeads[i]
            // ulEl.append(li)
    }
    ulEl.innerHTML = listItem

}