import * as express from 'express'

const app = express()
app.use(express.json())

import postController from './modules/post/postController'
import userController from './modules/user/userController'

app.post('/post', postController)
app.use('/user', userController)

app.listen(3000, () => console.log(`ONLINE http://localhost:3000`))