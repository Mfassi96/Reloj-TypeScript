
function obtienefecha():void{
    let date:Date=new Date();
    
    console.log(`Year: ${date.getFullYear()}\n `);
    console.log(`Month: ${date.getMonth()}\n `);
    console.log(`Day: ${date.getDay()}\n `);
    console.log(`Hours: ${date.getHours()}\n `);
    console.log(`Minutes: ${date.getMinutes()}\n `);
    console.log(`Seconds: ${date.getSeconds()}\n `);
    console.log(`\n `);
}

setInterval(obtienefecha,1000);



