import express, {json} from "express"
import cors from "cors"

const app = express()
app.use(json())
app.use(cors())

const users = []
const tweets = []

app.post("/sign-up", (req, res) => {
    users.push(req.body)
    res.send("post sign-up ok")
})
app.post("/tweets", (req,res) => {
    const tweet = req.body
    const user = users.find(u => u.username === req.body.username)

    tweet.avatar = user.avatar

    tweets.push(tweet)
    res.send("post tweets ok")
})
app.get("/tweets", (req,res) => {
    const ultimosTweets = []

    for(let i = tweets.length; i > tweets.length - 11; i--) {
        if(tweets[i]) {
            ultimosTweets.push(tweets[i])
        }
    }


    res.send(ultimosTweets)
})

app.listen(5000, () => {
    console.log("servidor iniciado em http://localhost:5000")
})