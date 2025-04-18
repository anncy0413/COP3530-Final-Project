import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import sklearn as sk

#Citations: https://pandas.pydata.org/docs/user_guide/groupby.html

# function to load data
def loadFile():
    data = pd.read_csv("data/earthquakes.csv")
    #new data table for sorted methods
    selected = ["id", "impact.magnitude", "location.latitude", "location.longitude", "location.name"]
    return data[selected]

# find by location to get magnitude
def findLocation(table, input):
    final = []
    for i, row in table.iterrows():
        if row["location.name"] == input:
            final.append(row["impact.magnitude"])
    return final

#returns dictionary of location to exact magnitude
def magFilter(table, min, max):
    final = {}
    for i, row in table.iterrows():
        if row["impact.magnitude"] >= min and row["impact.magnitude"] <= max:
            final[row["location.name"]] = row["impact.magnitude"]