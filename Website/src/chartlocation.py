import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime

# references: https://pandas.pydata.org/docs/user_guide/groupby.html
#             https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html
#             https://docs.python.org/3/library/datetime.html

# function to analyze frequency by location
def analyzeFrequency(location_name,output_path="public/chart.png"):
    df = pd.read_csv("earthquakes.csv")

    # read data
    data = pd.read_csv("data/earthquakes.csv")
    # converts "time.full" into datetime objects
    data["time.full"] = pd.to_datetime(data["time.full"])
    # extracts year and month
    data["year_month_day"] = data["time.full"].dt.to_period("D")
    # filter data by location
    location_data = data[data["location.name"] == location_name]

    # if there is no data 
    if location_data.empty:
        print(f"No data found for {location_name}")
        return

    # counts the frequency of earthquakes per month
    frequency = location_data.groupby("year_month_day").size().reset_index(name="count")

    # make line graph
    plt.figure(figsize=(12,6))
    plt.plot(frequency["year_month_day"].astype(str), frequency["count"], marker="o", linestyle="-")
    plt.title(f"Earthquake Frequency Over Time in {location_name}")
    plt.xlabel("Year-Month-Day")
    plt.ylabel("Number of Earthquakes")
    plt.grid(True)
    plt.xticks(rotation=45, ha="right")
    plt.tight_layout()

    # save graph as an image
    out_image = f"earthquake_frequency_{location_name}.png"
    plt.savefig(out_image)
