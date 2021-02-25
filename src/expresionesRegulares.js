/** Expresiones regulares.
  Secuencia de caracteres que crean un patrón de búsqueda en cadenas.

  Banderas: * i: ignore case. No distingue mayus y minus.
            * g: Busca de manera global todas las coincidencias en el archivo.

*/

const texto = document.getElementById('texto').textContent;

const reGex = /lorem/gi; // Patrón

console.log(reGex.test(texto));

/* Comodines: * Sustitución: Define un comodín dentro del patrón.
              * Lista de caracteres válidos: Entre corchetes [afgs], devuelve una lista de caracteres válidos.
              * Rango: Entre corchetes [a-z] establecemos un rango de búsqueda. P.e, busca todas las minúsculas.
              * Mezcla entre rangos y listas: Unir lista de caracteres válidos y rango [0-5ou].
              * Cadenas completas: Entre paréntesis en caso de que sea una, y con pipe si son varias (lorem|amet).
*/

// Sustitución
const reGexSust = /foto...\.jpg/; // En caso de que no conozcamos las letras intermedias.

console.log(reGexSust.test(texto));

// Listado de caracteres válidos
const reGexListado = new RegExp("[a-d]"); // Patrón

console.log(reGexListado.test(texto));

// Cadena completa
const reGexCadena = new RegExp("(lorem|ipsum)"); 

console.log(reGexSust.test(texto));

/* Delimitadores: ^ Antes de este símbolo no puedes escribir.
                  $ Después de este símbolo no puedes escribir.
*/

const reGexDelimitador = /^lorem$/;

console.log(reGexSust.test(texto));

/* Cantidad: * Llaves: Aparecer un número exacto de veces. Hay tres combinaciones:
                        - {n}: Se tiene que repetir n veces.
                        - {n,m}: Se tiene que repetir entre n y m veces.
                        - {n,}: Se tiene que repetir mínimo n veces.
                Ej. ^[a-zA-Z]{1,3}@{1}$
             * Asterisco: El caracter ANTES del asterisco, puede estar o no y se puede repetir.
                Ej. .*@.*\..*
             * Interrogación: Puede no estar, pero si está, solo puede estar una vez.
                Ej. ^[ae]?$
             * Operador +: Lo que está antes del operador tiene que estar mínimo una vez 
                Ej. A-[0-9]+  
             */

// Llaves.
const reGexLLaven = new RegExp("^[a-zA-Z]{4}@{1}$");
console.log(reGexSust.test(texto));

const reGexLLavenm = new RegExp("^[a-zA-Z]{1}@{1-3}$");
console.log(reGexSust.test(texto));

const reGexLLaveMinn = new RegExp("^[a-zA-Z]{1,}@{1,}$");
console.log(reGexSust.test(texto));

// Asterisco.
const reGexAsterisco = new RegExp("A-[0-9]*"); // Puede o no estar y repetir
console.log(reGexAsterisco.test(texto));

// Interrogación.
const reGexInterroga = new RegExp("[ae]*"); // Puede o no estar y repetir
console.log(reGexInterroga.test(texto));

// Operador +.
const reGexMas = new RegExp("[ae]+"); // Puede o no estar y repetir
console.log(reGexMas.test(texto));

/* Caracteres: * \s: Simboliza caracteres de espacio, tab, salto de línea - página, etc.
                    Ej. ^\s[a-zA-Z]+$
               * \S: Simboliza todo EXCEPTO caracteres de espacio.
                    Ej. ^\S{5}$
               * \d: Coincide con cualquier caracter numérico.
                    Ej. ^\d{5}$
               * \D: Coincide con cualquier caracter NO numérico.
                    Ej. ^\D{5}$
               * \w: Cualquier caracter alfanumérico, incluyendo guión bajo.
                    Ej. ^\w+@$
               * \W: Coincide con todo EXCEPTO caracteres alfanuméricos. 
                    Ej. ^\W+$
*/

// \s.
const reGexs = new RegExp("\s[a-zA-Z]+"); 
console.log(reGexs.test(texto));

// \S.
const reGexS = /\S{5}/g;
console.log(reGexS.test(texto));

// \d.
const reGexd = /\d{3}/g;
console.log(reGexd.test(texto));

// \D.
const reGexD = /\D{3}/g; 
console.log(reGexD.test(texto));

// \w.
const reGexw = new RegExp("\s[a-zA-Z]+"); 
console.log(reGexw.test(texto));

// \W.
const reGexW = new RegExp("\s[a-zA-Z]+"); 
console.log(reGexW.test(texto));

