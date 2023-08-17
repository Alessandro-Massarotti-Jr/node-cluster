import http from "node:http"
const processPid = process.pid;

const server = http.createServer((request, response) => {

    for (let index = 0; index < 1e7; index++);
    response.end(`handled by pid: ${processPid}`);

});

server.listen(3001).once('listening', () => {
    console.log('Server started in process', processPid)
});

