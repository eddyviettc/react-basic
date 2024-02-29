import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponents from './AddComponent';

class MyComponent extends React.Component {


    //key:value
    state = {
        arrJobs: [
            { id: 'job1', title: 'manager', salary: '1000' },
            { id: 'job2', title: 'supporter', salary: '2000' },
            { id: 'job3', title: 'tester', salary: '3000' }
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })

    }
    componentDidUpdate(prevProps, prevState) {
        console.log('run did update:', 'prev state', prevState, 'current state', this.state)
    }
    componentDidMount() {
        console.log('run component did mount')
    }
    //re-render
    render() {
        console.log('call render')
        return (
            <>
                <AddComponents
                    addNewJob={this.addNewJob}
                />


                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )

    }
}

export default MyComponent;