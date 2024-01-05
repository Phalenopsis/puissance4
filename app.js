const main = document.getElementById("main");
let turn = true;

function createTable(target) {
  const table = document.createElement("table");

  for (let i = 0; i < 6; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const td = document.createElement("td");
      td.value = 0;
      td.addEventListener("click", function () {
        // if (turn) {
        //   td.style = "background:red";
        // } else {
        //   td.style = "background:yellow";
        // }
        //const line = td.id.charAt(0);
        const column = td.id.charAt(2);
        let line = 5;
        while (
          line >= 0 &&
          document.getElementById(line + ":" + column).value !== 0
        ) {
          line -= 1;
        }
        if (line > -1) {
          const token = document.getElementById(line + ":" + column);
          token.value = turn;
          const fallenToken = document.createElement("div");
          token.appendChild(fallenToken);
          fallenToken.style = turn ? "background:red" : "background:yellow";
          fallenToken.classList.add("token");
          //change player
          turn = !turn;
        }
      });
      td.id = i + ":" + j;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  target.appendChild(table);
}

createTable(main);
