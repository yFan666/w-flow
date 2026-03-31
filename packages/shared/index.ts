export const formatDate = (date: Date): string => {
  return date.toISOString();
};

export interface User {
  id: string;
  name: string;
  email: string;
}
