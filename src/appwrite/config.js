import conf from '../conf/conf.js';
import { Client, ID, Databases } from 'appwrite';

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
            const response = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    userId: userId,
                    cartItems: cartItems
                }
            );
            console.log('Cart data saved:', response);
            return response;
        } catch (error) {
            console.error('Error saving cart data:', error);
            throw error;
        }
    }

    async getCartItems(userId) {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [`equal("userId", "${userId}")`]
            );
            if (response.documents.length > 0) {
                return response.documents[0];
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error retrieving cart data:', error);
            throw error;
        }
    }

    async updateCartItems(documentId, cartItems) {
        try {
            const response = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId,
                { cartItems: cartItems }
            );
            console.log('Cart data updated:', response);
            return response;
        } catch (error) {
            console.error('Error updating cart data:', error);
            throw error;
        }
    }
}