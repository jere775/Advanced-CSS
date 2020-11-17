//easy
function exercise(activity){
return function(){
    return (`Today's exercise: ${activity}`);  
    }
}

var run, swim;
run = exercise('running');
console.log(run());
swim = exercise('swimming');
console.log(swim());