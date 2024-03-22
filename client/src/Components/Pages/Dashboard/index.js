import './style2.css';
function Dashboard(){
    return (
    <div>
        <h2>Dashboard</h2>
        <br></br>
        
        <table className="table">
            <div className='box1'>
                <h4>Profile</h4>
                <button>View Profile</button>
            </div>
            <div className='box2'>
                <h4>Owned Lands</h4>
                <button>View Your Land</button>
            </div>
            <br></br>
            <h4>Lands Information</h4>
            <br></br>
            <tr className="trow">
            <th>#</th>
            <th>Area</th>
            <th>City</th>
            <th>State</th>
            <th>Price</th>
            <th>Propert Id</th>
            <th>Survey Number</th>
            <th>Request Land</th>
            </tr>
            <tr className="trow2">
                <td>1</td>
                <td>450</td>
                <td>Akola</td>
                <td>Maharashtra</td>
                <td>25000</td>
                <td>12</td>
                <td>34</td>
                <td><button>Request Land</button></td>
            </tr>
        </table>
    </div>
    );
    }
    export default Dashboard;