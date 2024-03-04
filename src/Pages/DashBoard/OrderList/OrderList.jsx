import { useLoaderData } from "react-router-dom";


const OrderList = () => {

    const orderList = useLoaderData()

    return (
        <div className="bg-white m-8 rounded-xl">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="text-sm">
                            <th>Name</th>
                            <th>Email Id</th>
                            <th>Service</th>
                            <th>Pay With</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList.map(order => <tr key={order._id} >
                                <td className="text-sm">{order.name}</td>
                                <td className="text-sm">{order.email}</td>
                                <td className="text-sm">{order.service}</td>
                                <td className="text-sm">{order.credit_card}</td>
                                <td className="text-sm text-[#FF4545]">

                                    <select name="" id="">
                                        <option className="text-[#FF4545]" value="pending">{order.status}</option>
                                        <option className="text-[#FFBD3E]" value="ongoing">On going</option>
                                        <option className="text-[#009444]" value="done">Done</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;