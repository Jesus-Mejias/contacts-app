import React from 'react';

const styles = {
    container: {
        width: 240,
        margin: 'auto',
        padding: 16,
        textAlign: 'center',
        borderStyle: 'solid',
        borderColor: '#cdcdcd',
        borderWidth: 2,
        borderRadius: 16,
    }

};

class ContactScreen extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            contacts: {
                1: { id: 1, name: 'Inje Lee', phone: '010-1234-5678', email: 'inje@soaple.io'},
                2: { id: 2, name: 'James', phone: '010-1234-5678', email: 'james@soaple.io'},
                3: { id: 3, name: 'Brad', phone: '010-1234-5678', email: 'brad@soaple.io'},
                4: { id: 4, name: 'Leo', phone: '010-1234-5678', email: 'leo@soaple.io'},
                5: { id: 5, name: 'Robert', phone: '010-1234-5678', email: 'robert@soaple.io'},
            }
        }
    }

    onBackButtonClicked = () =>{
        window.location = '/';
    }

    render(){
        const { contacts } = this.state;
        const { match: { params } } = this.props;

        const contact = contacts[params.id];

        return(
            <div style={styles.container}>
                <h5>Name</h5>
                <span>{contact.name}</span>
                <br />
                <h5>Phone</h5>
                <span>{contact.phone}</span>
                <br />
                <h5>Email</h5>
                <span>{contact.email}</span>
                <br />
                <button onClick={this.onBackButtonClicked}>
                    Back
                </button>
            </div>
        )
    }
}

export default ContactScreen;