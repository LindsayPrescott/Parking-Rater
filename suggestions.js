//Turns out this file is an unnecessary file due to the code belonging to other files.

/* class howLongAgo {
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
} */



//Exponential moving average with alpha at .3 Copy from lotsarray.js... uneeded copy.
/* function setWeightedAverage(lot) {
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
		console.log("suggestions");
} */

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