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

function averageRating(lot) //naive average
{
	var average;
	var total=0;
	db.collection('Parking Lot').doc(lot).collection('Rating').orderBy('time').get().then((snapshot) => {
			let i = snapshot.size - 1;
			let maxRatings = 100;//maximum amount of ratings to show in the log
			while (i >= 0 && maxRatings > 0)
			{
				let doc = snapshot.docs[i];
				let data = doc.data();
				let timeDif = howLongAgoHours(data.time.toDate());
				if (timeDif<1)
				{
					average += data.score;
					total++;
				};
				i--;
				maxRatings--;
			};
		});
	average = average/total;
	return average;
}

function getWeightedAverage(lot) {
	db.collection('Parking Lot').doc(lot).collection('Rating').orderBy('time').get().then((snapshot)=> {
			let i = snapshot.size - 1;
			let maxRatings = 100;//maximum amount of ratings to show in the log
			ExponentialMovingAverage(.3, snapshot.docs[0].data());
			while (i >= 1 && maxRatings > 0)
			{
				let data = snapshot.docs[i].data();
				let timeDif = howLongAgo(data.time.toDate());
				let timeDif = howLongAgoHours();
				let rating = data.score;
				if(timeDif<1)
				{
					update(rating);
				}
			}
	}
	return getMean();
}

class ExponentialMovingAverage //weighted average found on https://dev.to/nestedsoftware/exponential-moving-average-on-streaming-data-4hhl
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
}