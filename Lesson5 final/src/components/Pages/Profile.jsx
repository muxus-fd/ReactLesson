import React from "react";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";

class Profile extends React.Component {
    // state = {
    //     // name:"Хулио",
    //     age:'10',
    //     countchats:"5",
    //     date:"10.10.2020",
    // };
    render(){
        return <div>
                    <h2>Мои данные </h2>
                    <p>Ник - {this.props.profile.name}</p>
                    <p>Возраст - {this.props.profile.age}</p>
                    <p>Количество чатов - {this.props.profile.countchats}</p>
                    <p>Дата создания - {this.props.profile.date}</p>
                    <Link to={"/"} > Вернуться го хоум</Link>
                </div>
    }
    
}
const mapStateToProps = function (state) {
    return  state.profile;
}
 
 const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(Profile);
