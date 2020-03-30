import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'
const EmployeeDetails = (props) => {
    const {details} = props
    return(
        <Layout>
            <div className="center">
                <img src={details.avatar}/>
                <h3>{`${details.first_name} ${details.last_name}`}</h3>
                <a href={`mailto:${details.email}?Subject=Hello`} target="_blank">{`${details.email}`}</a>
            </div>
            <style jsx>{`
                img{
                    width:300px;
                }
                .center{
                    text-align: center; 
                }
            `}</style>
        </Layout>
    )
}

EmployeeDetails.getInitialProps = async function (context) {
    // console.log(context);
    
    const res = await fetch(`https://reqres.in/api/users/${context.query.id}`);
    const data = await res.json()
    console.log(data);
    
    return{
        details:data.data
    }
}
export default EmployeeDetails