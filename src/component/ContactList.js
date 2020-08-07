import React from 'react';
import ContactListItem from './ContactListItem';

const styles = {

};

class ContactList extends React.Component{

    render(){
        const { contacts, onClick } = this.props;

        return (
            <div>
                {
                    contacts.map((contact) => {
                        return(
                            <ContactListItem
                                key={contact.id}
                                contact={contact}
                                onClick={onClick} 
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default ContactList;