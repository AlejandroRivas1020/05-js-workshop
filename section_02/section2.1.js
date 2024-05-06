let energy = Number(prompt("Ingrese su nivel de energia de 0 a 10, donde 0 es sin energia y 10 es recargado"))
if (energy===0 || energy===null) {
    if (run=confirm("Quieres salir a correr")) {
        alert("Es momento de salir a correr")
    }
    else{
        alert("Mejor toma un día libre")
    }
} else {
    if (climate = confirm ("Está haciendo un mal día?")) {
        alert("Con este clima deberías quedarte en casa trabajando en tus proyectos o relajandote")
    } else {
        workload= Number (prompt("Ingrese su carga de trabajo de 0 a 10, siendo 0 baja carga laboral"))
        if (workload<=5) {
            alert("Es momento de salir a correr un rato")
        } else {
            alert("Puedes salir a correr un rato, sin embargo es importante que termines los pendientes")
        }
    }
}


