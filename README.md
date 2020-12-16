# PapaReddit
An easy and minimalistic Reddit comments scraper, analyzer and reader that runs on any device in the browser.

## Demo
https://nevolin.be/papareddit/ - or - https://papa-reddit-midvl.ondigitalocean.app/

![screenshot](/assets/d1.png)

## Usage

- Limit: the max number of results you wish to retrieve, this is not guaranteed and limited to 1000 by Reddit's API.
- Subs: a list of subreddits space separated (`all` is default).
- Words: a list of words to match in the title or comment's body, these are space separated.

### Motivation
This tool was designed to quickly analyze and skim over comments made on Reddit, which can be useful for research, marketing and sales.

Using Reddit's website directly can be slow and contains a lot of noise (colors, pictures, ads, etc.). This solution tries to minimize the noise to a minimum.


## Installation
Clone, fork or download this repository.
Host or open `index.html` in your browser.

## Devs

This solution was built using JavaScript/jQuery with HTML/CSS. You can easily extend it with new features (pattern matching, NLP, ML, etc.).

You can also use parts of the code in NodeJS if you wish to centralize the API calls and/or data analysis.
