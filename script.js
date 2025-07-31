const calculateBtn = document.getElementById("calculate-btn");
const loveCalculator = document.querySelector(".love-calculator");
const resultContainer = document.querySelector(".result-container");
const resultName = document.querySelector(".result-name");
const resultMessage = document.querySelector(".result-message");
const resultPresentageBox = document.querySelector(".result-presentage-box");
const calculateAgainBtn = document.getElementById('calculateAgainBtn');
const resultpercentageboxwrapper = document.querySelector(".result-percentage-box-wrapper")

calculateBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  const inp1 = document.getElementById("name1");
  const inp2 = document.getElementById("name2");

  if(inp1.value && inp2.value){
    const loveScrore = Math.floor(Math.random() * 100) + 1;
    loveCalculator.style.display = "none";
    resultContainer.style.display = " Block";
    resultpercentageboxwrapper.style.background = `conic-gradient(#fb93bb 0% ${loveScrore}%, #435874 ${loveScrore}% 100%)`;
    resultName.innerText = `${inp1.value} & ${inp2.value}`;
    resultPresentageBox.innerText = `${loveScrore}%`;
  } else{
    alert("name not found");
  }
})

calculateAgainBtn.addEventListener('click', ()=> {
  window.location.reload();
});