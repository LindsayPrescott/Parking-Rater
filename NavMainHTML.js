import React, {Component} from 'react';
import "./styles.css";

class NavMainHTML extends Component {
    render() {
        return (
            <header>
                <div class="container">
                    <h1 class="logo">Tiger Parking</h1>
                    <nav>
                        <ul>
                        <li><a class="navigation-tags" href="about.html">About</a></li>
                        <li><a class="navigation-tags" href="login.html">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default NavMainHTML;