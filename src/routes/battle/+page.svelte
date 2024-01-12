<main>
    <div id="back"><a href="/">Vissza</a></div>
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

    <div class="selected ship bumm" style="display: none;"></div>
</main>
<style scoped>
    main{
        display: flex;
        gap: 2rem;
    }
    #back{
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
    let enemy_segments = 22
    let orientation = 1
    let currentship = 0
    const enemyships = generateShipCoordinates()
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
                if(parseInt(e.target.id)+i*11 > 121){
                    starting_element.classList.remove("ship")
                    for(let c = 0; c < i; c++) document.getElementById(parseInt(e.target.id)+c*11).classList.remove("ship")
                    i--
                    return
                }
                else if(Math.floor(starting_element.id/11) != Math.floor((parseInt(e.target.id)+i)/11)){
                    starting_element.classList.remove("ship")
                    for(let c = 0; c < i; c++) document.getElementById(parseInt(e.target.id)+c).classList.remove("ship")
                    i--
                    return
                }
                else if(orientation == 0 && document.getElementById(parseInt(e.target.id)+i).classList.contains("ship")){
                    starting_element.classList.remove("ship")
                    for(let c = 0; c < i; c++) document.getElementById(parseInt(e.target.id)+c).classList.remove("ship")
                    i--
                    return
                }
                else if(document.getElementById(parseInt(e.target.id)+i*11).classList.contains("ship")){
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
                for(const v of enemyships) {
                    if(btn.dataset.key == v[0]+v[1]*11+12){
                        btn.insertAdjacentHTML("beforeend",'<img src="explosion.png" alt="Ship hit">&nbsp;')
                        enemy_segments--
                        break
                    }
                }
                btn.classList.add("bumm")
                shoot()
            }
        if(segments <= 0) alert("Vesztettél")
        if(enemy_segments <= 0) alert("Nyertél")
        })
    })

    
    

    const alreadyHit = []
    const directHit = []
    const irany = [,]


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
            document.getElementById(rand).insertAdjacentHTML("beforeend",'<img src="explosion.png" alt="Ship hit">&nbsp;')
            segments--
        }
        
        document.getElementById(rand).classList.remove("ship")
        document.getElementById(rand).classList.add("bumm")
        alreadyHit.push(rand)

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
        shipCoordinates.push([x + i, y]);
      } else {
        shipCoordinates.push([x, y + i]);
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