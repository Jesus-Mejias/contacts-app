import React from 'react';

const styles = {
    container: {
        margin: 4,
        padding: 8,
        borderStyle: 'solid',
        borderColor: '#555555',
        borderWidth: 2,
        borderRadius: 16
    }
};

class ContactListItem extends React.Component{
    _onClick = () =>{
        const { contact, onClick} = this.props;
        onClick(contact);
    }

    render(){
        const { contact } = this.props;
        return (
            <div 
                style={styles.container}
                onClick={this._onClick}>
                <span>{contact.name}</span>
            </div>
        )
    }
}

export default ContactListItem;