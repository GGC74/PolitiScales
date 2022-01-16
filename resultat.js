function getQueryVariable(variable)
{
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for(var i=0;i<vars.length;i++)
	{
		var pair = vars[i].split("=")
		if(pair[0] == variable)
		{
			if(pair[1] == "NaN")
			{
				return 0
			}
			else
			{
				return pair[1]/100;
			}
		}
	}
	return 0;
}

function setAxisValue(name, value)
{
	var axis = document.getElementById(name)
	if(!axis)
		return
	
	var text = document.getElementById(name+"Text")
	if(!text)
		return
	
	axis.style.width = ((100*value).toFixed(1) + "%");
	
	text.innerHTML = ((100*value).toFixed(0) + "%");
	if (text.offsetWidth > axis.offsetWidth)
		text.style.visibility = "hidden";
}

function setBonus(name, value, limit)
{
	axis = document.getElementById(name)
	if(!axis)
		return
	
	if(value > limit)
	{
		axis.style.display = "block";
		axis.style.opacity = value*value;
	}
	else
	{
		axis.style.display = "none";
	}
}

axes = [
	"c",
	"b",
	"p",
	"m",
	"s",
	"j",
	"e",
	"t"
]

bonus = {
	anar: 0.9,
	prag: 0.5,
	femi: 0.9,
	comp: 0.9,
	vega: 0.5,
	reli: 0.5,
	mona: 0.5,
    laic: 0.5,
    impe: 0.5,
    resi: 0.5,
}

characteristics = []

for(var i=0; i<axes.length; i++)
{
	negativeValue  = getQueryVariable(axes[i]+"0");
	positiveValue  = getQueryVariable(axes[i]+"1");
	setAxisValue(axes[i]+"AxisNeg", negativeValue);
	setAxisValue(axes[i]+"AxisPos", positiveValue);
	setAxisValue(axes[i]+"AxisMid", 1-negativeValue-positiveValue);
	
	if(negativeValue > positiveValue)
	{
		characteristics.push({ name: axes[i]+"0", value: negativeValue});
	}
	else
	{
		characteristics.push({ name: axes[i]+"1", value: positiveValue});
	}
}

bonusEnabled = 0
for(var b in bonus)
{
	
	value = getQueryVariable(b);
	
	setBonus(b+"Bonus", value, bonus[b]);
	
	if(value > bonus[b])
	{
		bonusEnabled = 1;
		characteristics.push({ name: b, value: value});
	}
}

characteristics.sort(function(a, b)
{
	return a.value < b.value;
});

charSlogan = {
	c0: "Égalité",
	b0: "Humanité",
	b1: "Patrie",
	p0: "Socialisme",
	p1: "Travail",
	m1: "Liberté",
	s1: "Famille",
	j0: "Justice",
	j1: "Ordre",
	e0: "Ecologie",
	t0: "Révolution"
}

function findFlagColors()
{
	colors = [];
	
	for(var i=0; i<flagColors.length; i++)
	{
		var accepted = 1;
		
		var mainValue = 0;
		var mainValueFound = 0;
	
		for(var j=0; j<flagColors[i].cond.length; j++)
		{
			var charFound = 0;
			for(var k=0; k<characteristics.length; k++)
			{
				if(characteristics[k].name == flagColors[i].cond[j].name)
				{
					charFound = 1;
					if(characteristics[k].value < flagColors[i].cond[j].vmin || characteristics[k].value > flagColors[i].cond[j].vmax)
						accepted = 0;
					else if(!mainValueFound)
					{
						mainValueFound = 1;
						mainValue = characteristics[k].value;
					}
					
					break;
				}
			}
			
			if(!charFound)
				accepted = 0;
			
			if(!accepted)
				break;
		}
		
		if(accepted)
		{
			colors.push({ bgColor: flagColors[i].bgColor, fgColor: flagColors[i].fgColor, value: mainValue });
		}
	}
	
	colors.sort(function(a, b) { return a.value < b.value; });
	
	return colors;
}

function findFlagShape(numColors)
{
	for(var i=0; i<flagShapes.length; i++)
	{
		var accepted = 1;
		
		if(flagShapes[i].numColors > numColors)
			accepted = 0;
		else
		{
			for(var j=0; j<flagShapes[i].cond.length; j++)
			{
				var charFound = 0;
				for(var k=0; k<characteristics.length; k++)
				{
					if(characteristics[k].name == flagShapes[i].cond[j].name)
					{
						charFound = 1;
						if(characteristics[k].value < flagShapes[i].cond[j].vmin || characteristics[k].value > flagShapes[i].cond[j].vmax)
							accepted = 0;
						
						break;
					}
				}
				
				if(!charFound)
					accepted = 0;
				
				if(!accepted)
					break;
			}
		}
		
		if(accepted)
			return i;
	}
	
	return -1;
}

