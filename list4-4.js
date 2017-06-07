function sum(rangeFrom, rangeTo = 10){
        var total = 0;
        for (var counter = rangeFrom; counter <= rangeTo; counter++){
        total += counter;           
        }
        window.alert(total);
}