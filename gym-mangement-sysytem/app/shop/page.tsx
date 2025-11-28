"use client";

import { useState } from "react";
import { Search, ShoppingCart, Filter, CreditCard } from "lucide-react";
import ProductCard, { Product } from "../components/ProductCard";

const products: Product[] = [
    { id: "1", name: "Whey Protein Isolate", category: "Supplements", price: 59.99, image: "", stock: 24 },
    { id: "2", name: "Pre-Workout Blast", category: "Supplements", price: 39.99, image: "", stock: 15 },
    { id: "3", name: "BCAA Energy", category: "Supplements", price: 29.99, image: "", stock: 30 },
    { id: "4", name: "Gym Branded Tee", category: "Gear", price: 24.99, image: "", stock: 50 },
    { id: "5", name: "Lifting Straps", category: "Gear", price: 14.99, image: "", stock: 12 },
    { id: "6", name: "Shaker Bottle", category: "Gear", price: 9.99, image: "", stock: 100 },
    { id: "7", name: "Energy Drink", category: "Drinks", price: 3.50, image: "", stock: 45 },
    { id: "8", name: "Protein Bar", category: "Snacks", price: 2.99, image: "", stock: 60 },
];

export default function ShopPage() {
    const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.product.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCart((prev) => prev.filter((item) => item.product.id !== productId));
    };

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    const categories = ["All", "Supplements", "Gear", "Drinks", "Snacks"];

    return (
        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-8rem)]">
            {/* Product Grid */}
            <div className="flex-1 flex flex-col gap-6 overflow-hidden">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Shop & Inventory</h1>
                    <p className="text-muted-foreground">Manage sales and inventory.</p>
                </div>

                <div className="flex gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === cat
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-card border border-border hover:bg-secondary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto pr-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 pb-6">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Cart Sidebar */}
            <div className="w-full lg:w-96 flex flex-col rounded-xl border border-border bg-card h-full">
                <div className="p-6 border-b border-border">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <ShoppingCart size={24} />
                        Current Order
                    </h2>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {cart.length === 0 ? (
                        <div className="text-center text-muted-foreground py-10">
                            <ShoppingCart size={48} className="mx-auto mb-4 opacity-20" />
                            <p>Cart is empty</p>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.product.id} className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="font-medium">{item.product.name}</p>
                                    <p className="text-sm text-muted-foreground">
                                        ${item.product.price.toFixed(2)} x {item.quantity}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
                                    <button
                                        onClick={() => removeFromCart(item.product.id)}
                                        className="text-muted-foreground hover:text-destructive transition-colors"
                                    >
                                        &times;
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-6 border-t border-border bg-secondary/20">
                    <div className="flex justify-between items-center mb-4 text-lg font-bold">
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <button
                        disabled={cart.length === 0}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/40 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <CreditCard size={20} />
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
