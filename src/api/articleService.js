// src/api/articleService.js
import apiClient from './baseService';

export const getArticleCategories = async () => {
    try {
        const response = await apiClient.get('/ArticleCategories');
        return response.data;
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
    }
};

// Export the function so it can be imported elsewhere
export default getArticleCategories;

// export const getArticleById = async (id) => {
//     try {
//         const response = await apiClient.get(`/articles/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching article by ID:', error);
//         throw error;
//     }
// };

// export const createArticle = async (article) => {
//     try {
//         const response = await apiClient.post('/articles', article);
//         return response.data;
//     } catch (error) {
//         console.error('Error creating article:', error);
//         throw error;
//     }
// };

// export const updateArticle = async (id, article) => {
//     try {
//         const response = await apiClient.put(`/articles/${id}`, article);
//         return response.data;
//     } catch (error) {
//         console.error('Error updating article:', error);
//         throw error;
//     }
// };

// export const deleteArticle = async (id) => {
//     try {
//         await apiClient.delete(`/articles/${id}`);
//     } catch (error) {
//         console.error('Error deleting article:', error);
//         throw error;
//     }
// };
