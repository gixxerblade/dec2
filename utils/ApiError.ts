export class ApiError extends Error {
  constructor (public code: number, message: string = '') {
    super(message || `Response Status ${code}`);
  }
}

export class DetailedApiError extends Error {
  constructor (public code: string, message: string, public details: any) {
    super(message);
  }
}

export const handleError = async (response: Response) => {
  if (response.status === 400 || response.status === 409) {
    const errorMessage = await response.json();
    throw new DetailedApiError(errorMessage.code, errorMessage.message, errorMessage);
  }
  throw new ApiError(response.status);
};
