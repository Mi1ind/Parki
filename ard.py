import serial

class ParkingLot:
    def __init__(self, port, br, lots, name):

        """
        initializes the properties of a new parking lot object.
        parameters: serial port (i.e. 'COM5'), baudrate, max # of parking spaces
        Example: simon_street = ParkingLot('COM2', 9600, 20)
        """
        
        self.data_stream = serial.Serial(port, br)
        self.num_parking_lots = lots

        self.num_cars = 0
        self.has_entered = False
        self.name = name
    
    def update(self):
        if(self.data_stream.inWaiting() > 0):
            self.currDistance = len(self.data_stream.readline())
            if(self.currDistance == 13):
                self.has_entered = True
            
            elif(self.num_cars == self.num_parking_lots):
                return 0
                
            elif(self.currDistance == 15):
                if(self.has_entered):
                    self.num_cars += 1
                    print(self.name, ": THERE ARE: ", max(0,self.num_parking_lots - self.num_cars), " SPACES LEFT")
                    self.has_entered = False
     
        
                    
bay_street = ParkingLot('COM5', 9600, 20, 'bay street') #20 parking spaces
#osgoode_lane = ParkingLot('COM6', 9600, 50, 'osgoode lane') #50 parking spaces

while(1 == 1):
    bay_street.update()
    #osgoode_lane.update()