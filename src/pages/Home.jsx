import axios from "axios";
import { Component } from "react/cjs/react.development";

class Home extends Component {
    state = {
        
    }
    componentDidMount() {
        const config = {
            headers : {
                Authorization : 'Bearer' + localStorage.getItem('token')
            }
        };

        axios.get('user', config)
            .then(
            res=> {
                console.log(res);
                this.setState({
                    user: res.data
                });
            },
            err => {
                console.log(err);
            }
        )
    }

    render() {
        let test;
        if(this.state.user){
            test = (<div>{this.state.user} 회원가입 성공</div>);
        }else{
            test = (<div> 회원가입 실패</div>);
        }
        
        return(
            <div>
                <h1>Home</h1>
                {test}
            </div>
        );
    }
}

export default Home;