<script>
  import Navbar from '$lib/components/Navbar.svelte';

  import met1 from '$lib/assets/image/met1.png';
  import met2 from '$lib/assets/image/met2.png';
  import met3 from '$lib/assets/image/met3.png';
  import met4 from '$lib/assets/image/met4.png';
  import met5 from '$lib/assets/image/met5.png';
  import met6 from '$lib/assets/image/met6.png';
  import met7 from '$lib/assets/image/met7.png';
  import met8 from '$lib/assets/image/met8.png';
</script>

<Navbar />

<header>
  <h1>about.</h1>
  <h2>So you wanna know about z shit eh?</h2>
</header>
<main>
 <!-- <div class="basic">
    <h2>My goals for this project:</h2>
    <ul>
      <li>Make a website that is actually useful to me and others</li>
      <li>Learn SvelteKit</li>
      <li>Have fun</li>
    </ul> -->

    <div class="goals-container">
       <div class="goals"> 
        <img src={met1} alt="Goal 1" />
        <p>ZSHIT is a project that tries to tell stories to young adults.</p>
      </div>
<!--2 -->
      <div class="goals">
       <img src={met2} alt="Goal 1" />
      <p>The idea was born from my friends. So before we move on, shoutout everyone from DC, the Springs, Tacoma, Berkeley, you all are le goats. </p>
        
      </div>
<!--3 -->
       <div class="goals">
         <img src={met3} alt="Goal 1" />
<p>Anyways, where was I? Ahh yes, <i>the idea.</i>

The idea itself was born out of necessity. In my early adult years, I felt how hard it is to stay engaged, and have a healthy relationship with the news. News these days just feels way too fast – and I think we miss out on a lot when we’re trying to chase every new story. I don’t want to do that. 
</p>
             
      </div>
<!--4 -->
       <div class="goals">
          <img src={met4} alt="Goal 1" />
        <p>I want this stuff to be fun. I want to tell stories. I want to inspire people. I want people to feel better about the world when they leave this channel. And over everything, I want this thing to be an instrument of good. 

Sounds kinda arrogant. But so what, dream big. 
</p>
     
      </div>
<!--5 -->
       <div class="goals">
        <img src={met5} alt="Goal 1" />
        <p>The goal has always been to help people out. Most of my ideas start out from simple conversations, or random thoughts that come my way. I find most of my stories in obvious places. I like starting there because that’s usually where you find things most people can relate to. Once I’m there, then I have to check under the hood to see if there’s something going on that people aren’t seeing. If I find that, then I’m off.</p>
      </div>
<!--6 -->
       <div class="goals">
          <img src={met6} alt="Goal 1" />
          <p>My process is pretty simple after that. And yeah – no, you don't get to know everything, but let's just say it involves lots of screenshots, reading, yelling at walls, drawing, quitting 4 or 5 times, and drinking lots and lots of water. Water is key.
</p>
   
      </div>
 <!--7 -->
      <div class="goals">
       <img src={met7} alt="Goal 1" />
       <p>Anyways, I started this project, because I wanted learning to stop being so boring. Because, can you imagine a world like that? A world full of young energetic people who care? A world of people fighting for mountainous change? A media that doesn’t answer to billionaires, but to us, the people?  That’s a world I want to see.
</p>
      </div>
      
 <!--8 -->
    
      <div class="goals">
         <img src={met8} alt="Goal 1" />
        <p>Thanks for reading, I’ll z you next time.</p>
      </div>


    </div>


</main>

<style>


@media (max-width: 640px) {
  .goals {
    flex-direction: column;
  }
  img {
    height: 150px;
    width: 150px;

  }
  .big{
    width: 300px;
    height: 175px;
  }
}

@media (min-width: 641px) {
  img {
    width: 300px;
    height: 300px;

  }
  .big{
    width: 500px;
    height: 300px;
}
}

.goals-container {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 0 auto;
  gap: 120px;
  margin-top: 100px;
  
 
}
.goals {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  /* outline: #ffffff solid 2px; */
  padding: 0;
  flex-direction: space-between;
  align-items: center;
  
@media (min-width: 641px) {
      &:nth-child(even) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  }
}



p{
  color: #ffffff;
  padding: 5%;
}


h1{
  color: #FBD1A2;
  font-size: 3em;
  text-align: center;
  margin-top: 20px;
}

h2{
  color: #BC4749;
  text-shadow: #FBD1A2 1px 1px 0px, #FBD1A2 -1px -1px 0px, #FBD1A2 -1px 1px 0px, #FBD1A2 1px -1px 0px;
  font-size: 2em;
  text-align: center;
  margin: 30px auto;
}
/* .basic {
  padding-top: 14px;
  justify-content: center;
  color: #FBD1A2;
  font-size: larger;
  margin-left: auto;
  margin-right: auto;
} */
</style>