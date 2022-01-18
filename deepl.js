const request = require('request');

const deepl_api_url = 'https://api-free.deepl.com/v2/translate';
const your_api_key = '4b010082-6a50-3956-3efd-3d06618e0ac2';
const source_text = `
I'm a lumberjack and I'm OK.
I sleep at night, I work during the day.

He's a lumberjack and he's OK.
He sleeps all night and he works all day.

I cut down trees, I eat my lunch.
I go to the lavatory.
On Wednesdays I go shopping and have buttered scones for tea.
`;

const params = {
    url: deepl_api_url,
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    },
    form: {
        auth_key: your_api_key,
        text: source_text,
        source_lang: 'EN',
        target_lang: 'JA'
    },
    json: true
}
request.post(params, function(error, response, result){
    console.log(result.translations[0].text);
)};