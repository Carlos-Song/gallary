const { ApolloServer, AuthenticationError } = require('apollo-server');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
// 导入类型定义和解析器
const filePath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8');
const resolvers = require('./resolvers');

// 导入环境变量和mongoose模型
require('dotenv').config({ path: 'variables.env'});
const User = require('./models/User');
const Post = require('./models/Post');


// 连接 mlab 数据库
mongoose
    .connect(process.env.MONGO_URI,  { useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));


const getUser = async token => {
    if (token) {
        try {
            return await jwt.verify(token, process.env.SECRET);
        } catch(err) {
            throw new AuthenticationError('Your session has ended. Please signin age')
        }
    }
}



// 使用上面的 *类型定义*，*解析器* 和 *上下文对象* 创建 Apollo-GraphQL 服务器
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:async ({ req }) => {
        const token = req.headers["authorization"];
        return { User, Post, currentUser: await getUser(token) };
    }
});


server.listen().then(({ url }) => {
    console.log(`Server listening on ${url}`);
});