import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage } from 'appwrite'




export class DataService {
    client = new Client();
    databases;


    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }


    async saveCartItems({ userId, cartItems }) {
        try {
            const response = await this.databases.createDocument(conf.appwriteDatabaseId,
                {
                    userId: userId,
                    cartItems: cartItems
                }
            )
            console.log('Cart data saved:', response);
            return response
        } catch (error) {
            throw error
        }
    }
}


