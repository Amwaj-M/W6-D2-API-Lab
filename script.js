function apiFun() {
    fetch('https://fakestoreapi.com/products',{
        method:"get"
    })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            for(let i = 0 ; i < data.length; i++) {
                let get_data =document.getElementById("get-data")
                let card = document.createElement("div");
                card.className = "card"; 
                card.innerHTML =
                `
                <img src="${data[i].image}">
                <h2>${data[i].title}</h2>
                <h3> category: ${data[i].category}</h3>
                <h4> Price:${data[i].price}</h4>
                <h5> Rating: ${data[i].rating.rate}</h5> 
                
                
                `
                // <h3>${data[i].rating.count}</h3>

                get_data.appendChild(card)
            }
        })
        .catch((err)=> console.log(`the err is ${err}`))
    }
    apiFun()

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))