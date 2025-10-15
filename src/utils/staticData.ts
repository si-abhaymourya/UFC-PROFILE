// Static data for production deployment
import { ApiResponse } from './api';

// Import your consolidated data
import staticData from '../../data/db.json';

// For production, we'll use static data instead of API calls
export const getStaticData = (): ApiResponse => {
  return staticData.api as ApiResponse;
};

// This replaces the API call in production
export const fetchAllDataStatic = async (): Promise<ApiResponse> => {
  // Simulate API delay for consistency
  await new Promise(resolve => setTimeout(resolve, 100));
  return staticData.api as ApiResponse;
};
