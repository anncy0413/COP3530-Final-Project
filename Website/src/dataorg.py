import pandas as pd

#Citations: https://pandas.pydata.org/docs/user_guide/groupby.html
#Sorting slide deck from Professor Aman (quick and merge sort used)

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
            final.append(row["impact.magnitude"]) #also change it to tuple instead for sorting purposes
    return final

#returns dictionary of location to exact magnitude
def magFilter(table, min, max):
    final = [] #use tuple so merge function is able to use
    for i, row in table.iterrows():
        if row["impact.magnitude"] >= min and row["impact.magnitude"] <= max:
            final.append((row["location.name"], row["impact.magnitude"])) #create a pair kinda thing
    return final

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
    if low < high:
        pivot = partition(arr, low, high)
        magnitudeSort(arr, low, pivot-1)
        magnitudeSort(arr, pivot+1, high)

#merge function that helps with merging the arrays in merge sort
def merge(arr, left, mid, right):
    #create two diff arrays
    X = arr[left:mid+1]
    Y = arr[mid+1:right+1]

    i = 0 #x
    j = 0 #y
    index = left

    while i < len(X) and j < len(Y):
        if X[i][0] < Y[j][0]:
            arr[index] = X[i]
            i += 1
        else:
            arr[index] = Y[j]
            j += 1
        index = index + 1

    #complete sorting if there are remaining elements in either arrays
    while i < len(X):
        arr[index] = X[i]
        i += 1
        index = index + 1
    while j < len(Y):
        arr[index] = Y[j]
        j += 1
        index = index + 1

#sort entire table alphabetically based on location - use merge sort
def alphabeticalSort(arr, left, right):
    if(left < right):
        #keep splitting the arrays before recursively calling
        mid = left + (right - left)//2
        alphabeticalSort(arr, left, mid)
        alphabeticalSort(arr, mid + 1, right)

        #call merge function to actually sort and merge two functions together
        merge(arr, left, mid, right)

table = loadFile()
location = magFilter(table, 4, 5)
print(location)
alphabeticalSort(location, 0, len(location)-1)
print(location)