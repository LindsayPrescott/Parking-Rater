
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

function howLongAgo(time)
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
			maxRatings = 20;//maximum amount of ratings to show in the log
			while (i > 0 && maxRatings > 0)
			{
				let doc = snapshot.docs[i];
				let data = doc.data();
				ratingsText.innerHTML += "Score: " + data.score;
				let timeDif = howLongAgo(data.time.toDate());
				ratingsText.innerHTML += " - " + timeDif + "<br>";
				i--;
				maxRatings--;
				};
			});
			
	}			
	
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
	pullUpThankYouWindow();
}