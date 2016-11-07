/*!
jCanvas v5.1
Copyright 2011, Caleb Evans
Licensed under the MIT license
*/
/*(function(k,w,o,u,C,c,t,m){var p,j,n=k.fn,l=k.extend,D=o.PI,E=o.round,a=o.sin,e=o.cos,h=k.event.fix,b,d;function A(G){if(!G){j=s.prototype=l({},p)}else{l(j,G)}return this}A.version="5.1";p={align:"center",angle:0,baseline:"middle",ccw:false,closed:false,compositing:"source-over",cornerRadius:0,cropFromCenter:true,end:360,fillStyle:"transparent",font:"normal 12pt sans-serif",fromCenter:true,height:0,inDegrees:true,load:null,mask:false,opacity:1,projection:0,r1:null,r2:null,radius:0,repeat:"repeat",rounded:false,scaleX:1,scaleY:1,shadowBlur:3,shadowColor:"transparent",shadowX:0,shadowY:0,sHeight:0,sides:3,source:"",start:0,strokeCap:"butt",strokeJoin:"miter",strokeStyle:"transparent",strokeWidth:1,sWidth:0,sx:null,sy:null,text:"",width:0,x:0,x1:0,x2:0,y:0,y1:0,y2:0};function s(){}j=s.prototype;A();function y(G,H){G.fillStyle=H.fillStyle;G.strokeStyle=H.strokeStyle;G.lineWidth=H.strokeWidth;if(H.rounded){G.lineCap="round";G.lineJoin="round"}else{G.lineCap=H.strokeCap;G.lineJoin=H.strokeJoin}G.shadowOffsetX=H.shadowX;G.shadowOffsetY=H.shadowY;G.shadowBlur=H.shadowBlur;G.shadowColor=H.shadowColor;G.globalAlpha=H.opacity;G.globalCompositeOperation=H.compositing}function g(G,H){if(H.mask){G.save();G.clip()}if(H.closed){G.closePath();G.fill();G.stroke()}else{G.fill();G.stroke();G.closePath()}}function f(G){return G.inDegrees?D/180:1}function z(H,J,I,G){J.toRad=f(J);H.save();if(!J.fromCenter){J.x+=I/2;J.y+=G/2}if(J.angle){H.translate(J.x,J.y);H.rotate(J.angle*J.toRad);H.translate(-J.x,-J.y)}}function B(G){G=G||{};p=l(p,G.props||{});k.jCanvas();if(G.name){k.fn[G.name]=function(I){var M=this,J,H,K,L=l(new s(),I);for(K=0;K<M.length;K+=1){J=M[K];if(!J.getContext){continue}H=J.getContext("2d");y(H,L);L.toRad=f(L);G.fn.call(J,H,L)}return M}}return k.fn[G.name]}k.fn.jCanvas=A;k.fn.loadCanvas=function(G){if(!this[0].getContext){return null}return this[0].getContext(G||"2d")};k.fn.getCanvasImage=function(G){if(!this[0].toDataURL){return null}if(G===m){G="image/png"}else{G=G.replace(/^([a-z]+)$/gi,"image/$1").replace(/jpg/gi,"jpeg")}return this[0].toDataURL(G)};k.fn.draw=function(I){var H=this,G;for(G=0;G<H.length;G+=1){if(!H[G].getContext){continue}I.call(H[G],H[G].getContext("2d"))}return this};k.fn.gradient=function(H){if(!this[0].getContext){return null}var G=this[0].getContext("2d"),M=l(new s(),H),L,K,J=0,I=1;if(M.r1!=null||M.r2!=null){L=G.createRadialGradient(M.x1,M.y1,M.r1,M.x2,M.y2,M.r2)}else{L=G.createLinearGradient(M.x1,M.y1,M.x2,M.y2)}while(M["c"+I]!==m){J+=1;I+=1}for(I=1;I<=J;I+=1){K=E(100/(J-1)*(I-1))/100;if(M["s"+I]===m){M["s"+I]=K}L.addColorStop(M["s"+I],M["c"+I])}return L};k.fn.pattern=function(I){if(!this[0].getContext){return null}var G=this[0].getContext("2d"),M=l(new s(),I),H=new C(),K;if(M.source.src){H=M.source}else{if(M.source){H.src=M.source}}function J(){if(H.complete){K=G.createPattern(H,M.repeat);return true}else{return false}}function N(){if(M.load){M.load.call(this[0],K)}}function L(){J();N()}if(!H.complete&&M.load){H.onload=L}else{if(!J()){H.onload=L}else{N()}}return K};k.fn.clearCanvas=function(H){var G,I,J=l(new s(),H);for(I=0;I<this.length;I+=1){if(!this[I].getContext){continue}G=this[I].getContext("2d");z(G,J,J.width,J.height);if(!J.width&&!J.height){G.clearRect(0,0,this[I].width,this[I].height)}else{G.clearRect(J.x-J.width/2,J.y-J.height/2,J.width,J.height)}}return this};k.fn.saveCanvas=function(){var G;for(G=0;G<this.length;G+=1){if(!this[G].getContext){continue}this[G].getContext("2d").save()}return this};k.fn.restoreCanvas=function(){var G;for(G=0;G<this.length;G+=1){if(!this[G].getContext){continue}this[G].getContext("2d").restore()}return this};k.fn.scaleCanvas=function(H){var G,I,J=l(new s(),H);for(I=0;I<this.length;I+=1){if(!this[I].getContext){continue}G=this[I].getContext("2d");G.save();G.translate(J.x,J.y);G.scale(J.scaleX,J.scaleY);G.translate(-J.x,-J.y)}return this};k.fn.translateCanvas=function(H){var G,I,J=l(new s(),H);for(I=0;I<this.length;I+=1){if(!this[I].getContext){continue}G=this[I].getContext("2d");G.save();G.translate(J.x,J.y)}return this};k.fn.rotateCanvas=function(H){var G,I,J=l(new s(),H);for(I=0;I<this.length;I+=1){if(!this[I].getContext){continue}G=this[I].getContext("2d");z(G,J,0,0)}return this};k.fn.drawRect=function(L){var O,K,J=l(new s(),L),I,N,H,M,G;for(K=0;K<this.length;K+=1){if(!this[K].getContext){continue}O=this[K].getContext("2d");y(O,J);z(O,J,J.width,J.height);O.beginPath();if(J.cornerRadius){J.closed=true;I=J.x-J.width/2;N=J.y-J.height/2;H=J.x+J.width/2;M=J.y+J.height/2;G=J.cornerRadius;if((H-I)-(2*G)<0){G=(H-I)/2}if((M-N)-(2*G)<0){G=(M-N)/2}O.moveTo(I+G,N);O.lineTo(H-G,N);O.arc(H-G,N+G,G,3*D/2,D*2,false);O.lineTo(H,M-G);O.arc(H-G,M-G,G,0,D/2,false);O.lineTo(I+G,M);O.arc(I+G,M-G,G,D/2,D,false);O.lineTo(I,N+G);O.arc(I+G,N+G,G,D,3*D/2,false)}else{O.rect(J.x-J.width/2,J.y-J.height/2,J.width,J.height)}O.restore();g(O,J)}return this};k.fn.drawArc=function(H){var G,I,J=l(new s(),H);if(!J.inDegrees&&J.end===360){J.end=D*2}for(I=0;I<this.length;I+=1){if(!this[I].getContext){continue}G=this[I].getContext("2d");y(G,J);z(G,J,J.radius*2,J.radius*2);G.beginPath();G.arc(J.x,J.y,J.radius,(J.start*J.toRad)-(D/2),(J.end*J.toRad)-(D/2),J.ccw);G.restore();g(G,J)}return this};k.fn.drawEllipse=function(H){var G,J,K=l(new s(),H),I=K.width*4/3;for(J=0;J<this.length;J+=1){if(!this[J].getContext){continue}G=this[J].getContext("2d");y(G,K);z(G,K,K.width,K.height);G.beginPath();G.moveTo(K.x,K.y-K.height/2);G.bezierCurveTo(K.x-I/2,K.y-K.height/2,K.x-I/2,K.y+K.height/2,K.x,K.y+K.height/2);G.bezierCurveTo(K.x+I/2,K.y+K.height/2,K.x+I/2,K.y-K.height/2,K.x,K.y-K.height/2);G.restore();g(G,K)}return this};k.fn.drawLine=function(I){var H,L,M=l(new s(),I),G=2,K=0,J=0;for(L=0;L<this.length;L+=1){if(!this[L].getContext){continue}H=this[L].getContext("2d");y(H,M);H.beginPath();H.moveTo(M.x1,M.y1);while(true){K=M["x"+G];J=M["y"+G];if(K!==m&&J!==m){H.lineTo(K,J);G+=1}else{break}}g(H,M)}return this};k.fn.drawQuad=function(L){var O,K,J=l(new s(),L),I=2,H=0,G=0,N=0,M=0;for(K=0;K<this.length;K+=1){if(!this[K].getContext){continue}O=this[K].getContext("2d");y(O,J);O.beginPath();O.moveTo(J.x1,J.y1);while(true){H=J["x"+I];G=J["y"+I];N=J["cx"+(I-1)];M=J["cy"+(I-1)];if(H!==m&&G!==m&&N!==m&&M!==m){O.quadraticCurveTo(N,M,H,G);I+=1}else{break}}g(O,J)}return this};k.fn.drawBezier=function(Q){var R,P,M=l(new s(),Q),L=2,I=1,K=0,J=0,O=0,H=0,N=0,G=0;for(P=0;P<this.length;P+=1){if(!this[P].getContext){continue}R=this[P].getContext("2d");y(R,M);R.beginPath();R.moveTo(M.x1,M.y1);while(true){K=M["x"+L];J=M["y"+L];O=M["cx"+I];H=M["cy"+I];N=M["cx"+(I+1)];G=M["cy"+(I+1)];if(K!==m&&J!==m&&O!==m&&H!==m&&N!==m&&G!==m){R.bezierCurveTo(O,H,N,G,K,J);L+=1;I+=2}else{break}}g(R,M)}return this};k.fn.drawText=function(H){var G,I,J=l(new s(),H);for(I=0;I<this.length;I+=1){if(!this[I].getContext){continue}G=this[I].getContext("2d");y(G,J);G.textBaseline=J.baseline;G.textAlign=J.align;G.font=J.font;G.strokeText(J.text,J.x,J.y);G.fillText(J.text,J.x,J.y)}return this};k.fn.drawImage=function(M){var P,H,L,J=l(new s(),M),K=new C(),G;if(J.source.src){K=J.source}else{if(J.source){K.src=J.source}}function N(Q){if(K.complete){G=(K.width/K.height);J.sWidth=J.sWidth||K.width;J.sHeight=J.sHeight||K.height;if(J.sWidth>K.width){J.sWidth=K.width}if(J.sHeight>K.height){J.sHeight=K.height}if(J.width===0&&J.sWidth!==K.width){J.width=J.sWidth}if(J.height===0&&J.sHeight!==K.height){J.height=J.sHeight}if(J.sx===null){if(J.cropFromCenter){J.sx=K.width/2}else{J.sx=0}}if(J.sy===null){if(J.cropFromCenter){J.sy=K.height/2}else{J.sy=0}}if(!J.cropFromCenter){J.sx+=J.sWidth/2;J.sy+=J.sHeight/2}if((J.sx-J.sWidth/2)<0){J.sx=J.sWidth/2}if((J.sx+J.sWidth/2)>K.width){J.sx=K.width-J.sWidth/2}if((J.sy-J.sHeight/2)<0){J.sy=J.sHeight/2}if((J.sy+J.sHeight/2)>K.height){J.sy=K.height-J.sHeight/2}if(J.width&&!J.height){J.height=J.width/G}else{if(!J.width&&J.height){J.width=J.height*G}else{if(!J.width&&!J.height){J.width=K.width;J.height=K.height}}}z(Q,J,J.width,J.height);Q.drawImage(K,J.sx-J.sWidth/2,J.sy-J.sHeight/2,J.sWidth,J.sHeight,J.x-J.width/2,J.y-J.height/2,J.width,J.height);Q.restore();return true}else{return false}}function O(){if(J.load){J.load.call(H)}}function I(){N(P);O()}for(L=0;L<this.length;L+=1){H=this[L];if(!H.getContext){continue}P=H.getContext("2d");y(P,J);if(!K.complete&&J.load){K.onload=I}else{if(!N(P)){K.onload=I}else{O()}}}return this};k.fn.drawPolygon=function(M){var R,L,J=l(new s(),M),S=D/J.sides,I=(D/2)+S,Q=(D*2)/J.sides,P=e(Q/2)*J.radius,H,O,G,N,K;J.closed=true;if(J.sides>2){for(L=0;L<this.length;L+=1){if(!this[L].getContext){continue}R=this[L].getContext("2d");y(R,J);z(R,J,J.radius,J.radius);R.beginPath();for(K=0;K<J.sides;K+=1){H=J.x+E(J.radius*e(I));O=J.y+E(J.radius*a(I));if(K===0){R.moveTo(H,O)}else{R.lineTo(H,O)}if(J.projection){G=J.x+E((P+P*J.projection)*e(I+S));N=J.y+E((P+P*J.projection)*a(I+S));R.lineTo(G,N)}I+=Q}R.restore();g(R,J)}}return this};k.fn.setPixels=function(N){var P,H,M,K,I=l(new s(),N),G,J,L,O={};for(M=0;M<this.length;M+=1){H=this[M];if(!H.getContext){continue}P=H.getContext("2d");if(!I.x&&!I.y&&!I.width&&!I.height){I.width=H.width;I.height=H.height;I.x=I.width/2;I.y=I.height/2}z(P,I,I.width,I.height);G=P.getImageData(I.x-I.width/2,I.y-I.height/2,I.width,I.height);J=G.data;L=J.length;O=[];if(I.each!==m){for(K=0;K<L;K+=4){O.index=K/4;O.r=J[K];O.g=J[K+1];O.b=J[K+2];O.a=J[K+3];I.each.call(H,O);J[K]=O.r;J[K+1]=O.g;J[K+2]=O.b;J[K+3]=O.a}}P.putImageData(G,I.x-I.width/2,I.y-I.height/2);P.restore()}return this};function v(H,I){var G;for(G=0;G<H.length;G+=1){I[H[G]]=I["_"+H[G]]}}function x(H,I){var G;for(G=0;G<H.length;G+=1){I["_"+H[G]]=I[H[G]]}}b=["width","height","opacity"];d=["backgroundColor","color","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","fillStyle","strokeStyle","shadowColor"];function i(H){var J,K,I=[],G=1;if(typeof H==="object"){I=H}else{if(H.match(/^[a-z]+$/gi)){if(H==="transparent"){H="rgba(255, 255, 255, 0)"}K=w.documentElement;J=K.style.color;K.style.color=H;H=k.css(K,"color");K.style.color=J}if(H.match(/^\#/gi)){if(H.length===4){H=H.replace(/([0-9a-f])/gi,"$1$1")}I=H.match(/[0-9a-f]{2}/gi);I[0]=t(I[0],16);I[1]=t(I[1],16);I[2]=t(I[2],16)}else{if(H.match(/^rgb/gi)){I=H.match(/[0-9\.]+/gi);if(H.match(/\%/gi)){G=2.55}I[0]=I[0]*G;I[1]=I[1]*G;I[2]=I[2]*G}}if(H.indexOf("rgba")!==-1){I[3]=c(I[3])}else{I[3]=1}}return I}function F(H,G){H.now[G]=H.start[G]+(H.end[G]-H.start[G])*H.pos;if(G<3){H.now[G]=E(H.now[G])}}function q(G){if(typeof G.start!=="object"){G.start=i(G.start);G.end=i(G.end)}G.now=[];F(G,0);F(G,1);F(G,2);F(G,3);G.now="rgba("+G.now.join(",")+")";if(G.elem.style){G.elem.style[G.prop]=G.now}else{G.elem[G.prop]=G.now}}function r(G){var H;for(H=0;H<G.length;H+=1){if(!k.fx.step[G[H]]){k.fx.step[G[H]]=q}}}k.fn.getLayers=function(){var G=this[0],H;if(!G||!G.getContext){return[]}H=k.data(G,"layers");if(H===m){H=[];k.data(G,"layers",H)}return H};k.fn.getLayer=function(G){G=G||0;return this.getLayers()[G]};k.fn.addLayer=function(I){var M=this,H,K,G,J,L=l(I,new s(),k.extend({},I));L.method=L.fn||L.method;L.layer=true;for(J=0;J<M.length;J+=1){H=k(M[J]);if(!M[J].getContext){continue}K=H.getLayers();if(typeof L==="function"){L.method="draw"}K.push(L)}return M};k.fn.removeLayer=function(G){G=G||0;this.getLayers().splice(G,1);return this};k.fn.drawLayers=function(){var M=this,H,G,L,K,J,I;for(J=0;J<M.length;J+=1){H=k(M[J]);if(!H[0].getContext){continue}G=H[0].getContext("2d");K=H.getLayers();G.clearRect(0,0,H[0].width,H[0].height);for(I=0;I<K.length;I+=1){L=K[I];if(L.method==="draw"){L.call(H[0],G)}else{if(n[L.method]){n[L.method].call(H,L)}}}}return M};k.fn.animateLayer=function(){var L=this,H=u.prototype.slice.call(arguments,0),G,K,I,J;if(typeof H[0]==="object"&&!H[0].method){H.unshift(0)}if(H[2]===m){H.splice(2,0,null);H.splice(3,0,null);H.splice(4,0,function(){})}else{if(typeof H[2]==="function"){H.splice(2,0,null);H.splice(3,0,null)}}if(H[3]===m){H[3]=null;H.splice(4,0,function(){})}else{if(typeof H[3]==="function"){H.splice(3,0,null)}}if(H[4]===m){H[4]=function(){}}for(J=0;J<L.length;J+=1){G=k(L[J]);if(H[0].layer){I=H[0]}else{I=G.getLayers()[H[0]]}if(!I||I.method==="draw"){continue}if(I.method==="drawImage"){H[1].width=H[1].width||1e-10;H[1].height=H[1].height||1e-10;I.width=I.width||1e-10;I.height=I.height||1e-10}I=l(I,j,k.extend({},I));x(b,I);x(b,H[1]);k(I).animate(H[1],{duration:H[2],easing:(k.easing[H[3]]?H[3]:null),complete:(function(M){return function(){v(b,I);M.drawLayers(true);H[4].call(M[0])}}(G)),step:(function(M,N){return function(){v(b,N);M.drawLayers(true)}}(G,I))})}return L};k.event.fix=function(G){G=h.call(k.event,G);if(G.offsetX==null&&G.offsetY==null){var H=k(G.target).offset();G.offsetX=G.pageX-H.left;G.offsetY=G.pageY-H.top}return G};k.support.canvas=(w.createElement("canvas").getContext!=null);r(d);A.defaults=p;A.prefs=j;A.extend=B;k.jCanvas=A}(jQuery,document,Math,Array,Image,parseFloat,parseInt));
*/


