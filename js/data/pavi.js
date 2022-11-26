function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}

function problem081(){
	var inputData = [{
		'distance': 10,
		'time': 60
		},
		{
		'distance': 10,
		'time': 90
		},
		{
		'distance': 10,
		'time': 60
		},
		{
		'distance': 10,
		'time': 60
		},
		{
		'distance': 10,
		'time': 60
		}],
	 randomIndex = getRandomNumber(inputData.length),
		distance= inputData[randomIndex]['distance'],
		time = inputData[randomIndex]['time'],
		speed,
		question = {};

	distance=parseInt(distance);
	time=parseInt(time*60);
	speed=((distance/time)*(18/5));

	question = {
		'type': 'single',
		'id': '081',
		'question': 'A train is coming in ' + distance + 'km from north direction at ' + time + 'sec. Calculate the speed of the train.',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed * parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '081'
	}
	
	return question;
	
}
function problem082(){
	var inputData = [{
		'speed': 60,
		'time': 9
		},
		{
		'speed': 60,
		'time': 9
		},
		{
		'speed': 60,
		'time': 9
		},
		{
		'speed': 60,
		'time': 9
		},
		{
		'speed': 60,
		'time': 9
		}],
	 randomIndex = getRandomNumber(inputData.length),
		speed= inputData[randomIndex]['speed'],
		time = inputData[randomIndex]['time'],
		trainlength,
		question = {};

	speed=parseInt(speed*60);
	time=parseInt(time);
	trainlength=(speed/time);

	question = {
		'type': 'single',
		'id': '082',
		'question': 'A train running at the '+speed+ 'km/hr crosses a pole in '+time+ 'sec What is the length of the train?',
		'options': {
			 'A'	:120,
             'B':	180,
             'C' :324,
             'D':	150,
		},
		'answer': 'D',
		'author-id': '082'
	}
	
	return question;
}
function problem083(){
	var inputData = [{
		'amount': 815,
		'time': 3
		},
		{
		'amount': 815,
		'time': 3
		},
		{
		'amount': 854,
		'time': 4
		},
		{
		'amount': 854,
		'time': 3
		},
		{
		'amount': 854,
		'time': 4
		}],
	 randomIndex = getRandomNumber(inputData.length),
		amount= inputData[randomIndex]['amount'],
		time = inputData[randomIndex]['time'],
		simpleinterest,
		question = {};

	amount=parseInt(amount);
	time=parseInt(time);
	simpleinterest=(simpleinterest*100/amount*time);

	question = {
		'type': 'single',
		'id': '083',
		'question': 'A sum of money at simple interest '+amount+ 'in '+time+ 'years and '+amount+ 'in '+time+ 'years The sum is',
		'options': {
			 'A'	:650,
             'B':	690,
             'C' :698,
             'D':	700,
		},
		'answer': 'c',
		'author-id': '083'
	}
	
	return question;
}

function problem084(){
	var inputData = [{
		'sum': 450,
		'rate': 81,
		'time': 3
		},
		{
		'sum': 450,
		'rate': 81,
		'time': 3
		},
		{
		'sum': 854,
		'rate': 85,
		'time': 4
		},
		{
		'sum': 450,
		'rate': 85,
		'time': 3
		},
		{
		'sum': 854,
		'rate': 85,
		'time': 4
		}],
	 randomIndex = getRandomNumber(inputData.length),
		sum= inputData[randomIndex]['sum'],
		time = inputData[randomIndex]['time'],
		rate = inputData[randomIndex]['rate'],
		simpleinterest,
		question = {};

	sum=parseInt(sum);
	time=parseInt(time);
		rate=parseInt(rate);
	simpleinterest=(sum*time*rate/100);

	question = {
		'type': 'single',
		'id': '084',
		'question': 'How much time will it take for an' +sum+ 'to yield' +time+ 'as interest at' +rate+ 'per annum of simple interest',
		'options': {
			 'A'	:3.4,
             'B':	4,
             'C' :4.5,
             'D':	5,
		},
		'answer': 'B',
		'author-id': '084'
	}
	
	return question;
}
function problem085(){
	var inputData = [{
		'principle': 30000,
		'amount': 7,
		'compound': 4347
		},
		{
		'principle': 30000,
		'amount': 7,
		'compound': 4347
		},
		{
		'principle': 30000,
		'amount': 8,
		'compound': 4347
		},
		{
		'principle': 45000,
		'amount': 8,
		'compound': 4347
		},
		{
		'principle': 40000,
		'amount': 8,
		'compound': 4347
		}],
	 randomIndex = getRandomNumber(inputData.length),
		principle= inputData[randomIndex]['principle'],
		amount = inputData[randomIndex]['amount'],
		compound = inputData[randomIndex]['compound'],
		simpleinterest,
		question = {};

	principle=parseInt(principle);
	amount=parseInt(amount);
     compound=parseInt(compound);
	simpleinterest=(principle*compound*amount/100);

	question = {
		'type': 'single',
		'id': '085',
		'question': 'The compound' +principle+ 'at' +amount+  'per annum is' +compound+ 'The period in years is',
		'options': {
			 'A'	:2,
             'B':	5,
             'C' :3,
             'D':	4,
		},
		'answer': 'A',
		'author-id': '085'
	}
	
	return question;
}