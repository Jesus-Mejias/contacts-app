import React from 'react';

const styles = {

};

class AddScreen extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            name: '',
            phone: '',
            mail: '',
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onAddButtonClicked = () =>{
        const { name, phone, email } = this.state;

        if (name === ''){
            alert('Please enter name');
            return;
        }else if (phone === ''){
            alert('Please enter phone number');
            return;
        }else if (email === ''){
            alert('Please enter email address');
            return;
        }

        alert(`${name}, ${phone}, ${email} added to contact`);
        window.location = '/';
    }

    render(){
        const { name, phone, email } = this.state;

        return(
            <div>
                <h1>Add</h1>

                <span>Name</span>
                <input 
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.onChange}/>
                <br />
                <span>Phone</span>
                <input 
                    type='text'
                    name='phone'
                    value={phone}
                    onChange={this.onChange}/>
                <br />
                <span>Email</span>
                <input 
                    type='text'
                    name='email'
                    value={email}
                    onChange={this.onChange}/>
                <br />
                <button 
                    onClick={this.onAddButtonClicked}>
                    Add
                </button>
            </div>
        )
    }
}

export default AddScreen;