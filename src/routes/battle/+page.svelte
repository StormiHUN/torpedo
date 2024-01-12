<main>
    <div id="back"><a href="stormihun.github.io/torpedo/">Vissza</a></div>
    <div id="playershit">
        {#each [...Array(121).keys()] as x}
            <button id={x}>
                {#if x > 0 && x < 11}
                    {x}
                {:else if x % 11 == 0 && x != 0}
                    {"abcdefghij".charAt(x/11-1)}
                {:else if x == 0}
                    <img src="ship.png" alt="grid00">&nbsp;
                {/if}
            </button>
        {/each}
    </div>

    <div id="enemyshit">
        {#each [...Array(121).keys()] as x}
            <button data-key={x}>
                {#if x > 0 && x < 11}
                    {x}
                {:else if x % 11 == 0 && x != 0}
                    {"abcdefghij".charAt(x/11-1)}
                {:else if x == 0}
                    <img src="ship.png" alt="grid00">&nbsp;
                {/if}
            </button>
        {/each}
    </div>

    <div id="endScreen"></div>
    <div class="selected ship bumm" style="display: none;"></div>

</main>
<style scoped>

    #endScreen{
        display: none;
        max-width: 70vw;
        flex-direction: column;
        gap: 0.5rem;
        padding: 2rem 4rem;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        border-radius: 1rem;
        transform: translateY(-50%);
        backdrop-filter: blur(20px);
        background-color: rgba(200, 200, 240, 0.2);
        color: rgb(230, 230, 230);
        text-align: center;
        margin-right: 10rem;
    }

    main{
        display: flex;
        gap: 2rem;
    }
    #back a{
        background-color: rgba(255, 255, 255, 0.4);
        padding: 10px;
        position: absolute;
        top: 5px;
        left: 5px;
        color: white;
        border-radius: 0.5rem;
    }
    #back a{
        text-decoration: none;
    }
    #playershit, #enemyshit{
        display: grid;
        grid-template-columns: repeat(11,1fr);
        gap: 0.2rem;
    }
    button{
        width: 3rem;
        height: 3rem;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 0.4rem;
        border: none;
    }
    .selected{
        background-color: rgba(100, 255, 100, 0.4);
    }
    .ship{
        background-color: rgba(0, 0, 0, 0.4);
    }
    .bumm{
        background-color: rgba(255, 100, 100, 0.4);
    }
    img{
        height: 2rem;
        width: 2rem;
    }
    </style>
