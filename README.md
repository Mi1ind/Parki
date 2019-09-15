# HacktheNorth2019
Our Hack the North 2019 Project

## Inspiration
Finding parking spots in Toronto and in other urban centres eats up a lot of time, and is not always feasible. Framing our hack around addressing this ubiquitous problem would also allow us to explore and develop our expertise in using various technologies - from hardware hacking with arduino, to developing a react frontend.

## What it does
An ultrasonic sensor positioned on the ground, by the entrance and exit of a parking lot detect 'cars' which pass over it, meaning a car has entered or left a parking lot. From this, a python script updates the properties of a parking lot (number of spots left), and with the help of Google Maps Geolocation API informs the user whether or not they can park in the parking lot nearest to them, and if not, where the nearest parking lot is.

## How We built it
We used Arduino Uno microcontrollers along with Ultrasonic sensors to develop the physical component of detecting vehicles entering and leaving parking lots. Our web application linking collected data to a user interface had a front-end based on React and Javascript. Processing of data was done with Python.

## Challenges We ran into
Our hack consists of three differing systems. Our primary challenge lied in connecting them to create a fluid solution.

Firstly, we had our 'hardware hack' component involving Arduino, sensors for data collection and python for processing the collected data. Working with Arduino was something we were inexperienced with, so working with that component alone was a challenge in itself. Secondly, we developed a Javascript core handling the Google Geolocation API, and lastly a React frontend to give users of our application a nice experience.

Again, we were inexperienced with handling nearly all technical aspects of the project we took on, let alone connecting them together making for a daunting albeit exciting challenge.

## Accomplishments that We're proud of / What I learned
 *learning how to use Arduino
 *learning how to connect physical data collection with software to make a useful solution
 *developing our expertise with react

## What's next for HacktheNorth2019
Demoing our solution!
