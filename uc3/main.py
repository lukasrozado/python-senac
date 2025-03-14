import requests

url = "https://randomuser.me/api"

response = requests.get(url)

print(response.json())