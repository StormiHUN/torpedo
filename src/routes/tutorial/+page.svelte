<main>
    <h3>A játék</h3>
    <p>A Torpedó kétszemélyes stratégiai táblajáték, mely 2x2 db négyzetarányos táblán játszható. A győzelemhez ki kell lőni az ellenfél összes hajóját. Bár a Torpedó táblás játék, leginkább papíron szokták játszani</p>
    <h3>Játékmenet</h3>
    <p>A játékosok felváltva mondanak egymásnak pozíciókat, (pl. A3) és mindketten kijelölik a mondott területet. Találatnak számít, ha eltalálunk egy hajót, süllyedésnek, ha minden kockáját eltaláltuk. A játék akkor ér véget, ha valamelyik játékosnak az összes hajója ki van lőve. </p>
    <h3>Megvalósítás</h3>
    <p>Maric</p>
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
    }
    h3{
        padding-top: 0.5rem;
    }
    h3, p{
        filter: drop-shadow(0 2px 2px rgb(0 0 0 / 0.5));
    }
</style>