"use client";

import { Plus, ShoppingBag } from "lucide-react";
import { clsx } from "clsx";

export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    stock: number;
}

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:border-primary/50">
            <div className="aspect-square w-full overflow-hidden bg-secondary/50 relative">
                {/* Placeholder for product image - using a colored div with icon for now */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 group-hover:scale-105 transition-transform duration-500">
                    <ShoppingBag size={64} />
                </div>

                {/* Stock Badge */}
                <div className="absolute top-3 left-3">
                    <span className={clsx(
                        "px-2 py-1 rounded-full text-xs font-medium backdrop-blur-md",
                        product.stock > 10 ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" :
                            product.stock > 0 ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" :
                                "bg-red-500/10 text-red-500 border border-red-500/20"
                    )}>
                        {product.stock > 0 ? `${product.stock} in stock` : "Out of Stock"}
                    </span>
                </div>
            </div>

            <div className="p-4">
                <div className="mb-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
                    <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                    <button
                        onClick={() => onAddToCart(product)}
                        disabled={product.stock === 0}
                        className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Plus size={16} />
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
