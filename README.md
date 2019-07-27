# HTML_EXTRACTOR
This Repository contains ja node js script which can extract the html of any page. using headless browser puppeteer..

  - Type some Markdown on the left
  - See HTML in the right
  - Magic


### Installation

HTML_EXTRACTOR contains the extract_html.js script which can be run using node.

We have to first install node. We can download it from here : [Download node from here] and then install it.

Check if Node successfully installed on your machine by following command :
```sh
node -v
```

After installing node, clone the repository by :
```sh
git clone https://github.com/FahadYameen/HTML_EXTRACTOR.git
```
Now, go the the repo folder and install puppeteer node module by the following command :
```sh
npm i puppeteer
```
The above command will create 'node modules' folder.

### Usage

The script ___extract_html.js___ takes two parameters as a command line argument.

The first argument should be the path of json file where the name of the application whose should be the key and its value should be the url of the desired html page.

Here is the example of input json file
`
{'python': 'https://www.python.org/'}
`

The second argument should be the path of output directory where html of each url should be saved.

Example

```sh
node extract_html.js <path_of_json_file> <path_of_output_directory>
```









   