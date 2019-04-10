function setWeightedAverage(lot) {
	db.collection('Parking Lot').doc(lot).collection('Rating').orderBy('time').get().then((snapshot) => {
			var average = Math.NaN;
			if(snapshot.size >= 11)
			{
				var i = snapshot.size-11;
			}
			else
			{
				var i=0;
			}
			while(i<snapshot.size)
			{
				let doc = snapshot.docs[i];
				let data = doc.data();
				let rating = parseFloat(data.score);
				let timeDif = new howLongAgo(data.time.toDate());
				let timeDifHours = timeDif.howLongAgoHours();
				if (timeDifHours<2)
				{
					if(average == Math.NaN)
					{
						average = rating;
					}
					else
					{
						let meanIncrement = .3 * (rating - average);
						let newAverage = average + meanIncrement;
						average = newAverage;
					}
				}
				i++;
			}
			var obj = lots.find(o => o.label == lot);
			obj.averageRating = average;
		});
}

function numberToColorScale(num)
{
	return num > 4.7 ? '#ff593e' :
				 num > 4.2 ? '#ff8343' :
				 num > 3.7 ? '#ff9d59' :
				 num > 3.2   ? '#ffb26c' :
				 num > 2.7  ? '#ffca83' :
				 num > 2.2   ? '#ffda9f' :
				 num > 1.7   ? '#ffe6be' :
				 num > 1.2   ? '#fff0d2' :
				 num >= 1.0 ?	'#ffffe6' :
				 '#C0C0C0';
}

var lots = [
	{label: "South Ceba Lot",
	center: [30.404997, -91.177018],
	polygon: [[30.405781, -91.178042],[30.405493, -91.176206],[30.404669, -91.175576], [30.404327, -91.175694], [30.404729, -91.178344]],
  averageRating: setWeightedAverage("South Ceba Lot")},
	{label: "Patrick F Taylor Lot",
	center: [30.405645, -91.179957],
	polygon: [[30.406772, -91.181393], [30.406048, -91.178412], [30.404503, -91.178788], [30.40515, -91.181105], [30.405604, -91.180977],  [30.405792, -91.181653], [30.40631, -91.181486], [30.406344, -91.18162]],
  averageRating: setWeightedAverage("Patrick F Taylor Lot")},
	{label: "West Parker Boulevard Lot",
	center: [30.404441, -91.174716],
	polygon: [[30.405005, -91.175011], [30.404482, -91.174099], [30.403802, -91.174813], [30.404219, -91.174909], [30.404755, -91.175231]],
  averageRating: setWeightedAverage("West Parker Boulevard Lot")},
	{label: "East Parker Boulevard Lot",
	center: [30.406161, -91.173096],
	polygon: [[30.405780, -91.174560], [30.406159, -91.173820], [30.406224, -91.173310], [30.406867, -91.172720], [30.406437, -91.171991], [30.405637, -91.172913], [30.405937, -91.173750], [30.405535, -91.174206]],
  averageRating: setWeightedAverage("East Parker Boulevard Lot")},
	{label: "Public Safety Lot",
	center: [30.410307, -91.185064],
	polygon: [[30.410968, -91.186234],[30.41051, -91.183729], [30.409613, -91.183911], [30.410025, -91.186164]],
  averageRating: setWeightedAverage("Public Safety Lot")},
	{label: "Skip Bertman Drive East Lot",
	center: [30.410529, -91.187248],
	polygon: [[30.411199, -91.187945], [30.410993, -91.186718], [30.409865, -91.186745], [30.409900, -91.187526]],
  averageRating: setWeightedAverage("Skip Bertman Drive East Lot")},
	{label: "ECE West Lot",
	center: [30.409303, -91.185257],
	polygon: [[30.409717, -91.185798], [30.409437, -91.184688], [30.408709, -91.184945], [30.408776, -91.185157], [30.409418, -91.185712]],
  averageRating: setWeightedAverage("ECE West Lot")},
	{label: "West Stadium Lot",
	center: [30.411815, -91.185762],
	polygon: [[30.412009, -91.186091], [30.412018, -91.185341], [30.411690, -91.185268], [30.411468, -91.186094]],
  averageRating: setWeightedAverage("West Stadium Lot")},
	{label: "Tiger Park East Lot",
	center: [30.410733, -91.191373],
	polygon: [[30.411819, -91.191655], [30.411662, -91.190851], [30.410046, -91.191128], [30.409948, -91.190693], [30.408949, -91.190784], [30.409034, -91.191019], [30.409872, -91.190913], [30.410173, -91.192013]],
  averageRating: setWeightedAverage("Tiger Park East Lot")},
	{label: "Tiger Park North Lot",
	center: [30.411713, -91.192451],
	polygon: [[30.412082, -91.192907], [30.411912, -91.191848], [30.411284, -91.191985], [30.411474, -91.193022]],
  averageRating: setWeightedAverage("Tiger Park North Lot")},
	{label: "Bernie Moore Lot",
	center: [30.414887, -91.186947],
	polygon: [[30.415380, -91.187211], [30.415369, -91.186723], [30.413497, -91.186693], [30.414466, -91.186766], [30.414477, -91.187081]],
  averageRating: setWeightedAverage("Bernie Moore Lot")},
	{label: "Burden Oak Lot",
	center: [30.416561, -91.186325],
	polygon: [[30.415515, -91.187107], [30.415469, -91.186413], [30.416369, -91.186246], [30.416889, -91.186224], [30.416817, -91.185347], [30.417016, -91.185294], [30.417075, -91.186208], [30.417569, -91.186216],  [30.417641, -91.187088], [30.417484, -91.187104], [30.417442, -91.186330], [30.416395, -91.186406], [30.415806, -91.186508], [30.415799, -91.187081]],
  averageRating: setWeightedAverage("Burden Oak Lot")},
	{label: "Natorium Lot",
	center: [30.417667, -91.185654],
	polygon: [[30.417783, -91.186084], [30.417741, -91.185118], [30.417468, -91.185166], [30.417542, -91.186094]],
  averageRating: setWeightedAverage("Natorium Lot")},
	{label: "Nicholson Extension West Lot",
	center: [30.40717, -91.184072],
	polygon: [[30.407750, -91.184726], [30.407412, -91.183472], [30.406731, -91.183702], [30.406458, -91.183002], [30.406062, -91.183156], [30.406101, -91.183363], [30.406447, -91.183242], [30.406723, -91.184108], [30.407167, -91.184550]],
  averageRating: setWeightedAverage("Nicholson Extension West Lot")},
	{label: "Ag Center Lot",
	center: [30.40811, -91.175172],
	polygon: [[30.408297, -91.175771], [30.408307, -91.175343], [30.408611, -91.175328], [30.408618, -91.174467], [30.407934, -91.174664], [30.407820, -91.175092], [30.407509, -91.175309], [30.407492, -91.175752]],
  averageRating: setWeightedAverage("Ag Center Lot")},
	{label: "Nicholson Drive Strip",
	center: [30.416177, -91.187291],
	polygon: [[30.414461, -91.187119], [30.414989, -91.18721], [30.415391, -91.187232], [30.416002, -91.187253], [30.417861, -91.187301], [30.417856, -91.187371], [30.416936, -91.187333], [30.416039, -91.187301], [30.415599, -91.18728], [30.414998, -91.187258], [30.414466, -91.187173]],
  averageRating: setWeightedAverage("Nicholson Drive Strip")}

	];
