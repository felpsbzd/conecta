import { Company } from "../types/company.types"
import { Professional } from "../types/professional.types"
import { UserType } from "../types/user.types"

export interface AppState {
  userType: UserType | null
  professional: Professional | null
  company: Company | null
}

export type AppAction = 
  | { type: "SET_USER_TYPE"; payload: UserType }
  | { type: "SET_PROFESSIONAL"; payload: Professional }
  | { type: "SET_COMPANY"; payload: Company }