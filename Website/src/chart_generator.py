import pandas as pd
import os
from chartlocation import analyze_and_save_chart
from dataorg import get_unique_location_keywords

if __name__ == "__main__":
    df = pd.read_csv("earthquakes.csv")
    df.columns = df.columns.str.strip()

    output_dir = "public/charts"
    os.makedirs(output_dir, exist_ok=True)

    locations = get_unique_location_keywords(df)

    print(f"Generating charts for {len(locations)} locations...")
    for loc in locations:
        analyze_and_save_chart(loc, df,output_dir)

    print("All charts generated!")
