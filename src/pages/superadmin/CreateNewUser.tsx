import React from 'react'
import {Button, Label, Select, Textarea, TextInput} from "flowbite-react";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

import Text from "../../components/global/Text";
import {useSuperadminCreateAdminUser} from "../../hooks/superadmin/useSuperadminCreateAdminUser";
import {AllCountries, AllStatesAndCities, CreateUserInput, CreateUserInputSchema} from '../../types/superadmin/formTypes';
import ImageUpload from "../../components/global/input/ImageUpload";
import SuperadminBaseTemplate from "../../components/templates/superadmin/SuperadminBaseTemplate";
import {availableTitles} from "../../lib/constants/constants";

const CreateNewUser = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserInput>({
    resolver: yupResolver(CreateUserInputSchema)
  });

  const {
    // Values
    allCountries,
    phoneCode,
    allCountryStates,
    allStateCities,
    allDepartments,
    allRoles,
    profileImgURL,

    // Functions
    handleCreateAdmin,
    onUpdateCountry,
    onUpdateState,
    onUpdateCity,
    setProfileImgURL,
  } = useSuperadminCreateAdminUser()

  return (
    <SuperadminBaseTemplate>
      <div className={`w-full p-10 md:px-20 flex flex-col`}>
        <Text
          text={`Add Admin`}
          size="4xl"
          weight={800}
          className="mb-8 text-ds-primary-700 dark:text-ds-primary-200 font-extrabold"
        />

        <div className={`w-full p-5 shadow-2xl rounded-lg flex flex-col`}>
          <div className={`grid-container grid grid-cols-6 gap-4 w-full px-4`}>
            <div className={`col-span-2`}>
              <ImageUpload bucketFolder={`/profile_image`} url={profileImgURL} updateImageUrl={setProfileImgURL}/>
            </div>

            <div className={`col-span-4 grid grid-cols-5 gap-4`}>
              {/*Title*/}
              <div className={`col-span-1`}>
                <div className={`w-full`}>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="title"
                      value="Title"
                      color={errors.title?.message ? 'failure' : 'gray'}
                    />
                  </div>

                  <Select
                    id="state"
                    required={false}
                    helperText={<React.Fragment><span className="font-medium">{errors.title?.message}</span></React.Fragment>}
                    {...register("title")}
                    color={errors.title?.message ? 'failure' : 'gray'}
                  >
                    <option>Select Title</option>
                    {availableTitles?.map((item:string, idx:number) => {
                      return (
                        <option key={idx}>{item}</option>
                      )
                    })}

                  </Select>
                </div>
              </div>


              {/*First Name*/}
              <div className={`col-span-2`}>
                <div className={`w-full`}>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="first_name"
                      value="First Name"
                      color={errors.first_name?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="first_name"
                    placeholder="John"
                    required={false}
                    color={errors.first_name?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.first_name?.message}</span></React.Fragment>}
                    {...register("first_name")}
                  />
                </div>
              </div>

              {/*Last Name*/}
              <div className={`col-span-2`}>
                <div className={`w-full`}>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="last_name"
                      value="Last Name"
                      color={errors.last_name?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="last_name"
                    placeholder="Doe"
                    required={false}
                    color={errors.last_name?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.last_name?.message}</span></React.Fragment>}
                    {...register("last_name")}
                  />
                </div>
              </div>

              <div className={`grid grid-cols-2 col-span-5 gap-4`}>
                {/*Middle name*/}
                <div className={`w-full`}>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="other_name"
                      value="Other Name"
                      color={errors.other_name?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="other_name"
                    placeholder="Felix"
                    required={false}
                    color={errors.other_name?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.other_name?.message}</span></React.Fragment>}
                    {...register("other_name")}
                  />
                </div>

                {/*Username*/}
                <div className={`w-full`}>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="username"
                      value="Username"
                      color={errors.username?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="username"
                    placeholder="john_doe"
                    required={false}
                    color={errors.username?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.username?.message}</span></React.Fragment>}
                    {...register("username")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={`grid-container grid grid-cols-6 gap-4 w-full p-4`}>
            {/*Short Bio*/}
            <div className={`col-span-2`}>
              <div id="short_bio" className={`w-full`}>
                <div className="mb-2 block">
                  <Label
                    htmlFor="bio"
                    value="Short Bio"
                    color={errors.bio?.message ? 'failure' : 'gray'}
                  />
                </div>
                <Textarea
                  rows={4}
                  id="bio"
                  placeholder="Short Biography"
                  required={false}
                  color={errors.bio?.message ? 'failure' : 'gray'}
                  helperText={<React.Fragment><span className="font-medium">{errors.bio?.message}</span></React.Fragment>}
                  {...register("bio")}
                />
              </div>
            </div>

            {/*Gender*/}
            <div className={`col-span-1`}>
              <div id="select_gender" className={`w-full`}>
                <div className="mb-2 block">
                  <Label
                    htmlFor="select_gender"
                    value="Gender"
                    color={errors.gender?.message ? 'failure' : 'gray'}
                  />
                </div>
                <Select
                  id="state"
                  required={false}
                  helperText={<React.Fragment><span className="font-medium">{errors.gender?.message}</span></React.Fragment>}
                  {...register("gender")}
                  color={errors.gender?.message ? 'failure' : 'gray'}
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>

                </Select>
              </div>
            </div>

            {/*DOB*/}
            <div className={`col-span-1`}>
              <div id="date_of_birth" className={`w-full`}>
                <div className="mb-2 block">
                  <Label
                    htmlFor="dob"
                    value="Date of birth"
                    color={errors.dob?.message ? 'failure' : 'gray'}
                  />
                </div>
                <TextInput
                  id="dob"
                  required={false}
                  type="date"
                  color={errors.dob?.message ? 'failure' : 'gray'}
                  helperText={<React.Fragment><span className="font-medium">{errors.dob?.message}</span></React.Fragment>}
                  {...register("dob")}
                />
              </div>
            </div>

            {/*Role*/}
            <div className={`col-span-1`}>
              <div id="select_role" className={`w-full`}>
                <div className="mb-2 block">
                  <Label
                    htmlFor="role"
                    value="Select Role"
                    color={errors.role?.message ? 'failure' : 'gray'}
                  />
                </div>
                <Select
                  id="role"
                  required={false}
                  helperText={<React.Fragment><span className="font-medium">{errors.role?.message}</span></React.Fragment>}
                  {...register("role")}
                  color={errors.role?.message ? 'failure' : 'gray'}
                >
                  <option>
                    Select Role
                  </option>
                  {allRoles?.map((item:any, idx:number) => {
                    return (
                      <option key={idx}>
                        {item?.replaceAll('_', ' ')}
                      </option>
                    )
                  })}
                </Select>
                <p className={`mt-2 text-sm text-gray-500 dark:text-gray-400`}>{errors.role?.message}</p>
              </div>
            </div>

            {/*Department*/}
            <div className={`col-span-1`}>
              <div id="select_dept" className={`w-full`}>
                <div className="mb-2 block">
                  <Label
                    htmlFor="select_dept"
                    value="Select Department"
                    color={errors.department?.message ? 'failure' : 'gray'}
                  />
                </div>
                <Select
                  id="state"
                  required={false}
                  helperText={<React.Fragment><span className="font-medium">{errors.department?.message}</span></React.Fragment>}
                  {...register("department")}
                  color={errors.department?.message ? 'failure' : 'gray'}
                >
                  <option>
                    Select Department
                  </option>
                  {allDepartments?.map((item:any, idx:number) => {
                    return (
                      <option key={idx}>
                        {item?.replaceAll('_', ' ')}
                      </option>
                    )
                  })}
                </Select>
                <p className={`mt-2 text-sm text-gray-500 dark:text-gray-400`}>{errors.department?.message}</p>
              </div>
            </div>

            {/*Email*/}
            <div className={`col-span-2`}>
              <div id="add_email" className={`w-full`}>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Email"
                    color={errors.email?.message ? 'failure' : 'gray'}
                  />
                </div>
                <TextInput
                  id="email"
                  placeholder="john_doe@gmail.com"
                  required={false}
                  type="email"
                  color={errors.email?.message ? 'failure' : 'gray'}
                  helperText={<React.Fragment><span className="font-medium">{errors.email?.message}</span></React.Fragment>}
                  {...register("email")}
                />
              </div>
            </div>

            {/*Phone Number*/}
            <div className={`col-span-2`}>
              <div id="add_phone" className={`w-full`}>
                <div className="mb-2 block">
                  <Label
                    htmlFor="phone_number"
                    value="Phone Number"
                    color={errors.phone_number?.message ? 'failure' : 'gray'}
                  />
                </div>
                <TextInput
                  id="phone_number"
                  placeholder={`9189011920`}
                  required={false}
                  type="tel"
                  color={errors.phone_number?.message ? 'failure' : 'gray'}
                  helperText={<React.Fragment><span className="font-medium">{errors.phone_number?.message}</span></React.Fragment>}
                  addon={`+${phoneCode}`}
                  // prefix={`+${phoneCode}`}
                  {...register("phone_number")}
                />
              </div>
            </div>

            {/*Country*/}
            <div className={`col-span-1`}>
              <div id="select_country" className={`w-full`}>
                <div className="mb-2 block">
                  <Label
                    htmlFor="countries"
                    value="Select your country"
                    color={errors.country?.message ? 'failure' : 'gray'}
                  />
                </div>
                <Select
                  id="countries"
                  required={false}
                  helperText={<React.Fragment><span className="font-medium">{errors.country?.message}</span></React.Fragment>}
                  {...register("country", {
                    onChange: (e) => onUpdateCountry(e?.target?.value)
                  })}
                  color={errors.country?.message ? 'failure' : 'gray'}
                >
                  <option>
                    Select Country
                  </option>
                  {allCountries?.map((item:AllCountries, idx:number) => {
                    return (
                      <option value={item?.isoCode} key={idx}>
                        {item?.name}
                      </option>
                    )
                  })}
                </Select>
              </div>
            </div>

            {/*State*/}
            <div className={`col-span-1`}>
              <div id="select_state" className={`w-full`}>
                <div className="mb-2 block">
                  <Label
                    htmlFor="countries"
                    value="Select State"
                    color={errors.state?.message ? 'failure' : 'gray'}
                  />
                </div>
                <Select
                  id="state"
                  required={false}
                  helperText={<React.Fragment><span className="font-medium">{errors.state?.message}</span></React.Fragment>}
                  {...register("state", {
                    onChange: (e) => onUpdateState(e?.target?.value)
                  })}
                  color={errors.state?.message ? 'failure' : 'gray'}
                >
                  <option>
                    Select State
                  </option>
                  {allCountryStates?.map((item:AllStatesAndCities, idx:number) => {
                    return (
                      <option value={`${item?.name} (${item?.isoCode})`} key={idx}>
                        {item?.name}
                      </option>
                    )
                  })}
                </Select>
              </div>
            </div>

            <div className={`col-span-6 grid grid-cols-4 gap-4`}>
              {/*Ciy*/}
              <div className={`col-span-1`}>
                {allStateCities?.length !== 0 ? (
                  <div id="select_city" className={`w-full`}>
                    <div className="mb-2 block">
                      <Label
                        htmlFor="countries"
                        value="City"
                        color={errors.city?.message ? 'failure' : 'gray'}
                      />
                    </div>
                    <Select
                      id="state"
                      required={false}
                      helperText={<React.Fragment><span className="font-medium">{errors.city?.message}</span></React.Fragment>}
                      {...register("city", {
                        onChange: (e) => onUpdateCity(e?.target?.value)
                      })}
                      color={errors.state?.message ? 'failure' : 'gray'}
                    >
                      <option>
                        Select City
                      </option>
                      {allStateCities?.map((item:AllStatesAndCities, idx:number) => {
                        return (
                          <option value={item?.name} key={idx}>
                            {item?.name}
                          </option>
                        )
                      })}
                    </Select>
                  </div>
                ) : (
                  <div id="select_city" className={`w-full`}>
                    <div className="mb-2 block">
                      <Label
                        htmlFor="city"
                        value="City"
                        color={errors.city?.message ? 'failure' : 'gray'}
                      />
                    </div>
                    <TextInput
                      id="city"
                      placeholder="city"
                      required={false}
                      color={errors.username?.message ? 'failure' : 'gray'}
                      helperText={<React.Fragment><span className="font-medium">{errors.city?.message}</span></React.Fragment>}
                      {...register("city")}
                    />
                  </div>
                )}
              </div>

              {/*Address*/}
              <div className={`col-span-1`}>
                <div id="address" className={`w-full`}>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="address"
                      value="Address"
                      color={errors.username?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="address"
                    required={false}
                    color={errors.address?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.address?.message}</span></React.Fragment>}
                    {...register("address")}
                  />
                </div>
              </div>

              {/*Alternate Address*/}
              <div className={`col-span-1`}>
                <div id="alternate_address" className={`w-full`}>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="address_two"
                      value="Alternative Address"
                      color={errors.address_two?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="address_two"
                    required={false}
                    color={errors.address_two?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.address_two?.message}</span></React.Fragment>}
                    {...register("address_two")}
                  />
                </div>
              </div>

              {/*Zip Code*/}
              <div className={`col-span-1`}>
                <div id="zip_code" className={`w-full`}>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="zip_code"
                      value="Zip Code"
                      color={errors.zip_code?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="zip_code"
                    placeholder={`101241`}
                    required={false}
                    type="number"
                    color={errors.zip_code?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.zip_code?.message}</span></React.Fragment>}
                    {...register("zip_code")}
                  />
                </div>
              </div>
            </div>
          </div>

          <Button type={`submit`} onClick={handleSubmit(handleCreateAdmin)} className={`my-4`}>Submit</Button>
        </div>
      </div>
    </SuperadminBaseTemplate>
  )
}

export default CreateNewUser;