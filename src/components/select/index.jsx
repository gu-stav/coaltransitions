import React from 'react';
import Select from 'react-select';

import Label from '../label';
import { colors, fonts } from '../../token';

export default ({ placeholder, name, ...attrs }) => (
  <>
    <Label htmlFor={name}>{placeholder}</Label>

    <Select
      name={name}
      id={name}
      placeholder={`Select ${placeholder}`}
      {...attrs}
      styles={{
        control: (provided, state) => ({
          ...provided,
          borderColor: state.isFocused ? colors.blueBrand : colors.greyLight,
          borderRadius: 0,
          boxShadow: 0,
          '&:hover': {
            borderColor: colors.greyDark,
          },
        }),
        multiValue: (provided) => ({
          ...provided,
          backgroundColor: colors.blueBrand,
        }),
        multiValueRemove: (provided) => ({
          ...provided,
          color: 'white',
        }),
        multiValueLabel: (provided) => ({
          ...provided,
          color: 'white',
          fontFamily: fonts.publicSans.family,
          fontSize: '0.8rem',
        }),
        placeholder: (provided) => ({
          ...provided,
          fontFamily: fonts.publicSans.family,
          fontSize: '0.9rem',
        }),
        option: (provided) => ({
          ...provided,
          fontFamily: fonts.publicSans.family,
          fontSize: '0.8rem',
        }),
      }}
    />
  </>
);
