let dailyBudget=Number(prompt("Ingrese su presupuesto diario"))
let foodCost=Number(prompt("Ingrese el costo de la comida"))
let shoppingCost=Number(prompt("Ingrese el costo de compras"))
let saving=Number(prompt("Ingrese el monto que quiere ahorrar"))
let totalCost=foodCost+shoppingCost+saving

if (dailyBudget>=totalCost) {
    alert("El presupuesto es adecuado para cubrir los gastos de comida, ahorro y comprar libros")
}
else{
    if(confirm("Tus gastos sobrepasan el presupuesto, deseas comer afuera hoy?")){
        if(dailyBudget>=(foodCost+saving)){
            alert("Puedes salir a comer y ahorrar, pero no podras comprar libros hoy")
        }
        else{
            alert("Tus gastos sobrepasan el presupuesto")
        }
    }
    else{
        if (dailyBudget>=(shoppingCost+saving)) {
            alert("Puedes comer en el hotel y así podras comprar libros y ahorrar el día de hoy")
        } else {
            alert("Tus gastos sobrepasan el presupuesto")
        }
    }

}

