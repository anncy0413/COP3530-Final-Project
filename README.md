<H1> COP3530 - Project 3 </h1>

##  Earthquake Visualizer Project

This project visualizes earthquake frequency data on a map and through dynamic charts. It includes:

-  A React-based frontend website
-  A Python script to generate daily earthquake frequency charts per location
-  Location keyword extraction to match valid data

---

##  Website Setup Instructions

1. **Clone the project and navigate into the folder**

```bash
cd Website
```

2. **Install frontend dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

The React app will run locally on:

```
http://localhost:3000
```

Once the website is running, you will see:

- A global map showing earthquake locations
- Earthquake charts that dynamically update based on selected location

---

##  Earthquake Chart Generation (Python Script)

Charts are generated from `earthquakes.csv` using a custom script.

### 1. Make sure you have Python 3 installed:

```bash
python3 --version
```

### 2. Install required Python libraries:

```bash
pip3 install pandas matplotlib
```

### 3. Prepare your data:

Place your CSV file named `earthquakes.csv` in the project directory (src/)

### 4. Run the chart generator:

```bash
python3 chart_generator.py
```

The script will:

- Read `earthquakes.csv`
- Use `dataorg.py` to extract real, valid location keywords from the data
- Use `chartlocation.py` to create and save charts
- Save the charts to:

```
public/charts/
```

Sample terminal output:

```
Generating charts for 43 locations...
...
All charts generated!
```

Only charts for locations **that actually match data in the CSV** will be created (invalid or unmatched ones are skipped automatically).

---

## Notes

- If you update the earthquake CSV, just rerun `chart_generator.py` to regenerate charts.
- The dropdown or location input on the site matches generated filenames.
- Location names are sanitized for file saving (e.g., `"New York"` becomes `new_york.png`).

---

## Contributors

anncy0413-Kexin Zhou
lomanim-Lomani Mullikin
laichloe88-Chloe Lai
