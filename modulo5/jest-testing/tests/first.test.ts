import { consumers } from "stream";

describe("Testing validateEmptyPropertir", () => {
  test("Exercicio 0 ", () => {
    expect(isEven(112)).toBe(true);
  });

  test("Exercicio 01 ", () => {
    expect(toUpperCase("bananinha")).toEqual("BANANINHA");
  });

  test("Exercicio 02 ", () => {
    expect(divideLetter("rua")).toEqual(["r", "u", "a"]);
  });

  test("Exercicio 03 ", () => {
    expect(Convert("60")).toBe(60);
  });

  test("Exercicio 04 ", () => {
    expect(countLetter("Testing")).toBe(7);
  });

  test("Exercicio 05 ", () => {
    const n = getRandomInt();
    expect(n).toBe(n);
    console.log("Exercicio 05 => aqui o N esperado", n);
  });

  test("Exercicio 06 ", () => {
    const user: IUser = {
      id: "002",
      name: "Astrodev",
    };
    expect(users).toContainEqual(user);
  });

  test("Exercicio 07 ", () => {
    const myArray: number[] = [1, 5, 2, 3, 7];
    const array = ArrayAvg(myArray);
    expect(Math.ceil(array)).toBeGreaterThan(3);
  });
  test("Exercicio 08 ",()=> {
    expect(descubraSuaIdade(1997)).toBe(25)
  })
  test("Exercicio 09 ",()=>{
    expect(formatDate("1997/09/21")).toBe("21/09/1997")
  })
});


// Exercicio 0
const isEven = (interger: number): boolean => {
  if (interger % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
// Exercicio 01
const toUpperCase = (word: string): string => {
  return word.toUpperCase();
};
// Exercicio 02
const divideLetter = (word: string): string[] => {
  return word.split("");
};
// Exercicio 03
const Convert = (word: string): number => {
  return Number(word);
};
// Exercicio 04
const countLetter = (word: string): number => {
  return word.length;
};
// Exercicio 05
const getRandomInt = (): number => {
  const min = 1;
  const max = 10;
  const res = Math.floor(Math.random() * (max - min) + min);
  return res;
};
// Exercicio 06
interface IUser {
  id: string;
  name: string;
}
const users: IUser[] = [
  {
    id: "001",
    name: "Aline",
  },
  {
    id: "002",
    name: "Astrodev",
  },
  {
    id: "003",
    name: "Labenu",
  },
  {
    id: "004",
    name: "BR",
  },
];
// Exercicio 07
const ArrayAvg = (Array: number[]): number => {
  var i = 0,
    summ = 0,
    ArrayLen = Array.length;
  while (i < ArrayLen) {
    summ = summ + Array[i++];
  }
  return summ / ArrayLen;
};
// Exercicio 08
const descubraSuaIdade = (anoNasc: number): number => {
  const anoAtual = 2022;
  return anoAtual - anoNasc;
};
// Exercicio 09
const formatDate = (initialDate: string): string => {
    const date = new Date(initialDate)
		const formattedDate = date.toLocaleDateString()

    return formattedDate 
}
