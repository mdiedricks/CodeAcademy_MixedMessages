function randomNum(num){
	return Math.floor(Math.random()*num);	
}

const honeyPot = {
	spiritAnimal:['Jack Black','Hagrid','Vladimir Putin', 'Spongebob Squarepants','Lisa Simpson'],
	actionableInsight:['polish your golf clubs','dig a hole','collect some banana peels','lick a barnacle','hunt leprechauns'],
	unforgivingOutcomes:['eternal hangnail','a duck shit on your lap','sweaty socks','ear fungus','baby chicken in your fried egg']
};

let eternalWisdom = [];

function populateWisdom(){
	for(let param in honeyPot){
		let selectIndex = randomNum(honeyPot[param].length);
		if(param == 'spiritAnimal'){
			eternalWisdom.push(`Today your spirit animal is ${honeyPot[param][selectIndex]}.`);	
		};
		
		if(param == 'actionableInsight'){
			eternalWisdom.push(`It is advisable that you ${honeyPot[param][selectIndex]},`);	
		};

		if(param == 'unforgivingOutcomes'){
			eternalWisdom.push(`lest you be plagued with ${honeyPot[param][selectIndex]}.`);
		};
	}
};

console.log(`Peering into the eternal yoghurt....hmmm.....what have we here?`);
console.log(`: : ... :" : ... : :>, :, : ,:, :<`);
populateWisdom();
console.log(eternalWisdom.join(' '));
