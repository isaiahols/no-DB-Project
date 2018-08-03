var jokesAll = ["Chuck Norris gets a happy ending when strangling mountain lions."]
var jokesFavourate = {}
var i = 0;

var jokingData = [
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "E40uifP8Rg-F_bTy35Ad9w",
        "url": "https://api.chucknorris.io/jokes/E40uifP8Rg-F_bTy35Ad9w",
        "value": "Chuck Norris gets a happy ending when strangling mountain lions."
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "2xszEoDbTvWdc2CNapIupg",
        "url": "https://api.chucknorris.io/jokes/2xszEoDbTvWdc2CNapIupg",
        "value": "Today March 10, 2011 is Chuck Norris 71st birthday, Happy Birthday to the greatest man alive."
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "ac1M2YQiTR2q2CiBT0Zp9Q",
        "url": "https://api.chucknorris.io/jokes/ac1M2YQiTR2q2CiBT0Zp9Q",
        "value": "Chuck Norris wishes you a knuckle sandwich, and a happy throat-punch."
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "_NPBsGp9Q1G7DpJZSKpkEg",
        "url": "https://api.chucknorris.io/jokes/_NPBsGp9Q1G7DpJZSKpkEg",
        "value": "In honour of Chuck Norris, McDonald's has introduced the McChuck Burger: nine slabs of ox meat, jalapenos, three live scorpions, an ounce of marijuana and a pint of tobasco sauce on two loaves of bread. $399, or $900 for the Happy Meal (with fries and a medium whiskey, and a signed picture of Norris' erection)"
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "Tjx_M4P5RWCd91BEnkL0Iw",
        "url": "https://api.chucknorris.io/jokes/Tjx_M4P5RWCd91BEnkL0Iw",
        "value": "Once Chuck Norris pissed off anger, and that is how happyiess was invented."
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "OofgqUISRZOgqo2tqsU6Ow",
        "url": "https://api.chucknorris.io/jokes/OofgqUISRZOgqo2tqsU6Ow",
        "value": "Chuck Norris once jumped up a bannana tree and sang the Star Spangled Banner backwards. When asked why he replied \"Happy pappy bang bang!\" then shat his pants"
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "ipVakrUwRnqQA2aM9Iw0Tg",
        "url": "https://api.chucknorris.io/jokes/ipVakrUwRnqQA2aM9Iw0Tg",
        "value": "Chuck Norris ALWAYS has a gun in his pocket. He is never happy to see you."
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "1YmbeIOzQ2ukCfrnQi_nwQ",
        "url": "https://api.chucknorris.io/jokes/1YmbeIOzQ2ukCfrnQi_nwQ",
        "value": "Whenever Chuck Norris gets a massage, he gives the female masseuse a happy ending."
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "DwNDG7ySToKsDKGecRZhkQ",
        "url": "https://api.chucknorris.io/jokes/DwNDG7ySToKsDKGecRZhkQ",
        "value": "Chuck Norris can make Happy Wheels cry."
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "mwbg78xjQiGL5aEJHShqVw",
        "url": "https://api.chucknorris.io/jokes/mwbg78xjQiGL5aEJHShqVw",
        "value": "Chuck Norris can get a McDonald's Happy Meal at Burger King."
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "YfZerqIQTBe_t0g8Iitt5g",
        "url": "https://api.chucknorris.io/jokes/YfZerqIQTBe_t0g8Iitt5g",
        "value": "Chuck Norris wrote & owns copyrights of the song, \"Happy Birthday\""
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "XWlhI9VJRYSxV1nV0v7c6Q",
        "url": "https://api.chucknorris.io/jokes/XWlhI9VJRYSxV1nV0v7c6Q",
        "value": "Chuck Norris can make a happy meal cry"
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "8f6Sy1Q0TUG9TbAKfOg0NA",
        "url": "https://api.chucknorris.io/jokes/8f6Sy1Q0TUG9TbAKfOg0NA",
        "value": "Chuck Norris once ate a cactus whole. When asked how he was feeling, he replied \"Happy Pappy bang bang!\" Then shat his pants"
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "PcMG7X-qS7maHnbnWHu45g",
        "url": "https://api.chucknorris.io/jokes/PcMG7X-qS7maHnbnWHu45g",
        "value": "Chuck Norris eats happy meal toys and has the hamburger and fries as toys."
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "ILP_YtjFTgCqkf0aIyNeMQ",
        "url": "https://api.chucknorris.io/jokes/ILP_YtjFTgCqkf0aIyNeMQ",
        "value": "Chuck Norris makes Happy(the dwarf) be like Grumpy.  If you have a \"stay off my lawn\" sign, this does not apply to Chuck Norris. he can stand wherever the hell he wants!  If you see a spider in your room, don't freak out. just remember that there is worse. Chuck Norris could be standing in your room with a LARGE knife in his hand. or a bouquet of flowers. the knife makes more sense though.....  If Chuck Norris was president, courts wouldn't exist because nobody disobeys Chuck Norris or anything he says/writes down  Chuck Norris has never ever missed his target except for that one time.....wait....never mind.... that wasn't Chuck Norris.....never mind."
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "GaS9Eo9mQBGcwNsHrAzlgg",
        "url": "https://api.chucknorris.io/jokes/GaS9Eo9mQBGcwNsHrAzlgg",
        "value": "Chuck Norris killed the trolls. Happy now?"
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "8Tw9xEw9SzqU3E_fxazLRQ",
        "url": "https://api.chucknorris.io/jokes/8Tw9xEw9SzqU3E_fxazLRQ",
        "value": "Chuck Norris wishes you a Merry Christmas, a Happy Hannukah, and a Happy New Year... so you better have one!"
    },
    {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "T-A2A15hQfypHc__-eijbg",
        "url": "https://api.chucknorris.io/jokes/T-A2A15hQfypHc__-eijbg",
        "value": "When Chuck Norris go's to Mcdonalds he turns everyone into an unhappy meal."
    }
]

module.exports = {
    receiveAllJokes: (req, res) => {
        jokesAll = [...jokesAll, ...req.body];
        res.status(200).send(jokesAll);
    },

    sendOneJoke: (req, res) => {
        // console.log('We got a request for a Joke');
        res.status(200).send(jokingData[i]);
        // res.status(200).send(jokesAll)
        i++;
    }
}