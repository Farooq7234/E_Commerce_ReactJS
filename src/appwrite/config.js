import conf from '../conf/conf.js';
import { Client, ID, Databases ,Query  } from 'appwrite';

export class cartService {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async saveCartItems(item) {
        try {
            const response = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                item
            );
            console.log(response)
            return response;
        } 
        
        catch (error) {
            console.error('Error saving cart data:', error);
            throw error;
        }
    }

    async  getCartItems(userId) {
        try {
            const queries = [Query.equal('userId', userId)];
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
            return response;
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



    async deleteCartItems(documentId, userId) {
        try {
            const queries = [Query.equal('userId', userId)];
            const response = await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId,
                queries
            )
            return response
        } catch (error) {
            console.log(`Error deleting the cart ${error}` )
        }
    }
}



const cartservice = new cartService()
export default cartservice
