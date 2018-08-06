var jokeList = []


module.exports = {

    addJoke: (req, res) => {
        let { id } = req.params
        let checking = jokeList.find(joke => joke.id == id);

        if (!checking) {
            jokeList.unshift(req.body);
            res.status(200).send(jokeList);
        } else {
            res.status(200).send(jokeList)
        }
    },

    sendAllJokes: (req, res) => {
        res.status(200).send(jokeList)
    },

    editJoke: (req, res) => {
        let { id } = req.params;
        let { value } = req.body;
        let single = jokeList.findIndex(joke => joke.id == id);
        console.log(single);
        console.log(jokeList[single]);
        
        
        if (single>=0) {
            console.log('we found something');
            jokeList[single].value = value
        } else {
            console.log('not found so we add');
            jokeList.unshift(req.body);
            console.log(req.body);

        }
        res.status(200).send(jokeList);
    },

    deleteJoke: (req, res) => {
        let { id } = req.params;
        let single = jokeList.find(joke => joke.id == id);
        if (single) {
            console.log('we found something to delete');
            jokeList.splice(single, 1)
        } else {
            console.log('not found so we did nothing');
            // jokeList.unshift(req.body);
        }
        res.status(200).send(jokeList);
    },

    // 
    // 
    // old and outdated
    // 
    // 



    receiveAllJokes: (req, res) => {
        jokeList = [...jokeList, ...req.body];
        res.status(200).send(jokeList);
    },


}