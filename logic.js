function SuiteTest(exercise, active) {
  this.exercise = exercise;
  this.active = active;

  if (SuiteTest.allActive && this.active) {
    console.group();
    console.info(exercise);
  }

  this.test = function (input, expected) {
    if (SuiteTest.allActive && this.active) {
      console.group();
      console.info("INPUT:", toString(input));
      console.info("EXERCISED:", toString(exercise(input)));
      if (toString(expected) !== toString(exercise(input))) {
        console.info("ERROR:");
        console.info("EXPECTED:", toString(expected));
      }
      console.groupEnd();
    }
    return this;
  }

  function toString(value, margin = 0) {
    if (typeof value === "undefined") {
      return "undefined";
    }
    if (Number.isNaN(value)) {
      return "NaN";
    }
    if (typeof value === "boolean" || typeof value === "number") {
      return value
    }
    if (typeof value === "string") {
      return '"' + value + '"';
    }
    if (value === null) {
      return "null";
    }
    if (value instanceof Array) {
      let result = "[\n";
      margin += 2;
      for (let i = 0; i < value.length; i++) {
        result += `${getMargin(margin)}(${i}) ${toString(value[i], margin)},\n`;
      }
      margin -= 2;
      return result + getMargin(margin) + "]"
    }
    if (value instanceof Object) {
      let result = "{\n";
      margin += 2;
      for (let item in value) {
        result += getMargin(margin) + item + ": " + toString(value[item], margin) + ",\n";
      }
      margin -= 2;
      return result + getMargin(margin) + "}"
    }
  }

  function getMargin(margin) {
    result = "";
    for (let i = 0; i < margin; i++) {
      result += " ";
    }
    return result;
  }

  this.end = function () {
    if (SuiteTest.allActive && this.active) {
      console.groupEnd();
    }
  }

}

SuiteTest.allActive = true;

// empieza con salto de linea
// un título por cada apartado, unidad
// primer nivel sin espacios
// cada linea es del mismo nivel que la anterior o uno más, dos espacios!!!
// precedido de 2*(nivel-1) espacios para indicar la jerarquía
// sin espacios, tabuladores, ... finales ni intermedios!!! Solo un espacio!

// Informática
//   Patrones
//     -Lenguaje:UML, Unified Model Language
//   Conocimiento
//     Información
//       -Lenguaje:regexp
//       -Lenguaje:eXtensible Markup Language
//       -Lenguaje:Document Type Definition
//       -Lenguaje:XML Schema
//       -Lenguaje:Document Object Model
//       -Lenguaje:XPath
//       -Lenguaje:Structure Query Language
//       -Lenguaje:JSON
//       -Lenguaje:YAML
//       -Lenguaje:Hipertext Markup Langguage
//       -Lenguaje:Cascade Style Sheet
//       -Lenguaje:eXtensible Style Language
//   Complejidad
// Computación
//   Software
//     -Lenguaje:Javascript
//     -Framework:DHTML
//   Disciplinas
//     Requisitos
//     Diseño
//       Analisis de Requisitos
//       Diseño de Tecnologías
//     Pruebas
//     Implementación
//     Despliegue
//     Gestión
//   Evolución
//     Tecnologías
//       Formatos
//       Sistemas Operativos
//       Lenguajes de Progrmación
//       Interfaces Gráficas de Usuario
//       Sistemas Gestores de Bases de Datos
//       Sistemas Comunicaciones
//       Sistemas Distribuidos
//       WorldWideWeb
//         -Framework:AJAX
//         -Framework:JQuery
//         -Framework:Bootstrap
//     Metodologías
//       Cascada
//       Iterativas
//         -Metodología:Rational Unified Process
//         -Metodología:Scrum
//         -Metodología:eXtreme Programming
// Disciplina de Diseño
//   Diseño
//     -Lenguaje:Java
//     -Framework:SWing
//   Diseño modular
//   Diseño orientado a objetos
//   Patrones de Diseño
//     -Librería:TCP/IP
//     -Librería:Ficheros
//     -Librería:SAX
//     -Librería:DOM
//     -Librería:SQL
//     -Librería:NotSQL
//   Arquitectura Software
//     Framework
//       -Librería:Reflection
//       -Librería:Anotaciones
//     Arquitectura MV*
//     -Framework:Spring
//     -Framework:node.js
//     -Framework:Angular
//     -Framework:React
//     -Framework:Vue
// Disciplina de Pruebas
//   Pruebas del Software
//   Pruebas de Caja Negra
//     -Framework:JUnit
//     -Framework:Jest
//   Pruebas de Caja Blanca
//     -Framework:Mockito
//     -Framework:Jest
//   Pruebas de Integración
//     -Herramienta:JMeter
//   Pruebas del Sistema
//     -Herramienta:Selenium
//   Integración Continua
//     -Herramienta
// Proyecto Software
//   Metodologías Pesadas
//     -Metodología:Metodología en Cascada
//     -Metodología:Rational Unified Process
//       Disciplina de Requisitos
//       Disciplina de Análsis
//       Disciplina de Diseño
//       Disciplina de Implementación
//       Disciplina de Pruebas
//       Disciplina de Gestión
//   Metodologías Ligeras
//     -Metodología:Refactoring
//     -Metodología:Test-driven Development
//     -Metodología:Scrum
//     -Metodología:eXtreme Programming`;

