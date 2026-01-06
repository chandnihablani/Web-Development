let count=0;
function next() {
    count++;
   document.getElementById('counter').innerHTML=count;
}
function previous() {
    if(count>0){
        count--;
    }
    else{
        alert("Number can't be less than 0")
    }
    document.getElementById('counter').innerHTML=count;
    
}