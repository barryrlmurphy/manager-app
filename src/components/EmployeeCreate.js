import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate, employeeFormReset } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    componentWillMount() {
        this.props.employeeFormReset();    
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('employeeForm: ', state.employeeForm);
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeUpdate,
    employeeCreate,
    employeeFormReset
})(EmployeeCreate);
