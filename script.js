document.querySelector("#fetchBtn").addEventListener("click", e => {
    e.preventDefault();

    let id = document.querySelector("#UserID").value; 

    console.log(id);

    fetch("https://65dbc7713ea883a152922abb.mockapi.io/NAME/" + id)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        
            let podaci = document.querySelector("#podaci");
        
            if (data.hasOwnProperty("name")) {
                podaci.innerHTML = `<p><b>${data["name"]}</b></p>`;
            } else {
                podaci.innerHTML = "<p>Name not found</p>";
            }
        })
        
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
