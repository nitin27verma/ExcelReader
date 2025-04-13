# ExcelReader
ExcelReader
✅ Set this as the App Service startup command: 
bash startup.sh

Local Development
Clone the repository:


git clone https://github.com/<repo>.git
cd ExcelReader
Create a virtual environment and activate it:


python3 -m venv venv
source venv/bin/activate
Run the startup script:


bash startup.sh
Access the application: Open your browser and navigate to http://localhost:8000.

Azure Deployment
Zip Deploy:

Compress the entire project directory.

Deploy the zip file to Azure App Service (Linux) via the Azure Portal or CLI.

Startup Command: Set the startup command in Azure App Service configuration to:


bash startup.sh
Container Deployment (Optional):

Build and push the Docker image to Azure Container Registry (ACR).

Deploy the container to Azure App Service for Containers or Azure Container Apps.
