// Slide Navigation

let currentSlide = 1;

function nextSlide(){

  document.getElementById('slide'+currentSlide).classList.remove('active');

  currentSlide++;

  document.getElementById('slide'+currentSlide).classList.add('active');

  // Play song when cake slide is shown

  if(currentSlide===2){

    document.getElementById('birthdaySong').play();

  }

}

// Confetti

const confettiContainer = document.querySelector('.confetti');

if(confettiContainer){

  for(let i=0;i<100;i++){

    const confetti=document.createElement('div');

    confetti.style.left=Math.random()*100+'vw';

    confetti.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`;

    confetti.style.animationDuration=3+Math.random()*3+'s';

    confettiContainer.appendChild(confetti);

  }

}

// Cake click sound

const cake = document.getElementById('cake');

if(cake){

  cake.addEventListener('click',()=>{

    alert("🎂 Make a wish! 🎂");

  });

}

// Gift click → tulip + fireworks

const gift = document.getElementById('gift');

const tulip = document.getElementById('tulip');

const fireworks = document.getElementById('fireworks');

if(gift){

  gift.addEventListener('click',()=>{

    tulip.style.display = 'block';

    launchFireworks();

  });

}

// Fireworks function

function launchFireworks(){

  for(let i=0;i<50;i++){

    const fw=document.createElement('div');

    fw.style.position='absolute';

    fw.style.width='5px';

    fw.style.height='5px';

    fw.style.borderRadius='50%';

    fw.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`;

    fw.style.top=Math.random()*window.innerHeight+'px';

    fw.style.left=Math.random()*window.innerWidth+'px';

    fireworks.appendChild(fw);

    setTimeout(()=>fw.remove(),2000);

  }

}

// Mini game: pop balloons

// Mini game: pop balloons

const balloonContainer = document.getElementById('balloon-container');

if(balloonContainer){

  for(let i=0;i<10;i++){

    const balloon=document.createElement('img');

    balloon.src="https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUydmx5dDF6eHhvdW9hYXY5ODdnYzl5MGxyaDJ0ZmFxeGxzN21mdGcyayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vN2VlOnSeLd6UJsdRx/giphy.gif";

    balloon.style.position="absolute";

    const left=Math.random()*80;
    const top=Math.random()*50;

    balloon.style.left=left+"vw";
    balloon.style.top=top+"vh";

    balloonContainer.appendChild(balloon);

    balloon.addEventListener('click',()=>{

      const pop=document.createElement('div');
      pop.textContent=" Happy B,day Vyshnavi 🎈";

      pop.style.position="absolute";
      pop.style.left=balloon.style.left;
      pop.style.top=balloon.style.top;
      pop.style.fontSize="20px";
      pop.style.fontWeight="bold";
      pop.style.color="#ff3399";

      balloonContainer.appendChild(pop);

      balloon.remove();

      setTimeout(()=>pop.remove(),1000);

    });

  }

}
// Guest wishes

function addWish(){

  const text = document.getElementById('wishText').value;

  if(text.trim()==="") return;

  const li=document.createElement('li');

  li.textContent=text;

  document.getElementById('wishList').appendChild(li);

  document.getElementById('wishText').value="";

}