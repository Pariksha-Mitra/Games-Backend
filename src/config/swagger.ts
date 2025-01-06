import swaggerJsdoc from 'swagger-jsdoc';

export const getServerUrl = () => {
  const isLocalhost = !process.env.CORS_ORIGIN || process.env.CORS_ORIGIN === '*';
  return isLocalhost 
    ? 'http://localhost:' + (process.env.PORT ?? 3000)
    : process.env.CORS_ORIGIN;
};

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Games Backend API",
      version: "1.0.0",
      description: "API documentation for Games Backend",
    },
    servers: [
      {
        url: getServerUrl(),
        description: "Current Environment",
      }
    ],
  },
  apis: ["./src/routes/*.ts", "./src/server.ts"],
};

export const swaggerSpecs = swaggerJsdoc(options);