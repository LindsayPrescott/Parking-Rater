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

/* function averageRating(lot) //naive average out of use now
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


//Exponential moving average with alpha at .3
function getWeightedAverage(lot) {
	db.collection('Parking Lot').doc(lot).collection('Rating').orderBy('time').get().then((snapshot) => {
			var average = 0.0;
			let i = snapshot.size - 1;
			maxRatings = 100;//maximum amount of ratings to show in the log
			while (i >= 0 && maxRatings > 0)
			{
				let doc = snapshot.docs[i];
				let data = doc.data();
				let rating = parseFloat(data.score);
				if(average == 0) 
				{
					average = rating;
				}
				else 
				{
					let timeDif = new howLongAgo(data.time.toDate());
					let timeDifHours = timeDif.howLongAgoHours();
					if (timeDifHours<1)
					{
						let meanIncrement = .3 * (rating - average);
						let newAverage = average + meanIncrement;
						average = newAverage;
					}
				}
				i--;
				maxRatings--;
			}
			var obj = lots.find(o => o.label == lot);
			obj.averageRating = average;
		});
}

/* class ExponentialMovingAverage //weighted average found on https://dev.to/nestedsoftware/exponential-moving-average-on-streaming-data-4hhl
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