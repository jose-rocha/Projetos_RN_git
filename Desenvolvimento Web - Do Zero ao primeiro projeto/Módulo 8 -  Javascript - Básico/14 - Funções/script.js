// function media(n1, n2) {
//     let nota1 = n1;
//     let nota2 = n2;
//     let media = (nota1 + nota2) / 2;
//     console.log(media)
// }

// media(6, 7);
// media(8, 7);


function media(n1, n2) {
    let nota1 = n1;
    let nota2 = n2;
    let media = (nota1 + nota2) / 2;
    // console.log(media);

    return media;
}

let resultado1 = media(6, 7);
let resultado2 = media(8, 7);

console.log(`As médias é ${resultado1} e ${resultado2}`);