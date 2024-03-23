import React, { Component } from 'react';

class Kids extends Component {
  state = {
    products: [],
    loading: true,
  };

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          products: json,
          loading: false,
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { products, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>Kids Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
                <img src={product.image}/>
              <h1>{product.title}</h1> 
              <p>{product.price}</p>

            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Kids;
