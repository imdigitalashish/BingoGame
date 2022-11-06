class BingoPuzzle {
    constructor() {
        this.grids = document.querySelector(".gridsHolder");

        this.initGame();
        this.addEventListeners();
    }

    board = [
        '-', '-', '-', '-', '-',
        '-', '-', '-', '-', '-',
        '-', '-', '-', '-', '-',
        '-', '-', '-', '-', '-',
        '-', '-', '-', '-', '-',
    ]


    initGame() {


        [...Array(25)].forEach((_, index) => {
            let NumberPiece = document.createElement("div");
            let numberForthis = Math.floor(Math.random() * 50 + 1);
            NumberPiece.setAttribute("data-holder", numberForthis)
            NumberPiece.setAttribute("data-index", index)
            NumberPiece.style.minWidth = "70px";
            NumberPiece.innerHTML = numberForthis
            NumberPiece.style.width = "70px";
            NumberPiece.style.minHeight = "70px";
            NumberPiece.style.height = "70px";
            NumberPiece.classList.add("bingoPiece");
            this.grids.appendChild(NumberPiece)
        })

    }


    addEventListeners() {
        document.querySelectorAll(".bingoPiece").forEach(elem => {
            elem.addEventListener("click", () => {
                elem.classList.add("cutMark");
                this.board[elem.getAttribute("data-index")] = "*"
                // console.log(elem.getAttribute("data-index"));
                this.checkForBoards();
            })
        })
    }

    checkForBoards() {
        let indexValues = [];
        this.board.forEach((elem, index) => {
            if (elem === "*") {
                // console.log(elem)
                console.log(index)
                console.log(this.board[index], this.board[index + 5], this.board[index + 10])
                if (this.board[index] == this.board[index + 5] == this.board[index + 10]) {
                    console.log("BINGO");
                }
            }
        })
    }
}


window.onload = () => {
    window.game = new BingoPuzzle();
}