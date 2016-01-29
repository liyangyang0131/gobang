window.onload=function(){
	var sence = document.getElementById('sence');
	var block = document.getElementsByClassName('block'),
		kaiguan = true;
	var hidden = document.getElementById('hidden'),
		who = document.getElementById('who'),
		again = document.getElementById('again'),
		cancle = document.getElementById('cancle');
	var dic1={},dic2={};
	var row = 20,
	    line,
	    lin2,
	    div;
	for(var i = 0;i<row;i++){
		line = document.createElement('div');
		line.style.width='600px';
		line.style.borderBottom='1px solid #757575';
		line.style.position='absolute';
		line.style.top=(600/row)*i+(600/row)/2+'px';
		sence.appendChild(line);

		line2 = document.createElement('div');
		line2.style.height='600px';
		line2.style.borderLeft='1px solid #757575';
		line2.style.position='absolute';
		line2.style.left=(600/row)*i+(600/row)/2+'px';
		sence.appendChild(line2);
	}

	for(i = 0;i<row;i++){
		for(var j = 0;j<row;j++){
			div=document.createElement('div');
			div.setAttribute('class','block');

			div.setAttribute('id',i+'_'+j);

			div.style.width=600/row+'px';
			div.style.height=600/row+'px';
			sence.appendChild(div);
		}
	}

	var isWin = function(id,dic){
		var x = Number(id.split('_')[0]),
		    y = Number(id.split('_')[1]);

	    var xx,yy;

	    var hang = 1;
	    xx = x;yy=y;
	    while( dic[xx+'_'+(yy+1)] ){hang++;yy++};
	    xx = x;yy=y;
	    while( dic[xx+'_'+(yy-1)] ){hang++;yy--};
	    if(hang >= 5) return true;

	    var lie = 1;
	    xx = x;yy=y;
	    while( dic[(xx-1)+'_'+yy] ){lie++;xx--};
	    xx = x;yy=y;
	    while( dic[(xx+1)+'_'+yy] ){lie++;xx++};
	    if(lie >= 5) return true;
	   
	    var yx = 1;
	    xx = x;yy=y;
	    while( dic[(xx-1)+'_'+(yy+1)] ){yx++;xx--;yy++};
	    xx = x;yy=y;
	    while( dic[(xx+1)+'_'+(yy-1)] ){yx++;xx++;yy--};
	    if(yx >= 5) return true;

	    var zx = 1;
	    xx = x;yy=y;
	    while( dic[(xx-1)+'_'+(yy-1)] ){zx++;xx--;yy--};
	    xx = x;yy=y;
	    while( dic[(xx+1)+'_'+(yy+1)] ){zx++;xx++;y++};
	    if(zx >= 5) return true;
	    
	    return false;
	}

	for (i = 0; i<block.length; i++) {
		block[i].onclick=function(){
			if(this.hasAttribute('hasColor')){
				return;
			}

			this.style.webkitTransform='scale(0.8,0.8)';
			var id = this.getAttribute('id');
			
			if(kaiguan){
				this.style.background='#333';
				kaiguan = false;

				this.style.boxShadow='2px 2px 8px #757575';
				dic1[this.getAttribute('id')]=true;
				if(isWin(id,dic1)){
					// alert('黑棋完胜');
					hidden.style.display='block';
					who.innerHTML = '黑棋完胜!';
					again.onclick = function(){
						hidden.style.display='none';
						location.reload();
					}
					cancle.onclick = function(){
						hidden.style.display='none';
						return null;
					}
					
				}
			}
			else{
				this.style.background='#fff';
				kaiguan = true;

				this.style.boxShadow='2px 2px 15px #e0e0e0 inset,2px 2px 8px #757575';
				dic2[this.getAttribute('id')]=true;
				if(isWin(id,dic2)){
					// alert('白棋完胜');
					hidden.style.display='block';
					who.innerHTML = '白棋完胜!';
					again.onclick = function(){
						hidden.style.display='none';
						location.reload();
					}
					cancle.onclick = function(){
						hidden.style.display='none';
						return null;
					}
				}
			}
			this.setAttribute('hasColor','true');
		}


		// document.onkeydown = function(e){
		// 	var d = e.keyCode;
		// 	console.log(d);
		// }
	};



	








};