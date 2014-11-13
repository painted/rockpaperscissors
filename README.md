###Rock Paper Scissors Lizard Spock 
[![Code Climate](https://codeclimate.com/github/painted/FoodPops/badges/gpa.svg)](https://codeclimate.com/github/painted/rockpaperscissors)

Rock Paper Scissors Lizard Spock is the Week 7 project we worked on at [Makers Academy].<br>
We created an interface to let two people play [RockPaperScissorsLizardSpock], written in JavaScript and tested with [Jasmine](http://jasmine.github.io/).<br>
This is my version.

![Rock-Paper-Scissors-Lizard-Spock](http://www.paintedchef.com/images/RockPaperScissors.png)

====================

The project was developed in various versions.

##Version 1:

Implementing the game "Rock, Paper, Scissors" in Javascript following the Ruby logic given to us in order to make all of the Jasmine tests pass.

##Version 2:

Adding two new options into the mix: Lizard and Spock. Then creating custom winning messages that applied to all possible game results.

##Version 3:

Build a simple game interface, using JQuery event handlers to handle player choices and return the messages.

##Version 4:

Deploy to Heroku as a simple Sinatra application.

##Version 5:

Added prompts for players to add their names before the first round.

##Possible Future Versions:

	*Add websockets and sessions so it can be played by two users on different machines.  
	*Improve code climate score.

====================

###The programming languages and technologies I used are:

  * Javascript

  * JQuery

  * Jasmine

  * Sinatra

====================

###How to run the application:

  * Click here to play it on your browser: [Play Me on Heroku]

  * Or to play it locally:<br>
  Run this from the command line:<br>
  ```
  git clone https://github.com/painted/rockpaperscissors.git
  cd rockpaperscissors
  foreman start
  ```
  Then go to localhost:5000 on your browser

###How to test the application via Jasmine:

  * From command line enter:
```
bash
git clone https://github.com/painted/rockpaperscissors.git
cd rockpaperscissors
open SpecRunner.html
```



[Makers Academy]:http://www.makersacademy.com
[RockPaperScissorsLizardSpock]:http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock
[Play Me on Heroku]:https://big-bang-rpsls-game.herokuapp.com/
[Jasmine]:http://jasmine.github.io/