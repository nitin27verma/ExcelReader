from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set specific domain in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve React static files
app.mount("/", StaticFiles(directory="static", html=True), name="static")

@app.get("/read-columns")
def read_excel_columns(columns: str):
    col_list = [col.strip() for col in columns.split(",")]
    df = pd.read_excel("data/myfile.xlsx", usecols=col_list)
    return df.to_dict(orient="records")
