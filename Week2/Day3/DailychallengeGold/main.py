birthdate = input("Gime your birthday int his format, DD/MM/YYYY pls: ").split("/")
age = 2023 - int(birthdate[2])
candle_numeber = int(str(age)[-1])
if candle_numeber % 2 == 0:
    candles = (int((10 - candle_numeber)/2) * "_") + int(candle_numeber/2) * "i" + "_" + int(candle_numeber/2) * "i" + (int((10 - candle_numeber)/2) * "_")
else:
    candles = (int((11 - candle_numeber)/2) * "_") + candle_numeber * "i" + (int((11 - candle_numeber)/2) * "_")
print(f"    {candles}\n   |:H:a:p:p:y:|\n __|___________|__\n|^^^^^^^^^^^^^^^^^|\n|:B:i:r:t:h:d:a:y:|\n|                 |\n~~~~~~~~~~~~~~~~~~~")