import { Client, ClientOptions } from "@opensearch-project/opensearch";

const clientOptions: ClientOptions = {
  node: 'https://localhost:9200',
  auth: {
    username: 'admin',
    password: 'admin'
  },
  ssl: {
    rejectUnauthorized: false
  }
};

export const client = new Client(clientOptions);
