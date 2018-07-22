import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, Row, Col  } from 'reactstrap';
import '../css/Component2.css';
export default class Component2 extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        const { drugNames, drugSelectionOnClick } = this.props;
        const drugList = drugNames.map(function (drugNames) {
            return <DropdownItem onClick = {drugSelectionOnClick}>{drugNames}</DropdownItem>
        });

        return (
            <div>
                <Row>
                    <Col>
                        <Badge color="success">Select the Drug from the Drug List ({drugList.length})</Badge>
                    </Col>
                    <Col>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret>
                                Drug List
                            </DropdownToggle>
                            <DropdownMenu>
                          {drugList}
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        );
    }
}