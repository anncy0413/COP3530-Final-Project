from flask import Flask, request, send_file
from chartlocation import analyzeFrequency
import traceback

app = Flask(__name__)

@app.route("/chart")
def chart():
    location = request.args.get("location")
    output_path = "public/chart.png"
    try:
        print("Location requested:", location)  
        analyzeFrequency(location, output_path)
    except Exception as e:
        traceback.print_exc()
        return {"error": str(e)}, 500
    return send_file(output_path, mimetype="image/png")

if __name__ == "__main__":
    app.run(debug=True)
