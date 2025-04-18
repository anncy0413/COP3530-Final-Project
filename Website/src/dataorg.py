import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import sklearn as sk

#Citations: https://pandas.pydata.org/docs/user_guide/groupby.html
#Sorting slide deck from Professor Aman

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

#parition function helps with quick sort function
def partition(arr, low, high):
    pivot = arr[low] #just takes first element as pivot
    up = low #search up from left of pivot
    down = high #search down from right of pivot

    while(up < down):
        # everything is either above or below the pivot is in correct order
        for i in range(up, high):
            if arr[i] > pivot:
                break
            up += 1

        for i in range(down, low, -1):
            if arr[i] < pivot:
                break
            down -= 1

        if up < down:
            #need to swap
            arr[up], arr[down] = arr[down], arr[up]

    #put pivot in right position
    arr[low], arr[down] = arr[down], arr[low]
    return down

#sort given array in numerical order based on magnitude - uses quick sort
def magnitudeSort(arr, low, high):
    if arr[low] > arr[high]:
        pivot = partition(arr, low, high)
        magnitudeSort(arr, low, pivot-1)
        magnitudeSort(arr, pivot+1, high)

#sort entire table alphabetically based on location
def alphabeticalSort(table):
    final = {}