<script>
	import VisitCounter from "$components/VisitCounter.svelte";

</script>
<article class="rel-pos">
    <section class="rel-pos" style="background: url(/CoolWebpage/bg.png); padding-bottom: 0;">
        <img loading="lazy" src="/CoolWebpage/skeletonworm.gif" alt="Skeleton doing the worm" class="abs-pos" width="128px" style="transform: translateY(-64px)" />
        <img loading="lazy" src="/CoolWebpage/welcome2.gif" alt="Welcome" width="512px" />
        <img loading="lazy" src="/CoolWebpage/explosion.gif" alt="Explosion" class="abs-pos" width="128px" style="transform: translateX(-320px)" />
        <img loading="lazy" src="/CoolWebpage/explosion.gif" alt="Explosion" class="abs-pos" width="128px" style="transform: translateX(320px)" />
        <h1>Tom Rinaldi's Webpage!</h1>
        
        <p>My name is Tomás (Or Tom) Rinaldi and <br /> this is my webpage on the Internet</p>
        <img loading="lazy" src="/CoolWebpage/world.gif" alt="Earth" width="128px" />
        <p>That means you can see this page anywhere in the world!</p>

        <img loading="lazy" src="/CoolWebpage/velociraptor.gif" alt="Velociraptor" height="128px" />

        <VisitCounter visitId="retro_page" />
    </section>

    <div class="rel-pos">
        <div class="abs-pos" style="transform: translate(30%, -100px) rotate(-10deg); z-index: 100">
            <p><b>Placing stuff in HTML is tough!</b></p>
            <img loading="lazy" src="/CoolWebpage/programmer.gif" alt="Hitting head against keyboard" width="128px" />
        </div>
    </div>

    <section class="rel-pos second" style="border-top: 8px solid gray; padding-bottom: 0;">
        <div class="rel-pos" style="display: flex; flex-direction: row; gap: 60px; margin-bottom: 40px;">
            <img loading="lazy" src="/CoolWebpage/Guitar.gif" alt="Guitar" width="128px" />
            <img loading="lazy" src="/CoolWebpage/guitarist1.gif" alt="Guitarist" width="128px" />
        </div>
        <p>I play the electric guitar, a blue one like the one above. I can play some Green Day and Beatles songs.</p>

        <img loading="lazy" src="/CoolWebpage/notespin.gif" alt="Musical note" class="abs-pos"
            style="transform: translate(450px, 350px) rotate(10deg);" width="128px" />
        <img loading="lazy" src="/CoolWebpage/note.gif" alt="Musical note" class="abs-pos"
            style="transform: translate(-450px, 350px) rotate(-10deg);" width="64px" />

        <img loading="lazy" src="/CoolWebpage/spinstar.gif" alt="Star" class="abs-pos"
            style="transform: translate(-350px, 200px);" width="64px" />
        <img loading="lazy" src="/CoolWebpage/spinstar.gif" alt="Star" class="abs-pos"
            style="transform: translate(350px, 200px);" width="64px" />
            
        <img loading="lazy" src="/CoolWebpage/doot.gif" alt="Doot" width="128px" />
        
        <p>I also sing from time to time some of the songs I play on guitar.</p>

        <img loading="lazy" src="/CoolWebpage/musicline14.gif" style="margin: 30px 0;" alt="Divider" width="512px" />

    </section>

    <section class="rel-pos second" style="padding-top: 0;">
        <hr />

        <img loading="lazy" src="/CoolWebpage/codebar.gif" alt="Code" height="256px" class="abs-pos"
            style="transform: translate(-350px, 380px);" />
        <img loading="lazy" src="/CoolWebpage/codebar.gif" alt="Code" height="256px" class="abs-pos"
            style="transform: translate(350px, 380px);" />

        <img loading="lazy" src="/CoolWebpage/TuxProgramming.gif" alt="Tux Programming" width="256px" />
        <p>I like programming stuff like webpages or even videogames, make sure to check all of them on my main page.</p>

        <p>I started programming since I was 14, I liked playing videogames and I wanted to make my own.</p>

        <p>
            Now I'm doing what I wanted when I was a kid, I'm working in the AAA game industry.
            And soon on my own games.
        </p>

        <img loading="lazy" src="/CoolWebpage/code.gif" alt="Code" style="margin-top: 60px;" height="100px" />

        <img loading="lazy" src="/CoolWebpage/skeleton.gif" alt="Skeleton" style="margin-top: 60px;" width="128px" />
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

    hr {
        border-top: 5px solid #bbbbbb;
        width: 100%;
        max-width: 1024px;
        margin: 50px 0 100px 0;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 92px 48px;
    }

    section.second {
        background: url(/CoolWebpage/velvet01.jpg);
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
