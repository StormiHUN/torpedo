<div id="back"><a href="/">Vissza</a></div>
<main>
        <img id="ship1" src="battleship.png">
        <img id="bullet1" src="bullet.png">
        
        <img id="ship2" src="battleship2.png">
        <p>Bugyi András Patrik</p>
        <p>Benacsek Dorián</p>
</main>

<style scoped>

main{
        max-width: 70vw;
        display: flex;
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

    }

    #ship1{
        height: 25px;
        width: 25px;
        position: absolute;
        top: 25px;
        left: 10px;
    }

    #ship2{
        height: 25px;
        width: 25px;
        position: absolute;
        top: 25px;
        right: 10px;
    }


    #bullet1{
        height: 20px;
        width: 20px;
        position: absolute;
        top: 25px;
        left: 25px;
        animation: move1 linear 1.5s infinite;
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
        color: white;
    }

    @keyframes move1{
      0%{
        visibility: hidden;
        top: 25px;
        left: 20,45px;
      }
      10%{
        top: 20px;
        left: 40,9px;
      }
      20%{
        top: 15px;
        left: 61,35px;
      }
      30%{
        top: 10px;
        left: 81,8px;
      }
      40%{
        top: 5px;
        left: 102,25px;

      }
      50%{
        top: 0px;
        left: 122,7px;
      }
      60%{
        top: 5px;
        left: 143,15px;
      }
      70%{
        top: 10px;
        left: 163,6px;
      }
      80%{
        top: 15px;
        left: 184,05px;
      }
      90%{
        top: 20px;
        left: 204,5px;

      }
      100%{
        top: 25px;
        left: 225px;

      }
    }

</style>