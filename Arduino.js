int led = 13;
int led2 = 12;
int led3 = 11;

void setup() {
  pinMode(led, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);

}

void loop() {
  digitalWrite(led, HIGH);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  delay(1000);
  digitalWrite(led, LOW);
  digitalWrite(led2, HIGH);
  digitalWrite(led3,LOW);
  delay(1000);

}
