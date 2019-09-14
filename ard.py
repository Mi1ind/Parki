import serial

arduinoSerialData = serial.Serial('/dev/cu.usbmodem14201', 9600)
n=200
while (1 == 1):
    if (arduinoSerialData.inWaiting() > 0):
        mydata = arduinoSerialData.readline()
        # print((mydata[8:11]))
        print(len(mydata))
if (float(mydata) == 13){
n+=-1;
}

