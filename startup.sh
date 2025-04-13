#!/bin/bash

# Step 1: Build React frontend
cd frontend
npm install
npm run build

# Step 2: Move build to backend/static
rm -rf ../backend/static
mkdir -p ../backend/static
cp -r dist/* ../backend/static     # or build/* for CRA

# Step 3: Start FastAPI server
cd ../backend
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
