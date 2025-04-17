import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import sklearn as sk

#Citations: https://pandas.pydata.org/docs/user_guide/groupby.html

# sort by location
def findLocation(table, input):
    final = []
    for i, row in table.iterrows():
        if row["location.name"] == input:
            final.append(row["impact.magnitude"])
    return final

data = pd.read_csv("data/earthquakes.csv")

#new data table for sorted methods
selected = ["id", "impact.magnitude", "location.latitude", "location.longitude", "location.name"]
new_data = data[selected]

mag = findLocation(new_data, "Alaska")
print(mag)