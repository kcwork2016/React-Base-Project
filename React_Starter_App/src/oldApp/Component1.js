import React from 'react';
import {CardBody, ListGroup, ListGroupItem, Button} from 'reactstrap';
import '../assets/css/Component1.css';

export default function  DrugDisplay (props){

      const { handleButtonOnClick, foodNames, currentDrugName } = props;

        const foodList = foodNames.map(function (foodNames) {
            return <ListGroupItem>{foodNames}</ListGroupItem>
        });

        return (
            <div>
                    <CardBody>
                        Prescription Name:
                        <ListGroupItem>{currentDrugName}</ListGroupItem>
                    </CardBody>

                    <CardBody>
                        Food you should avoid when taking this medication:
                        <ListGroup>
                            {foodList}
                        </ListGroup>
                    </CardBody>

                    <div className="div-main-button">
                    <Button color="primary"
                        onClick = {handleButtonOnClick}
                    >Check Interaction</Button>
                    </div>
                </div>
        );
    }
