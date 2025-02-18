const arrayofLoveWishes=[
"Нехай це свято подарує радість і тепло.",
"Бажаю тобі щирого кохання і ніжності.",
"Кохання окриляє, надихає і дарує щастя.",
"Хай у серці завжди живе справжня любов.",
"Любов – це магія, що наповнює життя сенсом.",
"Нехай поруч буде людина, яка цінує тебе.",
"Хай почуття будуть щирими, світлими і вічними.",
"Нехай серце палає від ніжності та тепла.",
"Кохання – це світло, що веде нас уперед.",
"Бажаю тобі щастя, романтики і приємних сюрпризів!"

]






document.getElementById('btn_love_wishes').addEventListener('click',()=>{
    let index=Math.floor(Math.random() * arrayofLoveWishes.length)

    document.getElementById('love-wishes').innerText = arrayofLoveWishes[index]})