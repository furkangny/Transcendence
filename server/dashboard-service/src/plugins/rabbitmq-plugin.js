import fp from 'fastify-plugin'
import EventBusClient from '../libs/EventBusClient.js'


async function rabbitMQPlugin(fastify, options) {
    const rabbit = new EventBusClient(process.env.RABBITMQ_DASHBOARD_QUEUE);
    try {       
        await rabbit.connect();
        console.log("RabbitMQ connected...");
        fastify.decorate('rabbit', rabbit);    
    } catch (error) {
        console.log("Failed to connect to RabbitMQ");
        throw new Error(error);
    }
}

export default fp(rabbitMQPlugin);