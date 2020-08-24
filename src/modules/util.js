const windDir = wind => {
	console.log(wind);
	switch(wind) {
		case wind >= 345 || wind < 15 :
			return '북'
		case wind >= 15 && wind < 75 :
			return '북동'
		case wind >= 75 && wind < 105 :
			return '동'
		case wind >= 105 && wind < 165 :
			return '남동'
		case wind >= 165 && wind < 195 :
			return '남'
		case wind >= 195 && wind < 255 :
			return '남서'
		case wind >= 255 && wind < 285 :
			return '서'
		case wind >= 285 && wind < 345 :
			return '북서'
	}
}

const iconUrl = (icon, ICON_URL) => {
	return `${ICON_URL}${icon}@2x.png`
}

export { windDir, iconUrl }