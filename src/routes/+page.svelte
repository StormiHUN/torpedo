<main>
    <h1>
        Torpedó
    </h1>
    <a>Csatába!</a>
    <a href="/tutorial">Kezdők kézikönyve</a>
    <a href="/keszitok">Készítők</a>
</main>

<style scoped>
    main{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 2rem 4rem;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        border-radius: 1rem;
        transform: translateY(-50%);
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(5px);
        background-color: rgba(255, 255, 255, 0.2);
        color: rgb(230, 230, 230);
    }
    h1{
        text-align: center;
        padding-bottom: 1rem;
    }
    
    a{
        color: rgb(230, 230, 230);
        padding: 0.5rem;
        font-size: 1rem;
        border: 0;
        border-radius: 0.4rem;
        background-color: rgba(240, 240, 240, 0.2);
        width: 100%;
        text-align: center;
        text-decoration: none;
        user-select: none;
        cursor: pointer;
        
    }
    a:hover{
        background-color: rgba(28, 65, 84, 0.4);
        width: 110%;
        transition: all ease-in-out 0.2s;
    }
</style>