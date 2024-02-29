import React from 'react';
import './Demo.css'
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHideButton = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnClickDelete = (job) => {
        this.props.deleteAJob(job)
    }
    render() {
        let { name, arrJobs } = this.props
        let { showJobs } = this.state

        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className='btn-show' onClick={() => this.handleShowHideButton()}>Show</button>
                    </div>
                    :
                    <>
                        <div>child component: {name}</div>
                        <div className='job-list'>

                            {arrJobs.map((item, index) => {
                                if (+item.salary > 1000) {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                }
                            })}

                        </div>
                        <div>
                            <button onClick={() => this.handleShowHideButton()}>Hide</button>
                        </div>
                    </>
                }


            </>
        )

    }
}

export default ChildComponent;