let USantaTecla = `
Programación Imperativa
  Tipos Primitivos
    Tipo string
      Valores de Tipo string
      Operador de Concatenación
    Tipo number
      Valores de Tipo number
      Operadores aritméticos
    Tipo boolean
      Valores de tipo boolean
      Operadores lógicos
    Operadores Relacionales
      Tipo string
      Tipo number
      Tipo boolean
    No recomendados
  Sentencias Simples
    Salida de Datos
    -Presentación:Hola Mundo!
    -Presentación:Hola Profuso Mundo! Secuencia
    -Presentación:Hola Profuso Mundo! Salto de Línea
    -Presentación:Hola Profuso Mundo! Concatenación
    Entrada de Datos
    -Presentación:Eco
    -Presentación:Adiós Lucy!
    -Presentación:Hola tú!
    Sentencia let
    -Presentación:Hola! y Adiós!
    -Presentación:Triple eco
    -Números:Pariedad
    -Números:División entera
    -Números:Primeras cifras
    -Espacio:Cuadrado
    -Espacio:Rectángulo
    -Tiempo:Unidades vividas
    -Tiempo:Mayor de Edad
    -Tiempo:Jubilado
    Tipo undefined
    Sentencia de Asignación
    -Números:Cambio monedas
    -Tiempo:Unidades vividas y restantes
    -Ordenación:Intercambio de 2 variables. Con temporal
    -Ordenación:Intercambio de 2 variables. Sin temporal
    -Ordenación:Intercambio de 3 variables
    Sentencia const
    -Tiempo:Mayor de Edad
    -Tiempo:Jubilado
    Sentencia var
  Operadores
    Operador Ternario
    -Números:Pariedad
    -Números:Cambio monedas
    -Números:Valor absoluto
    -Espacio:Triángulo
    -Tiempo:Mayor de Edad
    -Tiempo:Jubilado
    -Ordenación:Intercambio de 2 variables
    -Ordenación:Intercambio de 3 variables
    Operadores de Bits
    Operador typeof
    Conversión de Tipos
    Operadores de Acumulación
    -Números:Cambio monedas
    -Números:Valor absoluto
    -Ordenación:Intercambio de 2 variables. Sin temporal
    -Espacio:Triángulo
    Operadores de Incremento y Decremento
  Expresiones
    Precedencia
    Asociatividad
    Operador Paréntesis
Programacion Estructurada
  Sentencias Alternativas
    Sentencia if
    Sentencia switch
  Sentencias Iterativas
    Sentencia do/while
    Sentencia while
    Sentencia for
  Sentencia Secuencial
  Tablas
    Longitud de tabla
    Sentencia for/of
    -Ordenación:Método de la burbuja
    -Ordenación:Método de selección directa
    -Ordenación:Método de inserción directa
    -Ordenación:Método rápido (quicksort)
Programación Orientada a Procesos
  Funciones
    Argumentos
    Retorno
  Funciones de Orden Superior
    Argumento
    Retorno
  Funciones Anónimas
    Funciones Flecha
Programación Orientada a Objetos
    Construcción
    Mensajes
    Modificación
    Eliminación
    Función constructora`;

console.log(generateActivityDiagram("USantaTecla", USantaTecla));

function generateActivityDiagram(title, hierarchy) {
  let result = "@startuml\n";
  result += `|${title}|\n`;
  result += "start;\n";
  for (let text of toLines(hierarchy.substr(1))) {
    result += generateActivity(title, text);
  }
  result += "@enduml\n";
  return result;
}

function toLines(lines) {
  let result = [""];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === "\n") {
      result.push("");
    } else {
      result[result.length - 1] += lines[i];
    }
  }
  return result;
}

function generateActivity(title, text) {
  const level = getLevel(text);
  let result = "|";
  if (isExercise(text)) {
    result += getDomain(text);
  } else {
    result += title;
  }
  result += "|\n:";
  console.log("domain", result);
  const block = getProportionalBlock(getWithoutLevel(getWithoutDomain(text)));
  for (let line of block) {
    result += getActivityLineOpen(level) + line + getActivityLineClose(level) + "\n";
  }
  return result + ";\n";
}

