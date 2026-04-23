<script>
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<main>
 <!-- <div class="basic">
    <h2>My goals for this project:</h2>
    <ul>
      <li>Make a website that is actually useful to me and others</li>
      <li>Learn SvelteKit</li>
      <li>Have fun</li>
    </ul> -->

    <div class="goals-container">
       <div class="squarezero">  
      <h1>about.</h1>
      </div>
      
      <div class="goals">
                 <h2>So you wanna know about z shit eh?</h2>
        

      </div>
      
      <!-- <div class="goals">
       <p>ZSHIT is a project that tries to tell stories to young adults.
</p>
        <img src="/image/stickland1.png" alt="Goal 1" />
      </div> -->
<!--1 -->
       <div class="goals">
        <img src="/image/stickland1.png" alt="Goal 1" />
        <p>ZSHIT is a project that tries to tell stories to young adults.
</p>
      </div>
<!--2 -->
       <div class="goals">
        <p>The idea was born from my friends. So before we move on, shoutout everyone from DC, the Springs, Tacoma, Berkeley, you all are le goats. </p>
        <img src="/image/stickland1.png" alt="Goal 1" />
      </div>
<!--3 -->
       <div class="goals">
         <img src="/image/stickland1.png" alt="Goal 1" />
<p>Anyways, where was I? Ahh yes, <i>the idea.</i>

The idea itself was born out of necessity. In my early adult years, I felt how hard it is to stay engaged, and have a healthy relationship with the news. News these days just feels way too fast – and I think we miss out on a lot when we’re trying to chase every new story. I don’t want to do that. 
</p>
             
      </div>
<!--4 -->
       <div class="goals">
        <p>I want this stuff to be fun. I want to tell stories. I want to inspire people. I want people to feel better about the world when they leave this channel. And over everything, I want this thing to be an instrument of good. 

Sounds kinda arrogant. But so what, dream big. 
</p>
        <img src="/image/stickland1.png" alt="Goal 1" />
      </div>
<!--5 -->
       <div class="goals">
        <img src="/image/stickland1.png" alt="Goal 1" />
        <p>The goal has always been to help people out. Most of my ideas start out from simple conversations, or random thoughts that come my way. I find most of my stories in obvious places. I like starting there because that’s usually where you find things most people can relate to. Once I’m there, then I have to check under the hood to see if there’s something going on that people aren’t seeing. If I find that, then I’m off.</p>
      </div>
<!--6 -->
       <div class="goals">
        <p>I want this stuff to be fun. I want to tell stories. I want to inspire people. I want people to feel better about the world when they leave this channel. And over everything, I want this thing to be an instrument of good. 

Sounds kinda arrogant. But so what, dream big. 
</p>
        <img src="/image/stickland1.png" alt="Goal 1" />
      </div>
 <!--7 -->
      <div class="goals">
       <img src="/image/stickland1.png" alt="Goal 1" />
        <p>My process is pretty simple after that. And yeah – no, you don't get to know everything, but let's just say it involves lots of screenshots, reading, yelling at walls, drawing, quitting 4 or 5 times, and drinking lots and lots of water. Water is key.
</p>
       
      </div> 
      
 <!--8 -->
    
      <div class="goals">
        <p>Anyways, I started this project, because I wanted learning to stop being so boring. Because, can you imagine a world like that? A world full of young energetic people who care? A world of people fighting for mountainous change? A media that doesn’t answer to billionaires, but to us, the people?  That’s a world I want to see. 
</p>
        <img src="/image/stickland1.png" alt="Goal 1" />
      </div>
 <!--9 -->
   <div class="goals">
   <img src="/image/stickland1.png" alt="Goal 1" />
        <p>Thanks for reading, I’ll z you next time.</p>

       
      </div>



    </div>
 
 
    <!-- </div> -->


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
}
.goals {
  display: flex;
  justify-content: space-evenly;
  gap: 20%;
  /* outline: #ffffff solid 2px; */
  align-items: center;
  padding: 3rem;

}

  .squarezero {
  width: 100%;
  padding-top: 3%;
  text-align: center;
  
}



p{
  color: #ffffff;
  padding: 5%;
}


h1{
  color: #FBD1A2;
  font-size: 3em;
}

h2{
  color: #BC4749;
  text-shadow: #FBD1A2 1px 1px 0px, #FBD1A2 -1px -1px 0px, #FBD1A2 -1px 1px 0px, #FBD1A2 1px -1px 0px;
  font-size: 2em;
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