from flask import Flask, request, jsonify
from textblob import TextBlob
from newspaper import Article
import nltk

nltk.download('punkt')

app = Flask(__name__)

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.json
    url = data.get('url')
    if not url:
        return jsonify({'error': 'No URL provided'}), 400

    try:
        article = Article(url)
        article.download()
        article.parse()
        article.nlp()

        analysis = TextBlob(article.text)
        
        summary = article.summary
        if len(summary) > 470:
            summary = summary[:467] + '...'

        response = {
            'title': article.title,
            'authors': article.authors,
            'publish_date': str(article.publish_date),
            'summary': summary,
            'polarity': analysis.polarity,
            'sentiment': 'positive' if analysis.polarity > 0 else 'negative' if analysis.polarity < 0 else 'neutral'
        }

        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)