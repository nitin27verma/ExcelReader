# ExcelReader
1. Set this as the App Service startup command: bash startup.sh

# Local Development
1. Clone the repository: git clone https://github.com/nitin27verma/ExcelReader.git
2. cd ExcelReader
3. Create a virtual environment and activate it:
4. python3 -m venv venv
5. source venv/bin/activate
6. Run the startup script: bash startup.sh
7. Access the application: Open your browser and navigate to http://localhost:8000.

# Azure Deployment
1. Zip Deploy: Compress the entire project directory.
2. Deploy the zip file to Azure App Service (Linux) via the Azure Portal or CLI.
3. Startup Command: Set the startup command in Azure App Service configuration to: bash startup.sh
4. Container Deployment (Optional):
5. Build and push the Docker image to Azure Container Registry (ACR).
6. Deploy the container to Azure App Service for Containers or Azure Container Apps.
