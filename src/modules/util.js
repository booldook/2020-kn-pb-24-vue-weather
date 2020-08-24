const windDir = wind => {
	if(wind >= 345 || wind < 15) return '북';
	else if(wind >= 15 && wind < 75) return '북동'
	else if(wind >= 75 && wind < 105) return '동'
	else if(wind >= 105 && wind < 165) return '남동'
	else if(wind >= 165 && wind < 195) return '남'
	else if(wind >= 195 && wind < 255) return '남서'
	else if(wind >= 255 && wind < 285) return '서'
	else if(wind >= 285 && wind < 345) return '북서'
	else return '바람없음'
}

const iconUrl = (icon, ICON_URL) => {
	return `${ICON_URL}${icon}@2x.png`
}

export { windDir, iconUrl }