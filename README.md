# Node-cluster


<p>
  <img src="https://img.shields.io/badge/made%20by-Alessandro%20Massarotti%20Jr-90c53f?style=flat-square">
  <img src="https://img.shields.io/badge/Node.js-20.3.1-90c53f?style=flat-square">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/alessandro-massarotti-Jr/node-cluster?color=90c53f&style=flat-square">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/alessandro-massarotti-Jr/node-cluster?color=90c53f&style=flat-square">
</p>

Sistema utilizando funções cluster do Node.js para realizar otimização de aplicações

Utilização de cluster resulta em maior numero de processos simultaneos suportados pela aplicação e tambem diminuição no downtime dos serviços pois como os processos estão sendo executados em processos filhos, podemos fazer com que sempre que ocorrer um erro que derrube um destes processos o processo primario responsavel por eles gere um novo processo caso tenha esta necessidade.


## config

 - Run `npm install` to install project dependencies
 - Run `npm start` to start http server
 - Run `npm test` to run capacity test


## Tools

 - [autocannon](https://www.npmjs.com/package/autocannon)
 - [Node.js](https://nodejs.org/en/docs/)

## Examples

Both tests were made with 500 simultaneous requests of 10 workers each with a duration of 30 seconds

| Percentile (%) | Latency (ms) Without Cluster | Latency (ms) With Cluster |
| -------------- | ---------------------------- | ------------------------- |
| 0.001          | 9                            | 5                         |
| 0.01           | 9                            | 5                         |
| 0.1            | 80                           | 5                         |
| 1              | 396                          | 8                         |
| 2.5            | 738                          | 19                        |
| 10             | 886                          | 96                        |
| 25             | 1225                         | 258                       |
| 50             | 1440                         | 353                       |
| 75             | 9492                         | 3447                      |
| 90             | 18915                        | 7801                      |
| 97.5           | 25288                        | 13765                     |
| 99             | 27061                        | 17567                     |
| 99.9           | 28398                        | 25539                     |
| 99.99          | 28781                        | 27869                     |
| 99.999         | 28781                        | 28132                     |

| code | Count  Without Cluster | Count  With Cluster |
| ---- | ---------------------- | ------------------- |
| 200  | 99864                  | 45510               |

| data     | Without Cluster | With Cluster |
| -------- | --------------- | ------------ |
| requests | 15k             | 50k          |
| time     | 30.26s          | 30.15s       |
| read     | 1.42 MB         | 6.53 MB      |
| errors   | 5k              | 4k           |
| timeout  | 0               | 0            |


<br>

---

Desenvolvido Por [Alessandro Massarotti Jr](https://github.com/alessandro-massarotti-jr) 🤖