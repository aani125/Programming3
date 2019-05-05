var side = 25;
var grassArr = [];
var eatArr = [];
var gisharr = [];
var marr = [];
var foodarr = [];
var foodmakerarr = [];

let matrix = []; 
let rows = 25; 
let columns = 25; 

for (let y = 0; y < rows; y++) {
    matrix[y] = []; 
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 100);
        if (a >= 0 && a < 50) {
            matrix[y][x] = 0; 
        }
        if (a >= 50 && a < 70) {
            matrix[y][x] = 1; 
        }
        else if (a >= 70 && a < 90) {
            matrix[y][x] = 2; 
        }
        else if (a >= 90 && a < 95) {
            matrix[y][x] = 3; 
        }
        else if (a >= 95 && a < 100) {
            matrix[y][x] = 4;
        }
       
    }
}



function setup() {

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                xotArr.push(grass);
            }
            else if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            }
            else if (matrix[y][x] == 3) {
                var gish = new Gishatich(x, y);
                gisharr.push(gish);
            }
            else if (matrix[y][x] == 6) {
                let ma = new Mother(x, y);
                marr.push(ma);
            }
            else if (matrix[y][x] == 5) {
                let foo = new Food(x, y);
                foodarr.push(foo);
            }
            else if (matrix[y][x] == 4) {
                let foodm = new Foodmaker(x, y);
                foodmakerarr.push(foodm);
            }
        }
    }
}


function draw() {

    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill('black');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                fill('#00BFFF');    
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill('#F6EBB4');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 6) {
                fill('#B4A4E1');
                rect(j * side, i * side, side, side);
            }
        }
    }



    for (var i in xotArr) {

        xotArr[i].mul();
    }


    for (var i in eatArr) {

        eatArr[i].eat();

    }
    for (var i in gisharr) {
        gisharr[i].eat();

    }
    for(var i in marr){
        marr[i].inqnastexcum()
    }
    for (var i in foodarr) {
        foodarr[i].mul();
    }
    for (var i in foodmakerarr) {

        foodmakerarr[i].eat();
    }

}