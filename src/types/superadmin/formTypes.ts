import * as yup from 'yup'

export type AllCountries = {
  currency: string
  flag: string
  isoCode: string
  latitude: string
  longitude: string
  name: string
  phonecode: string
  timezones: TimeZones[]
}

export type AllStatesAndCities = {
  name: string
  isoCode: string
  country_code: string
  stateCode: string
  latitude: string
  longitude: string
}

export type TimeZones = {
  abbreviation: string
  gmtOffset: number
  gmtOffsetName: string
  tzName:string
  zoneName: string
}

export type CreateUserInput = {
  email: string
  first_name: string
  last_name: string
  other_name: string
  username: string
  country: string
  state: string
  city: string
  phone_number: string
  country_code?: string
  zip_code: string
  role: string
  department: string
  gender: string
  dob: string
  title: string
  bio?: string
  address: string
  address_two?: string
  profile_img?: string
}

export const CreateUserInputSchema = yup.object({
  email: yup.string().required('Email field is required'),
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  other_name: yup.string().optional(),
  username: yup.string().required().min(8, 'Username must be at least 8 characters long'),
  country: yup.string().required('Choose the country you reside in'),
  state: yup.string().required('State is required'),
  city: yup.string().required('Choose the city you reside in'),
  phone_number: yup.number().required('Phone number is required'),
  country_code: yup.string().optional(),
  zip_code: yup.string().required('Zip code is required'),
  role: yup.string().required('User role must be selected'),
  department: yup.string().required('Department must be selected'),
  gender: yup.string().required('Please choose a valid gender'),
  dob: yup.string().required('Date of birth is required'),
  title: yup.string().required('User title is required'),
  bio: yup.string().optional().min(100, 'Bio requires at least 100 characters').max(1000, 'Cannot be more than 1000 characters'),
  address: yup.string().required('User address is required').min(10, 'Address too short'),
  address_two: yup.string().optional().min(10, 'Address too short'),
  profile_img: yup.string().optional()
}).required()
