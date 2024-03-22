import './style4.css';
function LandTransactionStatus(){
    return (
    <div>
        <table className="table">
            <h2>Land Transaction</h2>
            <br></br>
            <tr className="trow">
            <th>#</th>
            <th>Owner Id</th>
            <th>Area</th>
            <th>City</th>
            <th>State</th>
            <th>Price</th>
            <th>Propert Id</th>
            <th>Survey Number</th>
            <th>Verify Land Transfer</th>
            </tr>
            <tr className="trow2">
                <td>1</td>
                <td>0asdfg123456</td>
                <td>450</td>
                <td>Akola</td>
                <td>Maharashtra</td>
                <td>25000</td>
                <td>12</td>
                <td>34</td>
                <td><button>Verify Transaction</button></td>
            </tr>
        </table>
    </div>
    );
    }
    export default LandTransactionStatus;