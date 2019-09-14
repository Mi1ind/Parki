import serial

car_has_entered = False
num_cars = 0
total_spaces = 200

# arduinoSerialData = serial.Serial('/dev/cu.usbmodem14201', 9600)
arduinoSerialData = serial.Serial('COM5', 9600)


while (1 == 1):
    if (arduinoSerialData.inWaiting() > 0):
        mydata = arduinoSerialData.readline()
        currDistance = len(mydata)

        if(currDistance == 13):
            car_has_entered = True

        if(currDistance > 13):
            if(car_has_entered):
                num_cars += 1
                #print("NUMBER OF CARS IS NOW: ", num_cars)
                print("THERE ARE : ", total_spaces - num_cars, " SPACES LEFT")
                car_has_entered = False
    
        #print(mydata)
        #print(currDistance)