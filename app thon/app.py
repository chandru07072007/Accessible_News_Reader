from flask import Flask, render_template, jsonify, request
import requests

app = Flask(__name__)

NEWS_API_KEY = " you key "

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/news')
def default_news():
    return get_news_by_topic("accessibility")

@app.route('/api/news/<topic>')
def get_topic_news(topic):
    return get_news_by_topic(topic)

def get_news_by_topic(topic):
    url = (
        f"https://newsapi.org/v2/everything"
        f"?q={topic}&language=en&pageSize=5&apiKey={NEWS_API_KEY}"
    )
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        articles = data.get("articles", [])
        simplified = [
            {"title": art["title"], "content": art["description"] or "No description available."}
            for art in articles
        ]
        return jsonify(simplified)
    else:
        return jsonify([{"title": "Error", "content": "Failed to fetch news from NewsAPI."}]), 500

if __name__ == '__main__':
    app.run(debug=True)
