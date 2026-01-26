<template>
  <header class="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 h-16">
    <div class="flex items-center justify-between h-full px-6">
      <!-- Logo and Brand -->
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
          <span class="text-white font-bold text-sm">c</span>
        </div>
        <span class="text-gray-800 font-semibold text-lg">candescent</span>
        <span class="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">DEV</span>
      </div>

      <!-- Search Bar -->
      <div class="flex-1 max-w-2xl mx-8">
        <div class="relative">
          <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search for apps, users, documentation (API, SDK) etc."
            class="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <!-- User Actions -->
      <div class="flex items-center gap-4">
        <button class="p-2 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <button class="p-2 text-gray-600 hover:text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <span class="text-white text-sm font-medium">DM</span>
          </div>
          <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// Header component
</script>
