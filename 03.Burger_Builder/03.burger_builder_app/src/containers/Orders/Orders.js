import React, {Component} from 'react';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Order from '../../components/Order/Order/Order';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }
  componentDidMount() {
    axios.get('/orders.json')
    .then(res => {
      let orderArray = []
      for(let key in res.data) {
        orderArray.push({
          ...res.data[key],
          id: key
        })
      }
      this.setState({loading: false, orders: orderArray})
      // console.log(this.state.orders);
    })
    .catch( err => {
      this.setState({loading: false})
      // console.log(err);
    })
  }
  render() {
    return (
      <div>
        {this.state.orders.map((order) => {
          return (
            <Order
              key={order.id}
              ingredient={order.ingredients}
              price={order.price}
            />
          )
        })}
      </div>
    )
  }
}

export default withErrorHandler(Orders, axios);