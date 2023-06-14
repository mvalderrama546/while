let numeroOpcion = prompt("Digite el número del ejercicio, del 1 al 5");

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

switch (numeroOpcion) {

    case "1":

        function multiplosDeCinco() {

            let number = parseInt(prompt("Digita un número: "));

            let i = 1;

            while (i <= number) {

                if (i % 5 === 0) {

                    console.log(i);
                }

                i++;
            }
        }

        multiplosDeCinco();
        break;

    case "2":

        function loteriaFuncion() {

            let number1 = parseInt(prompt("Digite el pimero número entre 1 y 50: "));
            let number2 = parseInt(prompt("Digite el segundo número entre 1 y 50: "));

            let i = 1;

            while (i <= 50) {

                if (i === number1 || i === number2) {

                    console.log(`${i} Lotería!`);
                } else {

                    console.log(i);
                }

                i++;
            }
        }

        loteriaFuncion();

        break;
    case "3":

        function capturarNumeros() {

            let numbers = [];

            let number = parseInt(prompt("Digitar Número (0 stop): "));

            while (number !== 0) {

                if (isNaN(number)) {
                    console.log("Digite un número");
                } else {
                    numbers.push(number);
                }
                number = parseInt(prompt("Digite 0 para Stop "));
            }

            console.log("Los números son: ");
            for (let i = 0; i < numbers.length; i++) {
                console.log(numbers[i]);
            }
        }

        capturarNumeros();

        break;

    case "4":

        function capturarPalabras() {

            let words = "";

            let word = prompt("Escriba la palabra (vacío para stop): ");

            while (word !== "") {

                words += word + " ";

                word = prompt("Escriba la palabra (vacío para stop): ");
            }

            console.log("Las palabras son: " + words);
        }

        capturarPalabras();

        break;

    case "5":

        function getDayMessage() {

            let day = prompt("Digite el día de la semana: ");

            day = day.toLocaleLowerCase();

            switch (day) {
                case 'lunes':
                    alert("Es lunes negro!");
                    break;
                case "martes":
                    alert("Martes 13!");
                    break;
                case "miercoles":
                    alert("No se quedecir!");
                    break;
                case "jueves":
                    alert("Juernes!");
                    break;
                case "viernes":
                    alert("Por fin!");
                    break;
                case "sabado":
                    alert("Solo oficio!");
                    break;
                case "domingo":
                    alert("A descansar!");
                    return false;
                default:
                    alert("Día no válido!");
                    break;
            }
            return true;
        }

        while (getDayMessage()) {
        }

        break;

    default:
        alert("Opción no válida")
        break;

}
