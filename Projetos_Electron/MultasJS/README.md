---- Pacotes Instalados ---

comando para rodar o projeto: npm start 
comando para dar reload ao salvar: npm run reload 


01: npm init  -y

02: npm i --save-dev electron

<!-- 03: npm install --save  nodemon -->

04: npm install  live-reload --save-dev

obs: colocar no index.html (<script src="http://localhost:35729/livereload.js"></script>)

No package.json 

"scripts": {
    "start": "electron .",
    "reload": "live-reload ./ --port 35729"
  }

  rodar primeiro o live-reload