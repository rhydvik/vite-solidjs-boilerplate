import { createServer, Model } from 'miragejs';

export function makeServer() {
  return createServer({
    models: {
      office: Model,
    },

    seeds(server) {
      server.create('office', { name: 'Office 1', location: 'Location 1' });
      server.create('office', { name: 'Office 2', location: 'Location 2' });
      // ... more predefined offices if needed
    },

    routes() {
      this.namespace = 'api';

      this.get('/offices', (schema) => {
        return schema.all('office');
      });

      this.get('/offices/:id', (schema, request) => {
        const id = request.params.id;
        return schema.find('office', id);
      });

      // Add other routes like POST, PUT, DELETE as per your requirements
    },
  });
}
