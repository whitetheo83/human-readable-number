module.exports = function toReadable (number) {
//    function toReadable (number) {
    let numTen = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
    let numNineteen = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    let numNinety = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    let i;
    let x;
    let y;
    let s;
    if (number < 10){ //проверяем числа до 9 включительно
        for (i=0; i<numTen.length; i++) {
            if ((i) == number) {
                return(numTen[i]);
                break;
            }
        }
////////////////////////////////////////////////////////
    } else if (number > 9 && number <20) { //проверяем числа от 10 до 19 включительно
        for (i=0; i<numNineteen.length; i++) {
            if ((i+10) == number) {
                return(numNineteen[i]);
                break;
            }
        }
////////////////////////////////////////////////////////
    } else if (number > 19 && number < 100) { //проверяем числа от 20 до 99 включительно
        s = String(number).split('');
        let firstNinety = s[1];
        let secNinety = s[0];
        for (i=0; i<numNinety.length; i++) {
            if ((i+2) == Number(secNinety)) {
                x = numNinety[i];
                break;
            }
        }
        for (i=0; i<numTen.length; i++) {
            if (Number(firstNinety) == 0) {
                break;
            } else if (i == Number(firstNinety)) {
                x +=  " " + numTen[i];
                break;
            }
        }
//////////////////////////////////////////////////////////
    } else if (number > 99) {
        s = String(number).split('');
        let thirdHoundr = s[2];
        let secHoundr = s[1];
        let firstHoundr = s[0];
        for (i=0; i<numTen.length; i++) {
            if ((i) == Number(firstHoundr)) {
                x = numTen[i] + " hundred";
                break;
            } 
        }
        y = Number(secHoundr + thirdHoundr);
        if (y == 0) {

        } else if (y < 10){ //проверяем числа до 9 включительно
            for (i=0; i<numTen.length; i++) {
                if ((i) == y) {
                    x += " " + (numTen[i]);
                    break;
                }
            }

        } else if (y > 9 && y <20) { //проверяем числа от 10 до 19 включительно
            for (i=0; i<numNineteen.length; i++) {
                if ((i+10) == y) {
                    x += " " + (numNineteen[i]);
                    break;
                }
            }
        } else if (y > 19 && y < 100) { //проверяем числа от 20 до 99 включительно
            s = String(y).split('');
            let firstNinety = s[1];
            let secNinety = s[0];
            for (i=0; i<numNinety.length; i++) {
                if ((i+2) == Number(secNinety)) {
                    x += " " + numNinety[i];
                    break;
                }
            }
            for (i=0; i<numTen.length; i++) {
                if (Number(firstNinety) == 0) {
                    break;
                } else if (i == Number(firstNinety)) {
                    x +=  " " + numTen[i];
                    break;
                }
            }
        }
    }
    return(x);
}
//console.log(toReadable(897));
