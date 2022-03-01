createRandomAdvice = async () => {
  const {slip} =  await fetch("https://api.adviceslip.com/advice")
  .then((objectAdv) => {
    return objectAdv.json();
  })
  .then((data) => {
    return data;
  });
  
  createCard(slip.id, slip.advice);
}; 

createCard = (id, legend) => {
  const title = document.getElementById("advice")
  const lgnd = document.getElementById("legend")

  title.innerText = `advice #${id}`;

  lgnd.innerText = `"${legend}"`;


};

window.onload = createRandomAdvice();