function findFlagSymbol()
{
	for(var i=0; i<flagSymbols.length; i++)
	{
		var accepted = 1;
		
		for(var j=0; j<flagSymbols[i].cond.length; j++)
		{
			var charFound = 0;
			for(var k=0; k<characteristics.length; k++)
			{
				if(characteristics[k].name == flagSymbols[i].cond[j].name)
				{
					charFound = 1;
					if(characteristics[k].value < flagSymbols[i].cond[j].vmin || characteristics[k].value > flagSymbols[i].cond[j].vmax)
						accepted = 0;
					
					break;
				}
			}
			
			if(!charFound)
				accepted = 0;
			
			if(!accepted)
				break;
		}
		
		if(accepted)
			return flagSymbols[i].id;
	}
	
	return -1;
}

generatedSlogan = "";
sloganDiv = document.getElementById("slogan");
if(sloganDiv)
{
	selectedSlogan = []
	
	for(var i=0; i<characteristics.length; i++)
	{
		if(characteristics[i].value > 0 && charSlogan.hasOwnProperty(characteristics[i].name))
		{
			selectedSlogan.push({ text: charSlogan[characteristics[i].name], value: characteristics[i].value });
		}
	}
	
	selectedSlogan.sort(function(a, b) { return a.value < b.value; });
	
	var counter = 0;
	for(var i=0; i<selectedSlogan.length; i++)
	{
		if(generatedSlogan != "")
			generatedSlogan += " · ";
		generatedSlogan += selectedSlogan[i].text;
		counter++;
		
		if(counter >= 3)
			break;
	}
	
	sloganDiv.innerHTML = generatedSlogan;
}

if(!bonusEnabled)
{
	bonusBox = document.getElementById("bonusBox")
	bonusBox.style.display = "none";
}

var sprites = new Image();
sprites.src = '../images/composants.png';

sprites.onload = function()
{
	flag = document.getElementById("generatedFlag");
	if(flag)
	{
		var ctx = flag.getContext("2d");
		
		var spriteX = 256;
		var spriteY = 128;
		var spriteS = 1.0;
		
		var symbolId = findFlagSymbol();
		var colors = findFlagColors();
		
		if(colors.length <= 0)
			colors.push({ bgColor: "#ffffff", fgColor: "#000000" });
		
		var flagId = findFlagShape(colors.length);
		
		if(flagId < 0)
		{
			ctx.beginPath();
			ctx.rect(0, 0, 512, 256);
			ctx.fillStyle = "#ffffff";
			ctx.fill();
		}
		else
		{
			for(var i=0; i<flagShapes[flagId].shapes.length; i++)
			{
				var path = flagShapes[flagId].shapes[i];
				var numPoints = path.length/2;
				
				ctx.beginPath();
				ctx.moveTo(path[1]*512, path[2]*256);
				
				for(var j=1; j<numPoints; j++)
				{
					ctx.lineTo(path[1+j*2+0]*512, path[1+j*2+1]*256);
				}
				ctx.fillStyle = colors[path[0]].bgColor;
				ctx.fill();
			}
			
			spriteX = flagShapes[flagId].symbol[0]*512;
			spriteY = flagShapes[flagId].symbol[1]*256;
			spriteS = flagShapes[flagId].symbol[2];
		}
		
		if(symbolId >= 0)
		{
			var tmpC = document.createElement('canvas');
			tmpC.width = sprites.width;
			tmpC.height = sprites.height;
			var tmpCtx = tmpC.getContext('2d');
			var coloredSprites = tmpCtx.getImageData(0, 0, tmpC.width, tmpC.height);
			
			tmpCtx.beginPath();
			tmpCtx.rect(0, 0, tmpC.width, tmpC.height);
			tmpCtx.fillStyle = colors[0].fgColor;
			tmpCtx.fill();
			
			tmpCtx.globalCompositeOperation = "destination-in";
			tmpCtx.drawImage(sprites, 0, 0);
			
			ctx.drawImage(tmpC, symbolId*128, 0, 128, 128, spriteX-64*spriteS, spriteY-64*spriteS, 128*spriteS, 128*spriteS);
		}
	}
}
