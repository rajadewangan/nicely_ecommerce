<template>
    <div class="bg-gray-50 min-h-screen py-8 px-4 w-full">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Order History</h1>
        <p class="text-gray-600 mt-2">View your recent purchases and order status</p>
      </div>
  
      <!-- Orders List -->
      <div class="space-y-6">
        <div v-for="order in orders" :key="order.id" class="bg-white rounded-lg shadow-sm border border-gray-200">
          <!-- Order Summary -->
          <div class="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
               @click="openOrder === order.id ? openOrder = null : openOrder = order.id">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div class="mb-4 md:mb-0">
                <div class="flex items-center space-x-4">
                  <span class="text-sm font-medium text-gray-900">Order {{ order.id }}</span>
                  <span class="px-3 py-1 rounded-full text-xs font-medium"
                        :class="{
                          'bg-green-100 text-green-800': order.status === 'Delivered',
                          'bg-yellow-100 text-yellow-800': order.status === 'Processing',
                          'bg-blue-100 text-blue-800': order.status === 'Shipped'
                        }">
                    {{ order.status }}
                  </span>
                </div>
                <p class="text-sm text-gray-500 mt-1">Order Date: {{ order.date }}</p>
              </div>
              <div class="text-right">
                <p class="text-lg font-semibold text-gray-900">Rs. {{ order.total }}</p>
                <p class="text-sm text-gray-500">{{ order.items.length }} items</p>
              </div>
            </div>
          </div>
  
          <!-- Order Details -->
          <transition name="fade">
            <div v-if="openOrder === order.id" class="border-t border-gray-100">
              <div class="p-6 space-y-6">
                <!-- Order Items -->
                <div class="space-y-4">
                  <h3 class="text-sm font-medium text-gray-900">Items Purchased</h3>
                  <div class="space-y-4">
                    <div v-for="item in order.items" :key="item.id" class="flex items-center space-x-4">
                      <img :src="item.image" :alt="item.name"
                           class="w-16 h-16 object-cover rounded-md border border-gray-200" />
                      <div class="flex-1">
                        <p class="text-sm font-medium text-gray-900">{{ item.name }}</p>
                        <p class="text-sm text-gray-500">Quantity: {{ item.quantity }}</p>
                      </div>
                      <p class="text-sm font-medium text-gray-900">Rs. {{ item.price }}</p>
                    </div>
                  </div>
                </div>
  
                <!-- Order Summary -->
                <div class="bg-gray-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div class="space-y-2">
                    <p class="font-medium text-gray-900">Shipping Address</p>
                    <p>{{ order.shipping.address }}</p>
                    <p>{{ order.shipping.city }}, {{ order.shipping.state }}</p>
                    <p>{{ order.shipping.country }}</p>
                  </div>
                  <div class="space-y-2">
                    <p class="font-medium text-gray-900">Payment Method</p>
                    <p>{{ order.payment.method }}</p>
                    <p>{{ order.payment.last4 }}</p>
                  </div>
                </div>
              </div>
  
              <!-- Order Actions -->
              <div class="border-t border-gray-100 px-6 py-4 bg-gray-50 flex justify-end space-x-4">
                <button
                  class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                  View Invoice
                </button>
                <button
                  class="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700">
                  Reorder
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "OrderHistory",
    data() {
      return {
        openOrder: null,
        orders: [
          {
            id: '#1234',
            date: 'March 15, 2024',
            status: 'Delivered',
            total: 245.0,
            items: [
              { id: 1, name: 'Wireless Headphones', price: 149.99, quantity: 1, image: 'https://th.bing.com/th/id/OIP.FCB33TXqP_3eepbjjans_AHaHa?cb=iwc1&rs=1&pid=ImgDetMain' },
              { id: 2, name: 'Smartwatch', price: 95.0, quantity: 1, image: 'https://m.media-amazon.com/images/I/71CMtFGDhxL._AC_SL1500_.jpg' },
            ],
            shipping: {
              address: 'Raipur,Street no. 6',
              city: 'Raipur',
              state: 'CG',
              country: 'India',
            },
            payment: {
              method: 'Visa',
              last4: '1234',
            },
          },
          {
            id: '#5678',
            date: 'February 20, 2024',
            status: 'Processing',
            total: 150.0,
            items: [
              { id: 3, name: 'Laptop Bag', price: 75.0, quantity: 1, image: 'https://images-na.ssl-images-amazon.com/images/I/91RPn9eZqSL._AC_SL1500_.jpg' },
              { id: 4, name: 'Mouse Pad', price: 25.0, quantity: 1, image: 'https://i5.walmartimages.com/asr/ee0ff67e-f08a-439e-8132-e345d32910bc.e8bb4988019e7efc6522eeb53bf3e2ca.jpeg' },
            ],
            shipping: {
              address: 'Labour Street',
              city: 'Durg',
              state: 'CG',
              country: 'India',
            },
            payment: {
              method: 'UPI',
              last4: 'xyz@apl',
            },
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: scale(0.95);
  }
  </style>
  