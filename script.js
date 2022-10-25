let M = 10;
let N = 10;


const colorPalete = new Map([
    [0, "yellow"],
    [1, "indigo"],
    [2, "blue"],
    [3, "green"],
    [4, "violet"],
    [5, "orange"],
    [6, "pink"],
    [7, "red"],
    [8, "grey"],
    [9, "black"],
    [undefined, "white"]
]);

let screen = [
    [5, 5, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 5, 6, 1, 1, 1, 0, 0, 0, 1],
    [5, 0, 0, 1, 1, 0, 1, 1, 0, 1],
    [1, 2, 2, 2, 2, 0, 1, 0, 1, 1],
    [1, 1, 1, 2, 2, 0, 1, 0, 0, 0],
    [1, 1, 1, 2, 2, 2, 2, 0, 1, 1],
    [1, 3, 1, 1, 1, 2, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 2, 2, 1, 1, 1],
    [1, 4, 1, 2, 2, 0, 1, 0, 1, 1],
    [1, 4, 4, 6, 6, 1, 3, 0, 0, 0]
];



function floodFillUtil(screen, x, y, prevC, newC) {
    if (x < 0 || x >= M || y < 0 || y >= N) return;
    if (screen[x][y] != prevC) return;

    screen[x][y] = newC;

    floodFillUtil(screen, x + 1, y, prevC, newC);
    floodFillUtil(screen, x - 1, y, prevC, newC);
    floodFillUtil(screen, x, y + 1, prevC, newC);
    floodFillUtil(screen, x, y - 1, prevC, newC);
}

function floodFill(screen, x, y, newC) {
    prevC = screen[x][y];
    if (prevC == newC) return;
    floodFillUtil(screen, x, y, prevC, newC);
}

function answer() {
    floodFill(screen, x, y, newC);


    document.write("<table style='border: 1px solid black;margin-left: auto;margin-right: auto;' id='referenceTable'>");


    for (let i = 0; i < M; i++) {
        document.write("<tr>");
        for (let j = 0; j < N; j++) {
            let col = colorPalete.get(screen[i][j]);
            document.write('<td style="background-color:' + col + ';padding:20px 20px;border:1px solid black">' + screen[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");


    setTimeout(() => {
        alert("Reloading to original matrix")
        window.location.reload()
    }, 3000);
}


document.write("<h1>Flood fill algorithm</h1>");

let x, y, prevC, newC, y0, x1, y1;

document.write("<table id='colorMatrix'><tr>");
for (let i = 0; i < 10; i++) {
    let colors = colorPalete.get(i);
    document.write('<td style="background-color:' + colors + ';">' + "</td>");
}

document.write("</tr></table>");
document.write('<div id="message2"></div>');

$("#colorMatrix tr").each(function (r) {
    let row = r;
    $("td", this).each(function (d) {
        let cell = d;
        $(this)
            .data("rowIndex", row)
            .data("cellIndex", cell)
            .click(function () {
                y0 = $(this).data("cellIndex");
                newC = y0;
            })
    });
});

document.write("</br></br>");

document.write("<table id='matrixTable'>");
for (let i = 0; i < M; i++) {
    document.write("<tr>");
    for (let j = 0; j < N; j++) {
        let col = colorPalete.get(screen[i][j]);
        document.write('<td style="background-color:' + col + '">' + screen[i][j] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

document.write('<div id="message"></div>');


$("#matrixTable tr").each(function (r) {
    let row = r;
    $("td", this).each(function (d) {
        let cell = d;
        $(this)
            .data("rowIndex", row)
            .data("cellIndex", cell)
            .click(function () {
                x1 = $(this).data("rowIndex");
                y1 = $(this).data("cellIndex");
                x = x1;
                y = y1;
            })
    });
});

document.write("<br><br>");

document.write('<button onclick="answer()">Apply Algorithm</button> <br><br>');
document.write("<h3>Select a color from the color palette then choose a coordinate from matrix.Click on the above button to view the flood fill algorithm's implementation</h3>");


