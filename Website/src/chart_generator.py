import pandas as pd
import matplotlib.pyplot as plt
import os

def analyze_and_save_chart(location, df, output_dir):
    filtered_df = df[df["location.name"].str.contains(location, case=False, na=False)]
    if filtered_df.empty:
        print(f"No data for {location}, skipping...")
        return

    filtered_df["time.full"] = pd.to_datetime(filtered_df["time.full"])
    filtered_df["date"] = filtered_df["time.full"].dt.date
    freq_by_day = filtered_df.groupby("date").size()

    plt.figure(figsize=(12, 6))
    freq_by_day.plot(kind="line", marker="o")
    plt.title(f"Earthquake Frequency Over Time in {location}")
    plt.xlabel("Date")
    plt.ylabel("Number of Earthquakes")
    plt.grid(True)
    plt.tight_layout()

    safe_name = location.replace("/", "-").replace(" ", "_").lower()
    output_path = os.path.join(output_dir, f"{safe_name}.png")
    plt.savefig(output_path)
    plt.close()
    print(f"Chart saved: {output_path}")

if __name__ == "__main__":
    df = pd.read_csv("earthquakes.csv")
    df.columns = df.columns.str.strip()

    output_dir = "public/charts"
    os.makedirs(output_dir, exist_ok=True)

    unique_places = df["location.name"].dropna().apply(lambda x: " ".join(str(x).split()[1:3]))
    locations = sorted(set(unique_places))

    print(f"Generating charts for {len(locations)} locations...")
    for loc in locations:
        analyze_and_save_chart(loc, df, output_dir)

    print("All charts generated!")
