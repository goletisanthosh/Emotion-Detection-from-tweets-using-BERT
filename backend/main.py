from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from model.emotion_model import predict_emotion

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextInput(BaseModel):
    text: str

@app.get("/")
def home():
    return {"message": "Emotion Detection API Running Successfully"}

@app.post("/predict")
def predict(data: TextInput):

    result = predict_emotion(data.text)

    return result