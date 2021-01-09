import unirest from 'unirest'
import fs from 'fs'

const createData = async () => {
    var req = unirest("GET", "https://jikan1.p.rapidapi.com/top/anime/1/upcoming");

    req.headers({"x-rapidapi-key": "831cb6b458mshbb8093ff1396239p1d1ac7jsn916b6f5260a7", "x-rapidapi-host": "jikan1.p.rapidapi.com", "useQueryString": true});

    await req.end(function (res) {
        if (res.error) 
            throw new Error(res.error);
        
        fs.writeFile("./test.txt", JSON.stringify(res.body), function (err) {
            if (err) {
                console.log(err);
            }
        });
        return res.body
    });

}

export {
    createData
};
