


class LotWindow
{

	constructor(lot)
	{
		this.lot = lot;
		this.overlay = document.getElementById('overlay');
		this.lotInfoWindow = document.getElementById('lot-window');
		this.header = document.getElementById('lot-window-header');
		this.recentRatings = document.getElementById('lot-window-recent-ratings');
		this.ratingWindow = document.getElementById('rating-window');
		this.thankYouWindow = document.getElementById('thank-you-window');

	}
	getLot()
	{
		return this.lot;
	}
	setLot(lot)
	{
		this.lot = lot;
	}
}

var lotWindow;

class howLongAgo {
	constructor(time)
	{
		this.diff = new Date().getTime() - time.getTime();
	}

	howLongAgoHours()
	{
		return Math.round(this.diff/3600000);
	}

	howLongAgoMinutes()
	{
		return Math.round(this.diff/60000);
	}
	howLongAgoSeconds()
	{
		return Math.round(this.diff/1000);
	}
	howLongAgoToString()
	{
		let hours = howLongAgoHours();
		let minutes = Math.round(this.diff%3600000);
		let seconds = Math.round(this.diff%216000000);
		return hours.toString() + " hours, " + minutes.toString() + " minutes, " + seconds.toString() + " seconds ago";
	}
}

function howLongAgoString(time)
{
	let difInMilis = new Date().getTime() - time.getTime();
	let difInSeconds = difInMilis / 1000;
	let hours = Math.round(difInSeconds / 3600);
	difInSeconds = difInSeconds % 3600;
	let minutes = Math.round(difInSeconds / 60);
	difInSeconds = difInSeconds % 60;
	let seconds = Math.round(difInSeconds);
	return hours.toString() + " hours, " + minutes.toString() + " minutes, " + seconds.toString() + " seconds ago";
}

function getRecentRatings(lot)
	{
		let ratingsText = document.getElementById('lot-window-recent-ratings');
		ratingsText.innerHTML = "Recent ratings: <br><br>";
		db.collection('Parking Lot').doc(lot).collection('Rating').orderBy('time').get().then((snapshot) => {
			let i = snapshot.size - 1;
			maxRatings = 10;//maximum amount of ratings to show in the log
			while (i >= 0 && maxRatings > 0)
			{
				let doc = snapshot.docs[i];
				let data = doc.data();
				ratingsText.innerHTML += "Score: " + data.score;
				let timeDif = howLongAgo(data.time.toDate());
				if (timeDif.howLongAgouHours() <= 1)
					{
						timeDif = howLongAgoString(data.time.toDate());
						ratingsText.innerHTML += " - " + timeDif + "<br>";
					}
				i--;
				maxRatings--;
				};
			});
		let averageText = document.getElementById('average');
		var obj = lots.find(o => o.label == lot);
		if(obj.averageRating == null)
		{
			averageText.innerHTML = "No recent ratings."
		}
		else{
			averageText.innerHTML = "Average Rating for the past hour: " + obj.averageRating.toFixed(2);
		}
	}
/* function averageRating(lot) //naive average - unused now.
{
	db.collection('Parking Lot').doc(lot).collection('Rating').orderBy('time').get().then((snapshot) => {
			var average = 0.0;
			var total = 0;
			let i = snapshot.size - 1;
			maxRatings = 100;//maximum amount of ratings to show in the log
			while (i >= 0 && maxRatings > 0)
			{
				let doc = snapshot.docs[i];
				let data = doc.data();
				let timeDif = new howLongAgo(data.time.toDate());
				let timeDifHours = timeDif.howLongAgoHours();
				if (timeDifHours<1)
				{
					average += parseFloat(data.score);
					total++;
				};
				i--;
				maxRatings--;
			};
			average = average/total;
			var obj = lots.find(o => o.label == lot);
			obj.averageRating = average;
		});
} */
/* 	Copy from lotsarray, uneeded duplicated code.

	function setWeightedAverage(lot) {
	db.collection('Parking Lot').doc(lot).collection('Rating').orderBy('time').get().then((snapshot) => {
			var average = Math.NaN;
			if(snapshot.size >= 100)
			{
				var i = snapshot.size-100;
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
				if (timeDifHours<1)
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
		console.log("ratings");
} */

/* class ExponentialMovingAverage //weighted average found on https://dev.to/nestedsoftware/exponential-moving-average-on-streaming-data-4hhl which I used to create weighted average.
{
    constructor(alpha, initialMean) //constructor
	{
        this.alpha = alpha
        this.mean = !initialMean ? 0 : initialMean
    }

    update(newValue)
	{
        const meanIncrement = this.alpha * (newValue - this.mean)

        const newMean = this.mean + meanIncrement

        this.mean = newMean
    }
	getMean() {
		return this.mean;
	}
} */

function mapPress(lot)
{
	lotWindow = new LotWindow(lot);


	lotWindow.overlay.style.opacity = .5;
	lotWindow.overlay.style.display = "block";

	lotWindow.lotInfoWindow.style.display = "block";
	lotWindow.header.style.display = "block";
	lotWindow.header.innerHTML = lot;
	getRecentRatings(lot);
}

function pullUpRatingWindow()
{
	lotWindow.overlay.style.opacity = .5;
	lotWindow.overlay.style.display = "block";

	lotWindow.lotInfoWindow.style.display = "none";
	lotWindow.ratingWindow.style.display = "block";
}
function pullUpThankYouWindow()
{
	lotWindow.ratingWindow.style.display = "none";
	lotWindow.thankYouWindow.style.display = "block";
	lotWindow.header.innerHTML = "Thank you for rating!";
}
function closeWindow()
{

	lotWindow.overlay.style.display = "none";
	lotWindow.ratingWindow.style.display = "none";
	lotWindow.lotInfoWindow.style.display = "none";
	lotWindow.header.style.display = "none";
	lotWindow.thankYouWindow.style.display = "none";
	lotWindow = null;
}
function submitRating()
{
	var scoreVal;
	var radios = document.getElementsByName('ratingScore');
	for (var i = 0, length = radios.length; i < length; i++)
	{
		if (radios[i].checked)
		{
			scoreVal = radios[i].value;
		}
	}
	db.collection('Parking Lot').doc(lotWindow.getLot()).collection('Rating').add({
			score: parseInt(scoreVal, 10),
			time: new Date(),
			user_id: "not defined yet"
			});
	setWeightedAverage(lotWindow.getLot());
	pullUpThankYouWindow();
}

function loadLots()
{
	for (var i = 0; i < lotsOnMap.length; i++)
		lotsOnMap[i].polygon.setStyle({fillOpacity: 0.75, color: "black", fillColor: numberToColorScale(parseFloat(lots[i].averageRating))});
	setTimeout(loadLots, 3000);
}

function doneLoading()
{
	document.getElementById('loading').style.display = "none";
}
