<article class="rel-pos">
    <section class="rel-pos" style="background: url(/CoolWebpage/bg.png);">
        <img loading="lazy" src="/CoolWebpage/skeletonworm.gif" alt="Skeleton doing the worm" class="abs-pos" width="128px" style="transform: translateY(-64px)" />
        <img loading="lazy" src="/CoolWebpage/welcome2.gif" alt="Welcome" width="512px" />
        <img loading="lazy" src="/CoolWebpage/explosion.gif" alt="Explosion" class="abs-pos" width="128px" style="transform: translateX(-320px)" />
        <img loading="lazy" src="/CoolWebpage/explosion.gif" alt="Explosion" class="abs-pos" width="128px" style="transform: translateX(320px)" />
        <h1>Tom Rinaldi's Webpage!</h1>
        
        <p>My name is Tomás (Or Tom) Rinaldi and <br /> this is my webpage on the Internet</p>
        <img loading="lazy" src="/CoolWebpage/world.gif" alt="Earth" width="128px" />
        <p>That means you can see this page anywhere in the world!</p>

        <img loading="lazy" src="/CoolWebpage/velociraptor.gif" alt="Velociraptor" class="abs-pos" width="128px" style="bottom: 0; right: 25%" />
    </section>

    <div class="rel-pos">
        <div class="abs-pos" style="transform: translate(30%, -100px) rotate(-10deg); z-index: 100">
            <p><b>Placing stuff in HTML is tough!</b></p>
            <img loading="lazy" src="/CoolWebpage/programmer.gif" alt="Hitting head against keyboard" width="128px" />
        </div>
    </div>

    <section class="rel-pos" style="background: url(/CoolWebpage/velvet01.jpg); border-top: 8px solid gray">
        <img loading="lazy" src="/CoolWebpage/TuxProgramming.gif" alt="Tux Programming" width="256px" />
        <p>I like programming stuff like webpages or even videogames, make sure to check all of them on my main page.</p>
    </section>
    
</article>

<style>
    article {
        min-height: 100%;
        min-width: 100%;
        box-sizing: border-box;
        
        text-align: center;
        color: white;
        font-size: 1.25em;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 92px 48px;
    }
    
    h1 {
        font-family: 'Times New Roman', Times, serif;
    }
    
    h1 {
        color: yellow;
        font-size: 3rem;
        margin-top: 0;
    }

    p {
        max-width: 512px;
    }
    
    .abs-pos {
        position: absolute;
    }

    .rel-pos {
        position: relative;
    }
</style>
