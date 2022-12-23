window.fetch('/users')
    .then(response => response.json())
    .then(utilisateurs => {
      console.log(utilisateurs)
      displayUsers(utilisateurs)
    })

function displayUsers(utilisateurs) {

    const div = document.querySelector("#utilisateurs")
  
    let html = `<table class="table table-striped table-bordered table-responsive text-center align-middle">
                    <thead>
                      <tr>`
    html += displayHeaders(utilisateurs.users[0])
    html += `
                        </tr>
                    </thead>`
  
  
    utilisateurs.users.forEach(utilisateur => {
      html += displayUser(utilisateur)
    })
  
    html += `</table>`
  
    div.innerHTML = html
}
  
function displayUser(utilisateur) {
    let html = '<tr>'
    
    for(const prop in utilisateur){
        console.log(utilisateur[prop])
        
        if(utilisateur[prop] instanceof Object) {
            let ob = utilisateur[prop]
            html += "<td>"
                for(const prop in ob){
                    html += ob[prop] + " "
                }
            html += "</td>"
        }else{
            html += `<td>${utilisateur[prop]}</td>`
        }
    
    // for (const prop in utilisateur) {

    //     html += `<td>${utilisateur[prop]}</td>`
    // }
  
    html += "</tr>"
  
    return html
    }
}
  
function displayHeaders(utilisateur) {
    let html = ''
    for (const prop in utilisateur) {
        // if (prop == "address"){
        //     html += `<th>street</th>`
        //     html += `<th>zipcode</th>`
        //     html += `<th>city</th>`
        // }
        // else {
            html += `<th>${prop}</th>`
        }
    // }
    return html
}