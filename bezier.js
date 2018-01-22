function lineByTime(dots,t){
    if(dots.length !== 2){
        console.error('lineByTime 参数dots不正确')
    }else {
        return {
            x: (1-t)*dots[0].x + t*dots[1].x,
            y: (1-t)*dots[0].y + t*dots[1].y
        }
    }
}

function bezierByTime(dots,t){
    if(dots.length == 1){
        return dots;
    }else if(dots.length > 1){
        var temp = [],
            pos1,
            pos2;
        while(dots.length > 0){
            pos1 = dots.shift();
            pos2 = dots.shift();
            if(dots.length !== 0){
                dots.unshift(pos2);
            }
            temp.push(lineByTime([pos1,pos2],t));
        }
        return bezierByTime(temp,t);
    }else {
        console.error('bezierByTime 参数dots不正确');
    }
}

function generateBezier(dots, amount){
    var ret = [];
    for(var i=0; i<=amount; i++){
        ret.push(bezierByTime(dots.slice(),i/amount)[0]);
    }
    return ret;
}