// stats.js r9 - http://github.com/mrdoob/stats.js
var Stats=function(){var h,a,r=0,s=0,i=Date.now(),u=i,t=i,l=0,n=1E3,o=0,e,j,f,b=[[16,16,48],[0,255,255]],m=0,p=1E3,q=0,d,k,g,c=[[16,48,16],[0,255,0]];h=document.createElement("div");h.style.cursor="pointer";h.style.width="80px";h.style.opacity="0.9";h.style.zIndex="10001";h.addEventListener("mousedown",function(a){a.preventDefault();r=(r+1)%2;0==r?(e.style.display="block",d.style.display="none"):(e.style.display="none",d.style.display="block")},!1);e=document.createElement("div");e.style.textAlign=
"left";e.style.lineHeight="1.2em";e.style.backgroundColor="rgb("+Math.floor(b[0][0]/2)+","+Math.floor(b[0][1]/2)+","+Math.floor(b[0][2]/2)+")";e.style.padding="0 0 3px 3px";h.appendChild(e);j=document.createElement("div");j.style.fontFamily="Helvetica, Arial, sans-serif";j.style.fontSize="9px";j.style.color="rgb("+b[1][0]+","+b[1][1]+","+b[1][2]+")";j.style.fontWeight="bold";j.innerHTML="FPS";e.appendChild(j);f=document.createElement("div");f.style.position="relative";f.style.width="74px";f.style.height=
"30px";f.style.backgroundColor="rgb("+b[1][0]+","+b[1][1]+","+b[1][2]+")";for(e.appendChild(f);74>f.children.length;)a=document.createElement("span"),a.style.width="1px",a.style.height="30px",a.style.cssFloat="left",a.style.backgroundColor="rgb("+b[0][0]+","+b[0][1]+","+b[0][2]+")",f.appendChild(a);d=document.createElement("div");d.style.textAlign="left";d.style.lineHeight="1.2em";d.style.backgroundColor="rgb("+Math.floor(c[0][0]/2)+","+Math.floor(c[0][1]/2)+","+Math.floor(c[0][2]/2)+")";d.style.padding=
"0 0 3px 3px";d.style.display="none";h.appendChild(d);k=document.createElement("div");k.style.fontFamily="Helvetica, Arial, sans-serif";k.style.fontSize="9px";k.style.color="rgb("+c[1][0]+","+c[1][1]+","+c[1][2]+")";k.style.fontWeight="bold";k.innerHTML="MS";d.appendChild(k);g=document.createElement("div");g.style.position="relative";g.style.width="74px";g.style.height="30px";g.style.backgroundColor="rgb("+c[1][0]+","+c[1][1]+","+c[1][2]+")";for(d.appendChild(g);74>g.children.length;)a=document.createElement("span"),
a.style.width="1px",a.style.height=30*Math.random()+"px",a.style.cssFloat="left",a.style.backgroundColor="rgb("+c[0][0]+","+c[0][1]+","+c[0][2]+")",g.appendChild(a);return{getDomElement:function(){return h},getFps:function(){return l},getFpsMin:function(){return n},getFpsMax:function(){return o},getMs:function(){return m},getMsMin:function(){return p},getMsMax:function(){return q},update:function(){i=Date.now();m=i-u;p=Math.min(p,m);q=Math.max(q,m);k.textContent=m+" MS ("+p+"-"+q+")";var a=Math.min(30,
30-30*(m/200));g.appendChild(g.firstChild).style.height=a+"px";u=i;s++;if(i>t+1E3)l=Math.round(1E3*s/(i-t)),n=Math.min(n,l),o=Math.max(o,l),j.textContent=l+" FPS ("+n+"-"+o+")",a=Math.min(30,30-30*(l/100)),f.appendChild(f.firstChild).style.height=a+"px",t=i,s=0}}};

