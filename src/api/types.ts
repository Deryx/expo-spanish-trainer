// Base API response format (adjust to match your backend)
export type ApiResponse<T = unknown> = {
    data: T;
    message?: string;
    success: boolean;
    timestamp?: string;
  };
  
  // Error format
  export type ApiError = {
    status: number;
    message: string;
    errors?: Record<string, string[]>;
  };