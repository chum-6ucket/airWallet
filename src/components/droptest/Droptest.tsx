import {Select, Option} from './components';
import './styles.css';
import React from 'react';

export default function Droptest() {

    return (
        <div className="dropLayout">
            <Select placeholder="Armenia">
                <Option value="Armenia" availability={true}>Armenia</Option>
                <Option value="Aruba" availability={true}>Aruba</Option>
                <Option value="Australia" availability={true}>Australia</Option>
                <Option value="Austria" availability={true}>Austria</Option>
                <Option value="Azerbaijan" availability={false}>Azerbaijan (not allowed - example)</Option>
                <Option value="Bahrain" availability={true}>Bahrain</Option>
                <Option value="Bahamas" availability={true}>Bahamas</Option>
                <Option value="Bangladesh" availability={true}>Bangladesh</Option>
                <Option value="Barbados" availability={true}>Barbados</Option>
                <Option value="Belarus" availability={true}>Belarus</Option>
                <Option value="Belgium" availability={true}>Belgium</Option>
            </Select>
        </div>
    );
}