/*
 * waitForImages 1.4
 * -----------------
 * Provides a callback when all images have loaded in your given selector.
 * http://www.alexanderdickson.com/
 *
 *
 * Copyright (c) 2011 Alex Dickson
 * Licensed under the MIT licenses.
 * See website for more info.
 *
 */

;(function($) {
    // Namespace all events.
    var eventNamespace = 'waitForImages';

    // CSS properties which contain references to images. 
    $.waitForImages = {
        hasImageProperties: [
        'backgroundImage',
        'listStyleImage',
        'borderImage',
        'borderCornerImage'
        ]
    };
    
    // Custom selector to find `img` elements that have a valid `src` attribute and have not already loaded.
    $.expr[':'].uncached = function(obj) {
        // Ensure we are dealing with an `img` element with a valid `src` attribute.
        if ( ! $(obj).is('img[src!=""]')) {
            return false;
        }

        // Firefox's `complete` property will always be`true` even if the image has not been downloaded.
        // Doing it this way works in Firefox.
        var img = document.createElement('img');
        img.src = obj.src;
        return ! img.complete;
    };

    $.fn.waitForImages = function(finishedCallback, eachCallback, waitForAll) {

        // Handle options object.
        if ($.isPlainObject(arguments[0])) {
            eachCallback = finishedCallback.each;
            waitForAll = finishedCallback.waitForAll;
            finishedCallback = finishedCallback.finished;
        }

        // Handle missing callbacks.
        finishedCallback = finishedCallback || $.noop;
        eachCallback = eachCallback || $.noop;

        // Convert waitForAll to Boolean
        waitForAll = !! waitForAll;

        // Ensure callbacks are functions.
        if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
            throw new TypeError('An invalid callback was supplied.');
        };

        return this.each(function() {
            // Build a list of all imgs, dependent on what images will be considered.
            var obj = $(this),
                allImgs = [];

            if (waitForAll) {
                // CSS properties which may contain an image.
                var hasImgProperties = $.waitForImages.hasImageProperties || [],
                    matchUrl = /url\((['"]?)(.*?)\1\)/g;
                
                // Get all elements, as any one of them could have a background image.
                obj.find('*').each(function() {
                    var element = $(this);

                    // If an `img` element, add it. But keep iterating in case it has a background image too.
                    if (element.is('img:uncached')) {
                        allImgs.push({
                            src: element.attr('src'),
                            element: element[0]
                        });
                    }

                    $.each(hasImgProperties, function(i, property) {
                        var propertyValue = element.css(property);
                        // If it doesn't contain this property, skip.
                        if ( ! propertyValue) {
                            return true;
                        }

                        // Get all url() of this element.
                        var match;
                        while (match = matchUrl.exec(propertyValue)) {
                            allImgs.push({
                                src: match[2],
                                element: element[0]
                            });
                        };
                    });
                });
            } else {
                // For images only, the task is simpler.
                obj
                 .find('img:uncached')
                 .each(function() {
                    allImgs.push({
                        src: this.src,
                        element: this
                    });
                });
            };

            var allImgsLength = allImgs.length,
                allImgsLoaded = 0;

            // If no images found, don't bother.
            if (allImgsLength == 0) {
                finishedCallback.call(obj[0]);
            };

            $.each(allImgs, function(i, img) {
                
                var image = new Image;
                
                // Handle the image loading and error with the same callback.
                $(image).bind('load.' + eventNamespace + ' error.' + eventNamespace, function(event) {
                    allImgsLoaded++;
                    
                    // If an error occurred with loading the image, set the third argument accordingly.
                    eachCallback.call(img.element, allImgsLoaded, allImgsLength, event.type == 'load');
                    
                    if (allImgsLoaded == allImgsLength) {
                        finishedCallback.call(obj[0]);
                        return false;
                    };
                    
                });

                image.src = img.src;
            });
        });
    };
})(jQuery);

/**
 * jQuery.crSpline v0.0.2
 * http://github.com/MmmCurry/jquery.crSpline
 *
 * Supports animation along Catmull-Rom splines based on a series of waypoints.
 * Usage: See demo.js, demo.html
 * 
 * Copyright 2010, M. Ian Graham
 * MIT License
 *
 */

(function($){

        $.crSpline = {};

        // Catmull-Rom interpolation between p0 and p1 for previous point p_1 and later point p2
        // http://en.wikipedia.org/wiki/Cubic_Hermite_spline#Catmull.E2.80.93Rom_spline
        var interpolate = function (t, p_1, p0, p1, p2) {
                return Math.floor((t * ((2 - t) * t - 1) * p_1 +
                        (t * t * (3 * t - 5) + 2) * p0 +
                        t * ((4 - 3 * t) * t + 1) * p1 +
                        (t - 1) * t * t * p2
                        ) / 2);
        };

        // Extend this p1,p2 sequence linearly to a new p3
        var generateExtension = function (p1, p2) {
                return [
                        p2[0] + (p2[0] - p1[0]),
                        p2[1] + (p2[1] - p1[1])
                        ];

        };

        // Return an animation object based on a sequence of points
        // pointList must be an array of [x,y] pairs
        $.crSpline.buildSequence = function(pointList) {
                var res = {};
                var seq = [];
                var numSegments;

                if (pointList.length < 2) {
                        throw "crSpline.buildSequence requires at least two points";
                }

                // Generate the first p_1 so the caller doesn't need to provide it
                seq.push(generateExtension(pointList[1], pointList[0]));

                // Throw provided points on the list
                for (var i = 0; i < pointList.length; i++) {
                        seq.push(pointList[i]);
                }

                // Generate the last p2 so the caller doesn't need to provide it
                seq.push(generateExtension(seq[seq.length-2], seq[seq.length-1]));

                numSegments = seq.length - 3;

                res.getPos = function (t) {
                        // XXX For now, assume all segments take equal time
                        var segNum = Math.floor(t * numSegments);
                        if (segNum === numSegments) {
                                return {
                                        left: seq[seq.length-2][0],
                                        top: seq[seq.length-2][1]
                                        };
                        }
                        var microT = (t - segNum/numSegments) * numSegments;
                        var result = {
                                left: interpolate(microT,
                                                seq[segNum][0],
                                                seq[segNum+1][0],
                                                seq[segNum+2][0],
                                                seq[segNum+3][0]) + "px",
                                top: interpolate(microT,
                                                seq[segNum][1],
                                                seq[segNum+1][1],
                                                seq[segNum+2][1],
                                                seq[segNum+3][1]) + "px"
                                };
                        return result;
                };
                return res;
        };

        $.fx.step.crSpline = function (fx) {
                var css = fx.end.getPos(fx.pos);
                for (var i in css) {
                        fx.elem.style[i] = css[i];
                }
        };

})(jQuery);


/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});

