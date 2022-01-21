import React from 'react';
import './Dropdown.module.css';
import {Dropdown} from 'semantic-ui-react';

const countryOptions = [
    {key: 'af', value: 'af', text: 'Afghanistan'},
    {key: 'ax', value: 'ax', text: 'Aland Islands'},
    {key: 'al', value: 'al', text: 'Albania'},
    {key: 'dz', value: 'dz', text: 'Algeria'},
    {key: 'as', value: 'as', text: 'American Samoa'},
    {key: 'bz', value: 'bz', text: 'Belize'},
    {key: 'bj', value: 'bj', text: 'Benin'},
]

export const DropSearch = (): JSX.Element => {
    return (

        <Dropdown
            // icon={IoIosArrowDown}
            // fluid
            search
            selection
            options={countryOptions}>
        </Dropdown>
    );
};