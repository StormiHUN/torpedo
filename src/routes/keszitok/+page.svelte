<main>
        <img id="ship1" src="battleship.png">
        <img id="bullet" src="bullet.png">
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
        top: 0px;
        left: 10px;
    }

    #ship2{
        height: 25px;
        width: 25px;
        position: absolute;
        top: 0px;
        right: 10px;
    }


    #bullet{
        height: 20px;
        width: 20px;
        position: absolute;
        top: 0px;
        left: 25px;
        animation: move infinite 4s;
    }


    @keyframes move{
      from{
        top: 0px;
        left: 25px;
      }
      to{
        top: 0px;
        right: 25px;
      }
    }

</style>