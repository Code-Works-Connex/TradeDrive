// utils/api.js

export const API_BASE_URL = "http://192.168.12.195:5000/api";

export const API_ENDPOINTS = {
  articles: `${API_BASE_URL}/articles`,
  publishedArticles: `${API_BASE_URL}/articles/published`,
  contactUs: `${API_BASE_URL}/contactus`,
  testimonials: `${API_BASE_URL}/testimonials`,
  b2bResponses: `${API_BASE_URL}/b2b-responses`,
  csrfToken: `${API_BASE_URL}/csrf-token`,
  // Add more as needed...
};
