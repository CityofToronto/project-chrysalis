import React from 'react';
import ReactDOM from 'react-dom';
/*
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/



class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2" align="left">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const admitted = product.admitted ?
      product.type :
      <span style={{color: 'red'}}>
        {product.type}
      </span>;

    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.phone}</td>
        <td align= 'center'>{admitted}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;
    let catCount = 0;

    this.props.products.forEach((product) => {
      if (product.name.toUpperCase().indexOf(filterText.toUpperCase()) === -1) {
        return;
      }
      if (inStockOnly && !product.admitted) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
        catCount++;
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <div>
        <p>Rows returned: {rows.length-catCount}     </p>
      <table>
        <thead>
          <tr>
            <th style={{width: '100px'}}>Name</th>
            <th style={{width: '100px'}}>Phone Number</th>
            <th style={{width: '100px'}}>Admitted</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search by client name..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show Admitted clients
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <h1>List of Clients by Shelter</h1>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}


const PRODUCTS = [
  {category: 'Eva Shelter', phone: '416-885-5836', admitted: true, name: 'Claudio', type: 'Yes'},
  {category: 'Eva Shelter', phone: '416-777-9444', admitted: true, name: 'Tracy', type: 'Yes'},
  {category: 'Eva Shelter', phone: '416-555-4978', admitted: true, name: 'Ken', type: 'Yes'},
  {category: 'Eva Shelter', phone: '416-666-1545', admitted: false, name: 'Francis', type: 'No'},
  {category: 'Eva Shelter', phone: '514-221-5563', admitted: true, name: 'Tom Ask', type: 'Yes'},
  {category: 'Another Shelter', phone: '514-885-2658', admitted: true, name: 'Louis', type: 'Yes'},
  {category: 'Another Shelter', phone: '514-485-9887', admitted: false, name: 'Tom V.', type: 'No'}
];
 
  ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('root')
  );
  

  