const virtualRoutes = [
  'dashboard', 'pos', 'orders', 'orders/:path*', 'online-orders', 'products',
  'products/new', 'products/:path*/edit', 'categories', 'modifier-groups',
  'modifier-groups/:path*', 'price-lists', 'inventory', 'ingredients', 'customers',
  'promotions', 'channels', 'shifts', 'employees', 'tables', 'printers', 'reports',
  'reports/:path*', 'settings',
]

const nextConfig = {
  async rewrites() {
    return virtualRoutes.map((source) => ({ source: `/${source}`, destination: '/' }))
  },
}

export default nextConfig
