import React, { useState } from 'react'
import { suppliers } from '../data/suppliers'
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import './styles.css';
import TableHeader from './TableHeader';

function SuppliersTable() {

    const [supplierList, setSupplierList] = useState(suppliers);

    const removeItem = (id) => {
        let newSupplierList = supplierList.filter(item => item.id !== id);
        setSupplierList(newSupplierList)
    }

    const removeAll = () => {
        setSupplierList([]);
    }

    const orderByDesc = () => {
        let sortSuppliers = supplierList.sort((a, b) => {
            let fa = a.companyName.toLowerCase(),
                fb = b.companyName.toLowerCase();

            if (fb < fa) {
                return -1;
            }
            if (fb > fa) {
                return 1;
            }
            return 0;
        });
        setSupplierList([...sortSuppliers])
    }

    const orderBy = () => {
        let sortSuppliers = supplierList.sort((a, b) => {
            let fa = a.companyName.toLowerCase(),
                fb = b.companyName.toLowerCase();

            if (fb < fa) {
                return 1;
            }
            if (fb > fa) {
                return -1;
            }
            return 0;
        });
        setSupplierList([...sortSuppliers])
    }

    const loadData = () => {
        setSupplierList(suppliers);
    }

    const searchSuppliers = () => {
        let data = document.getElementById("searchTerm").value;
        let searchData = data.toLowerCase().trim();
        let newSuppliers = suppliers.filter(q => q.companyName.toLowerCase().includes(searchData));
        setSupplierList(newSuppliers)
    }

    const searchEnter = (data) => {
        var input = document.getElementById("searchTerm");
        if (data === '') {
            setSupplierList(suppliers)
        }
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("btnSearch").click();
            }
        });
    }
    return (<>
        <section>
            <div class="header">
                <h1>Suppliers Table</h1>

                <div class="d-flex">

                    <div className="w-100">
                        <Button variant="success" size="md" onClick={() => orderBy()}>Order By</Button>{' '}
                        <Button variant="success" className='m-3' size="md" onClick={() => orderByDesc()}>Order By Desc</Button>{'  '}
                        <Button variant="success" size="md" onClick={() => loadData()}>Load Data</Button>{'  '}
                    </div>

                    <InputGroup className="pt-3 pb-3 w-50">
                        <FormControl
                            placeholder="Search by name..."
                            aria-describedby="basic-addon2"
                            id="searchTerm"
                            onChange={(e) => searchEnter(e.target.value)}
                        />
                        <Button variant="primary" id="btnSearch" onClick={() => searchSuppliers()}>
                            <i class="fas fa-search" style={{ color: "#fff" }}></i>
                        </Button>
                    </InputGroup>
                </div>

                <TableHeader></TableHeader>
            </div>

            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                        {
                            supplierList && supplierList.map((item) => {
                                return <tr key={item.id}>
                                    <th>{item.id}</th>
                                    <td>{item.companyName}</td>
                                    <td>{item.contactName}</td>
                                    <td>{item.contactTitle}</td>
                                    <td>{item.address.street}, {item.address.city}, {item.address.region},  {item.address.postalCode}, {item.address.country}</td>
                                    <td>{item.address.phone}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => removeItem(item.id)}>Remove</Button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

                <div className="mx-auto" style={{ width: 200 }}>
                    <Button variant="danger" className='m-3' onClick={() => removeAll()}>Remove All</Button>
                </div>
            </div>
        </section>
    </>
    )
}

export default SuppliersTable