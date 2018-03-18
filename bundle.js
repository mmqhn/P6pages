!function(t){function i(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,i),a.l=!0,a.exports}var e={};i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=2)}([function(t,i){var e=document.getElementById("canvas1"),r=e.getContext("2d"),a=document.getElementById("canvas2"),s=a.getContext("2d"),n={imgUrl:"./images/",can1:e,ctx1:r,can2:a,ctx2:s,canWid:e.width,canHei:e.height,mx:.5*e.width,my:.5*e.height,aneOb:{},fruitOb:{},momOb:{},babyOb:{},scoreOb:{},waveOb:{},haloOb:{},dustOb:{},diffframetime:0};t.exports=n},function(t,i){function e(t,i,e,r){return Math.sqrt(Math.pow(t-e,2)+Math.pow(i-r,2))}function r(t,i,e){var r=i-t;return r>Math.PI&&(r-=2*Math.PI),r<-Math.PI&&(r+=2*Math.PI),t+r*e}function a(t,i,e){return t+(i-t)*e}function s(t,i,e,r,a){var s=Math.abs(t-e),n=Math.abs(i-r);return s<a&&n<a}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t,i){return window.setTimeout(t,1e3/60)}}();var n={calLength2:e,lerpAngle:r,lerpDistance:a,distance:s};t.exports=n},function(t,i,e){var r=e(3);e(12),r.startgame()},function(t,i,e){var r,a,s,n,o,h,m,u,d,y=e(0),f=e(1),b=e(4),c=e(5),l=e(6),x=e(7),p=e(8),v=e(9),g=e(10),w=e(11),I=y.can1,T=y.ctx1,E=y.ctx2,A=y.canWid,O=y.canHei,B=f.calLength2,M={};M.startgame=function(){M.init(),d=Date.now(),M.gameLoop()},M.drawBackgorund=function(){var t=new Image;t.src=y.imgUrl+"background.jpg",E.drawImage(t,0,0,A,O)},M.init=function(){T.fillStyle="white",T.font="20px 微软雅黑",T.textAlign="center",I.addEventListener("mousemove",M.onMouseMove,!1),I.addEventListener("click",M.onClick,!1),y.mx=.5*A,y.my=.5*O,r=y.aneOb=new b,r.init(),a=y.fruitOb=new x,a.init(),s=y.momOb=new v,s.init(),n=y.babyOb=new c,n.init(),o=y.scoreOb=new g,h=y.waveOb=new w,h.init(),m=y.haloOb=new p,m.init(),u=y.dustOb=new l,u.init()},M.gameLoop=function(){requestAnimFrame(M.gameLoop);var t=Date.now();y.diffframetime=t-d,d=t,y.diffframetime>40&&(y.diffframetime=40),E.clearRect(0,0,A,O),M.drawBackgorund(),r.drawAne(),a.computeFruit(),a.drawFruit(),T.clearRect(0,0,A,O),s.drawMom(),n.drawBaby(),o.gameOver||(M.momEatFruit(),M.momFoodBaby()),o.drawScore(),h.drawWave(),m.drawHalo(),u.drawDust()},M.onMouseMove=function(t){o.gameOver||(t.offsetX||t.layerX)&&(y.mx=void 0==t.offsetX?t.layerX:t.offsetX,y.my=void 0==t.offsetY?t.layerY:t.offsetY)},M.onClick=function(){o.gameOver&&(o.gameOver=!1,a.init(),s.init(),n.init(),o.init())},M.momEatFruit=function(){for(var t=0;t<a.num;t++)if(a.alive[t]&&a.grow[t]){var i=B(a.x[t],a.y[t],s.x,s.y);i<30&&(a.dead(t),h.born(t),o.fruitNum++,s.momBodyIndex=7==s.momBodyIndex?s.momBodyIndex:s.momBodyIndex+1,"blue"==a.type[t]&&o.doubleNum++)}},M.momFoodBaby=function(){if(o.fruitNum>0){if(B(s.x,s.y,n.x,n.y)<30){m.born(),s.momBodyIndex=0;var t=o.doubleNum*o.fruitNum,i=n.babyBodyIndex-t;i<0&&(i=0);var e=o.strength+(i/2).toFixed(0);e>10&&(e=10),o.strength=e,n.babyBodyIndex=i,o.computeScore()}}},t.exports=M},function(t,i,e){var r=e(0),a=r.ctx2,s=r.canHei,n=function(){this.num=50,this.rootx=[],this.headx=[],this.heady=[],this.amp=[],this.beta=0};n.prototype.init=function(){for(var t=0;t<this.num;t++)this.rootx[t]=18*t+30*Math.random(),this.headx[t]=this.rootx[t],this.heady[t]=s-220+50*Math.random(),this.amp[t]=50*Math.random()+60},n.prototype.drawAne=function(){this.beta+=8e-4*r.diffframetime;var t=Math.sin(this.beta);a.save(),a.globalAlpha=.7,a.lineWidth=20,a.lineCap="round",a.strokeStyle="#3b154e";for(var i=0;i<this.num;i++){var e=this.headx[i]+t*this.amp[i];a.beginPath(),a.moveTo(this.rootx[i],s),a.quadraticCurveTo(this.rootx[i],s-100,e,this.heady[i]),a.stroke()}a.restore()},t.exports=n},function(t,i,e){var r=e(0),a=e(1),s=r.imgUrl,n=r.ctx1,o=r.can1,h=r.canWid,m=r.canHei,u=a.lerpAngle,d=a.lerpDistance,y=function(){this.x=0,this.y=0,this.angle,this.babyTailArr=[],this.babyTailTimer=0,this.babyTailIndex=0,this.babyEyeArr=[],this.babyEyeTimer=0,this.babyEyeIndex=0,this.babyEyeInterval=1e3,this.babyBodyArr=[],this.babyBodyTimer=0,this.babyBodyIndex=0};y.prototype.init=function(){this.x=.5*h-50,this.y=.5*m+50,this.babyBodyIndex=0,this.angle=0;for(var t=0;t<8;t++)this.babyTailArr[t]=new Image,this.babyTailArr[t].src=s+"babyTail"+t+".png";for(var t=0;t<2;t++)this.babyEyeArr[t]=new Image,this.babyEyeArr[t].src=s+"babyEye"+t+".png";for(var t=0;t<20;t++)this.babyBodyArr[t]=new Image,this.babyBodyArr[t].src=s+"babyFade"+t+".png"},y.prototype.drawBaby=function(){var t=r.momOb,i=r.scoreOb;this.x=d(t.x,this.x,.98),this.y=d(t.y,this.y,.99);var e=t.x-this.x,a=t.y-this.y,s=Math.atan2(a,e)+Math.PI;this.angle=u(s,this.angle,.6),this.babyTailTimer+=r.diffframetime,this.babyTailTimer>50&&(this.babyTailIndex=(this.babyTailIndex+1)%8,this.babyTailTimer%=50),this.babyEyeTimer+=r.diffframetime,this.babyEyeTimer>this.babyEyeInterval&&(this.babyEyeIndex=(this.babyEyeIndex+1)%2,this.babyEyeTimer%=this.babyEyeInterval,0==this.babyEyeIndex?this.babyEyeInterval=1500*Math.random()+1500:this.babyEyeInterval=200),this.babyBodyTimer+=r.diffframetime,this.babyBodyTimer>550&&(this.babyBodyIndex+=1,this.babyBodyTimer%=550,i.strength=((20-this.babyBodyIndex)/2).toFixed(0),this.babyBodyIndex>19&&(this.babyBodyIndex=19,i.gameOver=!0,o.style.cursor="pointer")),n.save(),n.translate(this.x,this.y),n.rotate(this.angle);var h=this.babyTailArr[this.babyTailIndex];n.drawImage(h,.5*-h.width+24,.5*-h.height);var m=this.babyBodyArr[this.babyBodyIndex];n.drawImage(m,.5*-m.width,.5*-m.height);var y=this.babyEyeArr[this.babyEyeIndex];n.drawImage(y,.5*-y.width,.5*-y.height),n.restore()},t.exports=y},function(t,i,e){var r=e(0),a=r.ctx1,s=r.imgUrl,n=r.canWid,o=r.canHei,h=function(){this.num=30,this.dustPic=[],this.x=[],this.y=[],this.amp=[],this.index=[],this.beta=0};h.prototype.init=function(){for(var t=0;t<7;t++)this.dustPic[t]=new Image,this.dustPic[t].src=s+"dust"+t+".png";for(var t=0;t<this.num;t++)this.x[t]=Math.random()*n,this.y[t]=Math.random()*o,this.amp=20+Math.random()+15,this.index[t]=Math.floor(7*Math.random())},h.prototype.drawDust=function(){for(var t=0;t<this.num;t++){var i=this.index[t];a.drawImage(this.dustPic[i],this.x,this.y)}},t.exports=h},function(t,i,e){function r(){for(var t=a.fruitOb,i=0;i<t.num;i++)if(!t.alive[i])return t.born(i),!1}var a=e(0),s=a.ctx2,n=a.imgUrl,o=function(){this.num=30,this.x=[],this.y=[],this.size=[],this.type=[],this.speed=[],this.grow=[],this.alive=[],this.orange=new Image,this.blue=new Image};o.prototype.init=function(){this.orange.src=n+"fruit.png",this.blue.src=n+"blue.png";for(var t=0;t<this.num;t++)this.x[t]=this.y[t]=0,this.speed[t]=.015*Math.random()+.005,this.alive[t]=!1,this.grow[t]=!1,this.type[t]=""},o.prototype.drawFruit=function(){for(var t=0;t<this.num;t++)if(this.alive[t]){this.size[t]<=16?(this.grow[t]=!1,this.size[t]+=this.speed[t]*a.diffframetime*.8):(this.grow[t]=!0,this.y[t]-=5*this.speed[t]*a.diffframetime);var i=this.orange;"blue"==this.type[t]&&(i=this.blue),s.drawImage(i,this.x[t]-.5*this.size[t],this.y[t]-.5*this.size[t],this.size[t],this.size[t]),this.y[t]<8&&(this.alive[t]=!1)}},o.prototype.born=function(t){var i=a.aneOb,e=Math.floor(Math.random()*i.num);this.x[t]=i.headx[e],this.y[t]=i.heady[e],this.size[t]=0,this.alive[t]=!0;var r=Math.random();this.type[t]=r<.1?"blue":"orange"},o.prototype.dead=function(t){this.alive[t]=!1},o.prototype.computeFruit=function(){for(var t=a.fruitOb,i=0,e=0;e<t.num;e++)t.alive[e]&&i++;if(i<15)return r(),!1},t.exports=o},function(t,i,e){var r=e(0),a=r.ctx1,s=r.canWid,n=r.canHei,o=function(){this.num=5,this.x=[],this.y=[],this.r=[],this.status=[]};o.prototype.init=function(){for(var t=0;t<this.num;t++)this.x[t]=.5*s,this.y[t]=.5*n,this.status[t]=!1,this.r[t]=0},o.prototype.drawHalo=function(){a.save(),a.lineWidth=4;for(var t=0;t<this.num;t++)if(this.status[t]){if(this.r[t]+=.08*r.diffframetime,this.r[t]>100)return this.status[t]=!1,!1;var i=1-this.r[t]/100;a.strokeStyle="rgba(203, 91, 0, "+i+")",a.beginPath(),a.arc(this.x[t],this.y[t],this.r[t],0,2*Math.PI),a.stroke()}a.restore()},o.prototype.born=function(){for(var t=r.babyOb,i=0;i<this.num;i++)if(!this.status[i])return this.status[i]=!0,this.x[i]=t.x,this.y[i]=t.y,this.r[i]=10,!1},t.exports=o},function(t,i,e){var r=e(0),a=e(1),s=r.ctx1,n=r.imgUrl,o=r.canWid,h=r.canHei,m=a.lerpAngle,u=a.lerpDistance,d=function(){this.x=0,this.y=0,this.angle,this.momTailArr=[],this.momTailTimer=0,this.momTailIndex=0,this.momEyeArr=[],this.momEyeTimer=0,this.momEyeIndex=0,this.momEyeInterval=1e3,this.momOrangeArr=[],this.momBlueArr=[],this.momBodyIndex=0};d.prototype.init=function(){this.x=.5*o,this.y=.5*h,this.angle=0;for(var t=0;t<8;t++)this.momTailArr[t]=new Image,this.momTailArr[t].src=n+"bigTail"+t+".png";for(var t=0;t<2;t++)this.momEyeArr[t]=new Image,this.momEyeArr[t].src=n+"bigEye"+t+".png";for(var t=0;t<8;t++)this.momOrangeArr[t]=new Image,this.momOrangeArr[t].src=n+"bigSwim"+t+".png",this.momBlueArr[t]=new Image,this.momBlueArr[t].src=n+"bigSwimBlue"+t+".png"},d.prototype.drawMom=function(){var t=r.scoreOb;this.x=u(r.mx,this.x,.96),this.y=u(r.my,this.y,.98);var i=r.mx-this.x,e=r.my-this.y,a=Math.atan2(e,i)+Math.PI;this.angle=m(a,this.angle,.6),this.momTailTimer+=r.diffframetime,this.momTailTimer>50&&(this.momTailIndex=(this.momTailIndex+1)%8,this.momTailTimer%=50),this.momEyeTimer+=r.diffframetime,this.momEyeTimer>this.momEyeInterval&&(this.momEyeIndex=(this.momEyeIndex+1)%2,this.momEyeTimer%=this.momEyeInterval,0==this.momEyeIndex?this.momEyeInterval=1500*Math.random()+1500:this.momEyeInterval=200),s.save(),s.translate(this.x,this.y),s.rotate(this.angle);var n=this.momTailArr[this.momTailIndex];s.drawImage(n,.5*-n.width+30,.5*-n.height);var o;o=1!=t.doubleNum?this.momBlueArr[this.momBodyIndex]:this.momOrangeArr[this.momBodyIndex],s.drawImage(o,.5*-o.width,.5*-o.height);var h=this.momEyeArr[this.momEyeIndex];s.drawImage(h,.5*-h.width,.5*-h.height),s.restore()},t.exports=d},function(t,i,e){var r=e(0),a=r.ctx1,s=r.canWid,n=r.canHei,o=function(){this.fruitNum=0,this.doubleNum=1,this.score=0,this.strength=10,this.alpha=0,this.gameOver=!1};o.prototype.init=function(){this.fruitNum=0,this.doubleNum=1,this.score=0},o.prototype.drawScore=function(){var t=r.scoreOb;a.fillText("num: "+this.fruitNum,.5*s,n-30),a.fillText("double: "+this.doubleNum,.5*s,n-70),a.save(),a.font="30px verdana",a.fillText("SCORE: "+this.score,.5*s,50),a.font="20px verdana",a.fillText("strength: ",650,45),t.strength<=3&&(a.fillStyle="red"),a.fillText(t.strength,710,45),t.gameOver&&(this.alpha+=5e-4*r.diffframetime,this.alpha>1&&(this.alpha=1),a.font="40px verdana",a.shadowBlur=10,a.shadowColor="white",a.fillStyle="rgba(255, 255, 255, "+this.alpha+")",a.fillText("GAME OVER",.5*s,.5*n-25),a.save(),a.font="25px verdana",a.fillText("CLICK TO RESTART",.5*s,.5*n+25),a.restore()),a.restore()},o.prototype.computeScore=function(){var t=r.scoreOb;t.score+=t.fruitNum*t.doubleNum,this.fruitNum=0,this.doubleNum=1},t.exports=o},function(t,i,e){var r=e(0),a=r.ctx1,s=r.canWid,n=r.canHei,o=function(){this.num=10,this.x=[],this.y=[],this.r=[],this.status=[]};o.prototype.init=function(){for(var t=0;t<this.num;t++)this.x[t]=.5*s,this.y[t]=.5*n,this.status[t]=!1,this.r[t]=0},o.prototype.drawWave=function(){a.save(),a.lineWidth=3;for(var t=0;t<this.num;t++)if(this.status[t]){if(this.r[t]+=.04*r.diffframetime,this.r[t]>60)return this.status[t]=!1,!1;var i=1-this.r[t]/60;a.strokeStyle="rgba(255, 255, 255, "+i+")",a.beginPath(),a.arc(this.x[t],this.y[t],this.r[t],0,2*Math.PI),a.stroke()}a.restore()},o.prototype.born=function(t){for(var i=r.fruitOb,e=0;e<this.num;e++)if(!this.status[e])return this.status[e]=!0,this.x[e]=i.x[t],this.y[e]=i.y[t],this.r[e]=10,!1},t.exports=o},function(t,i){}]);