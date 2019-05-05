
class LivingCreature {
    constructor(x, y, index){
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.index = index;
        this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
 
    }
    chooseCell(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }   
        }
        return found;
    }
}
   


class Grass extends LivingCreature {

    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if(this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0],newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;
        }
    }
}





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Eatgrass extends LivingCreature{
  

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }




    move() {

        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];


            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;
        }
    }



    eat() {
        console.log("exavvvv")

        var fundCords = this.getDirections(1);
       let foodcords = this.getDirections(5);
        var cord = random(fundCords);
        let fcord = random(foodcords);


        if (cord) {
            var x = cord[0];
            var y = cord[1];


            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;


            this.multiply++;


            this.energy++;


            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                }
            }


            if (this.multiply == 10) {
                this.mul()
                this.multiply -= 10;
            }


        } 
        else if(fcord){
            var x = fcord[0];
            var y = fcord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            this.multiply++;
            this.energy+=10;


            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    foodarr.splice(i, 1);
                }
            }
            if (this.multiply >= 10) {
                this.mul()
                this.multiply -= 10;
            }
        }
        
        else {

            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }


    mul() {

        var fundCords = this.getDirections(0);
        var cord = random(fundCords);


        if (cord) {
            var x = cord[0];
            var y = cord[1];

            var norXotaker = new Eatgrass(x, y);
            eatArr.push(norXotaker);


            matrix[y][x] = 2;

        }
    }


    die() {

        matrix[this.y][this.x] = 0;


        for (var i in eatArr) {
            if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                eatArr.splice(i, 1);
            }
        }
    }

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Gishatich extends LivingCreature{
 
    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    move() {

        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];


            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;
        }
    }



    eat() {

        var fundCords = this.getDirections(2);
        var foodcords = this.getDirections(5);
        var cord = random(fundCords);
        var fcord = random(foodcords);


        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            this.multiply++;
            this.energy++;


            for (var i in gisharr) {
                if (x == gisharr[i].x && y == gisharr[i].y) {
                    eatArr.splice(i, 1);
                }
            }
            if (this.multiply >= 10) {
                this.mul()
                this.multiply -= 10;
            }


        } 
        else if(fcord){
            var x = fcord[0];
            var y = fcord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            this.multiply++;
            this.energy+=10;


            for (var i in gisharr) {
                if (x == gisharr[i].x && y == gisharr[i].y) {
                    foodarr.splice(i, 1);
                }
            }
            if (this.multiply >= 20) {
                this.mul()
                this.multiply -= 10;
            }
        }
        
        else {

            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }


    mul() {

        var fundCords = this.getDirections(0);
        var cord = random(fundCords);


        if (cord) {
            var x = cord[0];
            var y = cord[1];

            var norgishatich = new Gishatich(x, y);
            gisharr.push(norgishatich);


            matrix[y][x] = 3;   

        }
    }


    die() {

        matrix[this.y][this.x] = 0;


        for (var i in gisharr) {
            if (this.x == gisharr[i].x && this.y == gisharr[i].y) {

                gisharr.splice(i, 1);
            }
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////
 class Mother  extends LivingCreature{
    

    inqnastexcum(){
        var res = 0;
        for(var y = 0;y<matrix.length;y++){
            for(var x = 0; matrix[y].length;x++){
                if(matrix[y][x]==0){
                    res ++;
                }
               
            }
        }
        var erk = matrix.length * matrix[0].length;
        

         if(res == erk ){
           
                var y = Math.round(random(matrix.length));
                var x = Math.round(random(matrix[0].length));

                var ma = new Mother(x, y);
                marr.push(ma);

                matrix[y][x] = 6;
                
               
           
                this.mul();
                this.mul1();
                this.mul2();
                if(this.energy <0){
                    this.die();
                }
                
            
         }
    }

    mul() {
       
     

            var fundCords = this.getDirections(0);
            var cord = random(fundCords);
            if (cord) {
                var x = cord[0];
                var y = cord[1];


                var norXot = new Grass(x, y);
                xotArr.push(norXot);


                matrix[y][x] = 1;
                this.energy --;
            }
        }
        mul1() {
       
     

            var fundCords = this.getDirections(0);
            var cord = random(fundCords);
            if (cord) {
                var x = cord[0];
                var y = cord[1];


                let noreat = new Eatgrass(x, y);
                eatArr.push(noreat);


                matrix[y][x] = 2;
                this.energy --;
            }
        }
        mul2() {
       
     

            var fundCords = this.getDirections(0);
            var cord = random(fundCords);
            if (cord) {
                var x = cord[0];
                var y = cord[1];


                var norgish = new Gishatich(x, y);
                gisharr.push(norgish);


                matrix[y][x] = 3;
                this.energy --;
            }
        }
        die() {

            matrix[this.y][this.x] = 0;
    
    
            for (var i in marr) {
                if (this.x == marr[i].x && this.y == marr[i].y) {
    
                    marr.splice(i, 1);
                }
            }
        }
    }
    
///////////////////////////////////////////////////////////////////////////////////////// 

class Food extends LivingCreature{
   
    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    mul() {
        this.multiply++;
        if (this.multiply >= 10) {

            var fundCords = this.getDirections(0);
            var cord = random(fundCords);
            if (cord) {
                var x = cord[0];
                var y = cord[1];


                var norfood = new Food(x, y);
                foodarr.push(norfood);


                matrix[y][x] = 5;
                this.multiply = 0;
            }
        }
    }
}
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////
class Foodmaker extends LivingCreature{
    

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }




    eat() {

        var fundCords = this.getDirections(1);
        var foodcords = this.getDirections(5);
        var cord = random(fundCords);
        var fcord = random(foodcords);


        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 5;

            this.x = x;
            this.y = y;


            this.multiply++;
            this.energy++;


            for (var i in foodmakerarr) {
                if (x == foodmakerarr[i].x && y == foodmakerarr[i].y) {
                    xotArr.splice(i, 1);
                }
            }
            
        } 


else if(fcord){
            var x = fcord[0];
            var y = fcord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 5;

            this.x = x;
            this.y = y;


            this.multiply++;
           


            for (var i in foodmakerarr) {
                if (x == foodmakerarr[i].x && y == foodmakerarr[i].y) {
                    foodarr.splice(i, 1);
                }
            }

        }
            
        else {

            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }




    move() {

        var fundCords = this.getDirections(0);
        var cord = random(fundCords);
        console.log(cord)
        if (cord ) {
            console.log("move")
            var x = cord[0];
            var y = cord[1];


            matrix[y][x] = 4;
            matrix[this.y][this.x] = 5;
            let foodm = new Food(this.x, this.y);
            foodarr.push(foodm);

            this.x = x;
            this.y = y;
            this.energy --; 
        
    
        }
    }
    die() {

        matrix[this.y][this.x] = 0;


        for (var i in foodmakerarr) {
            if (this.x == foodmakerarr[i].x && this.y == foodmakerarr[i].y) {
                foodmakerarr.splice(i, 1);
            }
        }
    }

}
