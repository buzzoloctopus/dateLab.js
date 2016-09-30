var signs = [
'Aquarius',
'Pisces',
'Aries',
'Taurus',
'Gemini',
'Cancer',
'Leo',
'Virgo',
'Libra',
'Scorpio',
'Sagittarius',
'Capricorn',
]

var bDay = prompt ('Enter your bithdate to get \
your sign! Please use mm/dd/yyyy format');

bDay = new Date(bDay);

var month = bDay.getMonth();

var day = bDay.getDate();


if ((month==0 && day >=20) || (month==1 && day <=18)){
    alert ('Your Zodiac sign is '+ signs[0])
}else if ((month== 1 && day >= 19) || (month==2 && day <=20)){
  alert('Your Zodiac sign is '+ signs[1])
}else if ((month== 2 && day >= 21) || (month==3 && day <=19)){
  alert('Your Zodiac sign is '+ signs[2])
}else if ((month== 3 && day >= 20) || (month==4 && day <=20)){
  alert('Your Zodiac sign is '+ signs[3])
}else if ((month== 4 && day >= 21) || (month==5 && day <=20)){
  alert('Your Zodiac sign is '+ signs[4])
}else if ((month== 5 && day >= 21) || (month==6 && day <=22)){
  alert('Your Zodiac sign is '+ signs[5])
}else if ((month== 6 && day >= 23) || (month==7 && day <=22)){
  alert('Your Zodiac sign is '+ signs[6])
}else if ((month== 7 && day >= 23) || (month==8 && day <=22)){
  alert('Your Zodiac sign is '+ signs[7])
}else if ((month== 8 && day >= 23) || (month==9 && day <=22)){
  alert('Your Zodiac sign is '+ signs[8])
}else if ((month== 9 && day >= 23) || (month==10 && day <=21)){
  alert('Your Zodiac sign is '+ signs[9])
}else if ((month== 10 && day >= 22) || (month==11 && day <=21)){
  alert('Your Zodiac sign is '+ signs[10])
}else  if ((month==11 && day >=22)||(month==0 && day <=19)){
    alert('Your Zodiac sign is '+ signs[11])
}else {
  alert ('There is an error, please double check the format of your Bday!')
};