<script>
    import { onMount } from "svelte";


    const ships = [6,4,3,3,2,2,2]
    let segments = 22
    let orientation = 1
    let currentship = 0
    const enemyships = generateShipCoordinates()
    let enemy_segments = 16
    onMount(() => {
        const buttons = document.querySelectorAll("#playershit button")
        buttons.forEach((btn) => {
            btn.onmouseover = () => {
                if(btn.innerText) return
                buttons.forEach((e) => e.classList.remove("selected"))
                for(let i = 0; i < ships[currentship]; i++){
                    if(orientation == 0) document.getElementById(parseInt(btn.id)+i).classList.add("selected")
                    else document.getElementById(parseInt(btn.id)+i*11).classList.add("selected")
                }
            }
        })
        document.onmouseup = (e) => {
            if(e.target.innerText) return
            if(currentship >= ships.length) return
            if(e.button != 0) return
            if(!Array.from(buttons).includes(e.target)) return
            for(let i = 0; i < ships[currentship]; i++){
                let starting_element = document.getElementById(e.target.id)
               if(parseInt(e.target.id)+i*11 > 121){ //kilóg le
                    starting_element.classList.remove("ship")
                    for(let c = 0; c < i; c++) document.getElementById(parseInt(e.target.id)+c*11).classList.remove("ship")
                    i--
                    return
                }
                else if(orientation == 0 && Math.floor(starting_element.id/11) != Math.floor((parseInt(e.target.id)+i)/11)){ //átlóg másik sorba fekve
                    starting_element.classList.remove("ship")
                    for(let c = 0; c < i; c++) document.getElementById(parseInt(e.target.id)+c).classList.remove("ship")
                    i--
                    return
                }
                else if(orientation == 0 && document.getElementById(parseInt(e.target.id)+i).classList.contains("ship")){ //ne tegye másik hajóba fekve
                    starting_element.classList.remove("ship")
                    for(let c = 0; c < i; c++) document.getElementById(parseInt(e.target.id)+c).classList.remove("ship")
                    i--
                    return
                }
                else if(document.getElementById(parseInt(e.target.id)+i*11).classList.contains("ship")){ //ne tegye másik hajóba állva
                    starting_element.classList.remove("ship")
                    for(let c = 0; c < i; c++) document.getElementById(parseInt(e.target.id)+c*11).classList.remove("ship")
                    i--
                    return
                }
                else if(orientation == 0) document.getElementById(parseInt(e.target.id)+i).classList.add("ship")
                else document.getElementById(parseInt(e.target.id)+i*11).classList.add("ship")
            }
            currentship++
        }
        document.oncontextmenu = (e) => {
            e.preventDefault()
            orientation = !orientation
        }
        const buttons2 = document.querySelectorAll("#enemyshit button")
        buttons2.forEach((btn) => {
            btn.onclick = () => {
                if(btn.innerText) return
                if(currentship < ships.length) return
                if(btn.classList.contains("bumm")) return
                for(const v of enemyships) {
                    if(btn.dataset.key == (v[0]+v[1]*11)){
                        btn.insertAdjacentHTML("beforeend",'<img src="explosion.png" alt="Ship hit">&nbsp;')
                        enemyHit()
                        break
                    }
                }
                btn.classList.add("bumm")
                shoot()
            }
        })
    })
    

    
    

    const alreadyHit = [0,1,2,3,4,5,6,7,8,9,10,11,22,33,44,55,66,77,88,99,110,121]
    const directHit = []
    const irany = [,]


    

    function enemyHit() {
        enemy_segments--
    }

    function ifHit(target) {
        if(document.getElementById(target).classList.contains("ship")) return true
        return false
    }

    function shoot() {
        let rand = Math.floor(Math.random()*122)
        do{
            rand = Math.floor(Math.random()*122)
        }while(alreadyHit.includes(rand))
        if(ifHit(rand)){
            directHit.push(rand)
            segments--
            document.getElementById(rand).insertAdjacentHTML("beforeend",'<img src="explosion.png" alt="Ship hit">&nbsp;')
            
        }
        
        document.getElementById(rand).classList.remove("ship")
        document.getElementById(rand).classList.add("bumm")
        alreadyHit.push(rand)
        
        if(segments <= 0) endGame(false)
        if(enemy_segments <= 0) endGame(true)
    }

    let shotsTaken = 0;

    function endGame(flag) {
        const enemys = document.querySelectorAll("#enemyshit button")
        for(let i = 0; i < 121; i++){
            if(enemys[i].classList.contains("bumm")) shotsTaken++;
            document.getElementById(""+i+"").style.display = "none"
            enemys[i].style.display = "none"
        }
        document.getElementById("endScreen").style.display = "flex"
        let html = ""
        if(flag){
            html += "<h3>Győzelem</h3><br>"
            html += "<p>Elsüllyesztetted az ellenség összes hajóját</p><br>"
            html += "<p>" + Math.round(16/shotsTaken*100) + " %-os volt a pontosságod</p><br>"
            html += "<p> " + segments + " hajód maradt </p>"
            document.getElementById("endScreen").innerHTML = html
        }else{
            html += "<h3>Vesztettél</h3><br>"
            html += "<p>Az ellenség elsüllyesztette az összes hajónkat</p><br>"
            html += Math.round(22/shotsTaken*100) + " %-os volt a pontosságod"
            html += "<p> " + enemy_segments + " hajója maradt az ellenségnek</p>"
            document.getElementById("endScreen").innerHTML = html
        }
    }

  function generateShipCoordinates() {
  const boardSize = 10; 
  const ships = [];
  
  
  function generateRandomCoordinates(length) {
    const shipCoordinates = [];
    const horizontal = Math.random() < 0.5; 
    
    let x, y;
    if (horizontal) {
      x = Math.floor(Math.random() * (boardSize - length + 1));
      y = Math.floor(Math.random() * boardSize);
    } else {
      x = Math.floor(Math.random() * boardSize);
      y = Math.floor(Math.random() * (boardSize - length + 1));
    }
    
    for (let i = 0; i < length; i++) {
      if (horizontal) {
        shipCoordinates.push([x + i + 1, y + 1]);
      } else {
        shipCoordinates.push([x + 1, y + i + 1]);
      }
    }
    
    return shipCoordinates;
  }
  
  
  const shipLengths = [6,4,3,3,2,2,2];
  for (let i = 0; i < shipLengths.length; i++) {
    const shipID = i + 1;
    const length = shipLengths[i];
    const ship = generateRandomCoordinates(length);
    ships.push(...ship.map(coord => [...coord, shipID]));
  }
  
  return ships;
}

//console.log(enemyships);

    

</script> 
