import serial

"""
#old setup for only single arduino
car_has_entered = False
num_cars = 0
total_spaces = 200
"""
#arduinoSerialData = serial.Serial('/dev/cu.usbmodem14201', 9600)

#arduinoSerialData = serial.Serial('COM5', 9600)


class ParkingLot:
    def __init__(self, port, br, lots, name):

        
        #initializes the properties of a new parking lot object.
        #parameters: serial port (i.e. 'COM5'), baudrate, max # of parking spaces
        #Example: simon_street = ParkingLot('COM2', 9600, 20)
        
        
        self.data_stream = serial.Serial(port, br)
        self.num_parking_lots = lots
        self.currDistance = 20

        self.num_cars = 0
        self.has_entered = False
        self.name = name
    
    def update(self):
        if(self.data_stream.inWaiting() > 0):
            self.currDistance = len(self.data_stream.readline())
            if(self.currDistance < 15):
                self.has_entered = True
                
            elif(self.currDistance == 15):
                if(self.has_entered):
                    self.num_cars += 1
                    print(self.name, ": THERE ARE: ", max(0,self.num_parking_lots - self.num_cars), " SPACES LEFT")
                    self.has_entered = False
                    
bay_street = ParkingLot('COM5', 9600, 20, 'bay street') #20 parking spaces
osgoode_lane = ParkingLot('COM6', 9600, 50, 'osgoode lane') #50 parking spaces

while(1 == 1):
    bay_street.update()
    osgoode_lane.update()

"""
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
"""
"""
bcar_has_entered = False
bnum_cars = 0
btotal_spaces = 80

ocar_has_entered = False
onum_cars = 0
ototal_spaces = 30

while (1 == 1):
    #if (bay_street.inWaiting() > 0):
    bmydata = bay_street.readline()
    bcurrDistance = len(bmydata)

    if(bcurrDistance == 13):
        bcar_has_entered = True

    if(bcurrDistance > 13):
        if(bcar_has_entered):
            bnum_cars += 1
            #print("NUMBER OF CARS IS NOW: ", num_cars)
            print("BAY STREET: ", btotal_spaces - bnum_cars, " SPACES LEFT")
            bcar_has_entered = False

    #elif (osgoode_lane.inWaiting() > 0):
    omydata = osgoode_lane.readline()
    ocurrDistance = len(omydata)

    if(ocurrDistance == 13):
        ocar_has_entered = True

    if(ocurrDistance > 13):
        if(ocar_has_entered):
            onum_cars += 1
            #print("NUMBER OF CARS IS NOW: ", num_cars)
            print("OSGOODE LANE: ", ototal_spaces - onum_cars, " SPACES LEFT")
            ocar_has_entered = False
    
        #print(mydata)
        #print(currDistance)
"""