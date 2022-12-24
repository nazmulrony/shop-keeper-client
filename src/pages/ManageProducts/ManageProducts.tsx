import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { TypeProduct } from '../AddProduct/AddProduct';

type Props = {};

const ManageProducts = (props: Props) => {
    const {
        data: products,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res: Response = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        },
    });
    if (isLoading) {
        return (
            <div className="h-screen grid place-items-center">Loading...</div>
        );
    }
    return (
        <div className="w-full">
            <div className="w-11/12 mx-auto">
                <h2 className="text-brand font-semibold text-3xl text-center">
                    Manage Products
                </h2>
                <div className="my-4 overflow-x-auto">
                    <table className="w-full shadow-lg shadow-black/10">
                        <thead className="bg-gradient-brand text-light">
                            <tr>
                                <th className="px-4 py-2">S/N</th>
                                <th className="px-4 py-2">Image</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody className=" divide-y divide-gray-300">
                            {products.length
                                ? products.map(
                                      (product: TypeProduct, i: number) => (
                                          <tr
                                              className="text-center bg-slate-200 hover:bg-slate-300"
                                              key={product._id}
                                          >
                                              <td className="py-4 px-4">
                                                  {i + 1}
                                              </td>
                                              <td className="py-2 px-4">
                                                  <div className="avatar">
                                                      <div className="w-24 mask mask-hexagon">
                                                          <img
                                                              src={
                                                                  product.image
                                                              }
                                                              alt=""
                                                          />
                                                      </div>
                                                  </div>
                                              </td>
                                              <td className="py-4 px-4">
                                                  {product.name}
                                              </td>
                                              <td className="py-4 px-4">
                                                  {product.price}Tk
                                              </td>
                                              <td className="py-4 px-4">
                                                  {product.quantity}
                                              </td>
                                              <td className="pt-8 px-4 flex flex-col gap-2">
                                                  <label className="btn btn-xs btn-info">
                                                      Edit
                                                  </label>
                                                  <label className="btn btn-xs btn-error">
                                                      Delete
                                                  </label>
                                              </td>
                                          </tr>
                                      )
                                  )
                                : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;
