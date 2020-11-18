import sum from "./modules/sum.js";
import mult from "./modules/mult.js";

function percent(valor, total) {
  /* 4 ---- x
      10 ---- 100%
      10x = 400%
      400/10
    
    */
  return `${mult(valor, 100) / total}% `;
}

console.log(percent(4, 10));
sum();
mult();
