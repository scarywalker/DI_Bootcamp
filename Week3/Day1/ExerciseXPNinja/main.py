class Phone:
    def __init__(self,phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []
    
    def call(self,other_phone):
        self.call_history.append(other_phone)
        print(f"{self.phone_number} called {other_phone}")

    def show_call_history(self):
        print(self.call_history)

    def send_message(self,other_phone,message_content):
        self.messages.append({"to":other_phone, "from":self.phone_number, "content":message_content})

    def show_outgoing_messages(self):
        for message in self.messages:
            if message["from"] == self.phone_number: print(message)       

    def show_incoming_messages(self):
        for message in self.messages:
            if message["from"] != self.phone_number: print(message)

    def show_messages_from(self):
        for message in self.messages:
           print(f"{message['from']} sent a message")

my_phone = Phone(10000000)

my_phone.call(11111111)

my_phone.call(22222222)

my_phone.call(11111111)

my_phone.show_call_history()

my_phone.send_message(11111111,"message1")

my_phone.send_message(22222222,"message2")

my_phone.send_message(11111111,"message3")

my_phone.show_outgoing_messages()

my_phone.show_incoming_messages()

my_phone.show_messages_from()