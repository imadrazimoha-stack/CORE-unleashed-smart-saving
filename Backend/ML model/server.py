from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import uvicorn
from stability_model import DynamicStabilityScorer

# Initialize the FastAPI app and your model
app = FastAPI()
model = DynamicStabilityScorer()

# Define the expected JSON payload format
class IncomePayload(BaseModel):
    history: List[float]

@app.post("/predict")
def predict_stability(payload: IncomePayload):
    try:
        # Pass the array to your model
        score = model.calculate_stability(payload.history)
        # Return the exact JSON structure Node.js expects
        return {"stabilityFactor": score}
    except Exception as e:
        return {"error": str(e), "stabilityFactor": 0.5}

# Optional root endpoint just to check if the server is awake
@app.get("/")
def health_check():
    return {"status": "ML Server is running"}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)