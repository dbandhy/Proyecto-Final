import { conectar } from './server.js'
import cluster from 'cluster'


if (cluster) {
    cluster.fork() // 4 veces
} else {
conectar()
}