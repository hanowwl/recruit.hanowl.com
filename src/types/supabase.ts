export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      resume: {
        Row: {
          case_id: number
          created_at: string | null
          id: number
          submitted_at: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          case_id: number
          created_at?: string | null
          id?: number
          submitted_at?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          case_id?: number
          created_at?: string | null
          id?: number
          submitted_at?: string | null
          updated_at?: string | null
          user_id?: string
        }
      }
      resume_answer: {
        Row: {
          id: number
          input_id: number
          resume_id: number
          value: string
        }
        Insert: {
          id?: number
          input_id: number
          resume_id: number
          value?: string
        }
        Update: {
          id?: number
          input_id?: number
          resume_id?: number
          value?: string
        }
      }
      resume_case: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
        }
      }
      resume_case_input: {
        Row: {
          case_id: number
          id: number
          input_id: number
        }
        Insert: {
          case_id: number
          id?: number
          input_id: number
        }
        Update: {
          case_id?: number
          id?: number
          input_id?: number
        }
      }
      resume_input: {
        Row: {
          id: number
          max: number | null
          min: number | null
          name: string
          regex: string | null
          requirement: boolean
          type: string
        }
        Insert: {
          id?: number
          max?: number | null
          min?: number | null
          name: string
          regex?: string | null
          requirement?: boolean
          type?: string
        }
        Update: {
          id?: number
          max?: number | null
          min?: number | null
          name?: string
          regex?: string | null
          requirement?: boolean
          type?: string
        }
      }
      users: {
        Row: {
          created_at: string | null
          id: string
          name: string
          phone: string
          role: string | null
          student_class: number | null
          student_depart: string | null
          student_grade: number | null
          student_number: number | null
        }
        Insert: {
          created_at?: string | null
          id: string
          name: string
          phone: string
          role?: string | null
          student_class?: number | null
          student_depart?: string | null
          student_grade?: number | null
          student_number?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          phone?: string
          role?: string | null
          student_class?: number | null
          student_depart?: string | null
          student_grade?: number | null
          student_number?: number | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
