
let snum = [1000,100,10,1]
let g = "";
function name(num) {
    snum = typeof num === "number" ? snum.splice(4 - num.toString().split("").length):snum;
    let numm = typeof num === "number" ? num.toString().split(""): num;
    let obj = {1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'}
    const fors = function(ob,x) {
    let objj = Object.keys(ob);
    for (let i = 0; i < objj.length; i++) {
        if (objj[i] > x) 
        {
            return [obj[
                objj[i-1]],
                objj[i-1]];
        }
    }
    };
    pop = numm.shift(0);
    pop = parseInt(pop);
    
    let poped = snum.shift(0);
    let rt = poped===1000? poped:pop*poped
    
    if (rt === 0)return name(numm);
    let rp = rt === 1000 ? pop: 1;
        if (!obj.hasOwnProperty(rt)) {  
            
            if (rt < 10) {rp =1;}
            if (rt < 100 && rt > 9) {rp =10;}
            if (rt < 1000 && rt > 99) {rp =100;} 
            let bfors = fors(obj, rt);
        
            let prs = parseInt(rt.toString().split("")[0]);
            let prs1 = parseInt(bfors[1].toString().split("")[0]);
            let repe = obj[rp].repeat( prs - prs1);
            g = g.concat(bfors[0].concat(repe));
    }
    else{
        g = g.concat(obj[(rt)].repeat(rp))
    }
    return numm.length === 0 ? g: name(numm); 
}
//console.log(name(91))//  Done!

