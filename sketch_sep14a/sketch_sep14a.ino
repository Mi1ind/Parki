const int echoPin = 7;
const int trigPin = 8;

long duration;
long distance;

void setup() {
  pinMode(echoPin, INPUT);
  pinMode(trigPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(trigPin, LOW); 
  delayMicroseconds(10);

  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);

  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);

  //This gives us distance in cm
  distance = duration*0.034/2;

  Serial.println("Distance: ");
  Serial.println(distance);

  //Millisecond
  //delay(50);
}
