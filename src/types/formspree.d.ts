declare module '@formspree/react' {
  export interface FormState {
    submitting: boolean;
    succeeded: boolean;
    errors: Array<{
      code: string;
      field: string;
      message: string;
    }>;
  }

  export function useForm(endpoint: string): [FormState, (e: React.FormEvent) => void];
  
  export interface ValidationErrorProps {
    prefix?: string;
    field: string;
    errors: Array<{
      code: string;
      field: string;
      message: string;
    }>;
  }
  
  export const ValidationError: React.FC<ValidationErrorProps>;
} 