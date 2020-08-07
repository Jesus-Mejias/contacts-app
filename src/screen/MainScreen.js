import React from 'react';
import ContactList from '../component/ContactList';

const styles = {
    titleText: {
        textAlign: 'center'
    },
    addButton: {
        position: 'absolute',
        right: 16,
        top: 16,
    }
};

class MainScreen extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            contacts: [
                {name: 'Inje Lee', phone: '010-1234-5678', email: 'inje@soaple.io'},
                {name: 'James', phone: '010-1234-5678', email: 'james@soaple.io'},
                {name: 'Brad', phone: '010-1234-5678', email: 'brad@soaple.io'},
                {name: 'Leo', phone: '010-1234-5678', email: 'leo@soaple.io'},
                {name: 'Robert', phone: '010-1234-5678', email: 'robert@soaple.io'},
            ],
        }
    }

    onAddButtonClicked = () => {
        window.location = '/add';
    }

    onContactClicked = (contact) => {
        window.location = `/contact/${contact.id}`;
    }
    
    render(){
        const { contacts } = this.state;

        return(
            <div>
                <h1 style={styles.titleText}>Contacts</h1>

                <button
                    style={styles.addButton}
                    onClick={this.onAddButtonClicked}>
                    Add new
                </button>

                {/*Contacts*/}
                <ContactList 
                    contacts={contacts}
                    onClick={this.onContactClicked}
                />
            </div>
        )
    }
}

export default MainScreen;