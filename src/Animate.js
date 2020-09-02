import React, { useEffect, useRef } from 'react';
import './App.css';
import Sea from './images/sea.png';
import Floor from './images/floor.png';
import Boat from './images/boot.png';
import SunR from './images/sun.png';
import Coconut from './images/coconut.png';
import Gardenimage from './images/garden.png';
import Tree from './images/tree.png';
import Parrot from './images/parrot.gif';
import Poles from './images/poles.png';
function Animate() {
  const Boats = useRef(null);
  const aliceSprite = useRef(null);
  const foreground = useRef(null);
  const background = useRef(null);
  const parrot = useRef(null);
  const Coconuttr = useRef(null);
  const Sun = useRef(null);
  useEffect(() => {
    // Alice
      var spriteFrames = [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' }   
      ];

      var alice = aliceSprite.current.animate(
        spriteFrames, {
          easing: 'steps(7, end)',
          direction: "reverse",
          duration: 500,
          playbackRate: 1,
          iterations: Infinity
        });

      setInterval( function() {
        if (alice.playbackRate > .4) {
          alice.playbackRate -= .1;
          adjustSceneryPlayback();
        } 
      }, 3000);
      
      //parrot
      const flyparrot = parrot.current.animate([
          {transform: 'translate(-40%,-10%)'},
          {transform: 'translate(50%,0)'},
          {transform: 'translate(500px,-80%)'},
          {transform: 'translate(700px,-40%)'}
          
          
        
      ],
         {
          duration:12000,
          playbackRate: 1,
           
          iterations: Infinity,

        });
        
        var Coconuttree = function(){Coconuttr.current.animate([
          {transform: 'translateX(-20%)'},
          {transform: 'translateX(-300%)'}
        ],
        {
          duration:200000,
          iterations:Infinity,
          playbackRate:1,
        
        })};
        const boatrun = function(){ Boats.current.animate([
          {transform: 'translateX(100%)'},
          {transform: 'translateX(-400%)'},
          
      ],
      {
          duration: 40000,
          iterations: Infinity,
          playbackRate: 0.5,
          
      })};
      
      var Sunrise = function(){Sun.current.animate([
        {transform:'translateY(0)'},
        {transform:'translateY(-300px)'},
        {transform:'translate(-200px,-300px)'},
        {transform:'translate(-300px,-50px)'},
        {transform:'translate(-50px,100px)'}
      ],
      {
        duration:40000,
        iteration:1,
        playbackRate:1,


      })};

      
    // Scenery
      var sceneryFrames =   [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(-50%)' }   
      ];
      
      var sceneryTimingBackground = {
        duration: 40000,
        iterations: Infinity
      };
      
      var sceneryTimingForeground = {
        duration: 20000,
        iterations: Infinity
      };

      var foregroundMovement = foreground.current.animate(sceneryFrames, sceneryTimingForeground);
      var backgroundMovement = background.current.animate(sceneryFrames, sceneryTimingBackground);

      var sceneries = [foregroundMovement, backgroundMovement];

      var adjustSceneryPlayback = function() {
        console.log(alice.playbackRate)
        if (alice.playbackRate < .8) {
          sceneries.forEach(function(anim) {
            anim.playbackRate = alice.playbackRate/2 * 1;
            
          });
        } else if (alice.playbackRate > 1.2) {
          sceneries.forEach(function(anim) {
            anim.playbackRate = alice.playbackRate/1;
          });
        } else {
          sceneries.forEach(function(anim) {
            anim.playbackRate = .5;    
          });
        }   
      }
      adjustSceneryPlayback();

      const goFaster = () => {
        flyparrot.playbackRate -= 0.2;
        alice.playbackRate += 0.1;
        adjustSceneryPlayback();
        
      }
      
      boatrun();
      
      Sunrise();
      Coconuttree();
      
      window.addEventListener("click", goFaster);
      window.addEventListener("touchstart", goFaster);
  })
  
  return (
    
    <div className="container">
      <div className="sky">
        
      </div>
      <div className="scenery background1" >
      
      </div>
      
      
      <div className="Road">
        <img id="Road" src={Floor} alt=""/>
        
      </div>
      
      <div>
      <img className="Sun" ref={Sun} src = {SunR} alt="" height="150px"/>
      </div>
      <div className="earth">
        <div className="alice">
            <img className="alicesprite" ref={aliceSprite} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" alt="" />
        </div>
        
      </div>
      <img id="Coconut" ref={Coconuttr} src={Coconut}alt=""height="300px"/>
      <img id = "Boat" ref={Boats} src={Boat}alt=""/> 
      <div className="Sea" >
      
        <img id="Sea" src = {Sea}alt="" />
        <img id ="garden" src={Gardenimage}alt=""/>
        <img id="Fish" ref={parrot} src = {Parrot}alt=""/> 
             
      </div>
      
      
      <div className="scenery" id="foreground" ref={foreground}>
        <img id="treefore" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" alt=" "/>
        <img  id="treeback" src={Tree} alt=" " />      
      </div>
      <div className="scenery background1" ref={background}>
        <img className="pawn" src={Poles} alt=" " height="300px"/>
        
        
        
      </div>
    </div>
  
  );
}

export default Animate;