function isExercise(text) {
  return text.indexOf("-") > 0;
}

new SuiteTest((input) => { return isExercise(input); }, false)
  .test(
    "  No es ejercicio",
    false,
  )
  .test(
    "  -Dominio:Si es ejercicio",
    true,
  )
  .end();

function getDomain(text) {
  return text.substring(text.indexOf("-") + 1, text.indexOf(":"));
}

new SuiteTest((input) => { return getDomain(input); }, false)
  .test(
    "  -Dominio:Si es ejercicio",
    "Dominio",
  )
  .end();

function getWithoutDomain(text) {
  return text.substring(text.indexOf(":") + 1);
}

new SuiteTest((input) => { return getWithoutDomain(input); }, true)
  .test(
    "  -Dominio:Si es ejercicio",
    "Si es ejercicio",
  )
  .end();

function getLevel(line) {
  let result = 0;
  for (let character of line) {
    if (character === " ") {
      result++;
    } else if (character !== " ") {
      return result / 2;
    }
  }
  return result / 2;
}

function getWords(line) {
  let result = "";
  for (let character of getWithoutLevel(line)) {
    if (character === " ") {
      result += "\\n";
    } else {
      result += character;
    }
  }
  return result;
}

function getWithoutLevel(line) {
  let result = "";
  for (let character of line) {
    if (character !== " " || character === " " && result !== "") {
      result += character;
    }
  }
  return result;
}

function getActivityLineOpen(level) {
  let result = "";
  if (level == 0) {
    result += "<b>";
  }
  const size = (7 - level) * 5;
  result += `<size:${size}><color:red>`;
  return result;
}

function getActivityLineClose(level) {
  let result = "</color></size>";
  if (level == 0) {
    result += "</b>";
  }
  return result;
}

function getProportionalBlock(line) {
  let combinations = getTruthTable(getNumberSpaces(line));
  if (combinations.length === 0) {
    return getBlock(line, []);
  }
  let max = 0;
  for (let i = 1; i < combinations.length; i++) {
    if (getCompactMetric(getBlock(line, combinations[max]))
      < getCompactMetric(getBlock(line, combinations[i])))
      max = i;
  }
  return getBlock(line, combinations[max]);
}

new SuiteTest((input) => { return getProportionalBlock(input); }, false)
  .test(
    "qué",
    "no calculado",
  )
  .test(
    "Operadores de Incremento y Decremento",
    "no calculado",
  )
  .test(
    "Dime una frase, Lucy!",
    "no calculado",
  )
  .test(
    "Una frase de qué",
    "no calculado",
  )
  .test(
    "Programaicón orientada a objetos",
    "no calculado",
  )
  .test(
    "Etiqueta <p>",
    "no calculado",
  )
  .test(
    "a b c d e f g h i j k l m n o p q r s t",
    "no calculado",
  )
  .test(
    "Conocido desde hace siglos, el número de oro, también llamado número fi o número áureo, está asociado a la belleza",
    "no calculada",
  )
  .end();

function getNumberSpaces(line) {
  let result = 0;
  for (let character of line) {
    if (character === " ") {
      result++;
    }
  }
  return result;
}

new SuiteTest((input) => { return getNumberSpaces(input); }, false)
  .test(
    "qué",
    0
  )
  .test(
    "Operadores de Incremento y Decremento",
    4
  )
  .end();

function getTruthTable(number) {
  if (number < 1) {
    return [];
  }
  if (number === 1) {
    return [[false], [true]];
  }
  let result = [];
  for (let newValue of [false, true]) {
    for (let combination of getTruthTable(number - 1)) {
      let newCombination = [newValue];
      for (let value of combination) {
        newCombination.push(value);
      }
      result.push(newCombination);
    }
  }
  return result;
}

new SuiteTest((input) => { return getTruthTable(input); }, false)
  .test(
    0,
    [])
  .test(
    3,
    [
      [false, false, false,],
      [false, false, true,],
      [false, true, false,],
      [false, true, true,],
      [true, false, false,],
      [true, false, true,],
      [true, true, false,],
      [true, true, true,],
    ])
  .end();

function getBlock(line, endLines) {
  let result = [""];
  let row = 0;
  let blanks = 0;
  for (let character of line) {
    if (character === " ") {
      if (endLines[blanks]) {
        row++;
        result[row] = "";
      } else {
        result[row] += " ";
      }
      blanks++;
    } else {
      result[row] += character;
    }
  }
  return result;
}

