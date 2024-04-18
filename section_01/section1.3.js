const articles= []
const travelBudget = Number(prompt ("Ingrese su presupuesto inicial"))
const transportCost = Number(prompt ("Ingrese el costo por concepto de transporte"))
const foodCost = Number(prompt("Ingrese costo por concepto de comida"))
const housingCost = Number(prompt ("Ingrese costo por concepto de alojamiento"))    
const totalCost = transportCost+foodCost+housingCost
let balance = travelBudget-totalCost

if (balance>=0){
    
    if (confirm(`Tienes un saldo de ${balance}`)){
        let articleName= prompt("ingrese el nombre del articulo que deseas adquirir")
        let articlePrice = prompt("ingrese el precio del articulo")
        let available=balance-articlePrice
        if(available>=0){
            alert(`tienes salgo disponible para comprar el articulo ${articleName}`)
            confirm("Deseas comprar el articulo?")
            let article={
                name:articleName,
                price:articlePrice
            }
            articles.push(article)
        }
        else {
            confirm(`no tienes saldo disponible para el articulo ${articleName}`)
        }
    }
    
}
else{
    confirm(`En el momento no tienes saldo disponible`)
}