// VERSION: 1.8 LAST UPDATE: 9.03.2011
/*
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * Website: http://code.google.com/p/jqueryrotate/
 */
/*(function(g){for(var d,j=document.getElementsByTagName("head")[0].style,h="transformProperty WebkitTransform OTransform msTransform MozTransform".split(" "),e=0;e<h.length;e++)j[h[e]]!==void 0&&(d=h[e]);var i="v"=="\v";jQuery.fn.extend({ImageRotate:function(a){if(!this.Wilq32||!this.Wilq32.PhotoEffect)return a=g.extend(true,{},a),(new Wilq32.PhotoEffect(this.get(0),a))._rootObj},rotate:function(a){if(!(this.length===0||typeof a=="undefined")){typeof a=="number"&&(a={angle:a});for(var c=
[],b=0,d=this.length;b<d;b++){var f=this.get(b);typeof f.Wilq32=="undefined"?c.push(g(g(f).ImageRotate(a))):f.Wilq32.PhotoEffect._handleRotation(a)}return c}}});Wilq32=window.Wilq32||{};Wilq32.PhotoEffect=function(){return d?function(a,c){a.Wilq32={PhotoEffect:this};this._img=this._rootObj=this._eventObj=a;this._handleRotation(c)}:function(a,c){this._img=a;this._rootObj=document.createElement("span");this._rootObj.style.display="inline-block";this._rootObj.Wilq32={PhotoEffect:this};a.parentNode.insertBefore(this._rootObj,
a);if(a.complete)this._Loader(c);else{var b=this;jQuery(this._img).bind("load",function(){b._Loader(c)})}}}();Wilq32.PhotoEffect.prototype={_setupParameters:function(a){this._parameters=this._parameters||{};if(typeof this._angle!=="number")this._angle=0;if(typeof a.angle==="number")this._angle=a.angle;this._parameters.animateTo=typeof a.animateTo==="number"?a.animateTo:this._angle;this._parameters.easing=a.easing||this._parameters.easing||function(a,b,d,f,e){return-f*((b=b/e-1)*b*b*b-1)+d};this._parameters.duration=
a.duration||this._parameters.duration||1E3;this._parameters.callback=a.callback||this._parameters.callback||function(){};a.bind&&a.bind!=this._parameters.bind&&this._BindEvents(a.bind)},_handleRotation:function(a){this._setupParameters(a);this._angle==this._parameters.animateTo?this._rotate(this._angle):this._animateStart()},_BindEvents:function(a){if(a&&this._eventObj){if(this._parameters.bind){var c=this._parameters.bind,b;for(b in c)c.hasOwnProperty(b)&&jQuery(this._eventObj).unbind(b,c[b])}this._parameters.bind=
a;for(b in a)a.hasOwnProperty(b)&&jQuery(this._eventObj).bind(b,a[b])}},_Loader:function(){return i?function(a){var c=this._img.width,b=this._img.height;this._img.parentNode.removeChild(this._img);this._vimage=this.createVMLNode("image");this._vimage.src=this._img.src;this._vimage.style.height=b+"px";this._vimage.style.width=c+"px";this._vimage.style.position="absolute";this._vimage.style.top="0px";this._vimage.style.left="0px";this._container=this.createVMLNode("group");this._container.style.width=
c;this._container.style.height=b;this._container.style.position="absolute";this._container.setAttribute("coordsize",c-1+","+(b-1));this._container.appendChild(this._vimage);this._rootObj.appendChild(this._container);this._rootObj.style.position="relative";this._rootObj.style.width=c+"px";this._rootObj.style.height=b+"px";this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;this._eventObj=this._rootObj;this._handleRotation(a)}:function(a){this._rootObj.setAttribute("id",
this._img.getAttribute("id"));this._rootObj.className=this._img.className;this._width=this._img.width;this._height=this._img.height;this._widthHalf=this._width/2;this._heightHalf=this._height/2;var c=Math.sqrt(this._height*this._height+this._width*this._width);this._widthAdd=c-this._width;this._heightAdd=c-this._height;this._widthAddHalf=this._widthAdd/2;this._heightAddHalf=this._heightAdd/2;this._img.parentNode.removeChild(this._img);this._aspectW=(parseInt(this._img.style.width,10)||this._width)/
this._img.width;this._aspectH=(parseInt(this._img.style.height,10)||this._height)/this._img.height;this._canvas=document.createElement("canvas");this._canvas.setAttribute("width",this._width);this._canvas.style.position="relative";this._canvas.style.left=-this._widthAddHalf+"px";this._canvas.style.top=-this._heightAddHalf+"px";this._canvas.Wilq32=this._rootObj.Wilq32;this._rootObj.appendChild(this._canvas);this._rootObj.style.width=this._width+"px";this._rootObj.style.height=this._height+"px";this._eventObj=
this._canvas;this._cnv=this._canvas.getContext("2d");this._handleRotation(a)}}(),_animateStart:function(){this._timer&&clearTimeout(this._timer);this._animateStartTime=+new Date;this._animateStartAngle=this._angle;this._animate()},_animate:function(){var a=+new Date,c=a-this._animateStartTime>this._parameters.duration;if(c&&!this._parameters.animatedGif)clearTimeout(this._timer);else{(this._canvas||this._vimage||this._img)&&this._rotate(~~(this._parameters.easing(0,a-this._animateStartTime,this._animateStartAngle,
this._parameters.animateTo-this._animateStartAngle,this._parameters.duration)*10)/10);var b=this;this._timer=setTimeout(function(){b._animate.call(b)},10)}if(this._parameters.callback&&c)this._angle=this._parameters.animateTo,this._rotate(this._angle),this._parameters.callback.call(this._rootObj)},_rotate:function(){var a=Math.PI/180;return i?function(a){this._angle=a;this._container.style.rotation=a%360+"deg"}:d?function(a){this._angle=a;this._img.style[d]="rotate("+a%360+"deg)"}:function(c){this._angle=
c;c=c%360*a;this._canvas.width=this._width+this._widthAdd;this._canvas.height=this._height+this._heightAdd;this._cnv.translate(this._widthAddHalf,this._heightAddHalf);this._cnv.translate(this._widthHalf,this._heightHalf);this._cnv.rotate(c);this._cnv.translate(-this._widthHalf,-this._heightHalf);this._cnv.scale(this._aspectW,this._aspectH);this._cnv.drawImage(this._img,0,0)}}()};if(i)Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");
try{return!document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(a){return function(a){return document.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}()})(jQuery);*/

