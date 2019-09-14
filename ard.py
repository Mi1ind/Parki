import serial

arduinoSerialData = serial.Serial('/dev/cu.usbmodem14101', 9600)

while (1 == 1):
    if (arduinoSerialData.inWaiting() > 0):
        mydata = arduinoSerialData.readline()
        print(mydata)
