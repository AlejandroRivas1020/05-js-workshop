const travelDestination= prompt("ingrese el destino del viaje")
let travelDays= prompt("Ingrese la cantidad de días del viaje")
let travelBudget = prompt ("Ingrese el presupuesto para el viaje")
let costRealPerDay= prompt ("Ingrese el dinero real usado por dia ")
let initialCostPerDay=travelBudget/travelDays
let realCostTravel= costRealPerDay*travelDays

if (travelBudget>=realCostTravel){
    let travelDaysAdd= travelBudget/costRealPerDay
    console.log(`Tu viaje puede ser de ${travelDaysAdd} dias`)
}
else{
    let newTravelDays=travelBudget/realCostTravel
    console.log(`Tu presupuesto real supera el presupuesto inicial, Tu viaje debe ser de ${newTravelDays} dias o tener un costo diario de ${initialCostPerDay}`)
}


