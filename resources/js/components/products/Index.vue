<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter()

    const newProduct = () => {
        router.push('/products/create')
    }
</script>

<template>
    <div class="container mt-5">

        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-xl-6 col-xxl-6">
                        <h3>Product List</h3>
                    </div>
                    <div class="col-lg-6 col-md-6 col-xl-6 col-xxl-6 d-flex justify-content-end">
                        <button @click="newProduct" class="btn btn-sm btn-primary">Add New</button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                      <thead>
                        <th>#</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Action</th>
                      </thead>
                      <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sunglass</td>
                            <td>10</td>
                            <td>
                                <img src="/public/upload/1.jpeg" height="40px" alt="product-img">
                            </td>
                            <td>
                                Man Fashion
                            </td>
                            <td>
                                <button class="btn btn-sm btn-info me-1">Edit</button>
                                <button class="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
