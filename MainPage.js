import React, { Component } from 'react';
import "./style.css";

class MainPage extends Component {
    render() {
      return (
    <div>
        <head>
            <meta charset="utf-8"/>
            <title>Tiger Parking | Home</title>
            <script src="https://www.gstatic.com/firebasejs/5.3.0/firebase-app.js"></script>
            <script src="https://cdn.firebase.com/libs/firebaseui/3.1.1/firebaseui.js"></script>
            <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.1.1/firebaseui.css" />
            <script src="https://www.gstatic.com/firebasejs/5.8.0/firebase-auth.js"></script>
            <link rel="stylesheet" href="style.css"/>
            <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        </head>
		<div class="login-page">
			<div class="form">
				<form class="register-form">
					<input id="username" placeholder="Username" type="test"/>
					<input id="signupEmail" placeholder="Email" type="text" />
					<input id="signupPassword" placeholder="Password" type="password" />
					<input id="signupPasswordRepeat" placeholder="Confirm Password" type="text" />
					<button onclick="location.href='rating.html'">Sign Up</button>
					<p class="message">Already Registered? <a href="#">Log in</a></p>
				</form>
				<form class="login-form">
					<input type="text" placeholder="user name"/>
					<input type="password" placeholder="password"/>
					<button onclick="location.href='rating.html'">Log In</button>
					<p class="message">Not Registered? <a href="#">Regsiter</a></p>
				</form>
			</div>
		</div>
		<script>
			$('.message a').click(function(){
				$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
			})
		</script>
	</div>
      );
    }
  }

  export default MainPage;
