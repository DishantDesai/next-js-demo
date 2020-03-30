import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
const PageLink = (props) => {
    const {id} = props
    return(
        <Link href="/user/[id]" as={`/user/${id}`}>
            {props.children}
        </Link>
    )
}
const Index = (props) => {
    return(
        <Layout>
           <h1>User List</h1>
           <ul>
            {
                props.users.map((user,i) => {
                    return (
                        <li key={i}>
                            <PageLink id={user.id}>{user.first_name}</PageLink>
                        </li>
                    )
                })
            }
           </ul>
           <style jsx>{`
           `} 
           </style>
        </Layout>
    )
}

Index.getInitialProps = async function(){
    const res = await fetch('https://reqres.in/api/users');
    const data = await res.json();
    console.log(data);
    
    return {
        users: data.data
    }
}
export default Index;