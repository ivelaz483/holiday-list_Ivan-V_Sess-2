var element = document.querySelectorAll('li.holiday');
for(var i = 0; i<element.length; i++){
    
    if(i % 2 == 0){
    element[i].className = 'odd';
}

else {
element[i].className = 'even';
}}
