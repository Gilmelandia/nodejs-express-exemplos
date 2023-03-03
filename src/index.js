import * as express from 'express'
import * as cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cookieParser())

import postController from './modules/post/postController'
import userController from './modules/user/userController'

app.post('/post', postController)
app.use('/user', userController)

app.listen(3000, () => console.log(`ONLINE http://localhost:3000`))