import React from "react";

class AddComponents extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    handleChangetitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        console.log(this.state)
        event.preventDefault()
        this.props.addNewJob({
            id: Math.floor(Math.random() * 10),
            title: this.state.title,
            salary: this.state.salary
        })
    }
    render() {
        return (

            <form>
                <label htmlFor="fname">Job's Title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangetitleJob(event)}
                />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}

                /><br /><br />
                <input type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }

}

export default AddComponents