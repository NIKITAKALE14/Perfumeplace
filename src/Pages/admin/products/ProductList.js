import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1); // Current page
    const [hasMore, setHasMore] = useState(true); // Flag to check if there are more products to load
    const productsPerPage = 6; // Number of products to load per page

    function getProducts() {
        fetch(`http://localhost:4000/products?_sort=id&_order=desc&_page=${page}&_limit=${productsPerPage}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error();
            })
            .then(data => {
                if (data.length < productsPerPage) {
                    setHasMore(false); // No more products to load
                }
                setProducts(prevProducts => [...prevProducts, ...data]);
            })
            .catch(error => {
                alert("Unable to get the data");
            });
    }

    useEffect(() => {
        getProducts();
    }, [page]);

    function formatDate(dateString) {
        const formattedString = dateString.replace(/\s/g, 'T').replace('t', 'T');
        const date = new Date(formattedString);
        return isNaN(date.getTime()) ? 'Invalid Date' : date.toISOString().slice(0, 10);
    }

    function deleteProduct(id) {
        fetch("http://localhost:4000/products/" + id, {
            method: "DELETE"
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error();
                }
                setProducts(products.filter(product => product.id !== id)); // Remove the deleted product from the list
            })
            .catch(error => {
                alert("Unable to delete the product");
            });
    }

    return (
        <div className="container my-4">
            <h2 className="text-center nb-4">Products</h2>

            <div className="row mb-3">
                <div className="col">
                    <Link className="btn btn-primary me-1" to="/admin/products/create" role="button">Create Products</Link>
                    <button type="button" className="btn btn-outline-primary" onClick={() => { setPage(1); setProducts([]); setHasMore(true); getProducts(); }}>Refresh</button>
                </div>
                <div className="col">
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}$</td>
                                    <td><img src={"http://localhost:4000/images/" + product.imageFilename} width="100" alt="..." /></td>
                                    <td>{product.createAt ? formatDate(product.createAt) : '14-11-2024'}</td>
                                    <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                                        <Link className='btn btn-primary btn-sm me-1' to={"/admin/products/edit/" + product.id}>Edit</Link>
                                        <button type="button" className="btn btn-danger btn-sm"
                                            onClick={() => deleteProduct(product.id)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

            {hasMore && (
                <div className="text-center">
                    <button className="btn btn-primary" onClick={() => setPage(page + 1)}>Load More</button>
                </div>
            )}
        </div>
    );
}
