

//Desafíos finales:

   //1.- Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
    console.log("Bienvenido al curso ALURA");

    //2.-Crea una variable llamada "nombre" y asígnale tu nombre. Luego, 
    //utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
    let nombre = "David";
    console.log(`Hola ${nombre}`);

    //3.-Crea una variable llamada "nombre" y asígnale tu nombre. 
    //Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
    let nombre2 = "David";
    alert(`Hola ${nombre2}`);

   //4.- Utiliza prompt y haz la siguiente pregunta: 
   //¿Cuál es el lenguaje de programación que más te gusta?. 
   //Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
   let pregunta = prompt("¿Cuál es el lenguaje de programación que más te gusta?")
   console.log(pregunta);

    //5.-Crea una variable llamada "valor1" y otra llamada "valor2", 
    //asignándoles valores numéricos de tu elección. 
    //Luego, realiza la suma de estos dos valores y 
    //almacena el resultado en una tercera variable llamada "resultado". 
    //Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
    let valor1 =2;
    let valor2 =4;
    let resultadoSuma = valor1+valor2;
    console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultadoSuma}`);
   //6.- Crea una variable llamada "valor1" y otra llamada "valor2", 
   //asignándoles valores numéricos de tu elección. Luego, 
   //realiza la resta de estos dos valores y almacena el resultado 
   //en una tercera variable llamada "resultado". 
   //Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
        let resultadoResta = valor2- valor1;
        console.log(`La diferencia de ${valor1} y ${valor2} es igual a ${resultadoResta}`);
    //7.-Pide al usuario que ingrese su edad con prompt. 
    //Con base en la edad ingresada, 
    //utiliza un if para verificar si la persona es mayor o menor de edad 
    //y muestra un mensaje apropiado en la consola.
    let edadUsuario = prompt("Ingrese su edad, por favor");
    if (edadUsuario>17){
        console.log("Eres mayor de Edad");
    }else{
        console.log("Eres menor de Edad");
    }

    //8.-Crea una variable "numero" y solicita un valor con prompt. 
    //Luego, verifica si es positivo, negativo o cero 
    //utilizando un if-else y muestra el mensaje correspondiente.
    let numeroUsuario = parseInt(prompt("Ingrese un numero por favor"));
    if (numeroUsuario >0){
        console.log("Su numero es positivo");
    }else if (numeroUsuario<0){
        console.log("Su numero es negativo");
    }else{
        console.log("Su numero es Cero (0)");
    }

    //9.-Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
    let contador =1
    while(contador<=10){
        console.log(contador);
        contador++
    }

    //10.-Crea una variable "nota" y
    // asígnale un valor numérico. 
    //Utiliza un if-else para determinar si la nota es mayor o igual a 7 y 
    //muestra "Aprobado" o "Reprobado" en la consola.
    let nota = 0;
    if (nota>=7){
        console.log("Aprobado");
    }else{
            console.log("Reprobado");
    }

    //11.-Utiliza Math.random para generar cualquier número aleatorio y 
    //muestra ese número en la consola.
    let numAleatorio = Math.random();
    console.log(numAleatorio);

    //12.-Utiliza Math.random para generar un número entero entre 1 y 10 y 
    //muestra ese número en la consola.
    let numAleatorio2 = parseInt(Math.random()*10+1);
    console.log(numAleatorio2);

   //13.- Utiliza Math.random para generar un número entero entre 1 y 1000 y 
   //muestra ese número en la consola.
   let numAleatorio3 = parseInt(Math.random()*1000+1);
   console.log(numAleatorio3);