new SuiteTest((input) => { return getBlock(input.line, input.endLines); }, false)
  .test({
    line: "qué",
    endLines: []
  },
    ["qué"]
  )
  .test({
    line: "a b",
    endLines: [false,]
  },
    ["a b"]
  )
  .test({
    line: "a b",
    endLines: [true,]
  },
    ["a", "b",]
  )
  .test({
    line: "a b c",
    endLines: [false, false,]
  },
    ["a b c"]
  )
  .test({
    line: "a b c",
    endLines: [false, true,]
  },
    ["a b", "c",]
  )
  .test({
    line: "a b c",
    endLines: [true, false,]
  },
    ["a", "b c",]
  )
  .test({
    line: "a b c",
    endLines: [true, true,]
  },
    ["a", "b", "c",]
  )
  .test({
    line: "Operadores de Incremento y Decremento",
    endLines: [false, true, false, true,]
  },
    ["Operadores de", "Incremento y", "Decremento",]
  )
  .end();

function getCompactMetric(block) {
  return getProportionBlock(block) * getDensityBlock(block)
}

new SuiteTest((input) => { return getCompactMetric(input); }, false)
  .test(
    ["aaaaaaaaa a",],
    0,
  )
  .test(
    ["aaaaaaaaa", "a",],
    "no calculado",
  )
  .test(
    ["Operadores de Incremento y Decremento",],
    "no calculado",
  )
  .test(
    ["Operadores de Incremento y", "Decremento",],
    "no calculado",
  )
  .test(
    ["Operadores de Incremento", "y Decremento",],
    "no calculado",
  )
  .test(
    ["Operadores de Incremento", "y", "Decremento",],
    "no calculado",
  )
  .test(
    ["Operadores de", "Incremento y Decremento",],
    "no calculado",
  )
  .test(
    ["Operadores de", "Incremento y", "Decremento",],
    "no calculado",
  )
  .test(
    ["Operadores de", "Incremento", "y Decremento",],
    "no calculado",
  )
  .test(
    ["Operadores de", "Incremento", "y", "Decremento",],
    "no calculado",
  )
  .test(
    ["Operadores", "de Incremento y Decremento",],
    "no calculado",
  )
  .test(
    ["Operadores", "de Incremento y", "Decremento",],
    "no calculado",
  )
  .test(
    ["Operadores", "de Incremento", "y Decremento",],
    "no calculado",
  )
  .test(
    ["Operadores", "de Incremento", "y", "Decremento",],
    "no calculado",
  )
  .test(
    ["Operadores", "de", "Incremento y Decremento",],
    "no calculado",
  )
  .test(
    ["Operadores", "de", "Incremento y", "Decremento",],
    "no calculado",
  )
  .test(
    ["Operadores", "de", "Incremento", "y Decremento",],
    "no calculado",
  )
  .test(
    ["Operadores", "de", "Incremento", "y", "Decremento",],
    "no calculado",
  ).end();

function getDensityBlock(block) {
  let acum = 0;
  let max = 0;
  for (let line of block) {
    acum += line.length;
    if (max < line.length) {
      max = line.length;
    }
  }
  return acum / (max * block.length);
}

new SuiteTest((input) => { return getDensityBlock(input); }, false)
  .test(
    ["aaaaaaaaa a",],
    1,
  )
  .test(
    ["aaaaaaaaa", "a",],
    10 / 18,
  ).end();

function getProportionBlock(block) {
  let width = getBlockWidth(block);
  let height = (2 * block.length);
  let proportion = width / height;
  const GOLDEN = 1.61803398874989;
  if (proportion >= GOLDEN) {
    return GOLDEN / proportion;
  }
  return proportion / GOLDEN;
}

function getHorizontalGolden(height) {
  return 1.61803398874989 * height;
}

function getVerticalGolden(width) {
  return 0.61803398874989 * width
}

function getDistance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2));
}

function getMaxProportionBlock(block) {
  let line = block[0];
  for (let i = 1; i < block.length; i++) {
    line += " " + block[i];
  }
  return line.length / 2;
}

new SuiteTest((input) => { return getProportionBlock(input); }, false)
  .test(
    ["aaaaaaaaa a",],
    11 / 2
  )
  .test(
    ["aaa bb cccc",],
    11 / 2
  )
  .test(
    ["aaa bb", "cccc",],
    6 / 4
  )
  .test(
    ["aaa", "bb cccc",],
    7 / 4
  )
  .test(
    ["aaa", "bb", "cccc",],
    6 / 4
  )
  .end();

function getBlockWidth(block) {
  let result = block[0].length;
  for (let i = 1; i < block.length; i++) {
    if (result < block[i].length) {
      result = block[i].length;
    }
  }
  return result;
}

new SuiteTest((input) => { return getBlockWidth(input); }, false)
  .test(
    ["aaa bb cccc",],
    11
  )
  .test(
    ["aaa bb", "cccc",],
    6
  )
  .test(
    ["aaa", "bb cccc",],
    7
  )
  .test(
    ["aaa", "bb", "cccc",],
    4
  )
  .end();