window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("¡Hola Rigo desde la consola! ");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pincone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possession = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let posIndx = Math.floor(Math.random() * possession.length);
  let wheIndx = Math.floor(Math.random() * where.length);

  return `${pronoun[proIndx]} ${subject[subjIndx]} ${action[actIndx]} ${possession[posIndx]} ${where[wheIndx]}`;
};
