const energy = prompt("Ingrese su nivel de energia de 0 a 10, donde 0 es sin energia y 10 es recargado")
const climate = prompt ("Ingrese el estado del clima hoy")
const workload= prompt("Ingrese su carga de trabajo de 0 a 10, siendo 0 baja carga laboral")

if(energy&&climate){
    confirm("Puede salir a trotar")
}
else {
    confirm("Es mejor quedarse en casa")
}