/**
 * Funkce pro převod čísla z desítkové soustavy (10) do dvojkové soustavy (2)
 *
 *Vstupní hodnotu dostáváme jako text - převedeme ji na číselnou hodnotu
 * @param {string} inputNumber  číslo, které se má převést (v desítkové soustavě)
 * @param {number} inputNumberSystem  je číselná soustava, ze které převádíme (povoleno pouze 10)
 * @param {number} outputNumberSystem je číselná soustava, do které převádíme (povoleno pouze 2)
 * @returns {string} řetězec obsahující číslo převedené do dvojkové soustavy
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  // kontrola kombinace soustav – povoleno jen 10 a 2
  if (inputNumberSystem !== 10 || outputNumberSystem !== 2) {
    throw new Error("Pouze převod z desítkové (10) do dvojkové (2) soustavy.");
  }

  // Vstupní hodnota přichází jako text - převedeme ji na číslo, abychom s ní mohli dále pracovat
  const decimalNumber = Number(inputNumber);

  // Kontrola vstupu – musí se jednat o celé nezáporné číslo 
  if (!Number.isInteger(decimalNumber) || decimalNumber < 0) {
    throw new Error("Vstupní číslo musí být nezáporné celé číslo v desítkové soustavě.");
  }

  // Samotný převod do dvojkové soustavy
  const dtoOut = decimalToBinary(decimalNumber);

  // Vrácení výsledku
  return dtoOut;
}

/**
 * Pomocná funkce pro převod čísla z desítkové soustavy do dvojkové
 * Používá opakované dělení dvěma a skládání zbytků na začátek výsledku
 *
 * @param {number} n nezáporné celé číslo v desítkové soustavě
 * @returns {string} výsledek v podobě binárního čísla
 */
function decimalToBinary(n) {

  // Pro n = 0
  if (n === 0) {
    return "0";
  }

  let vysledek = "";

  // Opakované dělení dvěma, dokud číslo nebude 0
  while (n > 0) {
    const zbytek = n % 2;          // zbytek po dělení 2 (0 nebo 1)
    vysledek = zbytek + vysledek;  // přidání zbytku na začátek výsledku
    n = (n - zbytek) / 2;          // celé dělení dvěma
  }

  return vysledek;
}

/**
 * Povolené vstupní číselné soustavy (10 a 2)
 * V tomto řešení povolujeme pouze desítkovou soustavu (10)
 */
export function permittedInputSystems() {
  return [10];
}

/**
 * V tomto řešení povolujeme pouze dvojkovou soustavu (2)
 */
export function permittedOutputSystems() {
  return [2];
}

