for(i = 1; i<501; i++){

    if(i % 9 == 0 && i % 4 == 0 && i % 5 == 0 ){
        document.write(`${i} (es multiplo de 4 y 9) <br> ----------------------------------------- <br> `)
    }
    else if(i % 9 == 0 && i % 4 == 0 ){
        document.write(`${i} (es multiplo de 4 y 9) <br> `)
    }
    else if(i % 4 == 0){
    document.write(`${i} es multiplo de 4 <br> `)
    }
    else if(i % 9 == 0){
    document.write(`${i} es multiplo de 9 <br> `)
    }
    else if(i % 5 == 0){
        document.write(`${i}<br> ----------------------------------------- <br> `)
    }else {
    document.write(`${i} <br>`)
    }
    
}