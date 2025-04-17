import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import sklearn as sk

#Citations: https://pandas.pydata.org/docs/user_guide/groupby.html

data = pd.read_csv("data/earthquakes.csv")

selected = ["id", "impact.magnitude", "location.latitude", "location.longitude", "location.name"]
new_data = data[selected]
print(new_data)
