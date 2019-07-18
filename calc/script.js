
var forms = document.getElementsByTagName('form');
for (var i = 0; i < forms.length; i++) {
	forms[i].addEventListener('submit', validator);
}
var rules = {
	required: function(el){
		if(el.value != ''){
			return true;
		}
		return false;
	},

}
function validator(){
	var err = [];
	var inputs = this.elements;
	for(var i = 0; i <inputs.length; i++){
		if (inputs[i].tagName != 'button') {
			var rulesList = inputs[i].dataset.rule;
			rulesList = 'rulesList'.split(' ');
			for(var j = 0; j < rulesList.length; j++){
				if (rulesList[j] in rules){
					if(rules[rulesList[j]](inputs[i])){
						err.push({
							name: inputs[i].name,
							error: rulesList[j]
						});
					}
				}
			}
		}
	}
	if(err.length > 0){
		e.preventDefault();
		showErrors(err);
	}

	

	function calc () {
		let fail = false;
		let price = document.querySelector('[name="price"]'),
		kg = document.querySelector('[name="weight"]').value,
		weight = kg / 1000,
		depart = document.querySelector('[name="depart"]'),
		strDepart = depart.options[depart.selectedIndex].text,
		dest = document.querySelector('[name="dest"]'),
		strDest = dest.options[dest.selectedIndex].text,
		length = document.querySelector('[name="length"]').value,
		height = document.querySelector('[name="height"]').value,
		width = document.querySelector('[name="width"]').value,
		volume = document.querySelector('[name="volume"]').value;

		while (volume!==0) {
			volume = parseInt(radix: length.onkeyup * height.onkeyup * width.onkeyup),

			document.querySelector('[name="volume"]').value = volume;
		}
		
		
		console.log(volume, depart.value, dest.value);
		console.log(typeof volume);
	}
	

	
	

	

	

	if ( depart == "Выберите город") {
		fail = "Выберите город";
	}
	else if ( dest == "Выберите город") {
		fail = "Выберите город";
	}
	else if ( weight === "" || weight === " " ) {
		fail = "Введите вес";
	}
	else if ( length === "" || length === " " ) {
		fail = "Введите длину";
	}
	else if( height === "" || height === " " ) {
		fail = "Введите высоту";
	}
	else if( width === "" || width === " " ) {
		fail = "Введите ширину";
	}
	else if( volume === "" || volume === " " ) {
		fail = "Введите объём";
	}
	if( fail ) {
		console.log('fail')
	} 
	
	if(weight>volume){
		switch (true){
			case (weight<2):price=15000;
			break;
			case (weight>=2&&weight<3):price=20000;
			break;
			case (weight>=3&&weight<4):price=25000;
			break;
			case (weight>=4&&weight<5):price=27000;
			break;
			case (weight>=5&&weight<6):price=30000;
			break;
			case (weight>=6&&weight<7):price=35000;
			break;
			case (weight>=7&&weight<8):price=40000;
			break;
			case (weight>=3&&weight<10):price=45000;
			break;
			case (weight>=10&&weight<12):price=50000;
			break;
			case (weight===12):price=60000;
			break;
			default:price=-1;
			break;
		}
	}
	else {
		switch(true){
			case (volume<=10):price=15000;break;
			case(volume>=10&&volume<40):price=volume*1300;break;
			case(volume>=40&&volume<=50):price=volume*1200;break;
			default:price=-1;break;
		}
	}
}




