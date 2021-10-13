console.log("scripts running");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  while (true) {
    if (window.location.pathname === "/inventory") {
      console.log(`rodando - ${new Date().toLocaleString()}`);
      const fishes = document.querySelectorAll(".cardr3");
      for (let i = 0; i < fishes.length; i++) {
        const timer = document
          .querySelectorAll(".cardr3")
          [i].querySelector(".card-body button span").innerText;
        console.log(timer);
        if (parseInt(timer[0]) <= 3) {
          //clica na engranagem
          document
            .querySelectorAll(".cardr3")
            [i].querySelectorAll(".card-body button")[1]
            .click();

          await sleep(2000);
          //pega por js opcao de alga
          document.getElementById("avfoods").value = 1004;

          //adiciona evento on change
          var event = new Event("change");
          const element = document.getElementById("avfoods");
          // Dispatch it.
          element.dispatchEvent(event);

          //clica no botao de adicionar
          document.querySelector(".btn.btn-success.btn-sm.feednowfish").click();
          await sleep(2000);
        }
      }
      await sleep(60000);
    }
    await sleep(1000);
  }
}

run();