// VERSION: 2.2 LAST UPDATE: 13.03.2012
/*
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * Website: http://code.google.com/p/jqueryrotate/
 *
 * IE8-bugs fixed by Jonathan Wilsson 10.04.2012
 */
//(function(j){for(var d,k=document.getElementsByTagName("head")[0].style,h=["transformProperty","WebkitTransform","OTransform","msTransform","MozTransform"],g=0;g<h.length;g++)void 0!==k[h[g]]&&(d=h[g]);var i=eval('"v"=="\v"');jQuery.fn.extend({rotate:function(a){if(!(0===this.length||"undefined"==typeof a)){"number"==typeof a&&(a={angle:a});for(var b=[],c=0,f=this.length;c<f;c++){var e=this.get(c);if(!e.Wilq32||!e.Wilq32.PhotoEffect){var d=j.extend(!0,{},a),e=(new Wilq32.PhotoEffect(e,d))._rootObj; b.push(j(e))}else e.Wilq32.PhotoEffect._handleRotation(a)}return b}},getRotateAngle:function(){for(var a=[],b=0,c=this.length;b<c;b++){var f=this.get(b);f.Wilq32&&f.Wilq32.PhotoEffect&&(a[b]=f.Wilq32.PhotoEffect._angle)}return a},stopRotate:function(){for(var a=0,b=this.length;a<b;a++){var c=this.get(a);c.Wilq32&&c.Wilq32.PhotoEffect&&clearTimeout(c.Wilq32.PhotoEffect._timer)}}});Wilq32=window.Wilq32||{};Wilq32.PhotoEffect=function(){return d?function(a,b){a.Wilq32={PhotoEffect:this};this._img=this._rootObj= this._eventObj=a;this._handleRotation(b)}:function(a,b){this._img=a;this._rootObj=document.createElement("span");this._rootObj.style.display="inline-block";this._rootObj.Wilq32={PhotoEffect:this};null!==a.parentNode&&a.parentNode.insertBefore(this._rootObj,a);if(a.complete)this._Loader(b);else{var c=this;jQuery(this._img).bind("load",function(){c._Loader(b)})}}}();Wilq32.PhotoEffect.prototype={_setupParameters:function(a){this._parameters=this._parameters||{};"number"!==typeof this._angle&&(this._angle= 0);"number"===typeof a.angle&&(this._angle=a.angle);this._parameters.animateTo="number"===typeof a.animateTo?a.animateTo:this._angle;this._parameters.step=a.step||this._parameters.step||null;this._parameters.easing=a.easing||this._parameters.easing||function(a,c,f,e,d){return-e*((c=c/d-1)*c*c*c-1)+f};this._parameters.duration=a.duration||this._parameters.duration||1E3;this._parameters.callback=a.callback||this._parameters.callback||function(){};a.bind&&a.bind!=this._parameters.bind&&this._BindEvents(a.bind)}, _handleRotation:function(a){this._setupParameters(a);this._angle==this._parameters.animateTo?this._rotate(this._angle):this._animateStart()},_BindEvents:function(a){if(a&&this._eventObj){if(this._parameters.bind){var b=this._parameters.bind,c;for(c in b)b.hasOwnProperty(c)&&jQuery(this._eventObj).unbind(c,b[c])}this._parameters.bind=a;for(c in a)a.hasOwnProperty(c)&&jQuery(this._eventObj).bind(c,a[c])}},_Loader:function(){return i?function(a){var b=this._img.width,c=this._img.height;null!==this._img.parentNode&& this._img.parentNode.removeChild(this._img);this._vimage=this.createVMLNode("image");this._vimage.src=this._img.src;this._vimage.style.height=c+"px";this._vimage.style.width=b+"px";this._vimage.style.position="absolute";this._vimage.style.top="0px";this._vimage.style.left="0px";this._container=this.createVMLNode("group");this._container.style.width=b;this._container.style.height=c;this._container.style.position="absolute";this._container.setAttribute("coordsize",b-1+","+(c-1));this._container.appendChild(this._vimage); this._rootObj.appendChild(this._container);this._rootObj.style.position="relative";this._rootObj.style.width=b+"px";this._rootObj.style.height=c+"px";this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;this._eventObj=this._rootObj;this._handleRotation(a)}:function(a){this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;this._width=this._img.width;this._height=this._img.height;this._widthHalf= this._width/2;this._heightHalf=this._height/2;var b=Math.sqrt(this._height*this._height+this._width*this._width);this._widthAdd=b-this._width;this._heightAdd=b-this._height;this._widthAddHalf=this._widthAdd/2;this._heightAddHalf=this._heightAdd/2;null!==this._img.parentNode.removeChild&&this._img.parentNode.removeChild(this._img);this._aspectW=(parseInt(this._img.style.width,10)||this._width)/this._img.width;this._aspectH=(parseInt(this._img.style.height,10)||this._height)/this._img.height;this._canvas= document.createElement("canvas");this._canvas.setAttribute("width",this._width);this._canvas.style.position="relative";this._canvas.style.left=-this._widthAddHalf+"px";this._canvas.style.top=-this._heightAddHalf+"px";this._canvas.Wilq32=this._rootObj.Wilq32;this._rootObj.appendChild(this._canvas);this._rootObj.style.width=this._width+"px";this._rootObj.style.height=this._height+"px";this._eventObj=this._canvas;this._cnv=this._canvas.getContext("2d");this._handleRotation(a)}}(),_animateStart:function(){this._timer&& clearTimeout(this._timer);this._animateStartTime=+new Date;this._animateStartAngle=this._angle;this._animate()},_animate:function(){var a=+new Date,b=a-this._animateStartTime>this._parameters.duration;if(b&&!this._parameters.animatedGif)clearTimeout(this._timer);else{(this._canvas||this._vimage||this._img)&&this._rotate(~~(10*this._parameters.easing(0,a-this._animateStartTime,this._animateStartAngle,this._parameters.animateTo-this._animateStartAngle,this._parameters.duration))/10);this._parameters.step&& this._parameters.step(this._angle);var c=this;this._timer=setTimeout(function(){c._animate.call(c)},10)}this._parameters.callback&&b&&(this._angle=this._parameters.animateTo,this._rotate(this._angle),this._parameters.callback.call(this._rootObj))},_rotate:function(){var a=Math.PI/180;return i?function(a){this._angle=a;this._container.style.rotation=a%360+"deg"}:d?function(a){this._angle=a;this._img.style[d]="rotate("+a%360+"deg)"}:function(b){this._angle=b;b=b%360*a;this._canvas.width=this._width+ this._widthAdd;this._canvas.height=this._height+this._heightAdd;this._cnv.translate(this._widthAddHalf,this._heightAddHalf);this._cnv.translate(this._widthHalf,this._heightHalf);this._cnv.rotate(b);this._cnv.translate(-this._widthHalf,-this._heightHalf);this._cnv.scale(this._aspectW,this._aspectH);this._cnv.drawImage(this._img,0,0)}}()};i&&(Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{return!document.namespaces.rvml&& document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(a){return function(a){return document.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}())})(jQuery);
(function(j){for(var d,k=document.getElementsByTagName("head")[0].style,h=["transformProperty","WebkitTransform","OTransform","msTransform","MozTransform"],g=0;g<h.length;g++)void 0!==k[h[g]]&&(d=h[g]);var i=eval('"v"=="\v"');jQuery.fn.extend({rotate:function(a){if(!(0===this.length||"undefined"==typeof a)){"number"==typeof a&&(a={angle:a});for(var b=[],c=0,f=this.length;c<f;c++){var e=this.get(c);if(!e.Wilq32||!e.Wilq32.PhotoEffect){var d=j.extend(!0,{},a),e=(new Wilq32.PhotoEffect(e,d))._rootObj; b.push(j(e))}else e.Wilq32.PhotoEffect._handleRotation(a)}return b}},getRotateAngle:function(){for(var a=[],b=0,c=this.length;b<c;b++){var f=this.get(b);f.Wilq32&&f.Wilq32.PhotoEffect&&(a[b]=f.Wilq32.PhotoEffect._angle)}return a},stopRotate:function(){for(var a=0,b=this.length;a<b;a++){var c=this.get(a);c.Wilq32&&c.Wilq32.PhotoEffect&&clearTimeout(c.Wilq32.PhotoEffect._timer)}}});Wilq32=window.Wilq32||{};Wilq32.PhotoEffect=function(){return d?function(a,b){a.Wilq32={PhotoEffect:this};this._img=this._rootObj= this._eventObj=a;this._handleRotation(b)}:function(a,b){this._img=a;this._rootObj=document.createElement("span");this._rootObj.style.display="inline-block";this._rootObj.style.bottom=a.style.bottom?a.style.bottom:"auto";this._rootObj.style.left=a.style.left?a.style.left:"auto";this._rootObj.style.right=a.style.right?a.style.right:"auto";this._rootObj.style.top=a.style.top?a.style.top:"auto";this._rootObj.Wilq32={PhotoEffect:this};null!==a.parentNode&&a.parentNode.insertBefore(this._rootObj,a);if(a.complete)this._Loader(b); else{var c=this;jQuery(this._img).bind("load",function(){c._Loader(b)})}}}();Wilq32.PhotoEffect.prototype={_setupParameters:function(a){this._parameters=this._parameters||{};"number"!==typeof this._angle&&(this._angle=0);"number"===typeof a.angle&&(this._angle=a.angle);this._parameters.animateTo="number"===typeof a.animateTo?a.animateTo:this._angle;this._parameters.step=a.step||this._parameters.step||null;this._parameters.easing=a.easing||this._parameters.easing||function(a,c,f,e,d){return-e*((c= c/d-1)*c*c*c-1)+f};this._parameters.duration=a.duration||this._parameters.duration||1E3;this._parameters.callback=a.callback||this._parameters.callback||function(){};a.bind&&a.bind!=this._parameters.bind&&this._BindEvents(a.bind)},_handleRotation:function(a){this._setupParameters(a);this._angle==this._parameters.animateTo?this._rotate(this._angle):this._animateStart()},_BindEvents:function(a){if(a&&this._eventObj){if(this._parameters.bind){var b=this._parameters.bind,c;for(c in b)b.hasOwnProperty(c)&& jQuery(this._eventObj).unbind(c,b[c])}this._parameters.bind=a;for(c in a)a.hasOwnProperty(c)&&jQuery(this._eventObj).bind(c,a[c])}},_Loader:function(){return i?function(a){var b=this._img.width,c=this._img.height;null!==this._img.parentNode&&this._img.parentNode.removeChild(this._img);this._vimage=this.createVMLNode("image");this._vimage.src=this._img.src;this._vimage.style.height=c+"px";this._vimage.style.width=b+"px";this._vimage.style.position="absolute";this._vimage.style.top="0px";this._vimage.style.left= "0px";this._container=this.createVMLNode("group");this._container.style.width=b;this._container.style.height=c;this._container.style.position="absolute";this._container.setAttribute("coordsize",b-1+","+(c-1));this._container.appendChild(this._vimage);this._rootObj.appendChild(this._container);this._rootObj.style.position="absolute";this._rootObj.style.width=b+"px";this._rootObj.style.height=c+"px";this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className; this._eventObj=this._rootObj;this._handleRotation(a)}:function(a){this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;this._width=this._img.width;this._height=this._img.height;this._widthHalf=this._width/2;this._heightHalf=this._height/2;var b=Math.sqrt(this._height*this._height+this._width*this._width);this._widthAdd=b-this._width;this._heightAdd=b-this._height;this._widthAddHalf=this._widthAdd/2;this._heightAddHalf=this._heightAdd/2;null!==this._img.parentNode&& this._img.parentNode.removeChild(this._img);this._aspectW=(parseInt(this._img.style.width,10)||this._width)/this._img.width;this._aspectH=(parseInt(this._img.style.height,10)||this._height)/this._img.height;this._canvas=document.createElement("canvas");this._canvas.setAttribute("width",this._width);this._canvas.style.position="relative";this._canvas.style.left=-this._widthAddHalf+"px";this._canvas.style.top=-this._heightAddHalf+"px";this._canvas.Wilq32=this._rootObj.Wilq32;this._rootObj.appendChild(this._canvas); this._rootObj.style.width=this._width+"px";this._rootObj.style.height=this._height+"px";this._eventObj=this._canvas;this._cnv=this._canvas.getContext("2d");this._handleRotation(a)}}(),_animateStart:function(){this._timer&&clearTimeout(this._timer);this._animateStartTime=+new Date;this._animateStartAngle=this._angle;this._animate()},_animate:function(){var a=+new Date,b=a-this._animateStartTime>this._parameters.duration;if(b&&!this._parameters.animatedGif)clearTimeout(this._timer);else{(this._canvas|| this._vimage||this._img)&&this._rotate(~~(10*this._parameters.easing(0,a-this._animateStartTime,this._animateStartAngle,this._parameters.animateTo-this._animateStartAngle,this._parameters.duration))/10);this._parameters.step&&this._parameters.step(this._angle);var c=this;this._timer=setTimeout(function(){c._animate.call(c)},10)}this._parameters.callback&&b&&(this._angle=this._parameters.animateTo,this._rotate(this._angle),this._parameters.callback.call(this._rootObj))},_rotate:function(){var a=Math.PI/ 180;return i?function(a){this._angle=a;this._container.style.rotation=a%360+"deg"}:d?function(a){this._angle=a;this._img.style[d]="rotate("+a%360+"deg)"}:function(b){this._angle=b;b=b%360*a;this._canvas.width=this._width+this._widthAdd;this._canvas.height=this._height+this._heightAdd;this._cnv.translate(this._widthAddHalf,this._heightAddHalf);this._cnv.translate(this._widthHalf,this._heightHalf);this._cnv.rotate(b);this._cnv.translate(-this._widthHalf,-this._heightHalf);this._cnv.scale(this._aspectW, this._aspectH);this._cnv.drawImage(this._img,0,0)}}()};i&&(Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{return!document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(a){return function(a){return document.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}())})(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
 

function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);

/*
 * jQuery Color Animations v@VERSION
 * http://jquery.org/
 *
 * Copyright 2011 John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Date: @DATE
 */

(function( jQuery, undefined ){
	var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "),

		// plusequals test for += 100 -= 100
		rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
		// a set of RE's that can match strings and generate color tuples.
		stringParsers = [{
				re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				parse: function( execResult ) {
					return [
						execResult[ 1 ],
						execResult[ 2 ],
						execResult[ 3 ],
						execResult[ 4 ]
					];
				}
			}, {
				re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				parse: function( execResult ) {
					return [
						2.55 * execResult[1],
						2.55 * execResult[2],
						2.55 * execResult[3],
						execResult[ 4 ]
					];
				}
			}, {
				re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
				parse: function( execResult ) {
					return [
						parseInt( execResult[ 1 ], 16 ),
						parseInt( execResult[ 2 ], 16 ),
						parseInt( execResult[ 3 ], 16 )
					];
				}
			}, {
				re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
				parse: function( execResult ) {
					return [
						parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
						parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
						parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
					];
				}
			}, {
				re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				space: "hsla",
				parse: function( execResult ) {
					return [
						execResult[1],
						execResult[2] / 100,
						execResult[3] / 100,
						execResult[4]
					];
				}
			}],

		// jQuery.Color( )
		color = jQuery.Color = function( color, green, blue, alpha ) {
			return new jQuery.Color.fn.parse( color, green, blue, alpha );
		},
		spaces = {
			rgba: {
				cache: "_rgba",
				props: {
					red: {
						idx: 0,
						type: "byte",
						empty: true
					},
					green: {
						idx: 1,
						type: "byte",
						empty: true
					},
					blue: {
						idx: 2,
						type: "byte",
						empty: true
					},
					alpha: {
						idx: 3,
						type: "percent",
						def: 1
					}
				}
			},
			hsla: {
				cache: "_hsla",
				props: {
					hue: {
						idx: 0,
						type: "degrees",
						empty: true
					},
					saturation: {
						idx: 1,
						type: "percent",
						empty: true
					},
					lightness: {
						idx: 2,
						type: "percent",
						empty: true
					}
				}
			}
		},
		propTypes = {
			"byte": {
				floor: true,
				min: 0,
				max: 255
			},
			"percent": {
				min: 0,
				max: 1
			},
			"degrees": {
				mod: 360,
				floor: true
			}
		},
		rgbaspace = spaces.rgba.props,
		support = color.support = {},

		// colors = jQuery.Color.names
		colors,

		// local aliases of functions called often
		each = jQuery.each;

	spaces.hsla.props.alpha = rgbaspace.alpha;

	function clamp( value, prop, alwaysAllowEmpty ) {
		var type = propTypes[ prop.type ] || {},
			allowEmpty = prop.empty || alwaysAllowEmpty;

		if ( allowEmpty && value == null ) {
			return null;
		}
		if ( prop.def && value == null ) {
			return prop.def;
		}
		if ( type.floor ) {
			value = ~~value;
		} else {
			value = parseFloat( value );
		}
		if ( value == null || isNaN( value ) ) {
			return prop.def;
		}
		if ( type.mod ) {
			value = value % type.mod;
			// -10 -> 350
			return value < 0 ? type.mod + value : value;
		}

		// for now all property types without mod have min and max
		return type.min > value ? type.min : type.max < value ? type.max : value;
	}

	function stringParse( string ) {
		var inst = color(),
			rgba = inst._rgba = [];

		string = string.toLowerCase();

		each( stringParsers, function( i, parser ) {
			var match = parser.re.exec( string ),
				values = match && parser.parse( match ),
				parsed,
				spaceName = parser.space || "rgba",
				cache = spaces[ spaceName ].cache;


			if ( values ) {
				parsed = inst[ spaceName ]( values );

				// if this was an rgba parse the assignment might happen twice
				// oh well....
				inst[ cache ] = parsed[ cache ];
				rgba = inst._rgba = parsed._rgba;

				// exit each( stringParsers ) here because we matched
				return false;
			}
		});

		// Found a stringParser that handled it
		if ( rgba.length !== 0 ) {

			// if this came from a parsed string, force "transparent" when alpha is 0
			// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
			if ( Math.max.apply( Math, rgba ) === 0 ) {
				jQuery.extend( rgba, colors.transparent );
			}
			return inst;
		}

		// named colors / default - filter back through parse function
		if ( string = colors[ string ] ) {
			return string;
		}
	}

	color.fn = color.prototype = {
		constructor: color,
		parse: function( red, green, blue, alpha ) {
			if ( red === undefined ) {
				this._rgba = [ null, null, null, null ];
				return this;
			}
			if ( red instanceof jQuery || red.nodeType ) {
				red = red instanceof jQuery ? red.css( green ) : jQuery( red ).css( green );
				green = undefined;
			}

			var inst = this,
				type = jQuery.type( red ),
				rgba = this._rgba = [],
				source;

			// more than 1 argument specified - assume ( red, green, blue, alpha )
			if ( green !== undefined ) {
				red = [ red, green, blue, alpha ];
				type = "array";
			}

			if ( type === "string" ) {
				return this.parse( stringParse( red ) || colors._default );
			}

			if ( type === "array" ) {
				each( rgbaspace, function( key, prop ) {
					rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
				});
				return this;
			}

			if ( type === "object" ) {
				if ( red instanceof color ) {
					each( spaces, function( spaceName, space ) {
						if ( red[ space.cache ] ) {
							inst[ space.cache ] = red[ space.cache ].slice();
						}
					});
				} else {
					each( spaces, function( spaceName, space ) {
						each( space.props, function( key, prop ) {
							var cache = space.cache;

							// if the cache doesn't exist, and we know how to convert
							if ( !inst[ cache ] && space.to ) {

								// if the value was null, we don't need to copy it
								// if the key was alpha, we don't need to copy it either
								if ( red[ key ] == null || key === "alpha") {
									return;
								}
								inst[ cache ] = space.to( inst._rgba );
							}

							// this is the only case where we allow nulls for ALL properties.
							// call clamp with alwaysAllowEmpty
							inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
						});
					});
				}
				return this;
			}
		},
		is: function( compare ) {
			var is = color( compare ),
				same = true,
				myself = this;

			each( spaces, function( _, space ) {
				var isCache = is[ space.cache ],
					localCache;
				if (isCache) {
					localCache = myself[ space.cache ] || space.to && space.to( myself._rgba ) || [];
					each( space.props, function( _, prop ) {
						if ( isCache[ prop.idx ] != null ) {
							same = ( isCache[ prop.idx ] == localCache[ prop.idx ] );
							return same;
						}
					});
				}
				return same;
			});
			return same;
		},
		_space: function() {
			var used = [],
				inst = this;
			each( spaces, function( spaceName, space ) {
				if ( inst[ space.cache ] ) {
					used.push( spaceName );
				}
			});
			return used.pop();
		},
		transition: function( other, distance ) {
			var end = color( other ),
				spaceName = end._space(),
				space = spaces[ spaceName ],
				start = this[ space.cache ] || space.to( this._rgba ),
				result = start.slice();

			end = end[ space.cache ];
			each( space.props, function( key, prop ) {
				var index = prop.idx,
					startValue = start[ index ],
					endValue = end[ index ],
					type = propTypes[ prop.type ] || {};

				// if null, don't override start value
				if ( endValue === null ) {
					return;
				}
				// if null - use end
				if ( startValue === null ) {
					result[ index ] = endValue;
				} else {
					if ( type.mod ) {
						if ( endValue - startValue > type.mod / 2 ) {
							startValue += type.mod;
						} else if ( startValue - endValue > type.mod / 2 ) {
							startValue -= type.mod;
						}
					}
					result[ prop.idx ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
				}
			});
			return this[ spaceName ]( result );
		},
		blend: function( opaque ) {
			// if we are already opaque - return ourself
			if ( this._rgba[ 3 ] === 1 ) {
				return this;
			}

			var rgb = this._rgba.slice(),
				a = rgb.pop(),
				blend = color( opaque )._rgba;

			return color( jQuery.map( rgb, function( v, i ) {
				return ( 1 - a ) * blend[ i ] + a * v;
			}));
		},
		toRgbaString: function() {
			var prefix = "rgba(",
				rgba = jQuery.map( this._rgba, function( v, i ) {
					return v == null ? ( i > 2 ? 1 : 0 ) : v;
				});

			if ( rgba[ 3 ] === 1 ) {
				rgba.pop();
				prefix = "rgb(";
			}

			return prefix + rgba.join(",") + ")";
		},
		toHslaString: function() {
			var prefix = "hsla(",
				hsla = jQuery.map( this.hsla(), function( v, i ) {
					if ( v == null ) {
						v = i > 2 ? 1 : 0;
					}

					// catch 1 and 2
					if ( i && i < 3 ) {
						v = Math.round( v * 100 ) + "%";
					}
					return v;
				});

			if ( hsla[ 3 ] == 1 ) {
				hsla.pop();
				prefix = "hsl(";
			}
			return prefix + hsla.join(",") + ")";
		},
		toHexString: function( includeAlpha ) {
			var rgba = this._rgba.slice(),
				alpha = rgba.pop();

			if ( includeAlpha ) {
				rgba.push( ~~( alpha * 255 ) );
			}

			return "#" + jQuery.map( rgba, function( v, i ) {

				// default to 0 when nulls exist
				v = ( v || 0 ).toString( 16 );
				return v.length == 1 ? "0" + v : v;
			}).join("");
		},
		toString: function() {
			return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
		}
	};
	color.fn.parse.prototype = color.fn;

	// hsla conversions adapted from:
	// http://www.google.com/codesearch/p#OAMlx_jo-ck/src/third_party/WebKit/Source/WebCore/inspector/front-end/Color.js&d=7&l=193

	function hue2rgb( p, q, h ) {
		h = ( h + 1 ) % 1;
		if ( h * 6 < 1 ) {
			return p + (q - p) * 6 * h;
		}
		if ( h * 2 < 1) {
			return q;
		}
		if ( h * 3 < 2 ) {
			return p + (q - p) * ((2/3) - h) * 6;
		}
		return p;
	}

	spaces.hsla.to = function ( rgba ) {
		if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
			return [ null, null, null, rgba[ 3 ] ];
		}
		var r = rgba[ 0 ] / 255,
			g = rgba[ 1 ] / 255,
			b = rgba[ 2 ] / 255,
			a = rgba[ 3 ],
			max = Math.max( r, g, b ),
			min = Math.min( r, g, b ),
			diff = max - min,
			add = max + min,
			l = add * 0.5,
			h, s;

		if ( min === max ) {
			h = 0;
		} else if ( r === max ) {
			h = ( 60 * ( g - b ) / diff ) + 360;
		} else if ( g === max ) {
			h = ( 60 * ( b - r ) / diff ) + 120;
		} else {
			h = ( 60 * ( r - g ) / diff ) + 240;
		}

		if ( l === 0 || l === 1 ) {
			s = l;
		} else if ( l <= 0.5 ) {
			s = diff / add;
		} else {
			s = diff / ( 2 - add );
		}
		return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
	};

	spaces.hsla.from = function ( hsla ) {
		if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
			return [ null, null, null, hsla[ 3 ] ];
		}
		var h = hsla[ 0 ] / 360,
			s = hsla[ 1 ],
			l = hsla[ 2 ],
			a = hsla[ 3 ],
			q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
			p = 2 * l - q,
			r, g, b;

		return [
			Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
			Math.round( hue2rgb( p, q, h ) * 255 ),
			Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
			a
		];
	};


	each( spaces, function( spaceName, space ) {
		var props = space.props,
			cache = space.cache,
			to = space.to,
			from = space.from;

		// makes rgba() and hsla()
		color.fn[ spaceName ] = function( value ) {

			// generate a cache for this space if it doesn't exist
			if ( to && !this[ cache ] ) {
				this[ cache ] = to( this._rgba );
			}
			if ( value === undefined ) {
				return this[ cache ].slice();
			}

			var type = jQuery.type( value ),
				arr = ( type === "array" || type === "object" ) ? value : arguments,
				local = this[ cache ].slice(),
				ret;

			each( props, function( key, prop ) {
				var val = arr[ type === "object" ? key : prop.idx ];
				if ( val == null ) {
					val = local[ prop.idx ];
				}
				local[ prop.idx ] = clamp( val, prop );
			});

			if ( from ) {
				ret = color( from( local ) );
				ret[ cache ] = local;
				return ret;
			} else {
				return color( local );
			}
		};

		// makes red() green() blue() alpha() hue() saturation() lightness()
		each( props, function( key, prop ) {
			// alpha is included in more than one space
			if ( color.fn[ key ] ) {
				return;
			}
			color.fn[ key ] = function( value ) {
				var vtype = jQuery.type( value ),
					fn = ( key === 'alpha' ? ( this._hsla ? 'hsla' : 'rgba' ) : spaceName ),
					local = this[ fn ](),
					cur = local[ prop.idx ],
					match;

				if ( vtype === "undefined" ) {
					return cur;
				}

				if ( vtype === "function" ) {
					value = value.call( this, cur );
					vtype = jQuery.type( value );
				}
				if ( value == null && prop.empty ) {
					return this;
				}
				if ( vtype === "string" ) {
					match = rplusequals.exec( value );
					if ( match ) {
						value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
					}
				}
				local[ prop.idx ] = value;
				return this[ fn ]( local );
			};
		});
	});

	// add .fx.step functions
	each( stepHooks, function( i, hook ) {
		jQuery.cssHooks[ hook ] = {
			set: function( elem, value ) {
				var parsed;

				if ( jQuery.type( value ) !== 'string' || ( parsed = stringParse( value ) ) )
				{
					value = color( parsed || value );
					if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
						var backgroundColor,
							curElem = hook === "backgroundColor" ? elem.parentNode : elem;
						do {
							backgroundColor = jQuery.curCSS( curElem, "backgroundColor" );
						} while (
							( backgroundColor === "" || backgroundColor === "transparent" ) &&
							( curElem = curElem.parentNode ) &&
							curElem.style
						);

						value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
							backgroundColor :
							"_default" );
					}

					value = value.toRgbaString();
				}
				elem.style[ hook ] = value;
			}
		};
		jQuery.fx.step[ hook ] = function( fx ) {
			if ( !fx.colorInit ) {
				fx.start = color( fx.elem, hook );
				fx.end = color( fx.end );
				fx.colorInit = true;
			}
			jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
		};
	});

	// detect rgba support
	jQuery(function() {
		var div = document.createElement( "div" ),
			div_style = div.style;

		div_style.cssText = "background-color:rgba(1,1,1,.5)";
		support.rgba = div_style.backgroundColor.indexOf( "rgba" ) > -1;
	});

	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/
	colors = jQuery.Color.names = {
		aqua: "#00ffff",
		azure: "#f0ffff",
		beige: "#f5f5dc",
		black: "#000000",
		blue: "#0000ff",
		brown: "#a52a2a",
		cyan: "#00ffff",
		darkblue: "#00008b",
		darkcyan: "#008b8b",
		darkgrey: "#a9a9a9",
		darkgreen: "#006400",
		darkkhaki: "#bdb76b",
		darkmagenta: "#8b008b",
		darkolivegreen: "#556b2f",
		darkorange: "#ff8c00",
		darkorchid: "#9932cc",
		darkred: "#8b0000",
		darksalmon: "#e9967a",
		darkviolet: "#9400d3",
		fuchsia: "#ff00ff",
		gold: "#ffd700",
		green: "#008000",
		indigo: "#4b0082",
		khaki: "#f0e68c",
		lightblue: "#add8e6",
		lightcyan: "#e0ffff",
		lightgreen: "#90ee90",
		lightgrey: "#d3d3d3",
		lightpink: "#ffb6c1",
		lightyellow: "#ffffe0",
		lime: "#00ff00",
		magenta: "#ff00ff",
		maroon: "#800000",
		navy: "#000080",
		olive: "#808000",
		orange: "#ffa500",
		pink: "#ffc0cb",
		purple: "#800080",
		violet: "#800080",
		red: "#ff0000",
		silver: "#c0c0c0",
		white: "#ffffff",
		yellow: "#ffff00",
		transparent: [ null, null, null, 0 ],
		_default: "#ffffff"
	};
})( jQuery );