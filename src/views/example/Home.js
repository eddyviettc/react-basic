import React from "react";
import { withRouter } from 'react-router'
import Color from "../HOC/color";
import logo from '../../assets/images/385473895_1370330560526029_8064608904367231354_n.jpg'
import { connect } from "react-redux";


class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 3000)
    // }
    handleDeleteUser = (user) => {
        console.log('check user delete', user)
        this.props.deleteUserRedux(user)
    }
    handleCreateUser = () => {
        this.props.addUserRedux();
    }
    render() {
        console.log('check props redux', this.props.dataRedux)
        let listUsers = this.props.dataRedux
        return (
            <>
                <div> Hello word form homepage</div>
                <div>
                    <img src={logo} style={{ width: '200px', height: '200px' }} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })

                    }
                    <button onClick={() => this.handleCreateUser()}>Add New</button>
                </div>
            </>
        )
    }


}

// export default withRouter(Home)

const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home))